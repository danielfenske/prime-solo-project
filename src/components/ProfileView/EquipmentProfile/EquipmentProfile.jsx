import React, { useState } from 'react';

// SASS/MUI imports
import './EquipmentProfile.scss';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function EquipmentProfile({ userEquipment }) {

    const [equipmentDetails, setEquipmentDetails] = useState(false);

    const handleEdit = () => {
        console.log('in handleClick');
    }

    return (
        <>
            {equipmentDetails ?
                <div className="accordionContainer" onClick={() => setEquipmentDetails(false)}>
                    <div className="accordionDetailsHeader">
                        <h1 className="accordionHeader">EQUIPMENT <EditIcon /></h1>
                        <ExpandMoreIcon fontSize="large" />
                    </div>

                    <div className="accordionDetailsBody">
                        {
                            userEquipment && userEquipment.map((equipment, index) => {
                                return (
                                    <div className="accordionItem" key={index}>
                                        <p>{equipment.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                :
                <div className="accordionCover" onClick={() => setEquipmentDetails(true)}>
                    <h1 className="accordionHeader">EQUIPMENT</h1>
                    <ExpandLessIcon fontSize="large" />
                </div>
            }
        </>
    )
}

export default EquipmentProfile;