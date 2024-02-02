import classes from "./page1.module.css";
import picture6 from './left.png';
import picture7 from './right.png';
import picture1 from './google.jpg';

function Page1() {
    return(
        <div className={classes.mainContainer}>

      <div className={classes.bodyContainer}>
        <div className={classes.secondContainer}>
          <div className={classes.leftContainer}>

          <div className={classes.holder}>

            <div className={classes.textContainer}>
              Email or Mobile
            </div>
            <div className={classes.firstInput}>
              <input type="text" className={classes.textInput} placeholder="Email or Phone"/>
            </div>
            <div className={classes.thirdInput}>
              <button className={classes.signInButton}>
                Sign in
              </button>
            </div>
            <div className={classes.termsContainer}>
              <input type="checkbox" defaultChecked className={classes.checkBox}/>
              &nbsp;&nbsp;By continuing here you are agreeing to our terms of service and privacy policy.
            </div>
            <div className={classes.dividerContainer}>
              <div className={classes.leftDivider}>

              </div>
              <div className={classes.textDivider}>
                OR
              </div>
              <div className={classes.rightDivider}>

              </div>
            </div>
            <div className={classes.secondInput}>
              <img src={picture1} alt="google image"/>
              <div className={classes.googleDiv}>
                Continue with google.
              </div>
            </div>
            <div className={classes.secondInput}>
              <div className={classes.googleDiv}>
                New to DashoApp ? join now.
              </div>
            </div>
         </div>   

          </div>
          <div className={classes.rightContainer}>
            <div className={classes.topTextContainer}>
              <h1>Welcome to the eco-system of teachers and learners</h1>
            </div>
            <div className={classes.imageContainer}>
              <img src={picture6} alt="picture1" />
              <img src={picture7} alt="picture2"/>
            </div>
            <div className={classes.bottomTextContainer}>
              <h2>Connect. Learn. Teach. Manage</h2>
            </div>
          </div>
        </div>

        </div>
      </div>

    );
}

export default Page1;