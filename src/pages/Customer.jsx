import Table from './../components/table/Table';

import customerList from '../assets/JsonData/customers-list.json';

const customerTableHeader = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spends',
    'location',
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
);

const Customer = () => {
    return (
        <div>
            <h2 className='page-header'>Customers</h2>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <Table
                                limit={10}
                                headData={customerTableHeader}
                                bodyData={customerList}
                                renderHead={(item, index) =>
                                    renderHead(item, index)
                                }
                                renderBody={(item, index) =>
                                    renderBody(item, index)
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;
