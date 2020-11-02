import React, { useState } from 'react'
import { Container, Button, Toast } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import NewBillForm from 'components/NewBillForm'
import BillsTable from 'components/BillsTable'

import 'components/DutchToast.scss'

function BillsInfo(props) {
  const [bills, setBills] = useState([])
  const [toastShow, setToastShow] = useState(false)

  const handleNextButtonClicked = () => {
    if (props.bills.length === 0 && (!bills || bills.length === 0)) {
      setToastShow(true)
      return
    }

    setToastShow(false)
    if (props.onSubmitSucceeded) {
      props.onSubmitSucceeded(defaultBillExists() ? props.bills : bills);
    }
  }

  const addBill = (bill) => {
    const newBills = defaultBillExists() ? props.bills.concat(bill) : [...bills, bill]

    setBills(newBills)
    if (props.onBillUpdated) {
      props.onBillUpdated(newBills)
    }
  }

  const deleteBill = (billToDelete) => {
    const billList = defaultBillExists() ? props.bills : bills;
    const deletedBills = billList.filter((bill) => bill.id !== billToDelete.id)

    setBills(deletedBills)
    if (props.onBillUpdated) {
      props.onBillUpdated(deletedBills)
    }
  }

  function defaultBillExists() {
      return (bills.length === 0 && props.bills.length > 0)
  }

  return props.display && (
    <Container fluid className="steps-container">
      <h2 className="step-title-header">Bill information</h2>

      <NewBillForm onSubmitSucceeded={addBill}
                   peopleNames={props.peopleNames}
                   currencySymbol={props.currencySymbol} />

      <BillsTable onBillDeletionClicked={deleteBill}
                  bills={(bills.length === 0) ? props.bills : bills}
                  currencySymbol={props.currencySymbol}
                  actionsShow={true} />

      <div style={{ position: 'relative '}}>
        <Button className="next-button" onClick={handleNextButtonClicked}>
          Next <FontAwesomeIcon icon={faArrowRight}/>
        </Button>
      </div>

      <div className="toast-container">
          <Toast onClose={() => setToastShow(false)} className='error-toast' show={toastShow} delay={3000} autohide>
            <Toast.Header>
              <FontAwesomeIcon icon={faExclamationTriangle} className="rounded mr-2"/>
              <strong className="mr-auto">Error occurred</strong>
            </Toast.Header>
            <Toast.Body>There should be at least 1 bill entered</Toast.Body>
          </Toast>
      </div>
    </Container>
  )
}

export default BillsInfo;
