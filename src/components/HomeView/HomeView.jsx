import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

// MUI/SCSS imports
import './HomeView.scss';
import { FormControl, MenuItem, Select, Modal, Box } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

// import DaySelector
import DaySelector from '../DaySelector/DaySelector';

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

  // holds form values 
  const [phase, setPhase] = useState('endurance');
  const [dayOfWeek, setDayOfWeek] = useState('1');
  // state for modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // initialize useDispatch to connect with SAGA
  const dispatch = useDispatch();
  // initialize useHistory to move user to next screen
  const history = useHistory();

  // grab user profile information on page load
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_PREFERENCES' });
  }, []);

  // handleSubmit grabs form information, sends it to 
  // saga, and pushes user to workout view
  const handleSubmit = () => {
    // eliminate page reload on submit
    event.preventDefault();
    let dailyInfo = {
      phase: phase,
      dayOfWeek: Number(dayOfWeek)
    }

    // dailyInfo will be used in get request made to server
    dispatch({ type: 'FETCH_DAILY_WORKOUT', payload: dailyInfo });

    // send user to page that displays workout
    history.push('/workout');
  }

  return (
    <>
      <div className="appContainer homeContainer">
        <h1 className="headerText">Welcome back, {userPreferences.name}!</h1>
        <form onSubmit={handleSubmit}>
        <h1 className="subHeaderText">Select phase <HelpIcon sx={{color: '#0695fd'}} onClick={handleOpen}/></h1>
            <FormControl fullWidth>
              <Select
                value={phase}
                onChange={(event) => setPhase(event.target.value)}
              >
                <MenuItem value="endurance">endurance</MenuItem>
                <MenuItem value="hypertrophy">hypertrophy</MenuItem>
                <MenuItem value="strength">strength</MenuItem>
                <MenuItem value="power">power</MenuItem>
                <MenuItem value="maintenance">maintenance</MenuItem>
              </Select>
            </FormControl>

            <h1 className="subHeaderText">What day of the week are you on?</h1>
            <FormControl fullWidth>
            <Select
              value={dayOfWeek}
              onChange={(event) => setDayOfWeek(event.target.value)}
            >
              <DaySelector
                daysPerWeek={userPreferences.days_per_week}
                value={dayOfWeek}
              />
            </Select>
            </FormControl>

            <button type="submit">Get Workout</button>
        </form>
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
      </div>
      <Nav />
    </>
  );
}

// this allows us to use <App /> in index.js
export default HomeView;
