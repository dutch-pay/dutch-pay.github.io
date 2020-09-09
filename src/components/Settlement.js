import React, { useState }from 'react'
import { Container, Button, Card, Row, Col, Table, Toast } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPaperPlane, faCopy, faDownload, faSpinner, faRedo } from '@fortawesome/free-solid-svg-icons'
import { toJpeg } from 'html-to-image'

import BillsTable from 'components/BillsTable'
import 'components/Settlement.scss'
import 'components/DutchToast.scss'

function Settlement(props) {
  const [downloading,       setDownloading]       = useState(false)
  const [copiedToastShow,   setCopiedToastShow]   = useState(false)
  const [downloadToastShow, setDownloadToastShow] = useState(false)

  if (!props.bills) {
      return <div>No bills entered</div>
  }

  const expenditure    = props.expenditureInfo
  const bills          = props.bills
  const sum            = bills.flatMap(b => b.billAmount)
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

  const transactionToString = transactions.flatMap(a => `${a.sender}->${a.receiver} : ${a.amount}`)
                                          .join(", ")

  function copyToClipboard() {
    const $copyText = document.querySelector("#transaction-plain-string")
    $copyText.select()
    $copyText.setSelectionRange(0, 99999) /*For mobile devices*/
    document.execCommand("copy")

    setCopiedToastShow(true)
  }

  function download() {
    setDownloading(true)

    toJpeg(document.getElementById('report'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a')
        link.download = `${expenditure.title.split(' ').join('_')}.jpeg`;
        link.href = dataUrl
        link.click()
      });

    setDownloading(false)
    setDownloadToastShow(true)
  }

  return props.display && (
    <Container fluid className="steps-container">
      <div className="report-container">
        <div id="report">

          <h2 className="step-title-header">Settlement</h2>

          <Card>
            <Card.Body>
              <Card.Title>{expenditure.title}</Card.Title>
              <Card.Subtitle> with {expenditure.peopleNames.join(', ')}</Card.Subtitle>

              <Card.Text>
                Sum of all bills: <b>${sum}</b><br/>
                Cost of each person: <b>${amountByPerson}</b>
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>

          <h3>Bill list</h3>
          <BillsTable bills={bills} actionsShow={false} responsive={false} />

          <Card>
            <Card.Body>
              <Card.Title>Minimum transaction</Card.Title>

              <Table borderless responsive size="sm">
                <tbody>
                {transactions.map((transaction, index) =>
                  <tr key={`transaction-row-${index}`}>
                    <td><FontAwesomeIcon icon={faPaperPlane} /></td>
                    <td>{transaction.sender}</td>
                    <td><FontAwesomeIcon icon={faArrowRight} /></td>
                    <td>{transaction.receiver}</td>
                    <td>:</td>
                    <td>${Math.round(transaction.amount * 10) / 10}</td>
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
          <Button className="action-button" onClick={copyToClipboard}>
            <FontAwesomeIcon icon={faCopy}/>&nbsp;Copy to clipboard
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <Button className="action-button" onClick={download}>
           { downloading ?
            <FontAwesomeIcon icon={faSpinner} spin /> :
            <FontAwesomeIcon icon={faDownload}/> }
            &nbsp;
           { downloading ? 'Downloading' : 'Download' }
          </Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={{ span: 8, offset: 2 }}>
          <a className="text-center d-block" href="/"><FontAwesomeIcon icon={faRedo}/>&nbsp;Begin new dutch pay</a>
        </Col>
      </Row>

      <input readOnly className="d-none" id="transaction-plain-string" value={transactionToString} />

      <div className="toast-container">
        <Toast onClose={() => {setCopiedToastShow(false)}} show={copiedToastShow} className='success-toast'delay={3000} autohide>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
            <strong className="mr-auto">Copied to clipboard!</strong>
          </Toast.Header>
          <Toast.Body>{ transactionToString }</Toast.Body>
        </Toast>

        <Toast onClose={() => {setDownloadToastShow(false)}} show={downloadToastShow} className='success-toast' delay={3000} autohide>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
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
  expenditureInfo: {title: '', peopleNames: ['']},
  bills: [{billDate: '', billName: '', billAmount: 0, billPayer: ''}]
}
// rename to settlement
