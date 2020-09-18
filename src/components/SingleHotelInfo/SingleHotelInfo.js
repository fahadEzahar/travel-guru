import React, { useContext } from 'react';
import { userContext } from '../../App';
import AllHotelInfo from '../AllHotelInfo/AllHotelInfo';

const SingleHotelInfo = () => {
    const {place} = useContext(userContext);
    const [placeValue,setPlaceValue] = place;
   
    return (
        <div >
            {
                placeValue.map(place => <AllHotelInfo place = {place}/>)
            } 
        </div>
    );
};

export default SingleHotelInfo;