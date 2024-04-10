import Image from "next/image";
import barberImg from "../../public/images/barberdark.jpg";
import grayImg from "../../public/images/gray.jpg";

export default function Home() {
  return (
    <main className="">
      
      <div className="flex border-2 border-black">
        <div className="lg:h-[600px] w-screen overflow-hidden flex justify-center items-end blur-sm grayscale">
          <Image src={barberImg} alt="barber" />
        </div>
      </div>
    </main>
  );
}
