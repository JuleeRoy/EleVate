import React from 'react'
import BounceLoader from "react-spinners/BounceLoader"
const Loader = () => {
  return (
    <div className='container-fluid mt-5'>
        <div className="container d-flex justify-content-center align-items-center">
        <BounceLoader color='#f26522'/>
        </div>
    </div>
  )
}

export default Loader