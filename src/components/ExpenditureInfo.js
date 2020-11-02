import React, { useState } from 'react'
import { Container, Form, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faMoneyCheckAlt, faArrowRight, faDollarSign } from '@fortawesome/free-solid-svg-icons'

import 'components/ExpenditureInfo.scss'

function ExpenditureInfo(props) {
  const currencies = ['$', '₩', '€', '£'];

  const [validated, setValidated] = useState(false);
  const [info, setInfo] = useState({
    title: '',
    peopleNames: '',
    currency: currencies[0],
  });

  function handleInputChange(event) {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    })
  }

  function handleCurrencyChange(value) {
    setInfo({
      ...info,
      currency: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    event.stopPropagation()

    const form = event.currentTarget
    const validated = form.checkValidity()
    setValidated(true)

    if (info.title === '' && info.peopleNames === '' &&
        props.expenditureInfo.title !== '' &&
        props.expenditureInfo.peopleNames.length > 0) {
      if (props.onSubmitSucceeded) {
        props.onSubmitSucceeded({
          title: props.expenditureInfo.title,
          peopleNames: props.expenditureInfo.peopleNames.join(", "),
          currency: props.expenditureInfo.currency
        })
      }
    }

    else if (validated) {
      // window.dutch = { currency: currencies.filter(c => c === info.currency)[0] }
      if (props.onSubmitSucceeded) {
        props.onSubmitSucceeded(info)
      }
    }
  }

  return props.display && (
    <Container fluid className="steps-container">
      <h2 className="step-title-header">Expenditure information</h2>

      <Form noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{ position: 'relative' }}>
        <Form.Group controlId="title">
          <Form.Label><FontAwesomeIcon icon={faMoneyCheckAlt} /> What is bills about you want to split?</Form.Label>
          <Form.Control name="title"
                        required
                        type="text"
                        placeholder="2020 Vancouver trip!"
                        defaultValue={props.expenditureInfo.title}
                        onChange={handleInputChange} />
        </Form.Group>

        <Form.Group controlId="group-members">
          <Form.Label><FontAwesomeIcon icon={faUsers} /> Who do you want to split with?</Form.Label>
          <Form.Control required
                        name="peopleNames"
                        type="text"
                        placeholder="Aree, Tomas, Jessica"
                        defaultValue={props.expenditureInfo.peopleNames.join(", ")}
                        onChange={handleInputChange} />
          <Form.Text>Enter the names of people separating with comma (,)</Form.Text>
        </Form.Group>

        <Form.Group controlId="currency">
          <Form.Label><FontAwesomeIcon icon={faDollarSign} /> Select the currency</Form.Label>
          <br/>
          <ToggleButtonGroup id="currency-button-group" type="radio" name="currency" defaultValue={props.expenditureInfo.currency || info.currency} onChange={handleCurrencyChange}>
            { currencies.map((currency, _) =>
                <ToggleButton value={currency} key={currency}>{currency}</ToggleButton>)}
          </ToggleButtonGroup>

        </Form.Group>

        <Button className="next-button" type="submit">
          Next <FontAwesomeIcon icon={faArrowRight}/>
        </Button>
      </Form>
    </Container>
  )
}

export default ExpenditureInfo;
