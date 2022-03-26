import React, { useEffect, useState } from 'react';

// import redux dependencies 
import { useSelector, useDispatch } from 'react-redux';

// import equipment component
import GeneralProfile from './GeneralProfile/GeneralProfile';
import RoutineProfile from './RoutineProfile/RoutineProfile';
import EquipmentProfile from './EquipmentProfile/EquipmentProfile';
import AboutProfile from './AboutProfile/AboutProfile';
import LogOutButton from '../LogOutButton/LogOutButton';
import Nav from '../Nav/Nav';

// SASS/MUI imports
import './ProfileView.scss';
import Logo from './quicklift-logo.png';

function ProfileView() {
    // bring in state stored in redux for all data related to profile
    const userPreferences = useSelector((store) => (store.userPreferences.userPreferences));
    const userEquipment = useSelector((store) => (store.equipment.userEquipmentList));

    // initialize useDispatch to connect with SAGA
    const dispatch = useDispatch();

    // grab user profile information on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_USER_PREFERENCES' });
        dispatch({ type: 'FETCH_USER_EQUIPMENT_LIST' });
    }, []);

    return (
        <>
            <div className="profileContainer">
                <div className="profileHeader">
                    <img src={Logo} className="profileLogo" alt="QuickLift logo" />
                    <h1 className="headerText">{userPreferences.name}'s Profile</h1>
                </div>
                <div className="profileBody">
                    <GeneralProfile
                        userPreferences={userPreferences}
                    />
                    <RoutineProfile
                        userPreferences={userPreferences}
                    />
                    <EquipmentProfile
                        userEquipment={userEquipment}
                    />
                    <AboutProfile/>
                </div>
                <LogOutButton />
            </div>
            <Nav />
        </>
    )
}

export default ProfileView;