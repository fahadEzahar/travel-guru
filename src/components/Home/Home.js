import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../Data'
import './Home.css'

const Home = () => {

    return (
        
            <div className="container-fluid p-5 m-5  ">
                <div className="row">
                    <div className="col-md-4 ">
                        <div >
                            <h1 className="text-white">COX'S BAZAR</h1>
                            <p className="text-white">
                                Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                            </p>
                            <button className="btn btn-warning">Booking</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {
                                Data.map(place =>
                                    <div className="  col-md-3 ">
                                        <div>
                                            <Link to={"/touristPlace/" + place.id}>
                                                <img className="img-fluid" src={place.img} alt="touristPlace" />
                                            </Link>
                                            <div className="title">
                                                <h3>{place.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
       

    );
};

export default Home;