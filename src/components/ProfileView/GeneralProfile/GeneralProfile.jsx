import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// SASS/MUI imports
import './GeneralProfile.scss';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Modal, Box } from '@mui/material';

import GeneralEdit from'./GeneralEdit/GeneralEdit';

function GeneralProfile({ userPreferences }) {

    const [generalDetails, setGeneralDetails] = useState(false);

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
        overflow: 'hidden',
        overflowY: 'scroll',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };

    return (
        <>
            {generalDetails ?
                <div className='accordionContainer' onClick={() => setGeneralDetails(false)}>
                    <div className='accordionDetailsHeader'>
                        <h1 className='accordionHeader'>GENERAL <EditIcon onClick={handleOpen} /></h1>
                        <ExpandMoreIcon fontSize='large' />
                    </div>

                    <div className='accordionDetailsBody'>
                        <div className='generalItem'>
                            <p className='accordionItem'><strong>Name:</strong> {userPreferences.name}</p>
                            <p className='accordionItem'><strong>Age:</strong> {userPreferences.age}</p>
                            <p className='accordionItem'><strong>Weight:</strong> {userPreferences.weight} (lbs)</p>
                            <p className='accordionItem'><strong>Height:</strong> {userPreferences.height}'</p>
                        </div>
                    </div>
                </div>
                :
                <div className='accordionCover' onClick={() => setGeneralDetails(true)}>
                    <h1 className='accordionHeader'>GENERAL</h1>
                    <ExpandLessIcon fontSize='large' />
                </div>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <div className='modalContainer'>
                        <GeneralEdit 
                            userPreferences={userPreferences}
                        />
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default GeneralProfile;