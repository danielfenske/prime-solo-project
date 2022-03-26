import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// SASS/MUI imports
import './GeneralProfile.scss';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function GeneralProfile({ userPreferences }) {

    const [generalDetails, setGeneralDetails] = useState(false);

    const handleEdit = () => {
        console.log('in handleClick');
    }

    return (
        <>
            {generalDetails ?
                <div className="accordionContainer" onClick={() => setGeneralDetails(false)}>
                    <div className="accordionDetailsHeader">
                        <h1>GENERAL <EditIcon /></h1>
                        <ExpandMoreIcon fontSize="large" />
                    </div>

                    <div className="accordionDetailsBody">
                        <div className="generalItem">
                            <p className="accordionItem"><strong>Name:</strong> {userPreferences.name}</p>
                            <p className="accordionItem"><strong>Age:</strong> {userPreferences.age}</p>
                            <p className="accordionItem"><strong>Weight:</strong> {userPreferences.weight} (lbs)</p>
                            <p className="accordionItem"><strong>Height:</strong> {userPreferences.height}"</p>
                        </div>
                    </div>
                </div>
                :
                <div className="accordionCover" onClick={() => setGeneralDetails(true)}>
                    <h1>GENERAL</h1>
                    <ExpandLessIcon fontSize="large" />
                </div>
            }
        </>
    )
}

export default GeneralProfile;