import ResumeCard from "./ResumeCard";

function Resume() {
  return(
    <div id="education">
        <div className="card card-body bg-success text-white p-5">
          <h2>Education and Job History</h2>
        </div>
  
        <div className="card card-body p-5">
          <h3 className="mb-3">Education History</h3>

          <div className="row">
            <ResumeCard 
              name="SDN 15 Tangerang"
              desc="Miss my childhood"
              period="2008-2012"
            />
            <ResumeCard 
              name="SMPN 5 Tangerang"
              desc="Starting to have an interests and having joyful life"
              period="2012-2015"
            />
            <ResumeCard 
              name="SMA Unggulan Amanatul Ummah"
              desc="Memories can not be forgotten here"
              period="2015-2018"
            />
            <ResumeCard 
              name="Universitas Islam Indonesia"
              desc="Studying on Bachelor Degree of Informatics"
              period="2018-Present"
            />
          </div>

          <hr className="my-5" />

          <h3 className="mb-3">Job History</h3>

          <div className="row">
            <ResumeCard 
              name="Co-Founder and Web Developer at Webcare.idn"
              desc={
                <>
                I am Co-Founder and Web Developer in Webcare.idn, webcare is a startup company that provides a 
                web-making services for low to middle level entrepreneur in Indonesia. You can find out more about the company <a target='_blank' rel='noreferrer noopener' href='https://webcareidn.com/'>here</a>.
                (I am <strong>currently inactive</strong> from the company).
                </>
              }
              period="Aug 2020 - Present"
            />
          </div>
          
        </div>
      </div>
  );
}

export default Resume;