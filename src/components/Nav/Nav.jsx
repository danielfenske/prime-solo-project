import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.scss';
import { useSelector } from 'react-redux';

// icon imports
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import PersonIcon from '@mui/icons-material/Person';

function Nav() {

  return (
    <div className="navBar">
      <Link to="/home">
        <img src="../public/images/login-background.jpg"/>
      </Link>

      <Link className="navLink" to="/workout">
        <FitnessCenterIcon fontSize="medium" />
      </Link>

      <Link className="navLink" to="/maxes">
        <StackedLineChartOutlinedIcon fontsize="large" />
      </Link>

      <Link className="navLink" to="/profile">
        <PersonIcon fontsize="large" />
      </Link>
    </div>
  );
}

export default Nav;
