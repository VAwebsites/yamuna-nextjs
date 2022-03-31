import FrontLayout from '../components/layout/FrontLayout'
import { firebaseGetGalleryImagesForHome } from '../utilities/firebase/gallery';
import { firebasePostsForHome } from '../utilities/firebase/getEntries';
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
  const posts = JSON.parse(props.posts);
  const images = JSON.parse(props.images);

  

  return (
    <FrontLayout>
    
      <ProjectHighlights />
      <Clubhouse/>
      <Specification />
      <HomeArticlesSection posts={posts} />
      <Amenities />
      <HomeGallery images={images} />
      <Banks/>
      <NearByPlace />
      <FeaturedVideo />

    </FrontLayout>
  )
}

export async function getServerSideProps (context){
  const res = await firebasePostsForHome();
  const resImages = await firebaseGetGalleryImagesForHome();
  const props = {
    posts:[],
    status:false,
    images:[]
  };
  if(res){
      const posts = JSON.stringify(res);
      props.posts = posts;
      props.status = true;
  }
  if(resImages){
    const images = JSON.stringify(resImages);
    props.images = images;
  }
  return {
    props
  }
}

