import Image from "next/image";
import { Button } from "@mantine/core";
import { useState, useEffect } from 'react';


const HomeBanner = (props) => {
  const images = props.settings.banners;
  console.log(props.settings.banners);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
          if(currentIndex === images.length - 1) {
              setCurrentIndex(0);
          } 
          else {
               setCurrentIndex(currentIndex + 1);
          }
      }, 5000)
      
      return () => clearInterval(intervalId);
  }, [])


  return (
    <div className="hero-section background-is-dark" id="homepage-banner" style={{backgroundImage: "url(" + images[currentIndex].banner + ")"}}>
      <div className="wrapper">
        <div className="hero-title">
          <div className="container">
            <h1 className="animate">
            {props.settings.project_title}
              <br />
              {props.settings.project_location}  
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
              src="/img/slide-05.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
        <div className="hero-slide">
          <div className="bg-transfer">
            <Image
              src="/img/hero-image.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
        <div className="hero-slide">
          <div className="bg-transfer">
            <Image
              src="/img/hero-image.jpg"
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
