import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'

import ProgressStep from 'components/ProgressStep'
import 'components/DutchProgressBar.scss'

function DutchProgressBar(props) {
  const steps = [
    "Basic info",
    "Bills",
    "Get result"
  ]

  return (
    <Container id="progress-bar" fluid>
      <ProgressBar now={(props.currentStep - 1) * 100 / (steps.length - 1)} />
      <Row>
        { steps.map((step, i) => (
          <Col key={i+step} xs={12 / steps.length}>
            <ProgressStep step={i + 1} title={step} completed={(i + 1 < props.currentStep) || (props.currentStep === steps.length)} />
          </Col>
        )) }
      </Row>
    </Container>
  )
}

export default DutchProgressBar
