import React, { useState, useRef }from 'react'
import { Container, Button, Card, Row, Col, Table, Toast } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faExclamationTriangle, faPaperPlane, faCopy, faDownload, faSpinner, faRedo } from '@fortawesome/free-solid-svg-icons'
import domtoimage from 'dom-to-image'

import BillsTable from 'components/BillsTable'
import 'components/Settlement.scss'
import 'components/DutchToast.scss'

function Settlement(props) {
  const reportElem = useRef(null);
  const settlementTableElem = useRef(null);

  const [downloading,       setDownloading]       = useState(false)
  const [copiedToastShow,   setCopiedToastShow]   = useState(false)
  const [downloadToastShow, setDownloadToastShow] = useState(false)

  if (!props.bills) {
      return <div>No bills entered</div>
  }

  const expenditure    = props.expenditureInfo
  const bills          = props.bills
  const sum            = bills.length === 0 ? 0 :
                          bills.flatMap(b => b.billAmount)
                               .reduce((a,b) => parseInt(a) + parseInt(b))
  const amountByPerson = sum / expenditure.peopleNames.length

  const debtByPerson = (() => {
    var debt = {}
    expenditure.peopleNames.forEach(name =>
      debt[name] = amountByPerson)
    bills.forEach(bill =>
      debt[bill.billPayer] = debt[bill.billPayer] - bill.billAmount)

    return Object.keys(debt).map(name => ({
      name: name,
      amount: debt[name]
    }))
  })()

  const transactions = ((debtByPerson) => {
    debtByPerson.sort((a, b) => a.amount - b.amount)
    const transactions = []

    for (var left = 0, right = debtByPerson.length - 1; left < right;) {

      const receiver = debtByPerson[left]
      const sender = debtByPerson[right]
      if (!receiver || !sender) {
        break;
      }
      const receiverAmount = receiver.amount
      const senderAmount = sender.amount

      if (receiverAmount + senderAmount < 0) {
        transactions.push({
          sender: sender.name,
          receiver: receiver.name,
          amount: senderAmount
        })

        debtByPerson[left].amount += senderAmount
        debtByPerson[right].amount -= senderAmount

        right -= 1
      }
      else if (receiverAmount + senderAmount > 0) {
        transactions.push({
          sender: sender.name,
          receiver: receiver.name,
          amount: Math.abs(receiverAmount)
        })

        debtByPerson[left].amount = 0
        debtByPerson[right].amount += receiverAmount

        left += 1
      }
      else {
        transactions.push({
          sender: sender.name,
          receiver: receiver.name,
          amount: senderAmount
        })

        debtByPerson[left].amount = 0
        debtByPerson[right].amount = 0

        left += 1
        right -= 1
      }
    }

    return transactions
  })(debtByPerson)

  const transactionToString = transactions.flatMap(a => `${a.sender}->${a.receiver} : ${Math.round(a.amount * 10) / 10}`)
                                          .join(", ")

  function copyToClipboard() {
    var $text = document.createElement("input")
    $text.value = transactionToString
    document.body.appendChild($text)
    $text.select()
    $text.setSelectionRange(0, 99999) /* For mobile devices */
    document.execCommand("copy")
    document.body.removeChild($text)

    setCopiedToastShow(true)
  }

  function download() {
    setDownloading(true)

    settlementTableElem.current.classList.add("bill-table-mobile")
    domtoimage.toPng(reportElem.current)
      .then(dataURL => {
        settlementTableElem.current.classList.remove("bill-table-mobile")

        var link = document.createElement("a")
        document.body.appendChild(link)
        link.download = `${expenditure.title.split(' ').join('_')}.jpeg`
        link.href = dataURL
        link.target = '_blank'
        link.click()
        document.body.removeChild(link)
      })

    setDownloading(false)
    setDownloadToastShow(true)
  }

  return props.display && (
    <Container fluid
               className="steps-container">
      <div className="report-container">
        <div ref={reportElem} id="report">
          <h2 className="step-title-header">Settlement</h2>

          <Card>
            <Card.Body>
              <Card.Title>{expenditure.title}</Card.Title>
              <Card.Subtitle> with {expenditure.peopleNames.join(', ')}</Card.Subtitle>

              <Card.Text>
                Sum of all bills: <b>{props.currencySymbol}{sum.toLocaleString()}</b><br/>
                Cost of each person: <b>{props.currencySymbol}{amountByPerson.toLocaleString()}</b>
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>

          <h3>Bill list</h3>
          <div ref={settlementTableElem}>
            <BillsTable bills={bills}
                        currencySymbol={props.currencySymbol}
                        actionsShow={false}
                        responsive={true} />
          </div>

          <Card border={'success'}>
            <Card.Body>
              <Card.Title>Minimum transaction</Card.Title>

              <Table id="transaction-table"
                     borderless
                     responsive
                     size="sm">
                <tbody>
                {transactions.map((transaction, index) =>
                  <tr key={`transaction-row-${index}`}>
                    <td><FontAwesomeIcon icon={faPaperPlane} /></td>
                    <td>{transaction.sender}</td>
                    <td><FontAwesomeIcon icon={faArrowRight} /></td>
                    <td>{transaction.receiver}</td>
                    <td>:</td>
                    <td>{props.currencySymbol}{(Math.round(transaction.amount * 10) / 10).toLocaleString()}</td>
                  </tr>
                )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Row className="mt-3">
        <Col xs={12} md={6}>
          <Button className="action-button"
                  onClick={copyToClipboard}>
            <FontAwesomeIcon icon={faCopy}/>&nbsp;Copy to clipboard
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <Button className="action-button"
                  onClick={download}>
           { downloading ?
            <FontAwesomeIcon icon={faSpinner} spin /> :
            <FontAwesomeIcon icon={faDownload}/> }
            &nbsp;
           { downloading ? 'Downloading' : 'Download the report' }
          </Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={{ span: 10, offset: 1 }}>
          <a className="text-center d-block" href="/">
            <FontAwesomeIcon icon={faRedo}/>&nbsp;Begin new dutch pay
          </a>
        </Col>
      </Row>

      <div className="toast-container">
        <Toast onClose={() => {setCopiedToastShow(false)}}
               show={copiedToastShow}
               className='success-toast'
               delay={3000}
               autohide>
          <Toast.Header>
            <FontAwesomeIcon icon={faExclamationTriangle}
                             className="rounded mr-2"/>
            <strong className="mr-auto">Copied to clipboard!</strong>
          </Toast.Header>
          <Toast.Body>{ transactionToString }</Toast.Body>
        </Toast>

        <Toast onClose={() => {setDownloadToastShow(false)}}
               show={downloadToastShow}
               className='success-toast'
               delay={3000}
               autohide>
          <Toast.Header>
            <FontAwesomeIcon icon={faExclamationTriangle}
                             className="rounded mr-2"/>
            <strong className="mr-auto">Download completed!</strong>
          </Toast.Header>
          <Toast.Body>Check the download folder.. :)</Toast.Body>
        </Toast>
      </div>
    </Container>
  )
}

export default Settlement;
Settlement.defaultProps = {
  currencySymbol: '$',
  expenditureInfo: {title: '', peopleNames: ['']},
  bills: [{billDate: '', billName: '', billAmount: 0, billPayer: ''}]
}
// rename to settlement
