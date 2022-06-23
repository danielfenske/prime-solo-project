import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import SASS/MUI 
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import UserMax from '../UserMax/UserMax';

function BackMaxes() {

    const [backMaxesDetails, setBackMaxesDetails] = useState(false);

    const backMaxes = useSelector((store) => (store.userMaxes.backMaxes));

    const dispatch = useDispatch();

    const handleAccordionClick = () => {

        dispatch({ type: 'FETCH_USER_MAXES', payload: 'back' });

        setBackMaxesDetails(!backMaxesDetails);
    }

    // grab user maxes on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_USER_MAXES', payload: 'back' });
    }, []);

    return (
        <>
            {backMaxesDetails ?
                <div className='accordionContainer'>
                    <div className='accordionDetailsHeader' onClick={handleAccordionClick}>
                        <h1 className='accordionHeader'>BACK</h1>
                        <ExpandMoreIcon fontSize='large' />
                    </div>

                    <div className='accordionDetailsBody'>
                        {backMaxes && backMaxes.map((max) => {
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
                <div className='accordionCover' onClick={handleAccordionClick}>
                    <h1 className='accordionHeader'>BACK</h1>
                    <ExpandLessIcon fontSize='large' />
                </div>
            }
        </>
    )
}

export default BackMaxes;