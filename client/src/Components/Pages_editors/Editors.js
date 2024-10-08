import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import journalOptions from './journalOptions'
import { getStatusColorClass, formatDate } from '../helper/api-editors'
import auth from '../helper/auth-helper'
import { listEditors } from '../helper/api-editors'
import Dashboard from '../Dashboard'

const Editors = () => {
  const [list, setList] = useState([])
  const [showNo, setShowNo] = useState({ first: 0, last: 200 })

  const jwt = auth.isAuthenticated();

  // Get Api
  let url = 'https://stocksgainer.com/api/editors'


  // useEffect(() => {
  //   const abortController = new AbortController()
  //   // const signal = abortController.signal

  //   const fetchData = async () => {
  //     try {
  //       const data = await listEditors({ token: JSON.parse(localStorage.getItem('token')) });
  //       if (data && data.error) {
  //         console.error(data.error);
  //       } else if (data) {
  //         setList(data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();

  //   return function cleanup() {
  //     abortController.abort()
  //   }
  // }, [])

  const GetData = () => {
    try {
      axios.get(url, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      }).then((resp) => {
        if (resp.status === 200) {
          setList(resp.data);
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    if (jwt) {
      GetData()
    } else {
      console.warn('token is not find');
    }

  }, [])

  // Handle Change Status
  const handleChangeStatus = async (e, value) => {
    const status = { status: e.target.value };
    try {
      const response = await axios.put(`${url}/${value.id}`, status, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      if (response.status === 200) {
        GetData()
      }
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  // Pagination (first 0-----Last 5)
  const { first, last } = showNo
  const handlePagination = (typ) => {
    if (typ === 'start') {
      setShowNo({ first: 0, last: 200 });
    } else if (typ === 'last') {
      const totalItems = list.length;
      const newFirst = Math.max(0, totalItems - 10);
      setShowNo({ first: newFirst, last: totalItems });
    } else if (typ === 0) {
      setShowNo({ first: first - 200, last: list.length - 200 });
    } else {
      setShowNo({ first: first + 200, last: list.length });
    }
  };
  return (
    <>
      <div className="justify-between bar-nav">
        <div>
          <Link to={"/issues/editors/add"}>
            <button className="w-auto p-2 text-xs text-center text-white uppercase bg-green-700 rounded">add new</button>
          </Link>
        </div>
        <div className='flex'>
          <p className="w-auto p-1 mr-1 text-center text-green-700 rounded text-m">{first} - {last} of {list.length}<hr /></p>
          <button className="w-auto p-2 mr-1 text-xs text-center uppercase bg-gray-300 rounded text-black-200" onClick={() => handlePagination('start')}>start</button>
          <button className="w-auto p-2 mr-1 text-xs text-center uppercase bg-gray-300 rounded text-black-200" disabled={first <= 1} onClick={() => handlePagination(0)}>prev</button>
          <button className="w-auto p-2 mr-1 text-xs text-center uppercase bg-gray-300 rounded text-black-200" disabled={list.length <= last} onClick={() => handlePagination(1)}>next</button>
          <button className="w-auto p-2 mr-1 text-xs text-center uppercase bg-gray-300 rounded text-black-200" onClick={() => handlePagination('last')}>last</button>
        </div>
      </div>
      <div className="flex flex-col mt-14">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full text-sm font-light" style={{ border: "black" }}>
                <thead className="font-medium border-b">
                  <tr className='bg-gray-100'>
                    <th scope="col"
                      className="p-2 text-xs border" nowrap="">S. NO.</th>
                    <th scope="col"
                      className="p-2 text-xs border">NAME</th>
                    <th scope="col"
                      className="p-2 text-xs border">EMAIL</th>
                    <th scope="col"
                      className="p-2 text-xs border">DOMAIN</th>
                    <th scope="col"
                      className="p-2 text-xs border">RESUME</th>
                    <th scope="col"
                      className="p-2 text-xs border">CERTIFICATE</th>
                    <th scope="col"
                      className="p-2 text-xs border">STATUS</th>
                    <th scope="col"
                      className="p-2 text-xs border">CREATED ON</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    list.slice(first, last).map((val, ind) => {
                      let journalName = journalOptions.filter((value) => value.value == val.journal_id)
                      return (
                        <tr className={`border border-black ${getStatusColorClass(val.status)}`} key={ind} id={ind}>
                          <td className="p-2 font-normal border">{val.id}</td>
                          <td className="p-2 font-normal border">{journalName[0]?.label}</td>
                          <td className="p-2 font-normal border">{val.email}</td>
                          <td className="p-2 font-normal text-blue-500 border">
                            {journalName.length > 0 && journalName[0]?.domain && journalName[0].domain.length > 8 && (
                              <a href={journalName[0].domain}>{journalName[0].domain.substr(8)}</a>
                            )}
                          </td>
                          <td className="p-2 font-normal border">{val.resume}</td>
                          {/* <td className="p-2 font-normal border">{val.certificate}</td> */}
                          <td className="p-2 font-normal border">
                            <link>
                            </link>
                          </td>
                          <td className="p-2 font-normal border w-30">
                            <select id="countries" value={val.status} onChange={(e) => handleChangeStatus(e, val)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option value="pending">Pending</option>
                              <option value="added">Added but mail not sent</option>
                              <option value="done">Done</option>
                              <option value="prob_mail_sent">Problem mail sent</option>
                            </select>
                          </td>
                          <td className="p-2 font-normal border text-end upp">{val.created_by}<br /><span className='whitespace-nowrap'>
                            {formatDate(val.created_at)} </span></td>
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

export default Editors

