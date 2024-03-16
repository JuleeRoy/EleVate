import React ,{useState} from "react";

const SingleProductImage = ({img}) => {

  const imgUrls = [
     img,
    "https://global-uploads.webflow.com/5d552994548be47b97db38c2/5ddba7b9fb62492bf3202ccb_93+(2)+(2).png",
    "https://i.pinimg.com/736x/9d/8f/2e/9d8f2ec2b37b1fde1911d905080552b8.jpg",
    "https://global-uploads.webflow.com/5d552994548be47b97db38c2/5ddba7b9fb62492bf3202ccb_93+(2)+(2).png",
  ];

  const[mainImage,setMainImage]=useState(imgUrls[0])
  return (
    <div className="row flex-wrap-reverse">
        <div className="col-12 d-flex d-lg-block col-lg-3">
            {
                imgUrls.map((img,index)=>{
                    return(<figure className="">
                        <img src={img} key={index} alt={index} className="img-fluid"
                          onClick={()=>{
                            setMainImage(img)
                          }}/>
                    </figure>)
                })
            }
        </div>
         <div className="col-12 col-lg-8 main_img">
           <figure>
            <img src={mainImage} className="img-fluid" alt="" 
           />
           </figure>
     </div>
    </div>
)
};

export default SingleProductImage;
