import React from 'react'; 
import Banner from "@/components/home page/banner"; 
import Library from '@/components/home page/library';

const page = () => {
  return (
    <div className='bg-black'>
       
       <Banner></Banner> 
       <Library></Library>

    </div>
  );
};

export default page;