import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import 'components/BillsTable.scss'

function BillsTable(props) {
  const columnNames = [
    'Payer',
    'Amount',
    'Description',
    'Date',
    'Actions'
  ]
  if (!props.actionsShow) {
    columnNames.pop()
  }

  return (
    <Table responsive={props.responsive}
           className={`${props.additionalClassName} bill-table mt-4`}>
      <thead>
        <tr>
          <th>#</th>
          { columnNames.map((columnName, _) => (
            <th key={columnName}>{columnName}</th>
          )) }
        </tr>
      </thead>
      <tbody>
      { props.bills.map((bill, index) => (
        <tr key={bill.id}>
          <td>{index + 1}</td>
          <td>{bill.billPayer}</td>
          <td>{props.currencySymbol} {bill.billAmount.toLocaleString()}</td>
          <td>{bill.billName}</td>
          <td>{bill.billDate}</td>
          { props.actionsShow &&
            <td>
              <Button variant="link"
                      className="p-0"
                      onClick={() => props.onBillDeletionClicked(bill)}>
                <FontAwesomeIcon icon={faTrashAlt}/>
              </Button>
            </td>
          }
        </tr>
      )) }
      </tbody>
    </Table>
  )
}
BillsTable.defaultProps = {
  actionsShow: true,
  responsive: true,
  additionalClassName: '',
  currencySymbol: '$',
  bills: [],
}
export default BillsTable;
