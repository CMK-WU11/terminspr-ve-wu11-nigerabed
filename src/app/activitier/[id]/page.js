import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { serverFetch } from "@/lib/server-fetch";
import Image from "next/image";

export const metadata = {
    title: "Details-Activities",
    description: "se activiti detailer here.",
  };
  

export default async function ActivityDetails({ params }) {
  const data = await serverFetch(
    `http://localhost:4000/api/v1/activities/${params.id}`
  );
  return (
    <>
      <section>
        <div className="relative">
          <Image
            src={data.asset.url}
            alt="activity"
            width={250}
            height={150}
            className="h-[30em] w-full object-cover"
          />
          <div className="pl-[5em] absolute bottom-[2em] left-[2em]">
            <Button text={"Tilmeld"} />
          </div>
        </div>
        <div className="p-[2em]">
          <h2 className="text-white text-[1.9em] font-semibold">{data.name}</h2>
          <div className="text-white text-[1.4em]">
            {data.minAge}-{data.maxAge} år
            <p className="text-[18px]">{data.description}</p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
