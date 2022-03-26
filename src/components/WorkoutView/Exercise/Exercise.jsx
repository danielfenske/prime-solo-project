import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// import SASS/MUI
import './Exercise.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle'; import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 275,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


function Exercise({ exercise }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const handleSwap = () => {
        console.log('in handleSwap', exercise.id);

        dispatch({type: 'SWAP_EXERCISE', payload: {target: exercise.target, id: exercise.id}});
    }

    return (
        <>
            <div className="exerciseContainer">
                <div className="exerciseHeader">
                    <h1 className="subHeaderText">{exercise.name}<HelpIcon onClick={handleOpen} sx={{ color: '#0695fd' }} /></h1>
                </div>
                <div className="exerciseBody">
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
                        icon={<CheckCircleOutlinedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        className="checkBox"
                    />
                    <p className="details">{exercise.sets} x {exercise.reps}</p>
                    <button className="swapButton">
                        <SwapHorizontalCircleIcon
                            sx={{ fontSize: 32 }}
                            onClick={handleSwap}
                        />
                    </button>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={exercise.gifUrl} alt="exercise gif" width="275" />
                </Box>
            </Modal>
        </>
    )
}

export default Exercise;