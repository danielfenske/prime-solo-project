import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import TopNav from '../TopNav/TopNav';

// SASS/MUI imports
import './HomeView.scss';
import { Modal, Box } from '@mui/material';
import { FormControl, Select, MenuItem } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';


// import DaySelector
import DailyInfoForm from './DailyInfoForm/DailyInfoForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 350,
  overflow: 'hidden',
  overflowY: 'scroll',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

function HomeView() {

  // bring in state stored in redux for all data related to profile
  const userPreferences = useSelector((store) => (store.userPreferences.userPreferences));
  const phaseData = useSelector((store) => (store.phaseData));
  const daysPerWeek = userPreferences.days_per_week;
  const routine = userPreferences.routine;

  // state for modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // holds form values 
  const [phase, setPhase] = useState('endurance');
  const [dayOfWeek, setDayOfWeek] = useState(routine === 'split' ? 'push' : '1');


  // initialize useDispatch to connect with SAGA
  const dispatch = useDispatch();
  // initialize useHistory to move user to next screen
  const history = useHistory();

  // grab user profile information on page load
  useEffect(() => {
    dispatch({ type: 'FETCH_PHASE_DATA' });
  }, []);

  // handleSubmit grabs form information, sends it to 
  // saga, and pushes user to workout view
  const handleSubmit = () => {
    // eliminate page reload on submit
    event.preventDefault();

    let dailyInfo = {
      phase: phase,
      dayOfWeek: routine === 'split' ? dayOfWeek : Number(dayOfWeek)
    }

    // dailyInfo will be used in get request made to server
    dispatch({ type: 'FETCH_DAILY_WORKOUT', payload: dailyInfo });

    // send user to page that displays workout
    history.push('/workout');
  };

  return (
    <>
      <div className='appContainer'>

        <TopNav />

        <div className='appBody'>
          <div className='homeHeader'>
            <h1 className='headerText'>Welcome back, {userPreferences.name}!</h1>
            <h1 className='subHeaderText homeViewText'>Let's get to work. 💪</h1>
          </div>
          <FormControl fullWidth>
            <h1 className='subHeaderText'>Select phase <HelpIcon sx={{ color: '#0695fd' }} onClick={handleOpen} /></h1>
            <Select
              value={phase}
              onChange={(event) => setPhase(event.target.value)}
            >
              <MenuItem value='endurance'>endurance</MenuItem>
              <MenuItem value='hypertrophy'>hypertrophy</MenuItem>
              <MenuItem value='strength'>strength</MenuItem>
              <MenuItem value='power'>power</MenuItem>
              <MenuItem value='maintenance'>maintenance</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <h1 className='subHeaderText'>What day of the week are you on?</h1>
            {
              routine === 'split'
                ?
                <Select
                  value={dayOfWeek}
                  onChange={(event) => setDayOfWeek(event.target.value)}
                >
                  <MenuItem value='push'>push</MenuItem>
                  <MenuItem value='pull'>pull</MenuItem>
                  <MenuItem value='legs'>legs</MenuItem>
                  <MenuItem value='arms'>arms</MenuItem>
                </Select>
                :
                <Select
                  value={dayOfWeek}
                  onChange={(event) => setDayOfWeek(event.target.value)}
                >
                  <MenuItem value='1'>one</MenuItem>
                  {daysPerWeek > 1 && <MenuItem value='2'>two</MenuItem>}
                  {daysPerWeek > 2 && <MenuItem value='3'>three</MenuItem>}
                  {daysPerWeek > 3 && <MenuItem value='4'>four</MenuItem>}
                </Select>
            }
          </FormControl>
        </div>

        <div className='appFooter'>
          <button type='submit' className='primaryButton' onClick={handleSubmit}>Get Workout</button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='modalContainer'>
            {phaseData && phaseData.map((phase, index) => {
              return (
                <div className='phaseContainer' key={index}>
                  <div className='phaseHeader'><h1 className='subHeaderText'>{phase.phase}</h1></div>
                  <div className='phaseFooter'>
                    <p>{phase.definition}</p>
                    <p><strong>{phase.sets} sets x {phase.reps} reps</strong></p>
                    <p>{phase.rest} (rest)</p>
                  </div>
                </div>
              )
            })
            }
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default HomeView;
