import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Confirmation = (props) => {
    const id = props
    const [apiOrders, setApiOrders] = useState([]);
    useEffect(()=>{
        axios.get('/confirmation')
            .then((response) => {
                setApiOrders(response.data)
            })
    }, [])
    return (
        <table width={"100%"} id={"confirmation-table"}>
            <thead>
                <tr id={"confirmation-header"}>
                    <th>Order ID</th>
                    <th>Name</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
            {
                apiOrders.map((apiOrder, index) =>{
                    return (
                        <>
                            <tr key={index} id={"confirmation-row"}>
                                <td>{apiOrder.id}</td>
                                <td>{apiOrder.lastName} {apiOrder.firstName}</td>
                                <Link to={`/confirmation/${index+1}`}>Details</Link>
                            </tr>
                        </>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default Confirmation