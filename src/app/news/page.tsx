
import React from 'react'
import axios from 'axios';
import { CardDemo } from './CardDemo'
import apidata from '@/api/apidata'
import { GetServerSideProps } from 'next';
// import { getServerSideProps } from '@/api/apidata'
import Api from './newsapi'
import { ApiData} from './data';
import NewsApi from './newsapi';
import Navbar from '../component/Navbar';


// export default function page({ data }: { data: ApiData | null }) {
//   return (
//     <>
//     <Navbar></Navbar>
//     <div className='static grid md:p-5 m-24 grid-cols-4 grid-rows-*'>
//     {/* <div className='pt-16 grid md:p-5 m-24 grid-cols-4'> */}
//     <NewsApi></NewsApi>

//     </div>
//     </>
//   )
// }

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="h-16" /> {/* Spacer */}
      <div className="grid md:p-5 m-24 grid-cols-4">
        <NewsApi />
      </div>
    </>
  );
}
