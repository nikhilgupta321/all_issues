import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Year_Journal_list = () => {

  const location = useLocation()
  const [inputValues, setInputValues] = useState({});
  const [data, setData] = useState(location?.state ? location?.state || [] : [])
  const [allData, setAllData] = useState([])
  const [type, setType] = useState(location?.state ? location?.state || [] : [])
  const [showNo, setShowNo] = useState({ first: 0, last: 20 })


  const datas = location.state;
  console.log(datas)
  let url = 'https://stocksgainer.com/api/entries'
  // const fetchData = () => {
  //   try {
  //     axios.get(url, {
  //       headers: {
  //         authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
  //       }
  //     }).then((resp) => {
  //       if (resp.status == 200) {
  //         // setData(resp.data)
  //         setAllData(resp.data)
  //       }
  //     });
  //   } catch (error) {
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])


  useEffect(() => {
    if (allData.length > 0) {
      // if (type == 'pending') {
      let newData = allData.filter((val) => val.status == type)
      console.log(newData)
      setData(newData)
      // }
    }
  }, [type, allData.length])

  // format Date and time
  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    const formattedDate = new Date(dateString).toLocaleString('en-US', options);
    return formattedDate;
  };

  // Pagination (first 0-----Last 5)
  const { first, last } = showNo
  const handlePagination = (typ) => {
    if (typ === 'start') {
      setShowNo({ first: 0, last: 20 });
    } else if (typ === 'last') {
      const totalItems = data.length;
      const newFirst = Math.max(0, totalItems - 10);
      setShowNo({ first: newFirst, last: totalItems });
    } else if (typ === 0) {
      setShowNo({ first: first - 20, last: data.length - 20 });
    } else {
      setShowNo({ first: first + 20, last: data.length });
    }
  };


  // REMARKS input Post data
  const handleSaveClick = async (id) => {
    debugger
    try {
      const response = await axios.patch(`${url}/${id}`, {
        remarks: inputValues[id],
      });
      console.log('Save successful:', response.data);
      // fetchData();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  const handleInputChange = (id, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: value,
    }));
  };

  // Handle Change Status 
  const handleChangeStatus = async (e, value) => {
    const status = { status: e.target.value };
    try {
      const response = await axios.put(`${url}/${value.id}`, status, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      if (response.status == 200) {
        // fetchData();
      }
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100';
      case 'published':
        return ' ';
      case 'withdraw':
        return 'bg-orange-400';
      case 'notmade':
        return 'bg-blue-300';
      case 'today':
        return 'bg-lime-300';
      case 'made':
        return 'bg-golden-300';
      case 'probmailsent':
        return 'bg-teal-300';
      case 'wrongentry':
        return 'bg-red-400';
      case 'reminder':
        return 'bg-blue-300';
      case 'noreply':
        return 'bg-pink-300';
      default:
        return '';
    }
  };

  return (
    <>
      <div className="justify-between bar-nav">
        <div>
          <Link to={"/issues/journals/entries/status/149/2023/1"}>
            <button className="w-auto p-2 text-sm text-center text-white uppercase bg-green-700 rounded">add new</button>
          </Link>
        </div>
        <div className='flex'>
          {/* <p className="w-auto p-1 mr-1 text-lg text-center text-green-700 rounded">{first} - {last} of {list.length}<hr /></p> */}
          <button className="w-auto p-1 mr-1 text-sm text-center uppercase bg-gray-300 rounded text-black-200" onClick={() => handlePagination('start')}>start</button>
          <button className="w-auto p-1 mr-1 text-sm text-center uppercase bg-gray-300 rounded text-black-200" disabled={first <= 1} onClick={() => handlePagination(0)}>prev</button>
          {/* <button className="w-auto p-1 mr-1 text-sm text-center uppercase bg-gray-300 rounded text-black-200" disabled={list.length <= last} onClick={() => handlePagination(1)}>next</button> */}
          <button className="w-auto p-1 mr-1 text-sm text-center uppercase bg-gray-300 rounded text-black-200" onClick={() => handlePagination('last')}>last</button>
        </div>
      </div>
      <div className="flex flex-col mt-16">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block w-full py-2 sm:px-6 lg:px-2 ">
            <div className="overflow-hidden">
              <table className="min-w-full text-sm font-light border border-slate-700">
                <thead className="font-normal uppercase border-b">
                  <tr className='bg-gray-100'>
                    <th scope="col" className="p-1 text-xs border ">S.No.</th>
                    <th scope="col" className="p-1 text-xs border ">Type</th>
                    <th scope="col" className="p-1 text-xs border ">Txn Id</th>
                    <th scope="col" className="p-1 text-xs border ">Ref. No.</th>
                    <th scope="col" className="p-1 text-xs border ">Email</th>
                    <th scope="col" className="p-1 text-xs border ">Title</th>
                    <th scope="col" className="p-1 text-xs border ">Created At</th>
                    <th scope="col" className="p-1 text-xs border ">Payment Check On</th>
                    <th scope="col" className="p-1 text-xs border ">Date</th>
                    <th scope="col" className="p-1 text-xs border ">Made On</th>
                    <th scope="col" className="p-1 text-xs border ">Published On</th>
                    <th scope="col" className="p-1 text-xs border ">Remarks</th>
                    <th scope="col" className="p-1 text-xs border ">Raw File</th>
                    <th scope="col" className="p-1 text-xs border ">Main File</th>
                    <th scope="col" className="p-1 text-xs border ">Withdraw On</th>
                    <th scope="col" className="p-1 text-xs border ">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.slice(first, last).map((val, ind) => {
                      return (
                        <tr className={`border border-black ${getStatusColorClass(val.status)}`} key={ind} id={ind}>
                          <td className="p-1 font-normal text-center border">{ind + 1}</td>
                          <td className="p-1 font-normal uppercase border">{val.type}</td>
                          <td className="p-1 font-normal border">{val.txnid}</td>
                          <td className="p-1 font-normal border">{val.refnumber}</td>
                          <td className="w-2 p-2 font-normal border">{val.email.slice(0, 3)}...</td>
                          <td className="p-1 font-normal border">{val.title}</td>
                          <td className="p-1 font-normal border text-end" >{val.created_by}<br /><span className='whitespace-nowrap'>
                            {formatDate(val.created_at)} </span> </td>
                          <td className="p-1 font-normal border text-end">{val.payment_received_by} <br /><span className='whitespace-nowrap'>{formatDate(val.payment_received_at)}</span></td>
                          <td className="p-1 font-normal border">
                            <button type="submit"><i>{val.date}</i></button>
                          </td>
                          <td className="p-1 font-normal border text-end">{val.made_by}<br /><span className='whitespace-nowrap'>
                            {formatDate(val.made_at)}</span> </td>
                          <td className="p-1 font-normal border text-end">{val.published_by}<br /><span className='whitespace-nowrap'>
                            {formatDate(val.published_at)}</span></td>
                          <td className="font-normal border">
                            <div className='text-end '><button className='px-1 text-xs text-white uppercase bg-green-700 rounded' onClick={() => handleSaveClick(val.id)}>save</button></div>
                            <div className='w-full'>
                              <input
                                type="text"
                                value={inputValues[val.id] || ''}
                                onChange={(e) => handleInputChange(val.id, e.target.value)}
                                className="w-20 h-4 p-1 outline-none"
                              />
                              {/* <input type='text' value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)} className='w-20 h-4 p-1 outline-none' /> */}
                            </div>
                          </td>
                          <td className="p-2 font-normal text-center uppercase border" ><a href="https://www.royalpublications.net/issues/uploads/archives/Plant Science/vol5-issue1/rawfile-PlantScience5048-1695797758.docx"><b>Download</b></a><br />
                            <button type="button" className='p-1 uppercase bg-gray-300 rounded'>Upload</button></td>
                          <td className="p-2 font-normal text-center uppercase border" ><a href="https://www.royalpublications.net/issues/uploads/archives/Plant Science/vol5-issue1/mainfile-PlantScience5048-1695981104.doc"><b>Download</b></a><br /><button type="button" className='p-1 uppercase bg-gray-300 rounded'>Upload</button></td>
                          <td className="p-2 font-normal border " ></td>
                          <td className="p-2 font-normal border">
                            <select value={val.status} onChange={(e) => handleChangeStatus(e, val)} className='border-2 border-gray-500 rounded focus:ring-blue-500 focus:border-blue-500'>
                              <option value="" >Select Status</option>
                              <option value="probmailsent" >Prob Mail Sent</option>
                              <option value="probmailreceived" >Prob Mail Received</option>
                              <option value="remindersent" >Reminder Sent</option>
                              <option value="withdraw" >Withdraw</option>
                              <option value="urgent" >Urgent</option>
                              <option value="today" >Today</option>
                              <option value="notmade" >Not Made</option>
                              <option value="wrongentry" >Wrong Entry</option>
                              <option value="published">Published</option>
                              <option value="pending">Pending</option>
                              <option value="reminder" >Reminder</option>
                              <option value="remindersent" >Reminder Sent</option>
                              <option value="notmade" >Not Made</option>
                              <option value="noreply" >No Reply</option>
                            </select>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Year_Journal_list