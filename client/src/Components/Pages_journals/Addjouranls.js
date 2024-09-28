import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Addjouranls = () => {


  const [values, setValues] = useState({
    reference: '',
    author: '',
    email: '',
    phone: '',
    title: '',
    country: '',
    file: null,
  })

  const navigate = useNavigate();

  // let url = 'https://641170afe96e5254e2d59163.mockapi.io/crudApi';

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   // Append values to the formData
  //   Object.keys(values).forEach((key) => {
  //     if (key === 'file') {
  //       // Handle file separately
  //       formData.append('file', values.file);
  //     } else {
  //       formData.append(key, values[key]);
  //     }
  //   });
  // }

  const handleFileChange = (e) => {
    // Update the 'file' property in the state
    setValues({ ...values, file: e.target.files[0] });
  };


  // let url = 'http://localhost:3030/articales'

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   axios.post(url, values)
  //     .then((resp) => {
  //       console.log('response', resp);
  //       // navigate("")
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://stocksgainer.com/articles', values)
      .then((response) => {
        console.log('Response:', response.data);
        // Handle successful response here
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error cases here
      });
  };
  console.log(values)
  return (
    <>
      <div className='gap-4 bar-add'>
        <Link to="/issues/journals/entries/status/1/2020/" className="w-auto p-2 text-sm text-center text-white uppercase bg-gray-400 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <button onClick={handleSubmit} className="w-auto p-2 text-sm text-center text-white uppercase bg-blue-700 rounded ">
          Submit
        </button>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-4 p-4 mt-14">
          <div>
            <label className='text-sm font-medium uppercase'>Reference Number <span className='text-red-600'>*</span> </label>
            <input
              className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
              name='reference' onChange={e => setValues({ ...values, reference: e.target.value })} type="text" />
          </div>
          <div>
            <label className='text-sm font-medium uppercase'>Author Name <span className='text-red-600'>*</span> </label>
            <input
              className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
              name='author' onChange={e => setValues({ ...values, author: e.target.value })} type="text" />
          </div>
          <div>
            <label className='text-sm font-medium uppercase '>Email <span className='text-red-600'>*</span> </label>
            <input className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
              name='email' onChange={e => setValues({ ...values, email: e.target.value })} type="text" />
          </div>
          <div>
            <label className='text-sm font-medium uppercase'>Phone</label>
            <input
              className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
              name='phone' onChange={e => setValues({ ...values, phone: e.target.value })} type="text" />
          </div>
          <div className="col-span-2">
            <label className='text-sm font-medium uppercase'>Title <span className='text-red-600'>*</span> </label>
            <input
              className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
              name='title' onChange={e => setValues({ ...values, title: e.target.value })} type="text" />
          </div>
          <div>
            <label className='text-sm font-medium uppercase'>Country <span className='text-red-600'>*</span> </label>
            <input className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
              name='country' onChange={e => setValues({ ...values, country: e.target.value })} type="text"
            ></input>
          </div>
          <div>
            <label className='text-sm font-medium uppercase'>Raw File<span className='text-red-600'>*</span> </label>
            <input class="w-full border-2 border-gray-300 p-1 focus:outline-emerald-600 rounded-lg" id="file_input"
              onChange={handleFileChange} type="file" accept="image/*" />
          </div>
          {/* <button className="w-auto p-2 text-sm text-center text-white uppercase bg-blue-700 rounded ">
            Submit
          </button> */}
        </div>
      </div >
    </>
  )
}

export default Addjouranls