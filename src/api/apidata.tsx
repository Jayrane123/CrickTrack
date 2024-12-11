// const axios = require('axios');
import axios from 'axios';
import React from 'react';
import { ApiData } from '@/lib/types';
import { GetServerSideProps } from 'next';

interface YourPageProps {
  data: ApiData | null;
}

export const getServerSideProps: GetServerSideProps<YourPageProps> = async ()=> {
    const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881/comm',
        headers: {
          // 'x-rapidapi-key': process.env.REACT_APP_API_KEY as string,
          // 'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request<ApiData>(options);
        return {
          props: {
            data: response.data,
          },
        };
      } catch (error) {
          console.error(error);
          return {
            props: {
              data: null,
            },
          };
      }
    }
const apidata:React.FC<YourPageProps> =({data})=>{
  return(
    <div>
      <h1>Page</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Failed to load data</p>
      )}
    </div>
  )
}
export default apidata;
