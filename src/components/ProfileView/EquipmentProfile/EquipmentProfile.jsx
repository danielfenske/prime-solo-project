import React, { useState } from 'react';

// SASS/MUI imports
import './EquipmentProfile.scss';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Modal, Box } from '@mui/material';

import EquipmentEdit from './EquipmentEdit/EquipmentEdit';

function EquipmentProfile({ userEquipment, equipmentList }) {

    const [equipmentDetails, setEquipmentDetails] = useState(false);

    // handle modal pop-up
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        height: 450,
        overflow: 'hidden',
        overflowY: 'scroll',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };

    return (
        <>
            {equipmentDetails ?
                <div className='accordionContainer' onClick={() => setEquipmentDetails(false)}>
                    <div className='accordionDetailsHeader'>
                        <h1 className='accordionHeader'>EQUIPMENT <EditIcon onClick={handleOpen}/></h1>
                        <ExpandMoreIcon fontSize='large' />
                    </div>

                    <div className='accordionDetailsBody'>
                        {
                            userEquipment && userEquipment.map((equipment, index) => {
                                return (
                                    <div className='accordionItem' key={index}>
                                        <p>{equipment.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                :
                <div className='accordionCover' onClick={() => setEquipmentDetails(true)}>
                    <h1 className='accordionHeader'>EQUIPMENT</h1>
                    <ExpandLessIcon fontSize='large' />
                </div>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <div className='modalContainer'>
                        <EquipmentEdit
                            equipmentList={equipmentList}
                        />
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default EquipmentProfile;