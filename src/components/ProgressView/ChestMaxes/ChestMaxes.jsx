import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import SASS/MUI 
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import UserMax from '../UserMax/UserMax';

function ChestMaxes({chestMaxes}) {

    // const [chestMaxes, setChestMaxes] = useState(false);

    const userMaxes = useSelector((store) => (store.userMaxes));

    const dispatch = useDispatch();

    const handleAccordionClick = () => {

        dispatch({ type: 'FETCH_USER_MAXES', payload: 'chest' });

        setChestMaxes(!chestMaxes);
    }

    // grab user maxes on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_USER_MAXES', payload: 'chest' });
    }, []);

    return (
        <>
            {chestMaxes ?
                <div className="accordionContainer">
                    <div className="accordionDetailsHeader" onClick={handleAccordionClick}>
                        <h1>CHEST</h1>
                        <ExpandMoreIcon fontSize="large" />
                    </div>

                    <div className="accordionDetailsBody">
                        {userMaxes && userMaxes.map((max) => {
                            return (
                                <UserMax
                                    max={max}
                                    key={max.id}
                                />
                            )
                        })
                        }
                    </div>
                </div>
                :
                <div className="accordionCover" onClick={handleAccordionClick}>
                    <h1>CHEST</h1>
                    <ExpandLessIcon fontSize="large" />
                </div>
            }
        </>
    )
}

export default ChestMaxes;