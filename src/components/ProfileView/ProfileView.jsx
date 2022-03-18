import React, { useEffect } from 'react';

// import redux dependencies 
import { useSelector, useDispatch } from 'react-redux';

function ProfileView() {

    // bring in state stored in redux for all data related to profile
    const userPreferences = useSelector((store) => (store.userProfile.userPreferences));
    const userEquipment = useSelector((store) => (store.userProfile.userEquipment));

    // initialize useDispatch to connect with SAGA
    const dispatch = useDispatch();

    // grab user profile information on page load
    useEffect(() => {
        dispatch({type:'FETCH_USER_PROFILE'});
    }, []);

    return (
        <div className="appContainer">
            <h1 className="headerText">{userPreferences.name}</h1>
            
        </div>
    )
}

export default ProfileView;