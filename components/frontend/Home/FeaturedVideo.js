import React from 'react'
const FeaturedVideo = (props) => {
  return (
   
    <div style={{width:"90%", margin:"auto", textAlign:"center", borderRadius:"50px", marginTop:"1em"}}>
        <iframe 
            className='embeded-youtube-video'
            src={props.settings.youtube_link} 
            title="YAMUNA ASHA CITY" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>


        <iframe 
            className='embeded-youtube-video'
            src={props.settings.youtube_link} 
            title="YAMUNA ASHA CITY" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    </div>
    

  )
}



export default FeaturedVideo