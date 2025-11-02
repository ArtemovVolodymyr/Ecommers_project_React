import { useState, useEffect, } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header';
import { OrdersGrid } from './OrdersGrid';
import './OrdersPage.css'

export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrdersData = async () => {
            let response = await axios.get('/api/orders?expand=products')
            setOrders(response.data);
        };
        fetchOrdersData();
    }, []);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="../public/orders-favicon.png" />


            <Header cart={cart} />
            <title>Orders</title>

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} />
            </div>
        </>
    );
}