import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import SASS/MUI 
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import UserMax from '../UserMax/UserMax';

function LegsMaxes() {

    const [legsMaxesDetails, setLegsMaxesDetails] = useState(false);

    const legsMaxes = useSelector((store) => (store.userMaxes.legsMaxes));

    const dispatch = useDispatch();

    const handleAccordionClick = () => {
        dispatch({ type: 'FETCH_USER_MAXES', payload: 'legs' });
        setLegsMaxesDetails(!legsMaxesDetails);
    }

    return (
        <>
            {legsMaxesDetails ?
                <div className='accordionContainer'>
                    <div className='accordionDetailsHeader' onClick={handleAccordionClick}>
                        <h1 className='accordionHeader'>LEGS</h1>
                        <ExpandMoreIcon fontSize='large' />
                    </div>

                    <div className='accordionDetailsBody'>
                        {legsMaxes && legsMaxes.map((max) => {
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
                    <h1 className='accordionHeader'>LEGS</h1>
                    <ExpandLessIcon fontSize='large' />
                </div>
            }
        </>
    )
}

export default LegsMaxes;