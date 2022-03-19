import { useDispatch, useSelector } from 'react-redux';

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
            <div className='=equipmentContainer'>
                <input type="checkbox" value={equipment.id} name={equipment.name} onClick={handleCheckboxChange}/>
                <label for={equipment.name}>{equipment.name}</label>
            </div>
        )
}

export default EquipmentItem;