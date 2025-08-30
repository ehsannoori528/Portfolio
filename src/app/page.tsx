import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full items-center justify-between flex">
 

    <div className="flex flex-col ml-20 mt-30 gap-3">
      <span className="text-4xl font-bold font-serif">Hi</span>
      <span className="text-4xl font-bold font-serif">I am <span className="text-pink-500 font-serif">Ehsan</span></span>
      <h1 className="text-4xl font-bold font-serif">a Frontend Develper</h1>
    <p className="w-170">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
    </div>
    <Image className="w-80 rounded-full mt-30 mr-30" src={"/ehsanimg.jpg"} alt={""} width={800} height={800}/>
   </div>

  );

}