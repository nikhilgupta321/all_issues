import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import journalOptions from './journalOptions'
import axios from 'axios';

const Add_Editers = () => {
  const [formData, setFormData] = useState({
    journalId: '',
    email: '',
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { journalId, email } = formData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5 MB
      if (file.size < maxSize) {
        setFormData({
          ...formData,
          file: file,
        });
      } else {
        setError('File size exceeds the limit of 5 MB.');
        setFormData({
          ...formData,
          file: null,
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('journal_id', formData.journalId);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('file', formData.file);

    try {
      const response = await axios.post('https://stocksgainer.com/api/editors', formDataToSend);
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error making API request:', error);
      if (error.response) {
        console.error('Server responded with a non-2xx status:', error.response.data);
        setError(`Server error: ${error.response.data.message}`);
      } else {
        setError('Network error. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="gap-4 bar-add">
        <Link to="/issues/editors" className="w-auto p-2 text-sm text-center text-white uppercase bg-gray-400 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <button
          onClick={handleSubmit}
          className="w-auto p-2 text-sm text-center text-white uppercase bg-blue-700 rounded "
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        <div className="text-red-500 error-message">{error}</div>
      </div>
      <form className="grid grid-cols-3 gap-4 p-4 mt-14" encType="multipart/form-data">
        <div>
          <label className="uppercase">JOURNAL</label>
          <select
            name="journalId"
            value={journalId}
            onChange={handleInputChange}
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
          >
            {journalOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="uppercase">Email</label>
          <input
            name="email"
            value={email}
            onChange={handleInputChange}
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
            type="text"
          ></input>
        </div>
        <div>
          <label className="uppercase">Upload file</label>
          <input
            onChange={handleChangeFile}
            type="file"
            accept="application/pdf"
            className="w-full p-1 border-2 border-gray-300 rounded-lg focus:outline-emerald-600"
          />
        </div>
      </form>
    </>
  );
};

export default Add_Editers;


// const [formData, setFormData] = useState({
//   journalId: '',
//   email: '',
//   file: 'null',
// });
// // const [pdffile, setPdfFile] = useState();

// const { journalId, email } = formData
// const handleInputChange = (e) => {
//   console.log(e.target.files)
//   if (e.target.name === 'file') {
//     setFormData({
//       ...formData, [e.target.name]: e.target.files[0]
//     })
//   } else {
//     setFormData({
//       ...formData, [e.target.name]: e.target.value
//     })
//   }
// };
// const handleChangeFile = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     const maxSize = 5 * 1024 * 1024; // 5 MB
//     if (file.size < maxSize) {
//       setFormData({
//         ...formData,
//         file: file, // Update the file property
//       });
//     } else {
//       alert("File size exceeds the limit of 5 MB.");
//       setFormData({
//         ...formData,
//         file: null,
//       });
//     }
//   }
// };
// const handleSubmit = async (e) => {
//   debugger
//   e.preventDefault();
//   const formDataToSend = new FormData();
//   formDataToSend.append('journal_id', formData.journalId);
//   formDataToSend.append('email', formData.email);
//   formDataToSend.append('file', formData.file);

//   try {
//     const response = await axios.post('http://localhost:8080/api/editors', formDataToSend);
//     console.log('API Response:', response.data);
//   } catch (error) {
//     console.error('Error making API request:', error);
//     if (error.response) {
//       console.error('Server responded with a non-2xx status:', error.response.data);
//     }
//   }
// };
// console.log(formData)