import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import EquipmentItem from '../EquipmentItem/EquipmentItem';

function EquipmentForm() {

    const equipmentList = useSelector((store) => (store.equipmentList));

    const dispatch = useDispatch();
    const history = useHistory();

    const handleNextButton = () => {
        event.preventDefault();
        console.log('in handleSubmit');

        alert(`Are you sure you want to move on? The exercises you checked will reflect the workouts you're given.`)

        history.push('/signup/review');
    }

    const handleBackButton = () => {
        history.push('/signup/routine');
    }

    // grab user profile information on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_EQUIPMENT_LIST' });
    }, []);


    return (
        <div className="appContainer">
            <h1 className="headerText">What equipment is available to you?</h1>
            <h3 className="subHeaderText">Select all that apply:</h3>

            <form onSubmit={handleNextButton}>
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
                <button type="submit">Next</button>
            </form>

            <button onClick={handleBackButton}>Back</button>
        </div>
    )
}

export default EquipmentForm;