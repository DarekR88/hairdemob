import Image from "next/image";
import barberImg from "../../public/images/barberdark.jpg";
import sharpImg from "../../public/images/sharp.jpg";

export default function Home() {
  return (
    <main className="">
      <div className="flex border-2 border-black lg:h-[600px] lg:mb-[100px] bg-black">
        <div className="flex flex-row gap-20 lg:max-w-[1200px] m-auto">
          <div className="hidden z-50 lg:flex lg:w-1/3 h-[250px] m-auto overflow-hidden">
            <Image src={sharpImg} alt="sharp" />
          </div>
          <div className="lg:w-2/3 w-full z-50">
            <h1 className="lg:text-5xl font-bold text-white">Get your new look today</h1>
            <p className="text-white">At Good Look our expert barbers can craft you a whole new image</p>
          </div>
        </div>

        <div className="lg:h-[600px] absolute z-10 w-screen overflow-hidden flex justify-center items-end blur-sm grayscale opacity-50">
          <Image src={barberImg} alt="barber" />
        </div>
      </div>
    </main>
  );
}
