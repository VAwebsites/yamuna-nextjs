import FrontLayout from '../components/layout/FrontLayout'
import { firebaseGetGalleryImagesForHome } from '../utilities/firebase/gallery';
import { firebasePostsForHome } from '../utilities/firebase/getEntries';
import {getBanks,getGalleryImages,getHomepageSettings,getVillas} from '../utilities/api';
import Amenities from '../components/frontend/Home/Amenities';
import FeaturedVideo from '../components/frontend/Home/FeaturedVideo'
import HomeArticlesSection from '../components/frontend/Home/HomeArticlesSection'
import HomeGallery from '../components/frontend/Home/HomeGallery'
import ProjectHighlights from '../components/frontend/Home/ProjectHighlights'
import NearByPlace from '../components/frontend/Home/NearByPlace'
import Specification from '../components/frontend/Home/specification'
import { useRouter } from 'next/router'; 
import dynamic from "next/dynamic";
const SiteScripts = dynamic(()=> import('./scripts'), {ssr:false});
import { useEffect } from 'react';
import Head from 'next/head';
import Clubhouse from '../components/frontend/Home/Clubhouse';
import Banks from '../components/frontend/Home/Banks';
const x = 0;

export default function Home(props) {
  // const posts = JSON.parse(props.posts);
  const images = JSON.parse(props.images);
  const settings = JSON.parse(props.settings);
  const villas = JSON.parse(props.villas);
  const banks = JSON.parse(props.banks);

  

  return (
    <FrontLayout settings={settings}>
    
      <ProjectHighlights settings={settings}/>
      <Clubhouse/>
      <Specification />
      <HomeArticlesSection posts={villas} />
      <Amenities />
      <HomeGallery images={images} />
      <Banks settings={settings}/>
      <NearByPlace />
      <FeaturedVideo settings={settings} />

    </FrontLayout>
  )
}

export async function getServerSideProps (context){
  // const res = await firebasePostsForHome();
  const resImages = await getGalleryImages();
  const settings = await getHomepageSettings();
  const villas = await getVillas();
  const banks = await getBanks();

  const props = {
    // posts:[],
    status:false,
    images:[],
    settings:[],
    villas:[],
    banks:[]
  };
  if(villas){
    props.villas = JSON.stringify(villas);
  }
  if(banks){
    props.banks = JSON.stringify(banks);
  }
  if(settings){
    props.settings = JSON.stringify(settings.data[0]);
  }
  // if(res){
  //     const posts = JSON.stringify(res);
  //     props.posts = posts;
  //     props.status = true;
  // }
  if(resImages){
    const images = JSON.stringify(resImages);
    props.images = images;
  }
  return {
    props
  }
}

