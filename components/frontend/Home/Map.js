import React from 'react'


const Map = (props) => {
  return (
    <div >
      <h2 className='text-center'>Location Map</h2>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124387.95430458021!2d74.72756725951596!3d13.02780194796966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba351450cb44b37%3A0x8d2579a62940aa43!2sYamuna%20Asha%20City!5e0!3m2!1sen!2sin!4v1649951244611!5m2!1sen!2sin" 
    width="100%" 
    height="450" 

    allowFullScreen="" 
    loading="lazy">
                
</iframe>
</div>
  )
}

export default Map