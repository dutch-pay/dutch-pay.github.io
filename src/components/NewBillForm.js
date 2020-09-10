import React, { useState } from 'react'
import { Form, Button, Col, Card, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faStore, faUser, faArrowDown, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

import 'components/NewBillForm.scss'

function NewBillForm(props) {
  const [validated, setValidated] = useState(false);
  const [billInfo, setBillInfo] = useState({
    billDate: '',
    billName: '',
    billAmount: 0,
    billPayer: '',
    id: '',
  });

  const handleInputChange = (event) => {
    setBillInfo({
      ...billInfo,
      [event.target.name]: event.target.valueAsNumber || event.target.value,
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const form = event.currentTarget
    const validated = form.checkValidity()
    setValidated(true)

    if (validated && props.onSubmitSucceeded) {
      setBillInfo({
        ...billInfo,
        billAmount: billInfo.billAmount,
        id: `${billInfo.billName}_${new Date().toJSON()}`
      })
      props.onSubmitSucceeded(billInfo)
      form.reset()
      setValidated(false)
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Add new bill</Card.Title>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Col xs={12} md={5}>
              <Form.Group controlId="billDate">
                <Form.Label><FontAwesomeIcon icon={faCalendarAlt} /> Bill date</Form.Label>
                <Form.Control name="billDate"  type="date" onChange={handleInputChange} />
              </Form.Group>
            </Col>

            <Col xs={12} md={7}>
              <Form.Group  controlId="billName">
                <Form.Label><FontAwesomeIcon icon={faStore} /> Description</Form.Label>
                <Form.Control required name="billName" type="text" onChange={handleInputChange} />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col xs={12} md={5}>
              <Form.Group controlId="billAmount">
                <Form.Label><FontAwesomeIcon icon={faMoneyBillWave} /> Amount</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>{props.currencySymbol}</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control required name="billAmount" type="number" onChange={handleInputChange} />
                </InputGroup>
              </Form.Group>
            </Col>

            <Col xs={12} md={7}>
              <Form.Group controlId="billPayer">
                <Form.Label><FontAwesomeIcon icon={faUser} /> Payer</Form.Label>
                <Form.Control required name="billPayer" as="select" onChange={handleInputChange}>
                  <option></option>
                  { props.peopleNames.map(name => <option key={name}>{name}</option>) }
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Button className="add-button" type="submit">
            Add <FontAwesomeIcon icon={faArrowDown}/>
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
export default NewBillForm;
