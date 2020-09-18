import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import './Login.css'
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {

  const { loggedInUser } = useContext(userContext);
  const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(true);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    passwordNotMatch: false,
    success: false,
  });

  const handleBlur = (e) => {
    const newUserInfo = { ...user };
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    if (newUser && user.password === user.confirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.firstName);
          setLoggedInUserValue(newUserInfo);
          history.replace(from);
        })
        .catch(err => {
          const newUserInfo = { ...user }
          newUserInfo.error = err.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        })
    }
    if (newUser && user.password !== user.confirmPassword) {
      const newUserInfo = { ...user }
      newUserInfo.passwordNotMatch = true;
      setUser(newUserInfo);
    }
    if (!newUser) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUserValue(res.user);
          history.replace(from);
        })
        .catch(err => {
          const newUserInfo = { ...user }
          newUserInfo.error = err.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        })
    }
    e.preventDefault()
  };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const newUserInfo = { ...user };
        setUser(newUserInfo);
        setLoggedInUserValue(res.user);
        history.replace(from);
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
  }

  const handleFBSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const newUserInfo = { ...user };
        setUser(newUserInfo);
        setLoggedInUserValue(res.user);
        history.replace(from);
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
  }

  const updateUserName = (firstName) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: firstName
    })
  }

  return (

    <div className="container-fluid ">
      <div className="col-md-4  mx-auto  p-3 border ">
        {newUser ? <h3 className="font-weight-bold">Create an account</h3>
          : <h3 className="font-weight-bold">Login</h3>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {newUser && <input onBlur={handleBlur} type="text" name="firstName" className="form-control " placeholder="First Name" required />}
          </div>
          <div className="form-group">
            {newUser && <input onBlur={handleBlur} type="text" name="lastName" className="form-control " placeholder="Last Name" required />}
          </div>
          <div className="form-group">
            <input onBlur={handleBlur} type="email" name="email" className="form-control " placeholder="Username or Email" required />
          </div>
          <div className="form-group">
            <input onBlur={handleBlur} type="password" name="password" className="form-control " placeholder="Password" required />
          </div>
          <div className="form-group">
            {newUser && <input onBlur={handleBlur} type="password" name="confirmPassword" className="form-control " placeholder="Confirm Password" required />}
          </div>
          {!newUser && <div className="d-flex justify-content-between">
            <div >
              <input type="checkbox" name="rememberMe" id="" />
              <label htmlFor="RememberMe"> Remember Me</label>
            </div>
            <p className="toggleButton">Forgot Password</p>
          </div>}
          {user.passwordNotMatch && <p className="warningMsg">Password did not match</p>}
          <p className="warningMsg">{user.error}</p>
          {newUser ? <input className="btn btn-warning btn-block" type="submit" value="Create an account" />
            : <input className="btn btn-warning btn-block" type="submit" value="Login" />}
          {newUser ? <p className="text-center m-2 font-weight-bold">Already have an account?
                       <small className="toggleButton" onClick={() => setNewUser(!newUser)}>Login</small></p>
            : <p className="text-center m-2 font-weight-bold">Don't have an account?
                       <small className="toggleButton font-weight-bold" onClick={() => setNewUser(!newUser)}>Create an account</small></p>}
        </form>
      </div>
      <p className="text-center">or</p>
      <div className="col-md-4  mx-auto">
        <button onClick={handleFBSignIn} className="btn btn-outline-secondary mx-auto btn-block rounded-pill facebookIcon text-dark font-weight-bold">Continue with Facebook</button>
        <button onClick={handleGoogleSignIn} className="btn btn-outline-secondary mx-auto btn-block rounded-pill googleIcon text-dark font-weight-bold">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;