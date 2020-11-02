import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import 'components/ProgressStep.scss'

function ProgressStep(props) {
  return (
    <div className="progress-step">
      <div className="title"><span>{props.title}</span></div>
      <div className={`step rounded-circle ${props.completed ? 'completed-step': ''}`}>
      { props.completed ?
          <FontAwesomeIcon icon={faCheck}
                           className="checked"
                           alt="checked"/> :
          <span className="number">{props.step}</span>
      }
      </div>
    </div>
  );
}
export default ProgressStep;
