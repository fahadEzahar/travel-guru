import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import Logo from '../../Icon/Logo.png'
import './Header.css'

const Header = () => {

    const { loggedInUser } = useContext(userContext);
    const [loggedInUserValue] = loggedInUser;

    return (
        <div className='container-fluid '>
            <nav className="navbar navbar-expand-lg navbar-light" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand " href="/home">
                        <img   className="logo " src={Logo} alt="" />
                    </a>
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item active m-3">
                            <a className="nav-link text-white" href="/">News <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item m-3">
                            <a className="nav-link  text-white" href="/">Destination</a>
                        </li>
                        <li className="nav-item m-3">
                            <a className="nav-link  text-white" href="/">Blog <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item m-3">
                            <a className="nav-link  text-white" href="/">Contact</a>
                        </li>
                        {loggedInUserValue &&
                            <li className="nav-item m-3">
                                <a className=" nav-link text-white font-weight-bold" href="/">{loggedInUserValue.displayName}</a>
                            </li>}
                        <Link to="/login">
                            <button className="btn btn-warning m-3">login</button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;