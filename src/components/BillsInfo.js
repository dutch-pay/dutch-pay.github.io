import React, { useState } from 'react'
import { Container, Button, Toast } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import NewBillForm from 'components/NewBillForm'
import BillsTable from 'components/BillsTable'

import 'components/DutchToast.scss'

function BillsInfo(props) {
  const [bills, setBills] = useState([])
  const [toastShow, setToastShow] = useState(false)

  const handleNextButtonClicked = () => {
    if (!bills || bills.length === 0) {
      setToastShow(true)
      return
    }
    setToastShow(false)
    if (props.onSubmitSucceeded) {
      props.onSubmitSucceeded(bills);
    }
  }

  const addBill = (bill) => {
    setBills([...bills, bill])
  }

  const deleteBill = (billToDelete) => {
    const deletedBills = bills.filter((bill) => bill.id !== billToDelete.id)
    setBills(deletedBills)
  }

  return props.display && (
    <Container fluid className="steps-container">
      <h2 className="step-title-header">Bill information</h2>

      <NewBillForm onSubmitSucceeded={addBill} peopleNames={props.peopleNames} />

      <BillsTable onBillDeletionClicked={deleteBill} bills={bills} actionsShow={true} />

      <div style={{ position: 'relative '}}>
        <Button className="next-button" onClick={handleNextButtonClicked}>
          Next <FontAwesomeIcon icon={faArrowRight}/>
        </Button>
      </div>

      <div className="toast-container">
          <Toast onClose={() => setToastShow(false)} className='error-toast' show={toastShow} delay={3000} autohide>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
              <strong className="mr-auto">Error occurred</strong>
            </Toast.Header>
            <Toast.Body>There should be at least 1 bill entered</Toast.Body>
          </Toast>
      </div>
    </Container>
  )
}

export default BillsInfo;
