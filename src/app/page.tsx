import Image from "next/image";
import Link from "next/link";
import barberImg from "../../public/images/barberdark.jpg";
import sharpImg from "../../public/images/sharp.jpg";
import clippersIcon from "../../public/icons/hair-clipper-svgrepo-com.svg";
import toolsIcon from "../../public/icons/haircut-tools-barber-tools-haircut-svgrepo-com.svg";
import scissorsIcon from "../../public/icons/scissors-10-svgrepo-com.svg";
import razorIcon from "../../public/icons/straight-razor-svgrepo-com (1).svg";

export default function Home() {
  return (
    <main className="">
      <div className="flex border-2 border-black lg:h-[600px] lg:mb-[100px] mb-[50px] bg-black">
        <div className="flex flex-row gap-20 lg:max-w-[1200px] m-auto">
          <div className="hidden z-30 lg:flex lg:w-1/3 h-[250px] m-auto overflow-hidden rounded-md grayscale">
            <Image src={sharpImg} alt="sharp" />
          </div>
          <div className="lg:w-2/3 flex flex-col items-center px-16 justify-center lg:h-fit h-[250px] w-full z-40">
            <h1 className="lg:text-5xl font-bold text-white lg:pb-[20px] pb-[10px]">
              Get your new look today
            </h1>
            <p className="text-white">
              At Look Sharp, our expert barbers can craft you a whole new image
            </p>
          </div>
        </div>
        <div className="lg:h-[600px] absolute z-10 w-screen overflow-hidden flex justify-center items-end blur-sm grayscale opacity-50">
          <Image src={barberImg} alt="barber" />
        </div>
      </div>

      <div className="max-w-[1200px] lg:m-auto lg:px-0 mx-2 px-8 mb-[100px] lg:mb-[100px] border-double border-2 border-cFour rounded-md py-[20px]">
        <h1 className="text-5xl flex flex-row pl-[20px] mb-[30px]">
          Services
        </h1>
        <div className="flex flex-col lg:flex-row pl-[20px] lg:pr-[40px] gap-20 mb-[50px]">
          <div className="lg:w-1/3 w-full">
            <h1 className="flex flex-row text-3xl pl-[15px]">
              Cut{" "}
              <span className="ml-[5px]">
                <Image src={scissorsIcon} alt="" height={40} />
              </span>{" "}
            </h1>
            <p className="text-xl pl-[20px] font-semibold italic">$30</p>
            <p className="text-l pl-[20px]">
              Experience precision and style with Look Sharp's hair cutting
              service. Our skilled barbers tailor each cut to suit your unique
              preferences, leaving you feeling confident and refreshed. Trust us
              to deliver excellence in every snip.
            </p>
          </div>
          <div className="lg:w-1/3 w-full">
            <h1 className="flex flex-row text-3xl pl-[15px]">
              Style{" "}
              <span className="ml-[5px]">
                <Image src={toolsIcon} alt="" height={40} />
              </span>{" "}
            </h1>
            <p className="text-xl pl-[20px] font-semibold italic">$30</p>
            <p className="text-l pl-[20px]">
              Elevate your look with Look Sharp's expert hair styling service.
              From modern trends to timeless classics, our talented stylists
              will sculpt your hair to perfection, ensuring you leave our shop
              feeling confident and ready to conquer.
            </p>
          </div>
          <div className="lg:w-1/3 w-full">
            <h1 className="flex flex-row text-3xl pl-[15px]">
              Shave{" "}
              <span className="ml-[5px]">
                <Image src={razorIcon} alt="" height={40} />
              </span>{" "}
            </h1>
            <p className="text-xl pl-[20px] font-semibold italic">$30</p>
            <p className="text-l pl-[20px]">
              Indulge in the ultimate grooming experience with Look Sharp's
              shave and beard services. Relax in the hands of our experienced
              barbers as they expertly sculpt and shape your facial hair,
              leaving you with a smooth, polished finish.
            </p>
          </div>
        </div>
        <div className="flex w-full m-auto items-center justify-center">
          <Link
            href={"/contact"}
            className="p-5 rounded-full text-xl bg-white border-2 border-cSeven text-cSeven shadow-md hover:bg-cSeven hover:border-cSeven hover:text-white transition duration-500 ease-in-out hover:shadow-none"
          >
            Schedule Appointment
          </Link>
        </div>
      </div>
    </main>
  );
}
