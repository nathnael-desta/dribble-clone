import Image from "next/image";
import down from "../assets/down.svg";
import filter from "../assets/filter.svg";
import heart from "../assets/heart.svg";
import seen from "../assets/seen.svg";
import accountIcon from "../assets/accountIcon.png";
import itemsCSS from "../styles/items.module.css";
import { items } from "../data.js";

const Items = () => {
  return (
    <>
      <div className=" relative before:content-[''] before:left-0 before:right-0 before:border-t before:bg-[#dcdce4] before:absolute before:bottom-[-25px] flex justify-between px-8 pt-14">
        <div className="flex gap-5 px-5 py-3 cursor-pointer hover:shadow-custom-small rounded-lg outline outline-[1px] outline-[#dcdce4]">
          <div>Popular</div>
          <Image src={down} />
        </div>
        <div className="flex gap-2 px-5 py-3 cursor-pointer rounded-[30px] hover:shadow-custom-small outline outline-[1px] outline-[#dcdce4]">
          <Image src={filter} />
          <div>Filters</div>
        </div>
      </div>
      <div
        className={`${itemsCSS.scroll} flex gap-3 px-3 pb-0 pt-3 overflow-x-auto text-nowrap font-semibold text-lg`}
      >
        <div className="px-4 cursor-pointer hover:opacity-60 transition ease duration-300">
          Discover
        </div>
        <div className="px-4 cursor-pointer hover:opacity-60 transition ease duration-300">
          Animation
        </div>
        <div className="px-4 cursor-pointer hover:opacity-60 transition ease duration-300">
          Branding
        </div>
        <div className="px-4 cursor-pointer hover:opacity-60 transition ease duration-300">
          Illustration
        </div>
        <div className="px-4 cursor-pointer hover:opacity-60 transition ease duration-300">
          Mobile
        </div>
        <div className="px-4 cursor-pointer hover:opacity-60 transition ease duration-300">
          Print
        </div>
        <div className="px-4 cursor-pointer hover:opacity-60 transition ease duration-300">
          Product Design
        </div>
        <div className="px-4 cursor-pointer hover:opacity-60 transition ease duration-300">
          Typography
        </div>
        <div className="px-4 cursor-pointer hover:opacity-60 transition ease duration-300">
          Web Design
        </div>
      </div>
      <div>
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(275px, min(100%, 600px)))",
          }}
          className="grid gap-y-20 gap-x-4 w-full"
        >
          {items.map((item, index) => (
            <div key={index} className="relative rounded shadow-md pb-[60px] aspect-[134/100]">
            <Image src={item.src} alt={item.name} fill={true} objectFit="contain"/>
              <div className="absolute flex items-center justify-between bottom-[-40px] left-0 right-0">
                <div className="flex gap-5 items-center">
                  <Image src={accountIcon} alt="account icon" className="w-[30px] h-[30px]"/>
                  <div>{item.name}</div>
                  {item.type === "PRO" ? (
                    <div className="flex items-center justify-center bg-[#F3F3F6] font-semibold rounded-full px-3 py-1">PRO</div>
                  ) : item.type === "TEAM" ? (
                    <div className="flex items-center justify-center bg-[#F3F3F6] font-semibold rounded-full px-3 py-1">TEAM</div>
                  ) : null}
                </div>
                <div className='flex flex-row gap-3'>
                  <div className="flex gap-1">
                    <Image src={heart} alt="heart icon" />
                    <div>{item.likes}</div>
                  </div>
                  <div className='flex gap-1'>
                    <Image src={seen} alt="views icon" />
                    <div>{item.views}k</div> 
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Items;
