import classes from './page3.module.css';
import leftImg from './left-img.jpeg';
import RightImg from './right-img.jpeg';
import dataScience from './dataScience.webp';
import ai from './AI.jpeg';
import courses from './Course.webp'




function Page3() {
    return (
        <div className={classes.app}>
            {/* thirdBlock */}
            <div className={classes.howItWorks}>
                <h2 className={classes.text}>How it Works?</h2>
                <div className={classes.mainBlock}>
                    <div className={classes.leftBlock}>
                        {/* for teachers */}
                        <img src={leftImg} alt="img" className={classes.leftImg} />
                        <span className={classes.text1}>For Teachers:</span>
                        <span className={classes.text2}>Connect with right Learners</span>
                        <div className={classes.leftBox}>
                            <div className={classes.textContainer}>
                                <div className={classes.hds}>Create and Connect Profile:</div>
                                <div className={classes.cnt}>Teachers Sign up, build their profiles, and outline their expertise and teaching style</div>
                            </div>

                            <div className={classes.textContainer}>
                                <div className={classes.hds}>Develop and launch live Online Classes:</div>
                                <div className={classes.cnt}>Teacher Design and publish courses, including multimedia content and interactive elements.</div>
                            </div>

                            <div className={classes.textContainer}>
                                <div className={classes.hds}>Engage and Earn:</div>
                                <div className={classes.cnt}>Teachers interact with students, conduct live Classes, promote their educational institute, and earn revenue through course sales.</div>
                            </div>
                        </div>
                    </div>

                    {/* for learner */}
                    <div className={classes.rightBlock}>
                        <img src={RightImg} alt="img" className={classes.rightImg} />
                        <span className={classes.text1}>For Learners:</span>
                        <span className={classes.text2}>Find best courses to Upskill</span>
                        <div className={classes.rightBox}>
                            <div className={classes.textContainer}>
                                <div className={classes.hds}>Profile Setup and Course Exploration:</div>
                                <div className={classes.cnt}>Learners create profiles, set learning goals, and explore available live courses.</div>
                            </div>

                            <div className={classes.textContainer}>
                                <div className={classes.hds}>Enrollment and Learning:</div>
                                <div className={classes.cnt}>Learners enroll in live classes, access learning materials, and participate in interactive learning.</div>
                            </div>

                            <div className={classes.textContainer}>
                                <div className={classes.hds}>Progress Tracking and Feedback:</div>
                                <div className={classes.cnt}>Learners track their progress, engage with teachers and peers, and provide feedback for continuous improvement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.heroContainer}>
                <div className={classes.heroHeading}>
                    <div className={classes.headCnt}>Trending Live Classes</div>
                </div>

                <div className={classes.heroMain}>
                    <div className={classes.mainTop}>

                        <div className={classes.firstBox}>
                            <div className={classes.imgAllDiv}>
                                <img src={dataScience} className={classes.imgAll} alt='DS'></img>
                            </div>
                            <div className={classes.info}>
                                <div className={classes.time}>Starting at 11 a.m</div>
                                <div className={classes.faculty}>By prashant Sir</div>
                            </div>
                            <button className={classes.enrollNow}>Enroll Now</button>
                        </div>


                        <div className={classes.secondBox}>
                            <div className={classes.imgAllDiv}>
                                <img src={ai} className={classes.imgAll} alt='AI'></img>
                            </div>
                            <div className={classes.info}>
                                <div className={classes.time}>Starting at 11.30 a.m</div>
                                <div className={classes.faculty}>By Ashok Sir</div>
                            </div>
                            <button className={classes.enrollNow}>Enroll Now</button>
                        </div>


                        <div className={classes.thirdBox}>
                            <div className={classes.imgAllDiv}>
                                <img src={courses} className={classes.imgAll} alt='Course'></img>
                            </div>
                            <div className={classes.info}>
                                <div className={classes.time}>Starting at 2.30 p.m</div>
                                <div className={classes.faculty}>By Maharana classes</div>
                            </div>
                            <button className={classes.enrollNow}>Enroll Now</button>
                        </div>


                    </div>

                    <div className={classes.mainMiddle}>
                        <div className={classes.allCourses}>View All Live Classes</div>
                    </div>

                    <div className={classes.mainBottom}>
                        <div className={classes.orgInfo}>3000+ Learners</div>
                        <div className={classes.orgInfo}>400+ Teachers</div>
                        <div className={classes.orgInfo}>100+ Institutions</div>
                    </div>
                </div>
            </div>

            {/* fourth-block */}
            <div className={classes.fourthContainer}>
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <div className={classes.heading} style={{ marginBottom: '20px' }}>"Join Our Community of Learners and Teachers Today!"</div>
                    <button className={classes.join} style={{ padding: '10px 20px', fontSize: '25px', border: 'none', borderRadius: '10px', backgroundColor: '#fff', color: 'black', cursor: 'pointer' }}>Join Now</button>
                </div>
            </div>
        </div>
    );
}
export default Page3;