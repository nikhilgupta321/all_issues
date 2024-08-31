import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Addarticles = () => {
  const [data, setData] = useState([])
  const [showNo, setShowNo] = useState({ first: 0, last: 10 })

  let url = 'http://localhost:8080/api/articales'
  const GetData = () => {
    try {
      axios.get(url).then((resp) => {
        if (resp.status == 200) {
          setData(resp.data)
        }
      });
    } catch (error) {
    }
  }
  useEffect(() => {
    GetData()
  }, [])
  console.log(data)

  // Pagination (first 0-----Last 5)
  const { first, last } = showNo
  const handlePagination = (typ) => {
    if (typ === 'start') {
      setShowNo({ first: 0, last: 10 }); // Go to the first page
    } else if (typ === 'last') {
      const totalItems = data.length;
      const newFirst = Math.max(0, totalItems - 10);    // Calculate the new 'first' index
      setShowNo({ first: newFirst, last: totalItems }); // Go to the last page
    } else if (typ === 0) {
      setShowNo({ first: first - 10, last: last - 10 }); // Move back 10 items
    } else {
      setShowNo({ first: first + 10, last: last + 10 }); // Move forward 10 items
    }
  };
  return (
    <>
      <div className=" bar-nav justify-end">
        <p className="w-auto mr-1 p-2 text-center rounded text-green-700 text-lg" >{first} - {last} of {data.length}<hr /></p>
        <button className="w-auto mr-1 p-2 text-center bg-gray-300 rounded text-black-200 uppercase text-sm" onClick={() => handlePagination('start')}>start</button>
        <button className="w-auto mr-1 p-2 text-center bg-gray-300 rounded text-black-200 uppercase text-sm" disabled={first <= 0} onClick={() => handlePagination(0)}>prev</button>
        <button className="w-auto mr-1 p-2 text-center bg-gray-300 rounded text-black-200 uppercase text-sm" disabled={data.length <= last} onClick={() => handlePagination(1)}>next</button>
        <button className="w-auto mr-1 p-2 text-center bg-gray-300 rounded text-black-200 uppercase text-sm" onClick={() => handlePagination('last')}>last</button>
      </div>
      <div className="flex flex-col mt-16">
        <div>
          <Link to={"/issues/journals/entries/status/149/2023/1"}>
            <button className="w-auto p-2 text-center bg-green-700 rounded text-white uppercase text-sm">add new</button>
          </Link>
        </div>
        <div></div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full border text-sm font-light border-slate-700">
                <thead className="border-b font-medium uppercase">
                  <tr className='bg-gray-100'>
                    <th scope="col" className="border p-2 text-sm ">S.No.</th>
                    <th scope="col" className="border p-2 text-sm ">Type</th>
                    <th scope="col" className="border p-2 text-sm ">Txn Id</th>
                    <th scope="col" className="border p-2 text-sm ">Ref. No.</th>
                    <th scope="col" className="border p-2 text-sm ">Name</th>
                    <th scope="col" className="border p-2 text-sm ">Title</th>
                    <th scope="col" className="border p-2 text-sm ">Email</th>
                    <th scope="col" className="border p-2 text-sm ">Phone</th>
                    <th scope="col" className="border p-2 text-sm ">Country</th>
                    <th scope="col" className="border p-2 text-sm ">Remarks</th>
                    <th scope="col" className="border p-2 text-sm ">Raw File</th>
                    <th scope="col" className="border p-2 text-sm ">Main File</th>
                    <th scope="col" className="border p-2 text-sm ">Created At</th>
                    <th scope="col" className="border p-2 text-sm ">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.slice(first, last).map((val, ind) => {
                      return (
                        <tr className="border  border-black">
                          <td className="border p-2 font-medium">{ind + 1}</td>
                          <td className="border p-2 font-medium">{val.type}</td>
                          <td className="border p-2 font-medium">{val.txnid}</td>
                          <td className="border p-2 font-medium">{val.refno}</td>
                          <td className="border p-2 font-medium">{val.name}</td>
                          <td className="border p-2 font-medium">{val.title}</td>
                          <td className="border p-2 font-medium">{val.email}</td>
                          <td className="border p-2 font-medium">{val.phone}</td>
                          <td className="border p-2 font-medium">{val.country}</td>
                          <td className="border font-medium">
                            <div className='text-end '><button className='bg-green-500 rounded uppercase'>save</button></div>
                            <div className='w-full'><input type='text' className='w full outline-none p-2' /></div>
                          </td>
                          <td className="border p-2 font-medium uppercase text-center" ><a href="https://www.royalpublications.net/issues/uploads/archives/Plant Science/vol5-issue1/rawfile-PlantScience5048-1695797758.docx"><b>Download</b></a><br />
                            <button type="button" className='uppercase bg-gray-300 rounded p-1'>Upload</button></td>
                          <td className="border p-2 font-medium uppercase text-center" ><a href="https://www.royalpublications.net/issues/uploads/archives/Plant Science/vol5-issue1/mainfile-PlantScience5048-1695981104.doc"><b>Download</b></a><br /><button type="button" className='uppercase bg-gray-300 rounded p-1'>Upload</button></td>
                          <td className="border p-2 font-medium " >{val.createdat}</td>
                          <td className="border p-2 font-medium">
                            <select className='border-2 border-gray-500 focus:ring-blue-500 focus:border-blue-500  rounded'>
                              <option value="" selected>Select Status</option>
                              <option value="probmailsent" >Prob Mail Sent</option>
                              <option value="probmailreceived" >Prob Mail Received</option>
                              <option value="remindersent" >Reminder Sent</option>
                              <option value="withdraw" >Withdraw</option>
                              <option value="urgent" >Urgent</option>
                              <option value="today" >Today</option>
                              <option value="notmade" >Not Made</option>
                              <option value="wrongentry" >Wrong Entry</option>
                              <option value="published" selected>Published</option>
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

export default Addarticles