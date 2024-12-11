// apiUtils.ts

import axios from 'axios';

export const fetchData = async (
  setData: React.Dispatch<React.SetStateAction<any>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  url: string
) => {
  const options = {
    method: 'GET',
    url: url,
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    setData(response.data);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching data:', error);
    setError('Failed to load data');
    setLoading(false);
  }
};
