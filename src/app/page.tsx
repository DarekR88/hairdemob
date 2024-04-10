import Image from "next/image";
import barberImg from "../../public/images/barberdark.jpg";
import grayImg from "../../public/images/gray.jpg";

export default function Home() {
  return (
    <main className="">
      <div className="lg:h-[600px] w-screen overflow-hidden flex justify-center items-end blur grayscale">
        <Image src={barberImg} alt="barber" />
      </div>
    </main>
  );
}
