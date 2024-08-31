import axios from 'axios'
import React, { useEffect, useState } from 'react'
import auth from '../helper/auth-helper'

const Indexing = () => {
  const [list, setList] = useState([])
  // const [checkedRows, setCheckedRows] = useState([]);

  const jwt = auth.isAuthenticated();

  let url = 'http://localhost:8080/api/journals'
  const GetData = () => {
    try {
      axios.get(url, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      }).then((resp) => {
        if (resp.status === 200) {
          setList(resp.data)
        }
      });
    } catch (error) {
    }
  }

  useEffect(() => {
    if (jwt) {
      GetData()
    } else {
      console.warn('token is not find');
    }

  }, [])

  // const handleCheckboxChange = (ind) => {
  //   const newCheckedRows = [...checkedRows];
  //   newCheckedRows[ind] = !newCheckedRows[ind];
  //   setCheckedRows(newCheckedRows);
  // };


  return (
    <>
      <div className=" bar-nav justify-end">
        <p className="w-auto mr-1 p-2 text-center rounded text-sm" >1-58 to 58<hr /></p>
        <button className="w-auto mr-1 p-1.5 text-center bg-gray-300 rounded text-black-200 uppercase text-xs">start</button>
        <button className="w-auto mr-1 p-1.5 text-center bg-gray-300 rounded text-black-200 uppercase text-xs">prev</button>
        <button className="w-auto mr-1 p-1.5 text-center bg-gray-300 rounded text-black-200 uppercase text-xs">next</button>
        <button className="w-auto mr-1 p-1.5 text-center bg-gray-300 rounded text-black-200 uppercase text-xs">last</button>
      </div >
      <div className="flex flex-col mt-14">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full border text-sm font-light border-slate-700">
                <thead className="border-b font-medium ">
                  <tr className='bg-gray-100'>
                    <th scope="col"
                      className="border p-2 text-xs " nowrap="">S. NO.</th>
                    <th scope="col"
                      className="border p-2 text-xs ">SHORT NAME</th>
                    <th scope="col"
                      className="border p-2 text-xs ">FULL NAME</th>
                    <th scope="col"
                      className="border p-2 text-xs ">DOMAIN</th>
                    <th scope="col"
                      className="border p-2 text-xs ">SCOPUS</th>
                    <th scope="col"
                      className="border p-2 text-xs ">SCOPUS TID</th>
                    <th scope="col"
                      className="border p-2 text-xs ">WOS</th>
                    <th scope="col" className="border p-2 text-xs ">WOS TID</th>
                    <th scope="col" className="border p-2 text-xs ">DOAJ</th>
                    <th scope="col" className="border p-2 text-xs ">EMBASE</th>
                    <th scope="col" className="border p-2 text-xs ">ROAD</th>
                    <th scope="col" className="border p-1 text-xs ">INDEX COPERNICUS</th>
                    <th scope="col" className="border p-2 text-xs ">CITE FACTOR</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    list.map((val, ind) => {
                      return (
                        <tr key={ind} className="border  border-black">
                          <td className="border p-2 font-normal ">{ind + 1}</td>
                          <td className="border p-2 font-normal  whitespace-nowrap">{val.short_name}</td>
                          <td className="border p-2 font-normal " >{val.full_name}</td>
                          <td className="border p-2 font-normal text-blue-500"><a href={val.domain}>{val.domain.substr(8)}</a></td>
                          {/* <td className="border p-2 font-normal text-center">
                            <input
                              id={`link-checkbox-${ind}`}
                              type="checkbox"
                              checked={checkedRows[ind]}
                              onChange={() => handleCheckboxChange(ind)}
                              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                            />
                          </td> */}

                          <td className="border p-2 font-normal text-center" >
                            <input id="link-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded " />{val.scopus}
                          </td>
                          <td className="border font-normal ">
                            <div className='text-end '><button className='bg-green-500 rounded uppercase'>save</button></div>
                            <div className='w-full'><input type='text' className='w full outline-none p-2' value={val.scopusTid} /></div>
                          </td>
                          <td className="border p-2 font-normal text-center">
                            <input id="link-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                          </td>
                          <td className="border font-normal " >
                            <div className='text-end '><button className='bg-green-500 rounded uppercase'>save</button></div>
                            <div className='w-full'><input type='text' className='w full outline-none p-2' />{val.wosTid}</div>
                          </td>
                          <td className="border p-2 font-normal text-center" >
                            <input id="link-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                          </td>
                          <td className="border p-2 font-normal text-center" >
                            <input id="link-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                          </td>
                          <td className="border p-2 font-normal text-center" >
                            <input id="link-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                          </td>
                          <td className="border p-2 font-normal text-center" >
                            <input id="link-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                          </td>
                          <td className="border p-2 font-normal text-center">
                            <input id="link-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div >
        </div >
      </div >
    </>
  )
}

export default Indexing



