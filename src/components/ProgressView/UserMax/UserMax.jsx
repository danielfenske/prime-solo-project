import { useDispatch, useSelector } from 'react-redux';

// import MUI
import DeleteIcon from '@mui/icons-material/Delete';

function UserMax({ max }) {

    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log('in handleDelete', max.id);

        let id = max.id
        let muscleGroup = max.muscle_group;

        dispatch({ type: 'DELETE_MAX', payload: {id: id, muscleGroup: muscleGroup} });
    }

    return (
        <div className="maxContainer" key={max.id}>
            <div className="maxDetails">
                <div><p><strong>{max.exercise}</strong></p></div>
                <div><p>{max.muscle_group}</p></div>
                <div><p>{max.weight} lbs</p></div>
                <div><p>{max.reps} reps</p></div>
            </div>
            <DeleteIcon
                sx={{fontSize: 30}}
                className="trashIcon"
                onClick={handleDelete}
            />
        </div>
    )
}

export default UserMax;