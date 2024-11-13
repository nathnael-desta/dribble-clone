import Image from "next/image";
import dropdown from "../assets/dropdown.svg";
import dribble from "../assets/dribbble.svg";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Navigation = () => {
  return (
    <div className="flex justify-between p-5 w-full items-center">
      <div className="flex gap-6">
        <Image
          className="cursor-pointer"
          src={dropdown}
          alt="dropdown icon"
          width={35}
        />
        <Image src={dribble} alt="dropdown icon" width={100} />
      </div>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "w-12 h-12", // Adjusts avatar size
              userButtonOuter: "w-14 h-14", // Adjusts overall button container size
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <SignInButton
          className="bg-black text-white px-6 py-3 rounded-full font-bold cursor-pointer"
          mode="modal"
        />
      </SignedOut>

      {/* <div className='bg-black text-white px-6 py-3 rounded-full font-bold cursor-pointer'>Log in</div> */}
    </div>
  );
};

export default Navigation;
