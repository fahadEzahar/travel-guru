import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import Data from '../../Data'
import './TouristPlaceDetails.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TouristPlaceDetails = () => {
    const [selectedFormDate, setSelectedFormDate] = useState('');
    const [selectedToDate, setSelectedToDate] = useState('');

    const { place } = useContext(userContext);
    const [placeValue, setPlaceValue] = place;

    const { id } = useParams();
    const placeId = Data.filter(data => data.id == id);

    const handleBlur = (e) => {
        const destination = Data.filter(data => data.title === e.target.value.toUpperCase());
        // console.log(destination)
        setPlaceValue(destination);
        e.preventDefault();
    }

    const history = useHistory();
    const handleSubmit = (e) => {
        if (placeValue.length === 0) {
            alert("The destination should be Cox's Bazar or Sreemangal or Sundarban");
        }
        else {
            history.push('/hotelInfo');
        }
        e.preventDefault();
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-between p-5">
                <div className="col-md-5 ">
                    <div>
                        {
                            placeId.map(placeInfo =>
                                <div>
                                    <h1 className="text-white">{placeInfo.title}</h1>
                                    <p className="text-white">{placeInfo.description}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-md-5 ">
                    <div className=" border">
                        <form onSubmit={handleSubmit} className="container p-5">
                            <div className="form-group ">
                                <label for="origin" className="font-weight-bold">Origin</label>
                                <input type="text" className="form-control  bg-light" required />
                            </div>
                            <div className="form-group">
                                <label for="destination" className="font-weight-bold">Destination</label>
                                <input type="text" onBlur={handleBlur} className="form-control bg-light" required />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label for="form" className="font-weight-bold">Form</label>
                                        <DatePicker className="form-control bg-light calenderIcon"
                                            selected={selectedFormDate}
                                            onChange={date => setSelectedFormDate(date)}
                                            minDate={new Date()}
                                            required />
                                    </div>
                                    <div className="col">
                                        <label for="to" className="font-weight-bold">To</label>
                                        <DatePicker className="form-control bg-light calenderIcon"
                                            selected={selectedToDate}
                                            onChange={date => setSelectedToDate(date)}
                                            minDate={new Date()}
                                            required />
                                    </div>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-warning btn-block" value="Start Booking" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristPlaceDetails;