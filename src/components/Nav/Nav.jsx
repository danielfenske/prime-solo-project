import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.scss';
import { useSelector } from 'react-redux';
import Logo from './quicklift-logo.png'; 

// icon imports
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import PersonIcon from '@mui/icons-material/Person';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="navBar">
      <Link className="navLink" to="/home">
        <img src={Logo} className="navLogo"/>
        <p>Home</p>
      </Link>

      <Link className="navLink" to="/workout">
        <FitnessCenterIcon fontSize="large" />
        <p>Workout</p>
      </Link>

      <Link className="navLink" to="/maxes">
        <StackedLineChartOutlinedIcon fontSize="large" />
        <p>Progress</p>
      </Link>

      <Link className="navLink" to="/profile">
        <PersonIcon fontSize="large" />
        <p>Profile</p>
      </Link>
    </div>
  );
}

export default Nav;
