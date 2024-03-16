import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Star = ({rating}) => {
   
    const rate=Math.random() * (4.5 - 2.5) + 2.5;
    const count = Math.floor(Math.random() * 900) + 100;
   
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        // debugger;
        return (
          <span key={index}>
            {rate >= index + 1 ? (
              <FaStar className="icon" style={{color:"gold"}} />
            ) : rate >= number ? (
              <FaStarHalfAlt className="icon" style={{color:"gold"}}/>
            ) : (
              <AiOutlineStar className="icon empty-icon" style={{color:"gold"}} />
            )}
          </span>
        );
      });
  return (
    <div>
        <div className="icon-style d-flex">
        {ratingStar}
        <p className='m-0 p-0' style={{fontStyle:"small"}}>({count} customer reviews)</p>
      </div>
    </div>
  )
}

export default Star