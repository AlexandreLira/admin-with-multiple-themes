import React from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import statusCards from '../../assets/JsonData/status-card-data.json';
import StatusCard from '../../components/status-card/StatusCard';
import Table from '../../components/table/Table';
import Badge from '../../components/badge/Badge';
import { useSelector } from 'react-redux';

const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40, 70, 20, 90, 36, 80, 91, 60]
    },{
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep']
        },
        legend: {
            position: 'top',
        },
        grid: {
            show: false
        }
    }
}


const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            username: "john doe",
            order: 490,
            price: 15870
        },
        {
            username: "frank iva",
            order: 250,
            price: 12251
        },
        {
            username: "anthony baker",
            order: 120,
            price: 10840
        },
        {
            username: "frank iva",
            order: 110,
            price: 8840
        },
        {
            username: "anthony baker",
            order: 80,
            price: 8840
        },
    ]
}

const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCustomerbody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const lastestOrders = {
    head: [
        'order id',
        'user',
        'total price',
        'date',
        'status'
    ],
    body: [
        {
            id: '#OD1711',
            user: 'john doe',
            date: '17 jun 2021',
            price: '$900',
            status: 'shipping'
        },
        {
            id: '#OD1711',
            user: 'john doe',
            date: '17 jun 2021',
            price: '$900',
            status: 'paid'
        },
        {
            id: '#OD1711',
            user: 'john doe',
            date: '17 jun 2021',
            price: '$900',
            status: 'refund'
        },
        {
            id: '#OD1711',
            user: 'john doe',
            date: '17 jun 2021',
            price: '$900',
            status: 'pending'
        },
        {
            id: '#OD1711',
            user: 'john doe',
            date: '17 jun 2021',
            price: '$900',
            status: 'shipping'
        },
    ]
}

const orderStatus = {
    shipping: 'primary',
    pending: 'warning',
    paid: 'success',
    refund: 'danger'
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderbody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.date}</td>
        <td>{item.price}</td>
        <td>
            <Badge
                type={orderStatus[item.status]}
                content={item.status}
            />
        </td>
    </tr>
)

const Dashboard = () => {
    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return(
        <section className="dashboard">
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    {/* status card here */}
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                           options={themeReducer === 'theme-mode-dark' ? {
                            ...chartOptions.options,
                            theme: { mode: 'dark'}
                        } : {
                            ...chartOptions.options,
                            theme: { mode: 'light'}
                        }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <div className="card_header">
                            <h3>Top customers</h3>
                        </div>

                        <div className="card_body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCustomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCustomerbody(item, index)}
                            />
                        </div>

                        <div className="card_footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="card">
                        <div className="card_header">
                            <h3>Lastest orders</h3>
                        </div>

                        <div className="card_body">
                            <Table
                                headData={lastestOrders.head}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={lastestOrders.body}
                                renderBody={(item, index) => renderOrderbody(item, index)}
                            />
                        </div>

                        <div className="card_footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;