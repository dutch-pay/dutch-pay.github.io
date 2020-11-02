import React, { useState, Component, setState } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { lwz, lzma } from 'json-url'

import 'components/DutchForm.scss'
import DutchProgressBar from 'components/DutchProgressBar'
import ExpenditureInfo from 'components/ExpenditureInfo'
import BillsInfo from 'components/BillsInfo'
import Settlement from 'components/Settlement'

const codec = require('json-url')('lzma')

class DutchForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      expenditureInfo: {
        title: '',
        peopleNames: [''],
        currency: ''
      },
      bills: [
        // {id: null, billAmount: 0, billPayer: '', billName: '', billDate: ''}
      ],
      currentStep: 1,
      expenditureInfoDisplayed: true,
      billsInfoDisplayed: false,
      resultDisplayed: false
    }

    this.afterStep1Submitted = this.afterStep1Submitted.bind(this)
    this.afterStep2Submitted = this.afterStep2Submitted.bind(this)
    this.updateBillInfo      = this.updateBillInfo.bind(this)
    this.generateURL         = this.generateURL.bind(this)
  }

  componentDidMount() {
    codec.decompress(this.props.compressedURL)
      .then(json => this.setState(json))
  }

  generateURL() {
    codec.compress(this.state)
      .then(compressedURL => {
        var newURL = window.location.origin + window.location.pathname + '?c=' + compressedURL

        var $text = document.createElement("input")
        $text.value = newURL
        document.body.appendChild($text)
        $text.select()
        $text.setSelectionRange(0, 99999) /* For mobile devices */
        document.execCommand("copy")
        document.body.removeChild($text)
        alert("URL copied!\nShare to your group and they can see all the contents that you just entered")
      })
  }

  afterStep1Submitted(info) {
    this.setState({
      expenditureInfo: {
        title: info.title,
        peopleNames: info.peopleNames.split(",").map(name => name.trim()),
        currency: info.currency
      },
      currentStep: 2,
      expenditureInfoDisplayed: false,
      billsInfoDisplayed: true
    })
  }

  updateBillInfo(bills) {
    this.setState({
      bills: bills
    })
  }

  afterStep2Submitted(bills) {
    this.setState({
      bills: bills,
      currentStep: 3,
      billsInfoDisplayed: false,
      resultDisplayed: true
    })
  }

  render() {
    return (
      <div id="dutch-form">

        <DutchProgressBar currentStep={this.state.currentStep} />

        <ExpenditureInfo display={this.state.expenditureInfoDisplayed}
                         expenditureInfo={this.state.expenditureInfo}
                         onSubmitSucceeded={this.afterStep1Submitted} />

        <BillsInfo display={this.state.billsInfoDisplayed}
                   bills={this.state.bills}
                   onBillUpdated={this.updateBillInfo}
                   onSubmitSucceeded={this.afterStep2Submitted}
                   currencySymbol={this.state.expenditureInfo.currency}
                   peopleNames={this.state.expenditureInfo.peopleNames} />

        <Settlement display={this.state.resultDisplayed}
                    expenditureInfo={this.state.expenditureInfo}
                    currencySymbol={this.state.expenditureInfo.currency}
                    bills={this.state.bills} />

        <div id="share-area">
          <Button id="share-btn" onClick={this.generateURL}>
            <FontAwesomeIcon icon={faShareAlt}/>
          </Button>
          <br/>
        </div>
      </div>
    )
  }
}

export default DutchForm;
