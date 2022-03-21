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
  const user = useSelector((store) => store.user);

  return (
    <div className="navBar">
      <Link to="/home">
        <img src="../../../public/images/Quicklift-logo.png" />
      </Link>

      <Link className="navLink" to="/workout">
        <FitnessCenterIcon fontSize="large" />
      </Link>

      <Link className="navLink" to="/maxes">
        <StackedLineChartOutlinedIcon fontSize="large" />
      </Link>

      <Link className="navLink" to="/maxes">
        <PersonIcon fontSize="large" />
      </Link>
    </div>
  );
}

export default Nav;
