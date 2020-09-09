import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faMoneyCheckAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ExpenditureInfo(props) {
  const [validated, setValidated] = useState(false);
  const [info, setInfo] = useState({
    title: '',
    peopleNames: '',
  });

  const handleInputChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const form = event.currentTarget
    const validated = form.checkValidity()
    setValidated(true)

    if (validated) {
      if (props.onSubmitSucceeded) {
        props.onSubmitSucceeded(info)
      }
    }
  }

  return props.display && (
    <Container fluid className="steps-container">
      <h2 className="step-title-header">Expenditure information</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ position: 'relative' }}>
        <Form.Group controlId="title">
          <Form.Label><FontAwesomeIcon icon={faMoneyCheckAlt} /> What is bills about you want to split?</Form.Label>
          <Form.Control name="title" required type="text" placeholder="2020 Vancouver trip!" onChange={handleInputChange} />
        </Form.Group>

        <Form.Group controlId="group-members">
          <Form.Label><FontAwesomeIcon icon={faUsers} /> Who do you want to split with?</Form.Label>
          <Form.Control required name="peopleNames" type="text" placeholder="Aree, Tomas, Jessica" onChange={handleInputChange} />
          <Form.Text>Enter the names of people separating with comma (,)</Form.Text>
        </Form.Group>

        <Button className="next-button" type="submit">
          Next <FontAwesomeIcon icon={faArrowRight}/>
        </Button>
      </Form>
    </Container>
  )
}

export default ExpenditureInfo;
