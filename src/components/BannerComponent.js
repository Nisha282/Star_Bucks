import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper";
import "../styles/BannerComponent.css";

const BannerComponent = () => {
  return (
    <div className="p-5 lg:pl-20 lg:pr-20">
      <div className="mt-10 relative">
        <div className="swiper-button-banner image-swiper-button-prev-banner absolute">
          <img
            src="https://www.starbucks.in/swiperbtnleft.22de7f3e8db5d523.svg"
            alt="prev"
          ></img>
        </div>
        <div className="swiper-button-banner image-swiper-button-next-banner absolute">
          <img
            src="https://www.starbucks.in/swiperbtnright.cbc1d309941ecd98.svg"
            alt="next"
          ></img>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          navigation={{
            nextEl: ".image-swiper-button-next-banner",
            prevEl: ".image-swiper-button-prev-banner",
            disabledClass: "swiper-button-disabled",
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          mousewheel={true}
        >
          <SwiperSlide>
            <div className="w-full rounded-lg shadow-sm p-4 bg-[#F4CCD4] relative cursor-pointer">
              <div className="flex justify-end">
                <span className="text-xs font-semibold">
                  Select stores only
                </span>
              </div>
              <div className="grid grid-cols-[1fr_9fr] gap-x-4">
                <div className="absoulte left-0">
                  <img
                    src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1195_f0989be372.png"
                    alt=" "
                    width={80}
                  ></img>
                </div>
                <div>
                  <p className="text-[#00000de]">Introducing</p>
                  <p className="mt-2 font-semibold text-xl text-[#00000de]">
                    {" "}
                    Starbucks X Emily in paris
                  </p>
                  <p classname="mt-2 text-[#00000de]">
                    Banjour, world! Enjoy a trip to paris with this
                    French-inspired decal classic pink mug with serence floral
                    base.
                  </p>
                  <div className="mt-5 flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-[#00000de]">Price At</span>
                      <span className="text-[#00000de] font-bold">
                        ₹ 1799 <span className="font-normal text-sm">.00</span>
                      </span>
                    </div>
                    <div className="btn">
                      <button className="bg-[#fff] text-[#00000de] w-52 rounded-full h-12 text-lg">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full rounded-lg shadow-sm p-4 bg-[#D50032] relative cursor-pointer">
              <div className="flex justify-end">
                <span className="text-xs font-semibold text-white">
                 limited Period!
                </span>
              </div>
              <div className="grid grid-cols-[1fr_9fr] gap-x-4">
                <div className="absoulte left-0">
                  <img
                    src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Mask_group_31_26b47564d9.png"
                    alt=" "
                    width={80}
                  ></img>
                </div>
                <div>
                  <p className="text-[#00000de] text-white">It's Time To</p>
                  <p className="mt-2 font-semibold text-xl text-[#00000de] text-white">
                    {" "}
                   Brighten Your Holidays!
                  </p>
                  <p classname="mt-2 text-[#00000de] text-white">
                    {" "}Give in to the joy of indulgence. Experience the festive cheer with limited edition christmas frappuccions. 
                  </p>
                  <div className="mt-5 flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-[#00000de] text-white">Starting From</span>
                      <span className="text-[#00000de] font-bold text-white">
                        ₹ 472 <span className="font-normal text-sm">.00</span>
                      </span>
                    </div>
                    <div className="btn">
                      <button className="bg-[#fff] text-[#00000de] w-52 rounded-full h-12 text-lg">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full rounded-lg shadow-sm p-4 bg-[#036141] relative cursor-pointer">
              <div className="flex justify-end">
                <span className="text-xs font-semibold text-white">
                  
                </span>
              </div>
              <div className="grid grid-cols-[1fr_9fr] gap-x-4">
                <div className="absoulte left-0">
                  <img
                    src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Bonus_Stars_2d6733cfde.png"
                    alt=" "
                    width={80}
                  ></img>
                </div>
                <div>
                  <p className="text-[#00000de] text-white">Special Offer</p>
                  <p className="mt-2 font-semibold text-xl text-[#00000de]  text-white">
                    {" "}
                    DOUBLE STARS
                  </p>
                  <p classname="mt-2 text-white text-[#00000de]">
                    Double Your Stars on first 3 order placed through the app. Order from the wide menu range and collect it from the barista.
                  </p>
                  <div className="mt-5 flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-[#00000de]  text-white">Starting From</span>
                      <span className="text-[#00000de] font-bold  text-white">
                        ₹ 259<span className="font-normal">.00</span>
                      </span>
                    </div>
                    <div className="btn">
                      <button className="bg-[#fff] text-[#00000de] w-52 rounded-full h-12 text-lg">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full rounded-lg shadow-sm p-4 bg-[#E75480] relative cursor-pointer">
              <div className="flex justify-end">
                <span className="text-xs font-semibold">
                 
                </span>
              </div>
              <div className="grid grid-cols-[1fr_9fr] gap-x-4">
                <div className="absoulte left-0">
                  <img
                    src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1313_209b3baa05.png"
                    alt=" "
                    width={80}
                  ></img>
                </div>
                <div>
                  <p className="text-[#00000de]">Give Them A Piece Of Heart</p>
                  <p className="mt-2 font-semibold text-xl text-[#00000de]">
                    {" "}
                    Valentine Special
                  </p>
                  <p classname="mt-2 text-[#00000de]">
                   Dig into sweetness of our delicious heart shaped Red velvet & orange cake. fall deeper in love with every bite.
                  </p>
                  <div className="mt-5 flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-[#00000de]">Price At</span>
                      <span className="text-[#00000de] font-bold">
                        ₹ 372 <span className="font-normal">.00</span>
                      </span>
                    </div>
                    <div className="btn">
                      <button className="bg-[#fff] text-[#00000de] w-52 rounded-full h-12 text-lg">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};
export default BannerComponent;
