import React from 'react'
import Image from 'next/image'
import {SimpleGrid} from '@mantine/core';

const Banks = () => {
  return (
    <div className="block" id="gallery">

             <div className="container col-md-12 text-center">
                <h3>Approved Banks</h3>
                <SimpleGrid cols={4} spacing="xs"    breakpoints={[
                { maxWidth: 980, cols: 3, spacing: 'md' },
                { maxWidth: 755, cols: 2, spacing: 'sm' },
                { maxWidth: 600, cols: 2, spacing: 'sm' },                                        
                ]}> 
                        <div className="logo">
                        <a href="#">
                            <Image width="250px" height="140px" src="/static/img/bank/Karnataka bank.jpg" alt="Karnataka Bank" />
                        </a>
                    </div>

                    <div className="logo">
                        <a href="#">            
                            <Image width="250px" height="140px" src="/static/img/bank/Canara Bank.jpg" alt="Canara Bank" />
                        </a>
                    </div>
                    <div className="logo">
                        <a href="#">
                            <Image width="250px" height="140px" src="/static/img/bank/Corporation bank.jpg" alt="Corporation Bank" />
                        </a>
                    </div>
                    <div className="logo">
                        <a href="#">
                            <Image width="250px" height="140px" src="/static/img/bank/Punjab national bank.jpg" alt="Punjab national Bank" />
                        </a>
                    </div>
                    <div className="logo">
                        <a href="#">
                            <Image width="250px" height="140px" src="/static/img/bank/Hdfc Bank.jpg" alt="Hdfc Bank" />
                        </a>
                    </div>
                    <div className="logo">
                            <a href="#">
                                <Image width="250px" height="140px" src="/static/img/bank/Axis Bank Logo.jpg" alt="Axis Bank" />
                            </a>
                    </div>
                
                    <div className="logo">
                        <a href="#">
                            <Image width="250px" height="140px" src="/static/img/bank/state bank of india.jpg" alt="state bank of india" />
                        </a>
                    </div>
                    <div className="logo">
                        <a href="#">
                            <Image width="250px" height="140px" src="/static/img/bank/Union bank.jpg" alt="Union Bank" />
                        </a>
                    </div>
            </SimpleGrid>

        </div>
        </div>
  )
}

export default Banks