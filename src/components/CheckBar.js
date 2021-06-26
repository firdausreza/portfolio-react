import { CheckCircle } from 'react-bootstrap-icons';

function CheckBar(props) {
  return(
    <div className="col-6">
      <h4 className="fw-bold fs-5">
        {props.name} <span><CheckCircle size={32} color="green"/></span>
      </h4>
    </div>
  )
}

export default CheckBar;