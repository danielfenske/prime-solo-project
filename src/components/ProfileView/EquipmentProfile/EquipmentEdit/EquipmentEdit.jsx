import { useDispatch, useSelector } from 'react-redux';

import EquipmentItem from "../../../EquipmentItem/EquipmentItem";

function EquipmentEdit({ equipmentList }) {

    const newUserEquipmentList = useSelector((store) => (store.equipment.newUserEquipmentList));

    const dispatch = useDispatch();

    const handleUpdate = () => {
        console.log('in handleUpdate');

        dispatch({ type: 'UPDATE_EQUIPMENT_LIST', payload: newUserEquipmentList });
    }

    return (
        <form className="modalFormBody" id="equipmentBody">
            <h1 className="subHeaderText">Select all that apply.</h1>
            <button type="submit" className="primaryButton smallButton updateButton" onClick={handleUpdate}>UPDATE</button>
            <div className="equipmentBody">
                {
                    equipmentList && equipmentList.map((equipment) => {
                        return (
                            <EquipmentItem
                                key={equipment.id}
                                equipment={equipment}
                            />
                        )
                    })
                }
            </div>
        </form>
    )
}

export default EquipmentEdit;