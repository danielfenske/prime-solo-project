import React, { useState } from 'react';

// SASS/MUI imports
import './RoutineProfile.scss';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Modal, Box } from '@mui/material';

import RoutineEdit from './RoutineEdit/RoutineEdit';

function RoutineProfile({ userPreferences }) {

    const [routineDetails, setRoutineDetails] = useState(false);

    // handle modal pop-up
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        height: 450,
        overflow: "hidden",
        overflowY: "scroll",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };

    return (
        <>
            {routineDetails ?
                <div className="accordionContainer" onClick={() => setRoutineDetails(false)}>
                    <div className="accordionDetailsHeader">
                        <h1 className="accordionHeader">ROUTINE <EditIcon onClick={handleOpen} /></h1>
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="modalContainer">
                        <RoutineEdit
                            userPreferences={userPreferences}
                        />
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default RoutineProfile;