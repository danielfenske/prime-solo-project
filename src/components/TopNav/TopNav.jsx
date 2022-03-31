import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './TopNav.scss';
import Logo from './quicklift-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import MenuView from '../MenuView/MenuView';

import { Modal, Box } from '@mui/material';

function TopNav() {

    // state for modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const history = useHistory();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1,
        height: 1,
        overflow: "hidden",
        overflowY: "scroll",
        bgcolor: 'background.paper',
        boxShadow: 24,
        opacity: .95
    };

    return (
        <>
            <div className="topNav">
                <h1 className="navHeaderText" onClick={() => history.push('/home')}>QuickLift</h1>
                <MenuIcon onClick={handleOpen} className="navMenu" fontSize="large" />
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <MenuView
                        handleClose={handleClose}
                    />
                </Box>
            </Modal>
        </>
    )
}

export default TopNav;