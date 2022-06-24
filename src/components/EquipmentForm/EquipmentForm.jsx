import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import EquipmentItem from '../EquipmentItem/EquipmentItem';

// IMPORT SASS
import './EquipmentForm.scss';

function EquipmentForm() {

    const equipmentList = useSelector((store) => (store.equipment.equipmentList));
    const newUserPreferences = useSelector((store) => (store.userPreferences.newUserPreferences));
    const newUserEquipmentList = useSelector((store) => (store.equipment.newUserEquipmentList));

    const dispatch = useDispatch();
    const history = useHistory();

    // sends all values taken from form to be stored in reducer
    const handleSubmitButton = () => {
        event.preventDefault();
        console.log('in handleSubmitButton');

        dispatch(
            {
                type: 'POST_USER_PREFERENCES',
                payload: { ...newUserPreferences, equipmentList: newUserEquipmentList }
            });
        history.push('/home');
    }

    const handleBackButton = () => {
        history.push('/routine');
    }

    // grab user profile information on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_EQUIPMENT_LIST' });
    }, []);


    return (
        <div className='appContainer'>
            <div className='appHeader' id='formHeader'>
                <div className='progressBar'>
                    <div className='equipmentBar'></div>
                </div>
                <h1 className='headerText'>What's at your gym?</h1>
            </div>
            <form className='appBody' id='equipmentBody'>
                <h1 className='subHeaderText'>Select all that apply.</h1>
                <div className='equipmentBody'>
                    {
                        equipmentList && equipmentList.map((equipment) => {
                            return (
                                <EquipmentItem
                                    key={equipment.id}
                                    equipment={equipment}
                                />
                            )
                        })
                    }
                </div>
            </form>

            <div className='appFooter'>
            <button className='primaryButton' onClick={handleSubmitButton}>Submit</button>
                <button className='backButton' onClick={handleBackButton}>Back</button>
            </div>
        </div>
    )
}

export default EquipmentForm;