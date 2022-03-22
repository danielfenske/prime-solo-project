import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

// SASS/MUI imports
import './HomeView.scss';
import { Modal, Box } from '@mui/material';

// import DaySelector
import DailyInfoForm from '../DailyInfoForm/DailyInfoForm';

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

function HomeView() {

  // bring in state stored in redux for all data related to profile
  const userPreferences = useSelector((store) => (store.userPreferences.userPreferences));

  // const [dayOfWeek, setDayOfWeek] = useState('1');
  // state for modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // initialize useDispatch to connect with SAGA
  const dispatch = useDispatch();

  // grab user profile information on page load
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_PREFERENCES' });
  }, []);

  return (
    <>
      <div className="appContainer homeContainer">
        <div className="homeHeader">
          <h1 className="headerText">Welcome back, {userPreferences.name}!</h1>
        </div>

        {userPreferences &&
          <DailyInfoForm
            daysPerWeek={userPreferences.days_per_week}
            handleOpen={handleOpen}
          />
        }
      </div>
      <Nav />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="subHeaderText">Endurance</h1>
          <p></p>
        </Box>
      </Modal>
    </>
  );
}

// this allows us to use <App /> in index.js
export default HomeView;
