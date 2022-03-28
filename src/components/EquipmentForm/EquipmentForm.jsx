import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import EquipmentItem from '../EquipmentItem/EquipmentItem';

// IMPORT SASS
import './EquipmentForm.scss';

function EquipmentForm() {

    const equipmentList = useSelector((store) => (store.equipment.equipmentList));

    const dispatch = useDispatch();
    const history = useHistory();

    const handleNextButton = () => {
        event.preventDefault();
        console.log('in handleSubmit');
        // alert(`Are you sure you want to move on? The exercises you checked will reflect the workouts you're given.`)
        history.push('/maxes');
    }

    const handleBackButton = () => {
        history.push('/routine');
    }

    // grab user profile information on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_EQUIPMENT_LIST' });
    }, []);


    return (
        <div className="appContainer formContainer">
            <div className="formHeader">
                <div className="progressBar">
                    <div className="equipmentBar"></div>
                </div>
                <h1 className="headerText">What's at your gym?</h1>
            </div>
            <form className="formBody" id="equipmentBody">
                <h1 className="subHeaderText">Select all that apply.</h1>
                <div className="equipmentBody">
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

            <div className="formFooter">
                <button type="submit" className="primaryButton" onClick={handleNextButton}>Next</button>
                <button className="backButton" onClick={handleBackButton}>Back</button>
            </div>
        </div>
    )
}

export default EquipmentForm;