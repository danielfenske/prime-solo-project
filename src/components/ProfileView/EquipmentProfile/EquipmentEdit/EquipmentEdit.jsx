import EquipmentItem from "../../../EquipmentItem/EquipmentItem";

function EquipmentEdit({ equipmentList }) {
    return (
        <form className="modalFormBody" id="equipmentBody">
            <h1 className="subHeaderText">Select all that apply.</h1>
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