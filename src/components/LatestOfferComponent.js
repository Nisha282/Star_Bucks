import React from "react";

const LatestOfferComponent = () => {
  return (
    <div className="p-5 lg:pl-20 lg:pr-20 pb-20">
      <div>
        <span className="text-[#1e3932] font-bold text-2xl">
          Latest Offering
        </span>
      </div>

      <div className=" mt-5 lg:grid  lg:grid-cols-[2fr_2fr_2fr] lg:gap-x-5  flex flex-col justify-center">
        <div
          className="bg-white rounded-lg mt-5 cursor-pointer"
          style={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.35)" }}
        >
          <div>
            <img
              src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/113532.jpg"
              className="object-cover rounded-t-lg h-40 w-full"
              alt="mocha"
            ></img>
          </div>

          <div className="bg-[#f9f9f9] p-7 rounded-b-lg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="1.5"
                stroke="#00754A"
              />
              <circle cx="8" cy="8" r="4" fill="#00754A" />
            </svg>
            <p className="text-[#1e3932] text-lg font-semibold mt-1">
              Peppermint Mocha
            </p>
            <p className="text-xs text-[#6c757d] mt-1">
              SHORT(237 ML) .279 Kcal
            </p>
            <p className="text-[#00000de] text-xs mt-2">
              A chocolatey coffee brverage highlighted with peppermint notes
              that brings up memories of canday canes and holi ...
            </p>
            <div className="mt-5 flex justify-between itemms-center">
              <div>
                <span className="font-semibold text-sm">
                  ₹ 351<span className="text-xs">.75</span>
                </span>
              </div>
              <div>
                <button className="border-2 p-2 w-32 rounded-3xl text-white bg-[#00754a]">
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-lg mt-5 cursor-pointer"
          style={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.35)" }}
        >
          <div>
            <img
              src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/113536.jpg"
              className="object-cover rounded-t-lg h-40 w-full"
              alt="mocha"
            ></img>
          </div>

          <div className="bg-[#f9f9f9] p-7 rounded-b-lg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="1.5"
                stroke="#00754A"
              />
              <circle cx="8" cy="8" r="4" fill="#00754A" />
            </svg>
            <p className="text-[#1e3932] text-lg font-semibold mt-1">
              {" "}
              Iced Peppermint Mocha
            </p>
            <p className="text-xs text-[#6c757d] mt-1">
              TALL(354 ML) .337 Kcal
            </p>
            <p className="text-[#00000de] text-xs mt-2">
              A chocolatey coffee brverage served over ice highlighted with
              peppermint notes that brings up memories of cand ...
            </p>
            <div className="mt-5 flex justify-between itemms-center">
              <div>
                <span className="font-semibold text-sm">
                  ₹ 435<span className="text-xs">.75</span>
                </span>
              </div>
              <div>
                <button className="border-2 p-2 w-32 rounded-3xl text-white bg-[#00754a]">
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-lg mt-5 cursor-pointer"
          style={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.35)" }}
        >
          <div>
            <img
              src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/113539.jpg"
              className="object-cover rounded-t-lg h-40 w-full"
              alt="mocha"
            ></img>
          </div>

          <div className="bg-[#f9f9f9] p-7 rounded-b-lg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="1.5"
                stroke="#00754A"
              />
              <circle cx="8" cy="8" r="4" fill="#00754A" />
            </svg>
            <p className="text-[#1e3932] text-lg font-semibold mt-1">
              Peppermint Mocha Frappuccino
            </p>
            <p className="text-xs text-[#6c757d] mt-1">
              TALL(354 ML) .279 Kcal
            </p>
            <p className="text-[#00000de] text-xs mt-2">
              A delectable blend of Chocolate-pepperminty perfection in every
              cool sip. Made with coffee, Mocha sauce , Peppe ...
            </p>
            <div className="mt-5 flex justify-between itemms-center">
              <div>
                <span className="font-semibold text-sm">
                  ₹ 472<span className="text-xs">.50</span>
                </span>
              </div>
              <div>
                <button className="border-2 p-2 w-32 rounded-3xl text-white bg-[#00754a]">
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LatestOfferComponent;
