import React from 'react'

const Clubhouse = () => {
  return (
    <div className="block" id="about" style={{backgroundColor:"#6E7474"}}>
      <div className="container" id="pricing">
           
            <div className="row">
                    <div className="col-md-6 col-sm-6" data-scroll-reveal="enter left and move 20px" style={{margin:"auto"}}>
                    <h2 style={{fontFamily:'Montserrat',color:'white',fontSize:'42px'}}>ClubHouse</h2>
                        <h2 style={{fontWeight:"600",color:"white",fontSize:"1.3em",fontFamily:'Montserrat',lineHeight:'1.6em'}}>One of its kind high end clubhouse giving a beautiful view of the surroundings. Facilitated with 7 luxury Suite Rooms, Cafe & Family Restaurant with Centralized AC.</h2>
                        
                        {/* <Button color={"red"} onClick={downloadFile}>
                          <i style={{marginRight:"0.5em"}} className="fa fa-download"></i> Download Brochure
                        </Button> */}
                  </div> 
                  <div className="col-md-6 col-sm-6">
                        <img src="/img/clubhouse.jpeg" style={{borderRadius:"1.3em"}}/>
                  </div>
              
            </div>
            
        
        
          <div className="background-wrapper">
              <div className="background-color background-color-black opacity-80"></div>
          </div>
        
      </div>
   </div>
  )
}

export default Clubhouse