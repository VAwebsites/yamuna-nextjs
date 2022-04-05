import Image from 'next/image'


const ProjectHighlights = (props) => {
   
  let project_overview,project_type,project_status;
  if(props.settings){
    project_overview = props.settings.project_overview;
    project_type = props.settings.project_type;
    project_status = props.settings.project_status;
  }

  return (
    <div className="block" id="about" style={{width:"75%", margin:'auto'}} >
        <div className="container">
	        <h2 className='text-center'>Project <span style={{color:"#f4bc1c"}}>Highlight</span></h2>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <p>{ project_overview} </p>
                </div>
                <div className="col-md-6 col-sm-6">
                    <p><strong>Project Type:</strong> {project_type}</p><br />

                        <p><strong>Project Status:</strong> {project_status}</p><br />
                        
                        <p>
                          <h4 className='mb-0 pb-0'><strong>Builder:</strong></h4>
                        Yamuna Homes & Design Pvt. Ltd.<br />
                        
                        NH 66, Kulai, Near Raheja waterfront apartment, Mangaluru, Karnataka 575019</p>
                    
                </div>
	        </div>
            <hr />
	  </div>


       
  </div>
 
  )
}

export default ProjectHighlights