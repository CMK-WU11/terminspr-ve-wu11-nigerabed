import Image from "next/image";
import logo from "../assets/logo.png";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="bg-[url(/splash-image.jpg)] w-screen bg-cover bg-center h-screen bg-no-repeat relative">
      <Image
        src={logo}
        alt="logo"
        height={200}
        className="absolute bottom-[18em]"
      />

      <Button text={"Kom i gang"}/>
    </div>
  );
}
