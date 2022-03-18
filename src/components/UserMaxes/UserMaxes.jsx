import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function UserMaxes() {

    const userMaxes = useSelector((store) => (store.userMaxes));

    return(
        <ul>
            {
                userMaxes && (userMaxes.map((max) => {
                    return (
                        <li key={max.id}>Exercise: {max.exercise},
                            Weight: {max.weight},
                            Reps: {max.reps}
                        </li>
                    )
                }))
            }
        </ul>
    )
}

export default UserMaxes;