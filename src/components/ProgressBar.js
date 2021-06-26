function ProgressBar(props) {
  return(
    <div className="col-md-6 col-lg-6 col-sm-12">
      <h4>{props.name}</h4>
      <div className="progress mb-3">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: props.width}}>{props.width}</div>
      </div>
    </div>
  );
}

export default ProgressBar;