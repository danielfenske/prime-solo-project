import { useDispatch, useSelector } from 'react-redux';

// Import SASS/MUI components
import './EquipmentItem.scss';
import Checkbox from '@mui/material/Checkbox';

function EquipmentItem({ equipment }) {

    const dispatch = useDispatch();

    const handleCheckboxChange = (event) => {
        console.log('in handleClickChange', event.target.checked);

        if (event.target.checked === true) {
            console.log('event.target.value', event.target.value);
            dispatch({ type: 'POST_EQUIPMENT', payload: event.target.value });
        } else {
            console.log('event.target.value', event.target.value);
            dispatch({ type: 'DELETE_EQUIPMENT', payload: event.target.value });
        }
    }

        return (
            <div className='equipmentContainer'>
                <Checkbox className="checkbox" value={equipment.id} name={equipment.name} onClick={handleCheckboxChange}/>
                <h1 className="subHeaderText">{equipment.name}</h1>
                <img src={equipment.img_url}/>
            </div>
        )
}

export default EquipmentItem;