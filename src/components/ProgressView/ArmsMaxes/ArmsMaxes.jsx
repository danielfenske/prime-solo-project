import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import SASS/MUI 
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import UserMax from '../UserMax/UserMax';

function ArmsMaxes() {

    const [armsMaxesDetails, setArmsMaxesDetails] = useState(false);

    const armsMaxes = useSelector((store) => (store.userMaxes.armsMaxes));

    const dispatch = useDispatch();

    const handleAccordionClick = () => {
        dispatch({ type: 'FETCH_USER_MAXES', payload: 'arms' });
        setArmsMaxesDetails(!armsMaxesDetails);
    }

    return (
        <>
            {armsMaxesDetails ?
                <div className='accordionContainer'>
                    <div className='accordionDetailsHeader' onClick={handleAccordionClick}>
                        <h1 className='accordionHeader'>ARMS</h1>
                        <ExpandMoreIcon fontSize='large' />
                    </div>

                    <div className='accordionDetailsBody'>
                        {armsMaxes && armsMaxes.map((max) => {
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
                    <h1 className='accordionHeader'>ARMS</h1>
                    <ExpandLessIcon fontSize='large' />
                </div>
            }
        </>
    )
}

export default ArmsMaxes;