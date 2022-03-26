import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

// SASS/MUI imports
import './HomeView.scss';
import { Modal, Box } from '@mui/material';

// import DaySelector
import DailyInfoForm from './DailyInfoForm/DailyInfoForm';

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

function HomeView() {

  // bring in state stored in redux for all data related to profile
  const userPreferences = useSelector((store) => (store.userPreferences.userPreferences));
  const phaseData = useSelector((store) => (store.phaseData));

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
    dispatch({ type: 'FETCH_PHASE_DATA' });
  }, []);

  return (
    <>
      <div className="appContainer homeContainer">
        <div className="homeHeader">
          <h1 className="headerText">Welcome back, {userPreferences.name}!</h1>
          <h1 className="subHeaderText homeViewText">Let's get to work. 💪</h1>
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
          <div className="modalContainer">
            {phaseData && phaseData.map((phase, index) => {
              return (
                <div className="phaseContainer" key={index}>
                  <div className="phaseHeader"><h1 className="subHeaderText">{phase.phase}</h1></div>
                  {/* <div className="phaseBody"><p>{phase.definition}</p></div> */}
                  <div className="phaseFooter">
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

// this allows us to use <App /> in index.js
export default HomeView;
