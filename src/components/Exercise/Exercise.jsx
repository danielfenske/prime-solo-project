import React, { useState } from 'react';

// import Material UI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';

// Exercise CSS file 
import './Exercise.css';

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
            <div className="exerciseHeader">
                <h4 className="exerciseTitle">{exercise.name}</h4>
                <button type="button" onClick={handleOpen}>?</button>
            </div>

            <div className="exerciseBody">
                <Checkbox />
                <p>3 x 12-15</p>
                <button type="button" onClick={handleSwap}>Swap</button>
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