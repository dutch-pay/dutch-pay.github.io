import React, { useState } from 'react'

import 'components/DutchForm.scss'
import DutchProgressBar from 'components/DutchProgressBar'
import ExpenditureInfo from 'components/ExpenditureInfo'
import BillsInfo from 'components/BillsInfo'
import Settlement from 'components/Settlement'


function DutchForm() {

  const [expenditureInfo, setExpenditureInfo] = useState({
    title: '',
    peopleNames: [''],
    currency: ''
  })

  const [bills, setBills] = useState([
    {id: null, billAmount: 0, billPayer: '', billName: '', billDate: ''}
  ])

  const [currentStep, setCurrentStep] = useState(1)
  /* step 1 */
  const [expenditureInfoDisplayed, displayExpenditureInfo] = useState(true)
  /* step 2 */
  const [billsInfoDisplayed, displayBillsInfo] = useState(false)
  /* step 3 */
  const [resultDisplayed, displayResult] = useState(false)

  const afterStep1Submitted = (info) => {
    setExpenditureInfo({
      title: info.title,
      peopleNames: info.peopleNames.split(",").map(name => name.trim()),
      currency: info.currency
    })

    setCurrentStep(2)
    displayExpenditureInfo(false)
    displayBillsInfo(true)
  }

  const afterStep2Submitted = (bills) => {
    setBills(bills)

    setCurrentStep(3)
    displayBillsInfo(false)
    displayResult(true)

    setCurrentStep(3)
  }

  return (
    <div id="dutch-form">

      <DutchProgressBar currentStep={currentStep} />

      <ExpenditureInfo display={expenditureInfoDisplayed} onSubmitSucceeded={afterStep1Submitted} />

      <BillsInfo display={billsInfoDisplayed}
                 onSubmitSucceeded={afterStep2Submitted}
                 currencySymbol={expenditureInfo.currency}
                 peopleNames={expenditureInfo.peopleNames} />

      <Settlement display={resultDisplayed}
                  expenditureInfo={expenditureInfo}
                  currencySymbol={expenditureInfo.currency}
                  bills={bills} />

    </div>
  )
}

export default DutchForm;
