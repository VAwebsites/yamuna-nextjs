import React from 'react'

const Clubhouse = () => {
  return (
    <div className="block" id="about" style={{backgroundColor:"#f4bc1c"}}>
    <div className="container" id="pricing">
        <h2>ClubHouse</h2>
        <div className="row">
            <div className="col-md-6 col-sm-6" data-scroll-reveal="enter left and move 20px" style={{margin:"auto"}}>
                <ul style={{fontWeight:"600",fontSize:"1.3em"}}>
                  <li>24-hour security with cctv surveillance.</li>
                  <li>Centralized sewage treatment plant (stp).</li>
                  <li>Club house with Gym, Badminton court, swimming pool & with other indoor games.</li>
                  <li>Street light.</li>
                  <li>Undergroung  electricity cables with individual service trench for each site.</li>
                  <li>Children’s play area.</li>
                  <li>Informal playground with basketball & tennis courts.</li>
                  <li>Fully landscaped waterfront developed with jogging & bicycle tracks.</li>
                  <li>Green park with seating and other comforts.</li>
                  <li>Wide asphalt  roads of imternational standards with beautiful street scape and storm water drains.</li>
                  <li>24-hour water supply with overhead tank.</li>
                 
                </ul>
                {/* <Button color={"red"} onClick={downloadFile}>
                  <i style={{marginRight:"0.5em"}} className="fa fa-download"></i> Download Brochure
                </Button> */}
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