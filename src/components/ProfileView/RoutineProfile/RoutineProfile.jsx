import React, { useState } from 'react';

// SASS/MUI imports
import './RoutineProfile.scss';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function RoutineProfile({ userPreferences }) {

    const [routineDetails, setRoutineDetails] = useState(false);

    const handleEdit = () => {
        console.log('in handleClick');
    }

    return (
        <>
            {routineDetails ?
                <div className="accordionContainer" onClick={() => setRoutineDetails(false)}>
                    <div className="accordionDetailsHeader">
                        <h1 className="accordionHeader">ROUTINE <EditIcon /></h1>
                        <ExpandMoreIcon fontSize="large" />
                    </div>

                    <div className="accordionDetailsBody">
                        <div className="accordionItem">
                            <p>{userPreferences.days_per_week} days / week</p>
                        </div>

                        <div className="accordionItem">
                            {userPreferences.routine === 'full_body' ?
                                <p>full body</p>
                                :
                                <p>split</p>}
                        </div>
                    </div>
                </div>
                :
                <div className="accordionCover" onClick={() => setRoutineDetails(true)}>
                    <h1 className="accordionHeader">ROUTINE</h1>
                    <ExpandLessIcon fontSize="large" />
                </div>
            }
        </>
    )
}

export default RoutineProfile;