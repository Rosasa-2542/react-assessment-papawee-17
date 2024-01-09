import React from 'react'
import Navbar from './Navbar'
import './styles.css'
import { useState, useEffect} from 'react'
import User from './User'
import Admin from './Admin'
import {mockEmployees} from './mockEmployees'

const Home= () => {
    const [employees, setEmployees] = useState();
    const [sector, setSector] = useState("");

    const handleUserbutton = () => {
        setSector("user");
    }
    const handleAdminbutton = () => {
        setSector("admin");
    }

    const getData = () => {
    setEmployees(mockEmployees)
    }
    useEffect (getData, [])

    return (
        <div>
           <Navbar />
            <h1>Generation</h1>
            <button onClick={handleUserbutton}>User Home sector</button>
            <button onClick={handleAdminbutton}>Admin Home sector</button>
            {sector === "user" ? <User employees = {employees}/> : null}
            {sector === "admin" ? <Admin employees = {employees}/> : null}
        </div> 
    );
}
export default Home