import React, { useEffect, useState } from 'react';

// import redux dependencies 
import { useSelector, useDispatch } from 'react-redux';

// import equipment component
import ProfileEquipment from '../ProfileEquipment/ProfileEquipment';
import UserMaxes from '../UserMaxes/UserMaxes';
import LogOutButton from '../LogOutButton/LogOutButton';
import Nav from '../Nav/Nav';
import EquipmentItem from '../EquipmentItem/EquipmentItem';

// SASS/MUI imports
import './ProfileView.scss';
import EditIcon from '@mui/icons-material/Edit';
import Logo from './quicklift-logo.png';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ProfileView() {

    const [routineDetails, setRoutineDetails] = useState(false);
    const [equipmentDetails, setEquipmentDetails] = useState(false);
    const [aboutDetails, setAboutDetails] = useState(false);

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
                    <div className="routineProfile accordionContainer">
                        <h1>ROUTINE</h1>
                        <ExpandLessIcon fontSize="large" />
                    </div>
                    {routineDetails ?
                        <div className="routineProfile accordionContainer" onClick={() => setRoutineDetails(false)}>
                            <h1>EQUIPMENT</h1>
                            <ExpandLessIcon fontSize="large" />
                        </div>
                        :
                        <div className="equipmentProfileDetails" onClick={() => setRoutineDetails(true)}>
                            <div className="equipmentDetailsHeader">
                                <h1>EQUIPMENT <EditIcon/></h1>
                                <ExpandMoreIcon fontSize="large"/>
                            </div>

                            <div className="equipmentDetailsBody">
                                {
                                    userEquipment && userEquipment.map((equipment, index) => {
                                        return (
                                            <ProfileEquipment
                                                key={index}
                                                equipment={equipment}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    <div className="aboutProfile accordionContainer">
                        <h1>ABOUT</h1>
                        <ExpandLessIcon fontSize="large" />
                    </div>
                </div>
                <LogOutButton />
            </div>
            <Nav />
        </>
    )
}

export default ProfileView;