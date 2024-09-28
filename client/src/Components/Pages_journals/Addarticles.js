import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Addarticles = () => {
  const [data, setData] = useState([])
  const [showNo, setShowNo] = useState({ first: 0, last: 10 })

  let url = 'https://stocksgainer.com/api/articales'
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
      <div className="justify-end bar-nav">
        <p className="w-auto p-2 mr-1 text-lg text-center text-green-700 rounded" >{first} - {last} of {data.length}<hr /></p>
        <button className="w-auto p-2 mr-1 text-sm text-center uppercase bg-gray-300 rounded text-black-200" onClick={() => handlePagination('start')}>start</button>
        <button className="w-auto p-2 mr-1 text-sm text-center uppercase bg-gray-300 rounded text-black-200" disabled={first <= 0} onClick={() => handlePagination(0)}>prev</button>
        <button className="w-auto p-2 mr-1 text-sm text-center uppercase bg-gray-300 rounded text-black-200" disabled={data.length <= last} onClick={() => handlePagination(1)}>next</button>
        <button className="w-auto p-2 mr-1 text-sm text-center uppercase bg-gray-300 rounded text-black-200" onClick={() => handlePagination('last')}>last</button>
      </div>
      <div className="flex flex-col mt-16">
        <div>
          <Link to={"/issues/journals/entries/status/149/2023/1"}>
            <button className="w-auto p-2 text-sm text-center text-white uppercase bg-green-700 rounded">add new</button>
          </Link>
        </div>
        <div></div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full text-sm font-light border border-slate-700">
                <thead className="font-medium uppercase border-b">
                  <tr className='bg-gray-100'>
                    <th scope="col" className="p-2 text-sm border ">S.No.</th>
                    <th scope="col" className="p-2 text-sm border ">Type</th>
                    <th scope="col" className="p-2 text-sm border ">Txn Id</th>
                    <th scope="col" className="p-2 text-sm border ">Ref. No.</th>
                    <th scope="col" className="p-2 text-sm border ">Name</th>
                    <th scope="col" className="p-2 text-sm border ">Title</th>
                    <th scope="col" className="p-2 text-sm border ">Email</th>
                    <th scope="col" className="p-2 text-sm border ">Phone</th>
                    <th scope="col" className="p-2 text-sm border ">Country</th>
                    <th scope="col" className="p-2 text-sm border ">Remarks</th>
                    <th scope="col" className="p-2 text-sm border ">Raw File</th>
                    <th scope="col" className="p-2 text-sm border ">Main File</th>
                    <th scope="col" className="p-2 text-sm border ">Created At</th>
                    <th scope="col" className="p-2 text-sm border ">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.slice(first, last).map((val, ind) => {
                      return (
                        <tr className="border border-black">
                          <td className="p-2 font-medium border">{ind + 1}</td>
                          <td className="p-2 font-medium border">{val.type}</td>
                          <td className="p-2 font-medium border">{val.txnid}</td>
                          <td className="p-2 font-medium border">{val.refno}</td>
                          <td className="p-2 font-medium border">{val.name}</td>
                          <td className="p-2 font-medium border">{val.title}</td>
                          <td className="p-2 font-medium border">{val.email}</td>
                          <td className="p-2 font-medium border">{val.phone}</td>
                          <td className="p-2 font-medium border">{val.country}</td>
                          <td className="font-medium border">
                            <div className='text-end '><button className='uppercase bg-green-500 rounded'>save</button></div>
                            <div className='w-full'><input type='text' className='p-2 outline-none w full' /></div>
                          </td>
                          <td className="p-2 font-medium text-center uppercase border" ><a href="https://www.royalpublications.net/issues/uploads/archives/Plant Science/vol5-issue1/rawfile-PlantScience5048-1695797758.docx"><b>Download</b></a><br />
                            <button type="button" className='p-1 uppercase bg-gray-300 rounded'>Upload</button></td>
                          <td className="p-2 font-medium text-center uppercase border" ><a href="https://www.royalpublications.net/issues/uploads/archives/Plant Science/vol5-issue1/mainfile-PlantScience5048-1695981104.doc"><b>Download</b></a><br /><button type="button" className='p-1 uppercase bg-gray-300 rounded'>Upload</button></td>
                          <td className="p-2 font-medium border " >{val.createdat}</td>
                          <td className="p-2 font-medium border">
                            <select className='border-2 border-gray-500 rounded focus:ring-blue-500 focus:border-blue-500'>
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