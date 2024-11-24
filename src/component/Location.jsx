import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityRequest, getCountryRequest, getStateRequest } from '../ReduxSaga/locationSaga/locationAction';
import { Link } from 'react-router-dom';

function Location() {
  const { countryData,stateData,cityData,loading } = useSelector((state) => state.location);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryRequest());
  }, [dispatch]);

//  get state
const handleCountryClick = (id) =>{
  const stateId = {
    statesId:id
  }
  dispatch(getStateRequest(stateId))
}
// get city
const handleStateClick = (id) =>{
  const citiesId ={
    citiesId:id
  }
  dispatch(getCityRequest(citiesId))
}
  return (
  <div className='mt-3'>
       <div className='d-flex justify-content-around'>
      <div>
        <h4 className='text-danger'>Location Data</h4>
      </div>
      <div>
        <Link to='/home'>Home</Link>
      </div>
    </div>
      <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="rounded-3 shadow-lg container-box">
        <div className="row h-100">
          {/* Country List */}
          <div className="col-md-4">
            <h5 className="text-center">Countries</h5>
            <ul className="scrollable-list">
              {countryData.map((country) => (
                <li
                  key={country.id}
                  onClick={() => handleCountryClick(country.id)}
                  className="clickable-item"
                >
                  {country.name}
                </li>
              ))}
            </ul>
          </div>

          {/* State List */}
          <div className="col-md-4">
            <h5 className="text-center">States</h5>
            <ul className="scrollable-list">
              {stateData.map((state) => (
                <li
                  key={state.id}
                  onClick={() => handleStateClick(state.id)}
                  className="clickable-item"
                >
                  {state.name}
                </li>
              ))}
            </ul>
          </div>

          {/* City List */}
          <div className="col-md-4">
            <h5 className="text-center">Cities</h5>
            <ul className="scrollable-list">
              {cityData.map((city) => (
                <li key={city.id} className="clickable-item">
                  {city.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Location;
