import React, { useState } from 'react';

// import SASS/MUI
import './Exercise.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Exercise({ exercise }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSwap = () => {
        console.log('in handleSwap');
    }

    return (
        <>
            <div className="exerciseContainer">
                <div className="exerciseHeader">
                    <h1 className="subHeaderText">{exercise.name}</h1>
                    <HelpIcon onClick={handleOpen} sx={{color: '#0695fd'}}/>
                </div>
                <div className="exerciseBody">
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 32, color: '#b8b8b8' } }}
                        icon={<CheckCircleOutlinedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                    />
                    <p>Sets: 3 Reps: 12-15</p>
                    <SwapHorizIcon/>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={exercise.gifUrl} alt="exercise gif" width="300" />
                </Box>
            </Modal>
        </>
    )
}

export default Exercise;