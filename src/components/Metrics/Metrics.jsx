import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Metrics() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    // initialize useDispatch to connect with SAGA
    const dispatch = useDispatch();


    // sends all values taken from form to be stored in reducer
    const handleSubmit = () => {
        event.preventDefault();
        console.log('in handleSubmit');

        let metrics = {
            name: name, 
            age: age, 
            weight: weight, 
            height, height
        }

        dispatch({type: 'SET_NEW_USER', payload: metrics});
    }

    return (
        <div className="appContainer">
            <h1 className="headerText">Tell us a little more about you.</h1>

            <form onSubmit={handleSubmit}>
                <h1 className="subHeaderText">Enter name:</h1>
                <input
                    type="text"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                />

                <h1 className="subHeaderText">Enter age:</h1>
                <input
                    type="number"
                    value={age}
                    required
                    onChange={(event) => setAge(event.target.value)}
                />

                <h1 className="subHeaderText">Enter weight (lbs):</h1>
                <input
                    type="number"
                    value={weight}
                    required
                    onChange={(event) => setWeight(event.target.value)}
                />

                <h1 className="subHeaderText">Enter height (inches):</h1>
                <input
                    type="number"
                    value={height}
                    required
                    onChange={(event) => setHeight(event.target.value)}
                />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Metrics;