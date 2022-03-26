import { useDispatch, useSelector } from 'react-redux';

// import MUI
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function UserMax({ max }) {

    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log('in handleDelete', max.id);

        let id = max.id

        dispatch({ type: 'DELETE_MAX', payload: id })
    }

    return (
        <div className="maxContainer" key={max.id}>
            <div className="maxDetails">
                <div><p><strong>{max.exercise}</strong></p></div>
                <div><p>{max.muscle_group}</p></div>
                <div><p>{max.weight} lbs</p></div>
                <div><p>{max.reps} reps</p></div>
            </div>
            <DeleteOutlineIcon
                fontSize="medium"
                className="trashIcon"
                onClick={handleDelete}
            />
        </div>
    )
}

export default UserMax;