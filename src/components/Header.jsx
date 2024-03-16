import React from 'react'

const Header = () => {
  return (
    <div className="container m-auto d-none d-md-block">
    <div className="header_section_top bg-dark">
       <div className="row">
          <div className="col-sm-12">
             <div className="custom_menu">
                <ul>
                   <li><a href="#">Best Sellers</a></li>
                   <li><a href="#">Gift Ideas</a></li>
                   <li><a href="#">New Releases</a></li>
                   <li><a href="#">Today's Deals</a></li>
                   <li><a href="#">Customer Service</a></li>
                </ul>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default Header