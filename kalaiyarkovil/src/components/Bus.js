import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Bus.css';

export default function Bus() {
    const [busList, setBusList] = useState([]);
    const [location, setLocation] = useState("");

    function getBus() {
        async function fetchBusData() {
            try {
                const response = await axios.get(`http://localhost:8080/bus/to/${location}`);
                setBusList(response.data);
                console.log(busList)
            } catch (error) {
                console.error('Error fetching bus data:', error);
            }finally{
                setLocation("");
            }
        }

        if (location) {
            fetchBusData();
        }
       
    }

    return (
        <div className="busBody d-sm-flex justify-content-around">
            <div className="h2 mx-3 pt-3">Search bus</div>
            <div className="form-div border border-secondary rounded-5 m-4 bg-white">
                <input className="w-100 pt-4 border-bottom border-secondary" value="Kalaiyarkovil" readOnly /><br />
                <input className="w-100 pt-4 border-bottom border-secondary" name="To" onChange={(e) => setLocation(e.target.value)} placeholder="Enter To location here" />
                <button className="btn btn-primary w-50 rounded-3 mt-4" onClick={getBus}><i className="bi bi-search"></i> Search</button>
            </div>

                {busList.map(bus => (
                    <div  key={bus.id} id={`bus-${bus.id}`}  className="form-div border border-secondary rounded-5 m-4 bg-white">
                        <div>Bus Number: {bus.busNo}</div>
                        <div>Bus Type: {bus.busType}</div>
                        <div>From: {bus.fromLocation}</div>
                        <div>To: {bus.toLocation}</div>
                        <div>Time: {bus.time}</div>
                    </div>
                ))}
                      
                      
        </div>
    );
}
