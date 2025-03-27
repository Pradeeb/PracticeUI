import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "./common/Config";

export default function ClientForm() {

    const [formData, setFormData] = useState({
        clientName: '',
        address: '',
        website: ''
    });

    const [clientAddress, setClientAddress] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingContact, setIsLoadingContact] = useState(false);
    const [successMessageContact, setSuccessMessageContact] = useState('');

    const [addressFormData, setAddressFormData] = useState({
        clientAddressid: '',
        contactPerson: '',
        designation: '',
        phoneNumber: '',
        mail: '',
        modeOfSale:'',
        remarks: '',
        lastContactDate: '',
        contactMode: '',
        followUpDate: '',
        clientType: '',
        otherRemarks: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleChangeContact = (e) => {
        const { name, value } = e.target;
        setAddressFormData({
            ...addressFormData,
            [name]: value
        });
    };

    const handleSubmitContact = async (e) => {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        if (!token) {
            console.log('No token found in localStorage');
            return;
        }
        e.preventDefault();
        console.log(addressFormData);

        setIsLoadingContact(true); // Start loading


        try {
            const response = await axios.post(API_URL+'/uploadclientcontact', addressFormData,
                {
                    headers: {
                        'Authorization': token // Include the token in the request headers
                    }
                }
            );
            console.log('Form submitted successfully:', response.data);

            // Clear the form fields
            setAddressFormData({
                clientAddressid: '',
                contactPerson: '',
                designation: '',
                phoneNumber: '',
                mail: '',
                modeOfSale:'',
                remarks: '',
                lastContactDate: '',
                contactMode: '',
                followUpDate: '',
                clientType: '',
                otherRemarks: ''
            });

            // Set the success message
            setSuccessMessageContact(response.data?.data);

            // Remove the success message after 5 seconds
            setTimeout(() => {
                setSuccessMessageContact('');
            }, 5000);

        } catch (error) {
            console.error('Error submitting the form:', error);
        } finally {
            setIsLoadingContact(false); // Stop loading
            fetchData();
        }
    };

    const handleSubmit = async (e) => {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        if (!token) {
            console.log('No token found in localStorage');
            return;
        }
        e.preventDefault();
        console.log(formData);

        setIsLoading(true); // Start loading


        try {
            const response = await axios.post(API_URL+'/updateclientaddress', formData,
                {
                    headers: {
                        'Authorization': token // Include the token in the request headers
                    }
                }
            );
            console.log('Form submitted successfully:', response.data);

            // Clear the form fields
            setFormData({
                clientName: '',
                address: '',
                website: ''
            });

            // Set the success message
            setSuccessMessage(response.data?.data);

            // Remove the success message after 5 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);

        } catch (error) {
            console.error('Error submitting the form:', error);
        } finally {
            setIsLoading(false); // Stop loading
            fetchData();
        }
    };


    const fetchData = async () => {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        if (!token) {
            console.log('No token found in localStorage');
            return;
        }

        try {
            const addressGet = await axios.get(API_URL+'/form',
                {
                    headers: {
                        'Authorization': token // Include the token in the request headers
                    }
                }
            );
            console.log('Data received from backend:', addressGet.data?.data);
            if (Array.isArray(addressGet.data?.data)) {
                setClientAddress(addressGet.data.data);
            } else {
                console.log('Received data is not an array:', addressGet.data?.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="bg-white mt-3 mx-6 rounded-lg pb-10 p-2 border-2  border-sky-200  flex flex-col md:flex-row">

                <div className=" lg:w-1/2 md:w-full rounded-l p-1 lg:mx-5">
                    <div>
                        <p className="text-2xl font-bold mb-4 text-blue-500">Client contact</p>
                        {successMessageContact && (
                            <div className="my-4 text-green-500 text-lg font-bold ">
                                {successMessageContact}
                            </div>
                        )}
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmitContact} className="bg-white p-6 rounded-lg shadow-2xl">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Client Type
                                </label>
                                <select
                                    name="clientAddressid"
                                    value={addressFormData.clientAddressid}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                >
                                    <option value="" disabled>Select Client Type</option>
                                    {Array.isArray(clientAddress) ? (
                                        clientAddress.map((item) => (
                                            <option key={item.id} value={item.id}>
                                                {item.clientName}
                                            </option>
                                        ))
                                    ) : (
                                        <option value="" disabled>No client addresses available</option>
                                    )}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Contact Person
                                </label>
                                <input
                                    type="text"
                                    name="contactPerson"
                                    value={addressFormData.contactPerson}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Contact Person"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Designation
                                </label>
                                <input
                                    type="text"
                                    name="designation"
                                    value={addressFormData.designation}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Designation"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Mobile
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="phoneNumber"
                                    value={addressFormData.phoneNumber}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Mobile"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="mail"
                                    value={addressFormData.mail}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                 Mode Of Sale
                                </label>
                                <input
                                    type="text"
                                    name="modeOfSale"
                                    value={addressFormData.modeOfSale}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder=" Mode Of Sale"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    E-Book Remarks
                                </label>
                                <input
                                    type="text"
                                    name="remarks"
                                    value={addressFormData.remarks}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="E-Book Remarks"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Print Remarks
                                </label>
                                <input
                                    type="text"
                                    name="otherRemarks"
                                    value={addressFormData.remarks}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Print Remarks"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Last Contact Date
                                </label>
                                <input
                                    type="date"
                                    id="name"
                                    name="lastContactDate"
                                    value={addressFormData.lastContactDate}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Last Contact Date"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Contact Mode
                                </label>
                                <input
                                    type="text"
                                    name="contactMode"
                                    value={addressFormData.contactMode}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder=" Contact Mode"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Follow Up Date
                                </label>
                                <input
                                    type="date"
                                    name="followUpDate"
                                    value={addressFormData.followUpDate}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Follow Up Date"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    CLient Type
                                </label>
                                <select
                                    name="clientType"
                                    value={addressFormData.clientType}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                >
                                    <option value="" disabled>Select Client Type</option>
                                    <option value="new">New</option>
                                    <option value="existing">Existing</option>
                                </select>
                            </div>
                            {/* <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Other Remarks
                                </label>
                                <textarea
                                    id="message"
                                    name="otherRemarks"
                                    value={addressFormData.otherRemarks}
                                    onChange={handleChangeContact}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Other Remarks"
                                    rows="4"
                                />
                            </div> */}

                            <div className="flex items-center justify-between">
                            <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    disabled={isLoadingContact}
                                >
                                    {isLoadingContact ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
                {/* RIGHT */}
                <div className="lg:w-1/2 md:w-full rounded-l p-1 lg:mx-5">
                    <div>
                        <p className="text-2xl font-bold mb-4 text-blue-500">Client name & address</p>
                        {successMessage && (
                            <div className="my-4 text-green-500 text-lg font-bold ">
                                {successMessage}
                            </div>
                        )}
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-2xl">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Client Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="clientName"
                                    value={formData.clientName}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Client Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Address"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
                                    Website URL
                                </label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Website URL"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
