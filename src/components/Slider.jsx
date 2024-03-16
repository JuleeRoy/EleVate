import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Slider = () => {
  return (
    <div className=''>
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
       <h2 className='text-center text-light mt-5 '>
       GET START <br/>
        YOUR FAVOURITE SHOPING
       </h2>
        <div className='text-center mt-5'>
        <a href="" className='btn'>Buy Now</a>
        </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <h2 className='text-center text-light mt-5'>
       GET START  <br/>
YOUR FAVOURITE SHOPING
       </h2>
       <div className='text-center mt-5'>
        <a href="" className='btn'>Buy Now</a>
        </div>
    </div>
    <div className="carousel-item">
    <h2 className='text-center text-light mt-5'>
       GET START  <br/>
YOUR FAVOURITE SHOPING
       </h2>
       <div className='text-center mt-5'>
        <a href="" className='btn'>Buy Now</a>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon   rounded-circle" aria-hidden="true" style={{width:"20px",height:"20px",padding:"20px" , background:"gainsboro"}}>
    <IoIosArrowBack  className='arrow-icon'/>
    </span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon  rounded-circle" aria-hidden="true" style={{width:"20px",height:"20px",padding:"20px",background:"gainsboro"}}>
    <IoIosArrowForward className='arrow-icon' />
    </span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider