import React from 'react'
import { Link } from 'react-router-dom'

const Addissues = () => {
  return (
    <>
      <div className='bar-add gap-4'>
        <Link to="/issues/journals/entries/status/1" className="w-auto p-2 text-center bg-gray-400 rounded text-white uppercase text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <button
          // onClick={handleSubmit}
          className=" w-auto p-2 text-center bg-blue-700 rounded text-white uppercase text-sm"
        >
          Submit
        </button>
      </div>
      <form className="grid grid-cols-4 gap-4 p-4 mt-14">
        <div>
          <label className='uppercase font-medium text-sm'>Year <span className='text-red-600'>*</span> </label>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
            type="text" />
        </div>
        <div>
          <label className='uppercase font-medium text-sm'>Volume <span className='text-red-600'>*</span> </label>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
            type="text" />
        </div>
        <div>
          <label className='uppercase font-medium text-sm'>Reference Number<span className='text-red-600'>*</span> </label>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
            type="text" />
        </div>
        <div>
          <label className='uppercase font-medium text-sm'>Author Name<span className='text-red-600'>*</span> </label>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
            type="text" />
        </div>
        <div>
          <label className='uppercase font-medium text-sm'>Email<span className='text-red-600'>*</span> </label>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
            type="text" />
        </div>
        <div>
          <label className='uppercase font-medium text-sm'>title <span className='text-red-600'>*</span> </label>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
            type="text" />
        </div>
        <div>
          <label className='uppercase font-medium text-sm'>Country <span className='text-red-600'>*</span> </label>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
            type="text"
          ></input>
        </div>
        <div>
          <label className='uppercase font-medium text-sm'>Phone <span className='text-red-600'>*</span> </label>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 rounded-lg`}
            type="text"
          ></input>
        </div>
      </form>
    </>
  )
}

export default Addissues