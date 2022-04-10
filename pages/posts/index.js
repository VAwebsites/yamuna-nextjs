import React from 'react'
import WebLayout from '../../components/layout/WebLayout'
import { firebaseGetAllPosts } from '../../utilities/firebase/getEntries';
import moment from 'moment';
import Head from 'next/head';
import HomeArticlesSection from '../../components/frontend/Home/HomeArticlesSection';


import {getHomepageSettings,getVillas} from '../../utilities/api';


const Posts = (props) => {
  const villas = JSON.parse(props.villas);
    const settings  =  JSON.parse(props.settings);

  return (
      <WebLayout settings={settings}>

        <div className="block" id="features" style={{marginTop:"3em"}}>
            <div className="container m-auto">
                <HomeArticlesSection villas={villas} allPage={true} />
            </div>
        </div>
      </WebLayout>
  )
}



export async function getServerSideProps (context){
    const settings = await getHomepageSettings();
    const villas = await getVillas();

      const props = {
          villas:[],
          status:false,
          settings:[],
        };
        
        if(settings){
          props.settings = JSON.stringify(settings.data[0]);
        }
        if(villas){
          props.villas = JSON.stringify(villas);
        }
        
        return {
          props
        }
  }
    

  
export default Posts