import './ProfileEquipment.scss';

function ProfileEquipment({equipment}) {
    return(
        <div className="profileEquipmentContainer">
            <p>{equipment.name}</p>
        </div>
    )
}

export default ProfileEquipment;