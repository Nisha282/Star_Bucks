import React from 'react';

const RecommendsComponent = ()=>{
return <div className='xl:pl-20 xl:pr-20 pl-5 pr-5 mt-10'>
    <div className='flex justify-center xl:justify-start'>
        <span className='text-[#1e3932] font-bold text-2xl'>Handcrafted Curations</span>
    </div>
    <div className='mt-5 flex justify-between flex-wrap'>
    <div className="w-28 text-center">
        <img className='rounded-full cursor-pointer mb-2 hover: border-[#00754a] hover:border-2'
        src = "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Bestseller.jpg" alt = "best-seller"></img>
        <span className='text-[#212529] text-sm font-semibold'>Bestseller</span>
    </div>

    <div className="w-28 text-center">
        <img className='rounded-full cursor-pointer mb-2 hover: border-[#00754a] hover:border-2'
        src = "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Drinks.jpg" alt = "best-seller"></img>
        <span className='text-[#212529] text-sm font-semibold'>Drinks</span>
    </div>

    <div className="w-28 text-center">
        <img className='rounded-full cursor-pointer mb-2 hover: border-[#00754a] hover:border-2'
        src = "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Food.jpg" alt = "best-seller"></img>
        <span className='text-[#212529] text-sm font-semibold'>Food</span>
    </div>

    <div className="w-28 text-center">
        <img className='rounded-full cursor-pointer mb-2 hover: border-[#00754a] hover:border-2'
        src = "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Merchandise.jpg" alt = "best-seller"></img>
        <span className='text-[#212529] text-sm font-semibold'>Merchandise</span>
    </div>

    <div className="w-28 text-center">
        <img className='rounded-full cursor-pointer mb-2 hover: border-[#00754a] hover:border-2'
        src = "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/CoffeeAtHome.jpg" alt = "best-seller"></img>
        <span className='text-[#212529] text-sm font-semibold'>Coffee At Home</span>
    </div>

    <div className="w-28 text-center">
        <img className='rounded-full cursor-pointer mb-2 hover: border-[#00754a] hover:border-2'
        src = "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/ReadyToEat.jpg" alt = "best-seller"></img>
        <span className='text-[#212529] text-sm font-semibold'>Ready to Eat</span>
    </div>

</div>
</div>
}
export default RecommendsComponent