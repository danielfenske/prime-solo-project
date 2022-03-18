import React, { useEffect } from 'react';

// import redux dependencies 
import { useSelector, useDispatch } from 'react-redux';

// import equipment component
import ProfileEquipment from '../ProfileEquipment/ProfileEquipment';

function ProfileView() {

    // bring in state stored in redux for all data related to profile
    const userPreferences = useSelector((store) => (store.userProfile.userPreferences));
    const userEquipment = useSelector((store) => (store.userProfile.userEquipment));

    // initialize useDispatch to connect with SAGA
    const dispatch = useDispatch();

    // grab user profile information on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_USER_PROFILE' });
    }, []);

    return (
        <div className="appContainer">
            <h1 className="headerText">{userPreferences.name}</h1>
            <h1 className="subHeaderText">{userPreferences.days_per_week}</h1>
            <p>{userPreferences.weight}</p>
            <p>{userPreferences.height}</p>
            <p>{userPreferences.age}</p>

            <div className="maxesContainer">
                <p>Bench: 300</p>
                <p>Squat: 225</p>
                <p>Pull ups: 20</p>
            </div>

            <div className="equipmentContainer">
                <h1 className="subHeaderText">EQUIPMENT</h1>
                {
                    userEquipment && (userEquipment.map((equipment, index) => {
                        return (
                            <ProfileEquipment
                                key={index}
                                equipment={equipment}
                            />
                        )
                    }))
                }
            </div>
        </div>
    )
}

export default ProfileView;