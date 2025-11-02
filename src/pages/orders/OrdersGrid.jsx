import { Fragment } from "react";
import { OrderDetailsGrid } from "./OrdersDetailsGrid";
import { OrderHead } from "./OrdersHeader";


export function OrdersGrid({ orders, loadCart}) {
    return (
        <div className="orders-grid">
            {orders.map((order) => {
                return (
                    <div key={order.id} className="order-container">
                        <OrderHead order={order} loadCart={loadCart}/>
                        <OrderDetailsGrid order={order} loadCart={loadCart}/>
                    </div>
                );
            })}
        </div>
    );
}