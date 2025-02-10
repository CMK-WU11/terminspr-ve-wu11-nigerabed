import Image from "next/image";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="bg-[url(/splash-image.jpg)] w-screen bg-cover bg-center h-screen bg-no-repeat relative">
      <Image
        src={logo}
        alt="logo"
        height={200}
        className="absolute bottom-[18em]"
      />

      <div className="flex justify-center ">
        <button className="bg-[#5E2E53] text-white h-[2.5em] w-[9em] rounded-lg absolute bottom-[2.5em] text-[2em]">
          Kom i gang
        </button>
      </div>
    </div>
  );
}
