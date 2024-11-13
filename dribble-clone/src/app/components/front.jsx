import Image from "next/image";
import search from "../assets/search.svg";
import down from "../assets/down.svg";

const Front = () => {
  return (
    <div className="flex flex-col px-6 gap-7">
      <div className="text-center text-4xl font-medium leading-10">
        Discover the world's top designers
      </div>
      <div className="text-center text-lg font-extralight">
        Explore work from the most talented and accomplished designers ready to
        take on your next project
      </div>
      <div className="relative w-full group">
        <input
          type="text"
          className="bg-[#F3F3F6] w-full h-[70px] rounded-full flex items-center placeholder-[#000000aa] pl-6 outline-none group-hover:bg-white group-hover:outline-[#FAEBF9] group-hover:outline-3"
          placeholder="What are you looking for?"
        />
        <div className="absolute flex items-center justify-center cursor-pointer top-[12px] right-[9px] w-[47px] h-[47px] bg-[#EA4D8A] rounded-full hover:opacity-90">
          <Image className="mt-[-2px]" src={search} width={20} />
        </div>
        <div className="flex gap-1 cursor-pointer group absolute top-[22px] right-[70px]">
          <div className="font-semibold text-lg group-hover:opacity-70">Shots</div>
          <Image className="" src={down} width={15} />
        </div>
      </div>
    </div>
  );
};

export default Front;
