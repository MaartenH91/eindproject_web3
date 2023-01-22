import React, {useEffect, useState} from "react";
import { useFormik} from "formik";
import axios from "axios";
import {Button} from 'react-bootstrap';
import {useParams} from "react-router-dom";

const initialValuesForm = {
    firstName: '',
    lastName: '',
    street: '',
    number: '',
    postalCode: '',
    city: '',
    telephone: '',
    email: '',

}

const ConfirmForm = (props) => {
    const{listProducts} = props
    const formik = useFormik({
        initialValues: initialValuesForm,

        onSubmit: (values => {
            axios.post('/confirmation', values)
                .then((response)=> {
                    console.log("Order confirmed")
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log(JSON.stringify(values, null, 2))
        })

    })

    return (
                <fieldset className={"container"} id={"confirmUser"}>
                    <legend>User details</legend>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor={"firstName"}>Name: </label><br/>
                            <input
                                id={"firstName"}
                                name={"firstName"}
                                type={"text"}
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                placeholder={"First name"}
                            />
                            <input
                                id={"lastName"}
                                name={"lastName"}
                                type={"text"}
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                placeholder={"Last name"}
                            />
                        </div>
                        <div>
                            <label htmlFor={"street"}>Adres: </label><br/>
                            <input
                                id={"street"}
                                name={"street"}
                                type={"text"}
                                onChange={formik.handleChange}
                                value={formik.values.street}
                                placeholder={"Street"}
                            />
                            <input
                                id={"number"}
                                name={"number"}
                                type={"number"}
                                onChange={formik.handleChange}
                                value={formik.values.number}
                                placeholder={"Nr."}
                            /><br/>
                            <input
                                id={"postalCode"}
                                name={"postalCode"}
                                type={"number"}
                                onChange={formik.handleChange}
                                value={formik.values.postalCode}
                                min={"1000"}
                                max={"9999"}
                                placeholder={"Postal code"}
                            />
                            <input
                                id={"city"}
                                name={"city"}
                                type={"text"}
                                onChange={formik.handleChange}
                                value={formik.values.city}
                                placeholder={"City"}
                            />
                        </div>
                        <div>
                            <label htmlFor={"Contact"}>Contact</label><br/>
                            <input
                                id={"telephone"}
                                name={"telephone"}
                                type={"text"}
                                onChange={formik.handleChange}
                                value={formik.values.telephone}
                                placeholder={"Phone"}
                            />
                            <input
                                id={"email"}
                                name={"email"}
                                type={"email"}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder={"E-mail"}
                            />
                        </div>
                        <Button id={"confirmButton"} variant={"dark"} type={"submit"}>
                            Confirm order
                        </Button>
                    </form>
                </fieldset>
    )}

export default ConfirmForm;

