function ContactLabel(props) {
  return(
    <div className="col-md-4 col-lg-4 col-sm-12 my-4">
      <label htmlFor={props.name} className="form-label">{props.name}</label>
      <div className="input-group">
        <span className="input-group-text">{props.icon}</span>
        <input type="text" className="form-control" id={props.name} value={props.value} readOnly />
      </div>
    </div>
  );
}

export default ContactLabel;