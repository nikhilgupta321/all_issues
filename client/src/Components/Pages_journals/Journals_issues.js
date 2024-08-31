import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 
const Journals_issues = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  var currentURL = window.location.href;

  // Parse the URL to get its pathname
  var pathArray = window.location.pathname.split('/');

  // Get the last segment of the pathname
  var statusValue = pathArray[pathArray.length - 1];

  // Convert the statusValue to a number if needed
  statusValue = parseInt(statusValue);
  console.log(statusValue)
  let url = 'http://localhost:8080/api/journals'
  const GetData = () => {
    try {
      axios.get(url, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      }).then((resp) => {
        if (resp.status === 200) {

          console.log(resp.data)
          let dList = {}
          resp.data.forEach(element => {
            var dateObject = new Date(element.created_at);

            // Get the full year
            var year = dateObject.getFullYear();

            // console.log(year);
            if (statusValue == element.sort) {

              if (dList[year]) {
                dList[year].push(element);
              } else {
                dList[year] = [element];
              }
            }
          });
          setData(dList)
          console.log(dList)
        }
      });
    } catch (error) {
    }
  }
  useEffect(() => {
    GetData()
  }, [])

  const handleOpenVolume = (year) => {
    console.log(year)
    console.log(data[year])
    navigate('/issues/journals/entries/status/1/2020/', { state: data[year] })
  }
  // const location = useLocation();
  // const data = location.state && location.state.data;
  return (
    <>
      <div className="bar-nav">
        <Link to={"/issues/journals/entries/status/149/add"}>
          <button className="w-auto p-2 text-center bg-green-700 rounded text-white uppercase text-sm">add new</button>
        </Link>
      </div>
      <div className='mt-20 m-4'>
        <div className="flex flex-col">
          <h1 className='font-bold text-xl mb-2' style={{ fontSize: "25px" }}>2023</h1>
          <Link to={"/issues/journals//entries/status/149/2023"}>
            <div className="text-green-700 uppercase w-100 mb-2">Volume 5</div>
          </Link>
        </div>
        <br />
        <h1 className='font-bold text-xl mb-2' style={{ fontSize: "25px" }}>2022</h1>
        <div className="w-100 mb-2"><a href="https://www.royalpublications.net/issues/journals/articles/149/2022/4/1"
          className="text-green-700 uppercase">Volume 4</a></div>
          <br />
        {Object.keys(data).map((year) => (
          <div key={year}>
            {/* {year} */}
            {/* You can also render additional components or data  for each year here */}
            <h1 className='font-bold text-xl mb-2' style={{ fontSize: "25px" }}>{year}</h1>
            <div className="w-100 mb-2">
              <p className="text-green-700 uppercase" onClick={() => handleOpenVolume(year)}>Volume 4</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Journals_issues