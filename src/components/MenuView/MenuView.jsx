import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './quicklift-logo.png';

// SASS/mui imports
import './MenuView.scss';
import ClearIcon from '@mui/icons-material/Clear';

function MenuView({handleClose}) {

    const dispatch = useDispatch();

    return (
        <>
            <div className="menuContainer">
                <div className="menuHeader">
                    <ClearIcon fontSize="large" onClick={handleClose}/>
                </div>

                <div className="linkContainer">
                    <Link className="navLink" to="/home">
                        <p>Home</p>
                    </Link>

                    <Link className="navLink" to="/workout">
                        <p>Workout</p>
                    </Link>

                    <Link className="navLink" to="/maxes">
                        <p>Progress</p>
                    </Link>

                    <Link className="navLink" to="/profile">
                        <p>Profile</p>
                    </Link>

                    <div className="navLink" onClick={() => dispatch({ type: 'LOGOUT' })}>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuView;