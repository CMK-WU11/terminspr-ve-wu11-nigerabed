import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import search from "../../assets/search.png";
import { serverFetch } from "@/lib/server-fetch";
import ActivityCard from "@/components/ActivityCard";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Søge",
    description: "Søge activitere here.",
  };
  

export default async function SogeSide() {
  const data = await serverFetch("http://localhost:4000/api/v1/activities");
  return (
    <>
      <section className="pb-[5em]">
        <PageHeader indhold={<h1 className="text-[1em] text-white">Søg</h1>} />
        <div className="flex justify-center relative">
          <input
            type="text"
            name=""
            id=""
            className="h-[3.5em] w-[85%] bg-[#7D5B75] mt-[.5em]"
          />
          <Image
            src={search}
            alt="search"
            width={35}
            height={35}
            className="absolute right-[3em] top-[1.2em] text-black "
          />
        </div>
        <ul>
          {data.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}
