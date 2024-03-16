import React from 'react'
import Logo from './Logo'


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='container-fluid bg-dark mt-5'>
        <div className="container d-flex flex-column justify-content-center align-items-center">
             <div className='mt-4'>
             <Logo/>
             </div>
             <div className='mt-4' style={{width:"80%"}}>
                <form onSubmit={(e)=>{e.preventDefault()}} className="m-auto border-bottom border-2 py-2 ">
                    <input type="text" value="Email" placeholder='email' className='bg-transparent border-0 px-2 text-light' style={{width:"65%"}} />
                    <input type="Submit" value="Subscribe"className='bg-transparent border-0 px-2 text-center text-uppercase fw-md-bold' style={{width:"35%", color:"#f26522"}} />
                </form>
             </div>
          <div className='mt-3'>
          <ul className=' d-md-flex gap-2 justify-content-center text-center'>
                   <li><a href="#" className='text-light'>Best Sellers</a></li>
                   <li><a href="#" className='text-light'>Gift Ideas</a></li>
                   <li><a href="#"className='text-light'>New Releases</a></li>
                   <li><a href="#"className='text-light'>Today's Deals</a></li>
                   <li><a href="#" className='text-light'>Customer Service</a></li>
                </ul>
          </div>
          <div className="col-12 m-auto text-center pb-2" style={{width:"50%"}}>
            <p className='text-light'>Help Line Number : +1 1800 1200 1200</p>
          <span className=" text-light ">&copy; {currentYear} Your Company Name. All rights reserved.</span>
        </div>
        </div>
    </div>
  )
}

export default Footer