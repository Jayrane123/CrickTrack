import React from 'react'

import { GetServerSideProps } from 'next';
import Scorecard from './ui/scorecard';
// import { getServerSideProps } from '@/api/apidata'



export default function page() {
  return (
    <>
    <div className='grid md:p-5 m-24 grid-cols-4 grid-rows-*'>
        <Scorecard></Scorecard>
    </div>
    </>
  )
}