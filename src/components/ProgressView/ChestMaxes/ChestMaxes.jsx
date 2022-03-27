import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import SASS/MUI 
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import UserMax from '../UserMax/UserMax';

function ChestMaxes() {

    const [chestMaxesDetails, setChestMaxesDetails] = useState(false);

    const chestMaxes = useSelector((store) => (store.userMaxes.chestMaxes));

    const dispatch = useDispatch();

    const handleAccordionClick = () => {

        dispatch({ type: 'FETCH_USER_MAXES', payload: 'chest' });

        setChestMaxesDetails(!chestMaxesDetails);
    }

    return (
        <>
            {chestMaxesDetails ?
                <div className="accordionContainer">
                    <div className="accordionDetailsHeader" onClick={handleAccordionClick}>
                        <h1 className="accordionHeader">CHEST</h1>
                        <ExpandMoreIcon fontSize="large" />
                    </div>

                    <div className="accordionDetailsBody">
                        {chestMaxes && chestMaxes.map((max) => {
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
                    <h1 className="accordionHeader">CHEST</h1>
                    <ExpandLessIcon fontSize="large" />
                </div>
            }
        </>
    )
}

export default ChestMaxes;