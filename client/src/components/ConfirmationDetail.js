import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const ConfirmationDetail = () => {
    let {index} = useParams()
    const [order, setOrder] = useState(null)
    useEffect(()=>{
        axios.get('/confirmation')
            .then((response) => {
                console.log(response.data)
                setOrder(response.data[index])
            })
    },[])
    return (
        order ?
        <>
            <h2>Details for order - {order.id}</h2>
            <h4>Gebruiker</h4>
            <p>{order.lastName} {order.firstName}</p>
            <p>{order.street} {order.number},</p>
            <p>{order.postalCode} {order.city}</p>
            <p>{order.email}</p>

            <h4>Winkelmandje</h4>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        {order.qty} x
                    </div>
                    <div className="col-6">
                        {order.name}
                    </div>
                    <div className="col">
                        {order.price}
                    </div>
                </div>
            </div>
            <h4>Totale prijs: €{order.totalPrice}</h4>

        </>
            :
            <p><small>Loading ...</small></p>
    )
}

export default ConfirmationDetail;