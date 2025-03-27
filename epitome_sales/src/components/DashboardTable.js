import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown, faEdit } from '@fortawesome/free-solid-svg-icons';
import './DashboardTable.css';
import { API_URL } from './common/Config';
import axios from 'axios';
import * as XLSX from 'xlsx'; // Import xlsx library

const DashboardTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const [editItem, setEditItem] = useState(null);
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); // State to track the selected row

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found in localStorage');
      return;
    }

    try {
      const response = await axios.get(API_URL + '/dashboard', {
        headers: {
          'Authorization': token,
        },
      });

      setData(response.data?.data?.ClientContact);
      console.log('client contact', response.data?.data?.ClientContact);
    } catch (error) {
      console.log('Error fetching dashboard data:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  

  const getNestedValue = (obj, key) => {
    return key.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        const aValue = getNestedValue(a, sortConfig.key) || '';
        const bValue = getNestedValue(b, sortConfig.key) || '';

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'asc'
            ? aValue.localeCompare(bValue, undefined, { sensitivity: 'base' })
            : bValue.localeCompare(aValue, undefined, { sensitivity: 'base' });
        } else {
          return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
        }
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? faSortUp : faSortDown;
    }
    return faSort;
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setEditItem((prevItem) => ({
      ...prevItem,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found in localStorage');
      return;
    }
    try {
      console.log('EDIT', editItem);
      const response = await axios.post(API_URL + '/updateclientcontact', editItem, {
        headers: {
          'Authorization': token,
        },
      });
      console.log('Form submitted successfully:', response.data);
      setEditItem(null);
      fetchData();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  const handleDownload = () => {
    const headings = [
      'ID', 'Client Name', 'Contact Person', 'Designation', 'Phone Number', 'Email', 'Remarks',
      'Last Contact Date', 'Contact Mode', 'Follow-Up Date', 'Client Type','Mode of Sale', 'Website', 'Address',
      'Other Remarks'
    ];
  
    const dataToExport = data.map(item => ({
      'ID': item.id,
      'Client Name': item.clientAddress.clientName,
      'Contact Person': item.contactPerson,
      'Designation': item.designation,
      'Phone Number': item.phoneNumber || 'N/A',
      'Email': item.mail,
      'Remarks': item.remarks,
      'Last Contact Date': formatDate(item.lastContactDate),
      'Contact Mode': item.contactMode,
      'Follow-Up Date': formatDate(item.followUpDate),
      'Client Type': item.clientType,
      'Mode of Sale':item.modeOfSale,
      'Website': item.clientAddress.website || 'N/A',
      'Address': item.clientAddress.address || 'N/A',
      'Other Remarks': item.otherRemarks,
    }));
  
    const ws = XLSX.utils.json_to_sheet(dataToExport, { header: headings });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'ClientContacts');
    XLSX.writeFile(wb, 'ClientContacts.xlsx');
  };

  return (
    <div className="bg-white mt-3 mx-6 rounded-lg tabledive pb-10 p-2 border-2 border-sky-200">
      <button onClick={handleDownload} className='font-bold bg-green-400 p-100 p-1 pb-2 mb-1 rounded-md hover:bg-amber-800 hover:text-white'>Download . . .</button>
      <div className='max-h-full overflow-scroll'>
        <table className='border-l-neutral-900 w-max'>
          <thead className='sticky top-0 bg-stone-700 text-white'>
            <tr>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('id')}>
                ID <FontAwesomeIcon icon={getSortIcon('id')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('clientAddress.clientName')}>
                Client Name <FontAwesomeIcon icon={getSortIcon('clientAddress.clientName')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('contactPerson')}>
                Contact Person <FontAwesomeIcon icon={getSortIcon('contactPerson')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('designation')}>
                Designation <FontAwesomeIcon icon={getSortIcon('designation')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('phoneNumber')}>
                Phone Number <FontAwesomeIcon icon={getSortIcon('phoneNumber')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('mail')}>
                Email <FontAwesomeIcon icon={getSortIcon('mail')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('modeOfSale')}>
                Mode of Sale <FontAwesomeIcon icon={getSortIcon('modeOfSale')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('remarks')}>
                E-Book Remarks <FontAwesomeIcon icon={getSortIcon('remarks')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('otherRemarks')}>
                Print Book Remarks <FontAwesomeIcon icon={getSortIcon('otherRemarks')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('lastContactDate')}>
                Last Contact Date <FontAwesomeIcon icon={getSortIcon('lastContactDate')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('contactMode')}>
                Contact Mode <FontAwesomeIcon icon={getSortIcon('contactMode')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('followUpDate')}>
                Follow-Up Date <FontAwesomeIcon icon={getSortIcon('followUpDate')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('clientType')}>
                Client Type <FontAwesomeIcon icon={getSortIcon('clientType')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('clientAddress.website')}>
                Website <FontAwesomeIcon icon={getSortIcon('clientAddress.website')} />
              </th>
              <th className='text-left p-2 text-lg cursor-pointer' onClick={() => requestSort('clientAddress.address')}>
                Address <FontAwesomeIcon icon={getSortIcon('clientAddress.address')} />
              </th>
              <th className='text-left p-2 text-lg'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item) => (
              <tr 
                key={item.id} 
                className={`${selectedRow === item.id ? 'bg-orange-400' : 'hover:bg-orange-300'}`} 
                onClick={() => setSelectedRow(item.id)} // Set the selected row on click
              >
                {editItem && editItem.id === item.id ? (
                  <>
                    <input type="hidden" value={item.id} onChange={(e) => handleInputChange(e, 'clientAddressid')} />
                    <input type="hidden" value={item.clientAddress.id} onChange={(e) => handleInputChange(e, 'clientContactid')} />
                    <td className='border-b-2 p-1 pr-16 text-center font-semibold'>{item.id}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <td className='font-bold text-lg'>{item.clientAddress.clientName}</td>
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <input className="w-full" type="text" value={editItem.contactPerson} onChange={(e) => handleInputChange(e, 'contactPerson')} />
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <input className="w-full" type="text" value={editItem.designation} onChange={(e) => handleInputChange(e, 'designation')} />
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <input className="w-full" type="text" value={editItem.phoneNumber || ''} onChange={(e) => handleInputChange(e, 'phoneNumber')} />
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <input className="w-full" type="text" value={editItem.mail} onChange={(e) => handleInputChange(e, 'mail')} />
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <input className="w-full" type="text" value={editItem.modeOfSale} onChange={(e) => handleInputChange(e, 'modeOfSale')} />
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <input className="w-full" type="text" value={editItem.remarks} onChange={(e) => handleInputChange(e, 'remarks')} />
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <input className="w-full" type="text" value={editItem.otherRemarks} onChange={(e) => handleInputChange(e, 'otherRemarks')} />
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <input className="w-full" type="date" value={editItem.lastContactDate} onChange={(e) => handleInputChange(e, 'lastContactDate')} />
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <input className="w-full" type="text" value={editItem.contactMode} onChange={(e) => handleInputChange(e, 'contactMode')} />
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <input className="w-full" type="date" value={editItem.followUpDate} onChange={(e) => handleInputChange(e, 'followUpDate')} />
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <input className="w-full" type="text" value={editItem.clientType} onChange={(e) => handleInputChange(e, 'clientType')} />
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <td className='font-bold text-lg'>{item.clientAddress.website || 'N/A'}</td>
                    </td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>
                      <td className='font-bold text-lg'>{item.clientAddress.address || 'N/A'}</td>
                    </td>
                    <td className='border-b-2 p-1 pr-16 text-center'>
                      <button onClick={handleSave} className="hover:bg-blue-800  bg-blue-600 w-20 rounded-md text-white  font-bl pb-1">
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className='border-b-2 p-1 pr-16 text-center font-semibold'>{item.id}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.clientAddress.clientName}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.contactPerson}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.designation}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.phoneNumber || 'N/A'}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.mail}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.modeOfSale}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.remarks}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.otherRemarks}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{formatDate(item.lastContactDate)}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.contactMode}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{formatDate(item.followUpDate)}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.clientType}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.clientAddress.website || 'N/A'}</td>
                    <td className='border-b-2 p-1 pr-16 font-semibold'>{item.clientAddress.address || 'N/A'}</td>
                    <td className='border-b-2 p-1 pr-16 text-center'>
                      <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700">
                        <FontAwesomeIcon icon={faEdit} /> Edit
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
