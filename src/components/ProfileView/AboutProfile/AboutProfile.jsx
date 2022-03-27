import React, { useState } from 'react';

// SASS/MUI imports
import './AboutProfile.scss';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function AboutProfile() {

    const [aboutDetails, setAboutDetails] = useState(false);

    const handleEdit = () => {
        console.log('in handleClick');
    }

    return (
        <>
            {aboutDetails ?
                <div className="aboutAccordionContainer" onClick={() => setAboutDetails(false)}>
                    <div className="accordionDetailsHeader">
                        <h1 className="accordionHeader">ABOUT</h1>
                        <ExpandMoreIcon fontSize="large" />
                    </div>

                    <div className="accordionDetailsBody">
                        <div className="technologyContainer">
                            <h1 className="subHeaderText">Technology</h1>
                            <div className="technologyBody">
                                <p className="technologyItem">javascript</p>
                                <p className="technologyItem">react</p>
                                <p className="technologyItem">redux</p>
                                <p className="technologyItem">saga</p>
                                <p className="technologyItem">node</p>
                                <p className="technologyItem">exercise API</p>
                                <p className="technologyItem">postgreSQL</p>
                                <p className="technologyItem">sass</p>
                                <p className="technologyItem">html 5</p>
                                <p className="technologyItem">material ui</p>
                                <p className="technologyItem">figma</p>
                            </div>
                        </div>
                        <div className="connectContainer">
                            <h1 className="subHeaderText">Connect</h1>
                            <div className="connectBody">
                                <a href="https://www.linkedin.com/in/danielfenske/" target="_blank"><LinkedInIcon fontSize="large"/></a>
                                <a href="https://github.com/danielfenske" target="_blank"><GitHubIcon fontSize="large"/></a>
                                <a href="mailto: dlfenske.fenske@gmail.com" target="_blank"><EmailIcon fontSize="large"/></a>
                            </div>
                            <div className="connectFooter">
                                <p>&copy; Daniel Fenske</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="accordionCover" onClick={() => setAboutDetails(true)}>
                    <h1 className="accordionHeader">ABOUT</h1>
                    <ExpandLessIcon fontSize="large" />
                </div>
            }
        </>
    )
}

export default AboutProfile;