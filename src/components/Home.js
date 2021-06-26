import ProgressBar from "./ProgressBar";
import CheckBar from "./CheckBar";

function Home() {
  return(
    <div id="home">
      <div className="card card-body bg-primary text-white p-5">
        <h2>Welcome to my portfolio!</h2>
      </div>

      <div className="card card-body p-5">
        <h3>About Me :</h3>
        <p className="about-text" style={{textAlign: "justify"}}>
          You can call me Reza/Ali, both is fine. I'm 20 years old currently and live in Yogyakarta, I'm a 3rd year student (2018) and studying on 
          Bachelor Degree of Informatics at Islamic University of Indonesia. I'm highly interested in Front End Web Development, i have 2+ years in Front End Development (Using Html, CSS, Vanilla JS), 1+ years in Back End Development (Using Laravel)
          , and 1+ years in Game Development (Using Unity Engine). I'm currently open and ready to work on profit/non-profit projects, so feel free to ask and/or negotiate
          with me (See on Contacts).
        </p>

        <hr />

        <h3 className="mb-5" style={{textAlign: "center", marginBottom: "20px"}}>Technical Skills</h3>

        <div className="row">
          <ProgressBar name="HTML5" width="90%" />
          <ProgressBar name="CSS" width="80%" />
        </div>

        <div className="row">
          <ProgressBar name="Javascript" width="80%" />
          <ProgressBar name="Java" width="60%" />
        </div>

        <div className="row">
          <ProgressBar name="UI Design" width="85%" />
          <ProgressBar name="Bootstrap" width="90%" />
        </div>

        <div className="row">
          <ProgressBar name="React.js*" width="65%" />
          <ProgressBar name="Node.js*" width="50%" />
        </div>

        <div className="row">
          <ProgressBar name="Unity and C#" width="70%" />
          <ProgressBar name="Laravel" width="60%" />
        </div>

        <p className="text-muted">*still learning</p>
        
        <hr />

        <h3 className="mb-5" style={{textAlign: "center"}}>I am ...</h3>

        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center text-center mb-3">
            <CheckBar name="Creative"/>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center text-center mb-3">
            <CheckBar name="Good in communication"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center text-center mb-3">
            <CheckBar name="Adapt easily"/>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center text-center mb-3">
            <CheckBar name="Hard worker"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center text-center mb-3">
            <CheckBar name="Responsible"/>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center text-center mb-3">
            <CheckBar name="Good in Critical thinking"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center text-center mb-3">
            <CheckBar name="Have a high curiosity"/>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center text-center mb-3">
            <CheckBar name="Wise man"/>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;