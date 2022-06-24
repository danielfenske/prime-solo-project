import { useDispatch, useSelector } from 'react-redux';

// Import SASS/MUI components
import './EquipmentItem.scss';
import Checkbox from '@mui/material/Checkbox';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function EquipmentItem({ equipment }) {

    const dispatch = useDispatch();
    
    const handleCheckboxChange = (event) => {
        console.log('in handleClickChange', event.target.checked);

        if (event.target.checked === true) {
            dispatch({ type: 'ADD_EQUIPMENT', payload: event.target.value });
        } else {
            dispatch({ type: 'REMOVE_EQUIPMENT', payload: event.target.value });
        }
    }

    if (equipment.id === 2) {
        return (
            <div className='equipmentContainer'>
                <img src={equipment.img_url} />
                <h1 className='subHeaderText'>{equipment.name}</h1>
                <Checkbox className='checkbox'
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 32, color: 'rgb(255, 255, 255)' } }}
                    icon={<CheckCircleIcon />}
                    disabled
                    value={equipment.id}
                    name={equipment.name}
                    onClick={handleCheckboxChange} />
            </div>
        )
    } else {
        return (
            <div className='equipmentContainer'>
                <img src={equipment.img_url} />
                <h1 className='subHeaderText'>{equipment.name}</h1>
                <Checkbox className='checkbox'
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 32, color: 'rgb(255, 255, 255)' } }}
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    value={equipment.id}
                    name={equipment.name}
                    onClick={handleCheckboxChange} />
            </div>
        )
    }
}

export default EquipmentItem;