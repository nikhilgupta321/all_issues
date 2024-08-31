import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = ({ listlength }) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white">
        <Link to={"/issues/journals"} className="p-4 border rounded shadow-lg flex bg-slate-500 hover:bg-slate-600 justify-between">
          <h5>Journals</h5><h5>55</h5>
        </Link>
        <Link to={"/issues/indexing"} className="p-4 border rounded shadow-lg flex bg-slate-500 hover:bg-slate-600 ">
          <h5>Indexing</h5>
        </Link>
        <Link to={"/issues/editors"} className="p-4 border rounded shadow-lg flex bg-slate-500 hover:bg-slate-600  justify-between">
          <h5>Editors</h5><h5>{listlength}</h5>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard