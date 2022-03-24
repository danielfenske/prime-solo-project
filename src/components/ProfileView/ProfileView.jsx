import React, { useEffect } from 'react';

// import redux dependencies 
import { useSelector, useDispatch } from 'react-redux';

// import equipment component
import ProfileEquipment from '../ProfileEquipment/ProfileEquipment';
import UserMaxes from '../UserMaxes/UserMaxes';
import LogOutButton from '../LogOutButton/LogOutButton';
import Nav from '../Nav/Nav';

// SASS/MUI imports
import './ProfileView.scss';
import EditIcon from '@mui/icons-material/Edit';
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

    const handleEdit = () => {
        console.log('in handleClick');
    }

    return (
        <>
            <div className="profileContainer">
                <div className="profileHeader">
                    <div className="metricsHeader">
                        <EditIcon
                            onClick={handleEdit}
                        />
                    </div>
                    <div className="metricsBody">
                        <img src={Logo} className="profileLogo" alt="QuickLift logo" />
                        <div className="detailsContainer">
                            <p><strong>Name:</strong> Daniel</p>
                            <p><strong>Age:</strong> 24</p>
                            <p><strong>Weight:</strong> 165 lbs</p>
                            <p><strong>Height:</strong> 68"</p>
                        </div>
                    </div>
                </div>
                <div className="profileBody">
                    <div className="routineProfile accordianContainer">
                        <h1 className="subHeaderText">Routine</h1>
                    </div>
                    <div className="routineProfile accordianContainer">
                        <h1 className="subHeaderText">Equipment</h1>
                    </div>
                    <div className="routineProfile accordianContainer">
                        <h1 className="subHeaderText">About</h1>
                    </div>
                </div>
                <LogOutButton />
            </div>
            <Nav />
        </>
    )
}

export default ProfileView;