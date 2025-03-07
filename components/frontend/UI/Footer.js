import Image from "next/image";
import Link from "next/link";
import { IoLogoFacebook, IoLogoInstagram} from  "react-icons/io5";
import { ActionIcon } from "@mantine/core";
const Footer = (props) => {
  const onFacebookClick = ()=>{
    window.open('https://www.facebook.com/profile.php?id=100057574204399', '_blank','noopener');
  }
  const onInstagramClick = ()=>{
    window.open('https://instagram.com/yamuna_asha_city?utm_medium=copy_link', '_blank','noopener');
  }
  return (
    <footer id="page-footer" className="block background-is-dark" style={{backgroundColor:"#4D5138"}}>
    <div className="container">
    <Link href="/" >
      <a className="brand p-2">
        <Image className="footer-logo p-1" src={props.settings.logo} width="150px" height="80%" alt="" />
      </a>
    </Link>
      <div className="row">
        <div className="col-md-4 col-sm-12">
        
       {props.settings.footer_description}

       <div style={{marginTop:"1em", display:"flex", gap:"20px"}}>
       <img 
       onClick={onFacebookClick}
              src="/img/facebook 2.png"
              alt="nothing"
              width="35px"
              height="35px"
          />
          <img 
          onClick={onInstagramClick}
              src="/img/instagram 2.png"
              alt="nothing"
              width="35px"
              height="35px"  
          />

         {/* <ActionIcon onClick={onFacebookClick} size="xl"   style={{display:'inline', marginRight:"1em"}}>
          <IoLogoFacebook  style={{fontSize:"2.5em"}}  />
         </ActionIcon> */}
      {/* <ActionIcon size="xl" onClick={onInstagramClick}   style={{display:'inline'}}>
      <IoLogoInstagram style={{fontSize:"2.5em"}} />

      </ActionIcon> */}

       </div>
        </div>
        <div className="col-md-4 col-sm-12">
         

          
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="contact-data text-align-right">
            <h3 style={{margin:"0.5em 0 0 0"}}>Contact</h3>

            <figure style={{marginTop:"1em"}}> 
              <i style={{color:"#E67F10"}} className="fa fa-map-marker"></i> 
              &nbsp; {props.settings.address_line_1}<br/>{props.settings.address_line_2}
            </figure>

            <figure style={{marginTop:"1em"}}> <i  style={{color:"#E67F10"}} className="fa fa-phone"></i> {props.settings.contact_number}</figure>
            <figure style={{marginTop:"1em"}}> <i style={{color:"#E67F10"}} className="fa fa-envelope-o"></i> <a href="mailto:sales@vajrarealties.com"
                >{props.settings.email}</a
              ></figure>
           
          </div>
        </div>
      </div>
      <hr />
      <div className="note">	&#169; 2022 All Rights Reserved</div>
      
      {/* <div className="to-top">
        <a href="#page-top" className="arrow-up framed scroll">
          <i className="arrow_up"></i>
        
        </a>
      </div> */}
      {
      <a href="https://api.whatsapp.com/send?phone=919741735307" className="float" target="_blank" rel="noreferrer">
					<i className="fa fa-whatsapp my-float"></i>
      </a>}
    </div>
    <div className="background-wrapper">
      <div className="bg-transfer opacity-30">
        <Image src="/img/footer-bg.jpg" width="150px" height="100%" alt="" />
      </div>
      <div className="background-color background-color-black"></div>
    </div>
  </footer>
  )
}

export default Footer