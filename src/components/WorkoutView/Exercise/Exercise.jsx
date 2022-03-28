import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// import SASS/MUI
import './Exercise.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle'; 
import HelpIcon from '@mui/icons-material/Help';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};


function Exercise({ exercise }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const handleSwap = () => {
        console.log('in handleSwap', exercise.id);

        dispatch({ type: 'SWAP_EXERCISE', payload: { target: exercise.target, id: exercise.id } });
    }

    const handleCheckbox = () => {
        console.log('in handleCheckbox');

        dispatch({type: 'UPDATE_EXERCISE', payload: {exerciseId: exercise.id, isComplete: !exercise.isComplete}});
    }

    return (
        <>
            <div className="exerciseContainer">
                <div className="exerciseHeader">
                    <h1 className="subHeaderText">{exercise.name}<HelpIcon onClick={handleOpen} sx={{ color: '#0695fd' }} /></h1>
                </div>
                
                <div className="exerciseBody">
                    {exercise.isComplete ? 
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 32, color: 'rgb(255, 255, 255)'  } }}
                        icon={<CircleOutlinedIcon />}
                        checkedIcon={<CircleOutlinedIcon />}
                        className="checkBox"
                        onClick={handleCheckbox}
                    />
                    :
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 32, color: 'rgb(255, 255, 255)' } }}
                        icon={<CheckCircleIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        className="checkBox"
                        onClick={handleCheckbox}
                    />}
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
                    <div className="exerciseModal">
                        <img src={exercise.gifUrl} alt="exercise gif" width="275" />
                        <h1 className="subHeaderText">{exercise.name}</h1>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default Exercise;