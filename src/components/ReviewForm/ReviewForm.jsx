import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';

function ReviewForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const newUserPreferences = useSelector((store) => (store.newUserForm.newUserPreferences));
    const newUserEquipmentList = useSelector((store) => (store.newUserForm.newUserEquipmentList));

    const handleSubmit = () => {
        console.log('in handleSubmit');

        dispatch({type: 'POST_EQUIPMENT_LIST', payload: newUserEquipmentList});
    }

    return (
        <div className="appContainer">
            <h1 className="headerText">Review</h1>
            <p>Please confirm everything looks good.</p>

            <h3 className="subHeaderText">Metrics</h3>
            <ul>
                <li>Name: {newUserPreferences.name}</li>
                <li>Age: {newUserPreferences.age}</li>
                <li>Weight: {newUserPreferences.weight} (lbs)</li>
                <li>Height: {newUserPreferences.height} (inches)</li>
            </ul>
            <br/>

            <h3 className="subHeaderText">Equipment Available</h3>
            <ul>
            {
                newUserEquipmentList && (newUserEquipmentList.map((equipment, index) => {
                    return (
                        <li key={index}>
                            {equipment}
                        </li>
                    )
                }))
            }
        </ul>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default ReviewForm;