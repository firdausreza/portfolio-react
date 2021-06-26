function ResumeCard(props) {
  return (
    <div className="col-md-3 col-sm-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fw-bold">{props.name}</h5>
          {/* <p className="card-text">
            {props.link} ? {props.desc}{props.link} : {props.desc}
          </p> */}
          <p className="card-text text-wrap">
            {props.desc}
          </p>
        </div>
        <div className="card-footer text-muted">
          {props.period}
        </div>
      </div>
    </div>
  )
}

export default ResumeCard;