import React from 'react'
import Image from 'next/image'
import {SimpleGrid} from '@mantine/core';

const Banks = (props) => {
  return (
    <div className="block" id="gallery">

             <div className="container col-md-12 text-center">
                <h3>Approved Banks</h3>
                <SimpleGrid cols={4} spacing="xs"    breakpoints={[
                { maxWidth: 980, cols: 3, spacing: 'md' },
                { maxWidth: 755, cols: 2, spacing: 'sm' },
                { maxWidth: 600, cols: 2, spacing: 'sm' },                                        
                ]}> 
                       
                        {props.settings.approved_banks.map((bank, index) => {
                return (
                    <div className="logo">
                        <a >
                        <Image width="250px" height="140px" src={bank.logo} alt={bank.name} />
                        </a>
                    </div>
                )
            })}

                          
                        

            </SimpleGrid>

        </div>
        </div>
  )
}

export default Banks