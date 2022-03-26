import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

// IMPORT SASS/MUI
import './ProgressView.scss';
import { Modal, Box } from '@mui/material';

// import children components
import MaxesForm from '../MaxesForm/MaxesForm';
import ChestMaxes from './ChestMaxes/ChestMaxes';
import BackMaxes from './BackMaxes/BackMaxes';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 350,
    overflow: "hidden",
    overflowY: "scroll",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};

function ProgressView() {

    const [chestMaxes, setChestMaxes] = useState(false);
    const [backMaxes, setBackMaxes] = useState(false);

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch({ type: 'FETCH_USER_MAXES' });
    }, []);

    return (
        <>
            <div className="progressContainer">
                <div className="progressHeader">
                    <h1 className="headerText">Track your progress!</h1>
                    <button className="primaryButton" onClick={handleOpen}>add max</button>
                </div>
                <div className="progressBody">
                    <ChestMaxes/>
                    <BackMaxes/>
                </div>
            </div>
            <Nav />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="modalContainer">
                        <MaxesForm />
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ProgressView;