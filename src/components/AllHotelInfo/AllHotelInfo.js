import React from 'react';
import Icon from '../../Icon/star_1_.png';
import './AllHotelInfo.css';
import { GoogleMap, LoadScript, } from '@react-google-maps/api';

const AllHotelInfo = (props) => {
    const { title, hotelOneImg, hotelOnePrice, hotelOneStarRating, hotelOneTitle,
        hotelThreeImg, hotelThreePrice, hotelThreeStarRating, hotelThreeTitle,
        hotelTwoImg, hotelTwoPrice, hotelTwoStarRating, hotelTwoTitle, lat, lng } = props.place;

    const mapStyles = {
        height: "110vh",
        width: "100%",
        borderRadius:"10px"
    };

    return (
        <div className="row p-5">
            <div className="col-md-6">

                <p className="text-white">252 stays apr 13-17 3 guests </p>
                <h4 className="text-white font-weight-bold ">Stay in {title}</h4>
                
                <div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <img src={hotelOneImg} className=" img-thumbnail m-3 " alt="hotelOne" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body  ">
                                <h6 className="card-title">{hotelOneTitle}</h6>
                                <p className="card-text"><small className="text-muted">4 guests 2 bedrooms 2beds 2 baths</small></p>
                                <p className="card-text"><small className="text-muted">wifi Air conditioning kitchen</small></p>
                                <p className="card-text"><small className="text-muted">cancellation flexibility available</small></p>
                                <div className="d-flex justify-content-between">
                                    <img className="starRating" src={Icon} alt="starRatingIcon" />
                                    {hotelOneStarRating}
                                    <p>${hotelOnePrice}/<small className="text-muted">night $167total</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <img src={hotelTwoImg} className=" img-thumbnail m-3" alt="hotelOne" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h6 className="card-title">{hotelTwoTitle}</h6>
                                <p className="card-text"><small className="text-muted">4 guests 2 bedrooms 2beds 2 baths</small></p>
                                <p className="card-text"><small className="text-muted">wifi Air conditioning kitchen</small></p>
                                <p className="card-text"><small className="text-muted">cancellation flexibility available</small></p>
                                <div className="d-flex justify-content-between">
                                    <img className="starRating" src={Icon} alt="starRatingIcon" />
                                    {hotelTwoStarRating}
                                    <p>${hotelTwoPrice}/<small className="text-muted">night $167total</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <img src={hotelThreeImg} className="img-thumbnail m-3" alt="hotelOne" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h6 className="card-title">{hotelThreeTitle}</h6>
                                <p className="card-text"><small className="text-muted">4 guests 2 bedrooms 2beds 2 baths</small></p>
                                <p className="card-text"><small className="text-muted">wifi Air conditioning kitchen</small></p>
                                <p className="card-text"><small className="text-muted">cancellation flexibility available</small></p>
                                <div className="d-flex justify-content-between">
                                    <img className="starRating" src={Icon} alt="starRatingIcon" />
                                    {hotelThreeStarRating}
                                    <p>${hotelThreePrice}/<small className="text-muted">night $167total</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div className="col-md-6">
                <LoadScript
                    googleMapsApiKey='AIzaSyDdmfn1YTHbCt6xwMAGOgbqj6KS6kmuqqw'>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={8}
                        center={{ lat: lat, lng: lng }}>
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default AllHotelInfo;