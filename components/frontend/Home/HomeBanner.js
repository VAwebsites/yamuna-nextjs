import Image from "next/image";
import { Button } from "@mantine/core";
const HomeBanner = (props) => {
  let x = 0;
  function changeImage(x) {
    var img = document.getElementById("homepage-banner");
    img.style.backgroundImage = props.settings.banners[x];
    console.log(x);
    x++;        
    if(x >= props.settings.banners.length) {
        x = 0;
    } 
    setTimeout("changeImage(x)", 30000);
}

// changeImage(x)

  return (
    <div className="hero-section background-is-dark" id="homepage-banner">
      <div className="wrapper">
        <div className="hero-title">
          <div className="container">
            <h1 className="animate">
            {props.settings.project_location}  
              <br />
             {props.settings.project_title}
            </h1>
            <p  className="animate">
                  Rera Number:<br />
                  {props.settings.rera_number}
              </p>
              <Button sx={(theme)=>({
                backgroundColor: '#9F292B',
                '&:hover':{
                  backgroundColor: theme.colors.red[7]
                }
              })}
              component="a"
              href="/download-brochure"
              >
                <i style={{marginRight:"0.5em"}} className="fa fa-download"></i> Download Brochure
            </Button>
          </div>
        </div>
      </div>
      <div
        className="owl-carousel"
        data-owl-dots="0"
        data-owl-nav="1"
        data-owl-autoplay="1"
        data-owl-loop="1"
        data-owl-fadeout="1"
      >
        <div className="hero-slide">
          <div className="bg-transfer">
            <Image
              src="/static/img/slide-05.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
        <div className="hero-slide">
          <div className="bg-transfer">
            <Image
              src="/static/img/hero-image.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
        <div className="hero-slide">
          <div className="bg-transfer">
            <Image
              src="/static/img/hero-image.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
