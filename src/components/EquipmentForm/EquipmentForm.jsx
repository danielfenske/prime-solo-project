import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function EquipmentForm() {

    const [equipmentList, setEquipmentList] = useState([]);

    // const handleCheckBoxChange = (event) => {
    //     if (event.target.checked === true) {
    //         setEquipmentList([...equipmentList, (event.target.value)]);
    //     }
    // }

    console.log(equipmentList);

    // sends all values taken from form to be stored in reducer
    const handleNextButton = () => {
        event.preventDefault();
        console.log('in handleSubmit');

        // dispatch({ type: 'ADD_EQUIPMENT', payload: { daysPerWeek: Number(daysPerWeek), routine: routine } });

        // history.push('/signup/maxes');
    }

    const handleBackButton = () => {
        history.push('/signup/routine');
    }

    return (
        <div className="appContainer">
            <h1 className="headerText">What equipment is available to you?</h1>
            <h3 className="subHeaderText">Select all that apply:</h3>

            <form on Submit={handleNextButton}>
                <div>
                    <input type="checkbox" value="barbell" name="barbell"/>
                    <label for="barbell">Barbell</label>
                </div>
                <div>
                    <input type="checkbox" value="body weight" name="body weight" checked />
                    <label for="body weight">Body Weight</label>
                </div>
                <div>
                    <input type="checkbox" value="bosu ball" name="bosu ball" />
                    <label for="bosu ball">Bosu Ball</label>
                </div>

                <div>
                    <input type="checkbox" value="cable" name="cable" />
                    <label for="cable">Cable</label>
                </div>
                <div>
                    <input type="checkbox" value="dumbbell" name="dumbbell" />
                    <label for="dumbbell">Dumbbell</label>
                </div>
                <div>
                    <input type="checkbox" value="elliptical machine" name="elliptical machine" />
                    <label for="elliptical machine">Elliptical Machine</label>
                </div>
                <div>
                    <input type="checkbox" value="ez barbell" name="ez barbell" />
                    <label for="ez barbell">Ez Barbell</label>
                </div>
                <div>
                    <input type="checkbox" value="kettlebell" name="kettlebell" />
                    <label for="kettlebell">Kettlebell</label>
                </div>
                <div>
                    <input type="checkbox" value="leverage machine" name="leverage machine" />
                    <label for="leverage machine">Leverage Machine</label>
                </div>
                <div>
                    <input type="checkbox" value="medicine ball" name="medicine ball" />
                    <label for="medicine ball">Medicine Ball</label>
                </div>
                <div>
                    <input type="checkbox" value="stability ball" name="stability ball" />
                    <label for="stability ball">Stability Ball</label>
                </div>
                <div>
                    <input type="checkbox" value="stationary bike" name="stationary bike" />
                    <label for="stationary bike">Stationary Bike</label>
                </div>
                <div>
                    <input type="checkbox" value="stepmill machine" name="stepmill machine" />
                    <label for="stepmill machine">Stepmill Machine</label>
                </div>
                <div>
                    <input type="checkbox" value="weighted" name="weighted" />
                    <label for="weighted">Free Weights</label>
                </div>

                <div className="equipmentContainer">
                    {
                        
                    }
                </div>

                <button type="submit">Next</button>
            </form>

            <button onClick={handleBackButton}>Back</button>
        </div>
    )
}

export default EquipmentForm;