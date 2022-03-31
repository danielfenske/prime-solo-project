import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';
import TopNav from '../TopNav/TopNav';

// IMPORT SASS/MUI
import './ProgressView.scss';
import { Modal, Box } from '@mui/material';

// import children components
import ProgressForm from './ProgressForm/ProgressForm';
import ChestMaxes from './ChestMaxes/ChestMaxes';
import BackMaxes from './BackMaxes/BackMaxes';
import LegsMaxes from'./LegsMaxes/LegsMaxes';
import ArmsMaxes from './ArmsMaxes/ArmsMaxes';

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

function ProgressView() {

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch({ type: 'FETCH_USER_MAXES' });
    }, [dispatch]);

    return (
        <>
            <TopNav/>
            <div className="progressContainer">
                <div className="progressHeader">
                    <h1 className="headerText">Track your progress!</h1>
                    <button className="primaryButton" onClick={handleOpen}>add max</button>
                </div>
                <div className="progressBody">
                    <ChestMaxes/>
                    <BackMaxes/>
                    <LegsMaxes/>
                    <ArmsMaxes/>
                </div>
            </div>
            {/* <Nav /> */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="modalContainer">
                        <ProgressForm />
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ProgressView;