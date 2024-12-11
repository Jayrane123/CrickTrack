import React from 'react'
import axios from 'axios';
import { CardDemo } from '../news/CardDemo'
import apidata from '@/api/apidata'
import { GetServerSideProps } from 'next';
// import { getServerSideProps } from '@/api/apidata'
import Api from './rankingApi'
import { ApiData} from './data';


export default function page({ data }: { data: ApiData | null }) {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement your search logic here
  };
  return (
    <>
    <div className='grid md:p-5 m-24 grid-cols-4 grid-rows-*'>
        {/* <CardDemo></CardDemo>
        <CardDemo></CardDemo>
        <CardDemo></CardDemo>
        <CardDemo></CardDemo>
        <CardDemo></CardDemo>
        <CardDemo></CardDemo>
        <CardDemo></CardDemo>
        <CardDemo></CardDemo>
        <CardDemo></CardDemo> */}
 
        <Api></Api>
        {/* <ServerSideProps></ServerSideProps> */}
    </div>
    </>
  )
}
