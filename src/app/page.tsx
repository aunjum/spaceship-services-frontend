import React from 'react';
import { GetServerSideProps } from 'next';

interface Item {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface HomeProps {
  data: Item[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <h1 className="text-4xl text-center">Welcome to My Single-Page App</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('calling');
  try {
    const url = `http://127.0.0.1:8000/api/section/get`;

    const response = await fetch(url, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    const data: Item[] = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default Home;
