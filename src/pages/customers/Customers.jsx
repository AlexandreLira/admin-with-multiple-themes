import React from 'react';

import Table from '../../components/table/Table';
import customerList from '../../assets/JsonData/customers-list.json';

const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_spend}</td>
        <td>{item.total_orders}</td>
        <td>{item.location}</td>
    </tr>
)

const Customers = () => {
    return(
        <section className="customers">
            <h2 className="page-header">
                Customers
            </h2>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card_body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customers;