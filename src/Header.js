import classes from "./header.module.css";
import picture1 from './connection.png';
import picture2 from './learning.png';
import picture3 from './course.png';
import picture4 from './project-management.png';
import picture5 from './menu.png';
import React, { useState } from 'react';
import Logo from './DiracAI';



function Header(){
    const [isDivVisible, setDivVisibility] = useState(false);

  const toggleDiv = () => {
    setDivVisibility(!isDivVisible);
  };
    return(
        <div className={classes.main}>
        <div className={classes.mainContainer}>
            <div className={classes.bodyContainer}>
                <div className={classes.leftContainer}>
                    <div className={classes.holder}>
                        <div className={classes.logoContainer}>
                            <Logo />
                        </div>
                        <div className={classes.textContainer}>
                            <b>DashoApp</b>
                        </div>
                    </div>    
                </div>
                <div className={classes.rightContainer}>
                    <div className={classes.top}>
                        <div className={classes.holder}>
                            <div className={classes.logoContainer}>
                                <img src={picture1} alt="temperary pic" className={classes.image} />
                            </div>
                            <div className={classes.textContainer}>
                                Connect
                            </div>
                        </div>
                        <div className={classes.holder}>
                            <div className={classes.logoContainer}>
                                <img src={picture2} alt="temperary pic" className={classes.image} />
                            </div>
                            <div className={classes.textContainer}>
                                Learn
                            </div>
                        </div>
                        <div className={classes.holder}>
                            <div className={classes.logoContainer}>
                                <img src={picture3} alt="temperary pic" className={classes.image} />
                            </div>
                            <div className={classes.textContainer}>
                                Teach
                            </div>
                        </div>
                        <div className={classes.holder}>
                            <div className={classes.logoContainer}>
                                <img src={picture4} alt="temperary pic" className={classes.image} />
                            </div>
                            <div className={classes.textContainer}>
                                Manage
                            </div>
                        </div>
                    </div>
                    <div className={classes.menu} onClick={toggleDiv} >
                        <div className={classes.holder}>
                            <div className={classes.logoContainer}>
                                <img src={picture5} alt="temperary pic" className={classes.image} />
                            </div>
                            <div className={classes.textContainer}>
                                Menu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {isDivVisible && <div className={classes.hidder}>
            <div className={classes.rightContainer}>
                <div className={classes.top}>
                    <div className={classes.holder}>
                        <div className={classes.logoContainer}>
                            <img src={picture1} alt="temperary pic" className={classes.image} />
                        </div>
                        <div className={classes.textContainer}>
                            Connect
                        </div>
                    </div>
                    <div className={classes.holder}>
                        <div className={classes.logoContainer}>
                            <img src={picture2} alt="temperary pic" className={classes.image} />
                        </div>
                        <div className={classes.textContainer}>
                            Learn
                        </div>
                    </div>
                    <div className={classes.holder}>
                        <div className={classes.logoContainer}>
                            <img src={picture3} alt="temperary pic" className={classes.image} />
                        </div>
                        <div className={classes.textContainer}>
                            Teach
                        </div>
                    </div>
                    <div className={classes.holder}>
                        <div className={classes.logoContainer}>
                            <img src={picture4} alt="temperary pic" className={classes.image} />
                        </div>
                        <div className={classes.textContainer}>
                            Manage
                        </div>
                    </div>
                </div>
            </div>
      </div>}
      </div>
    );
}

export default Header ;