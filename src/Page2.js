import classes from "./page2.module.css";
import picture1 from './Connect - .png';
import picture2 from './Learn - .png';
import picture3 from './Teach - .png';
import picture4 from './Manage - .png';



function Page2() {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.bodyContainer}>
                <div className={classes.holder}>
                    <div className={classes.imageContainer}>
                        <img src={picture1} alt="connecting image" />
                    </div>
                    <div className={classes.titleContainer}>
                        Connect
                    </div>
                    <div className={classes.headingContainer}>
                        Expand Network
                    </div>
                </div>
                <div className={classes.holder}>
                    <div className={classes.imageContainer}>
                        <img src={picture2} alt="connecting image" />
                    </div>
                    <div className={classes.titleContainer}>
                        Learn
                    </div>
                    <div className={classes.headingContainer}>
                        Enhance skills
                    </div>
                </div>
                <div className={classes.holder}>
                    <div className={classes.imageContainer}>
                        <img src={picture3} alt="connecting image" />
                    </div>
                    <div className={classes.titleContainer}>
                        Teach
                    </div>
                    <div className={classes.headingContainer}>
                        Share Your Expertise
                    </div>
                </div>
                <div className={classes.holder}>
                    <div className={classes.imageContainer}>
                        <img src={picture4} alt="connecting image" />
                    </div>
                    <div className={classes.titleContainer}>
                        Manage
                    </div>
                    <div className={classes.headingContainer}>
                        Organise Everything
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Page2;