import {useDispatch} from 'react-redux';

function EquipmentItem({ equipment }) {

    const dispatch = useDispatch();

    const handleCheckboxChange = (event) => {
        console.log('in handleClickChange', event.target.checked);

        if (event.target.checked === true) {
            dispatch({type: 'ADD_EQUIPMENT', payload: event.target.value});
        } else {
            dispatch({type: 'REMOVE_EQUIPMENT', payload: event.target.value});
        }
    }

    if (equipment !== 'body weight') {
        return (
            <div className='=equipmentContainer'>
                <input type="checkbox" value={equipment} name={equipment} onClick={handleCheckboxChange}/>
                <label for={equipment}>{equipment}</label>
            </div>
        )
    } else {
        return (
            <div className='=equipmentContainer'>
                <input type="checkbox" value={equipment} name={equipment} checked />
                <label for={equipment}>{equipment}</label>
            </div>
        )
    }
}

export default EquipmentItem;