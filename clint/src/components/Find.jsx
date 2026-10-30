import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Find = () => {

    const [data,setData] = useState('')

  return (
    <>
      <div className="border border-slate-400 hover:border-slate-600 rounded-md flex items-center m-10 px-3">
        <FaSearch className="text-white mr-2" />
        <input
          type="text"
          value={data}
          placeholder="Search only by Brand or Model Name"
          className="bg-transparent text-white focus:outline-none py-3"
          onChange={(e) => setData(e.target.value)}
          style={{ minWidth: '600px' }}
        />
      </div>
    </>
  )
}

export default Find
