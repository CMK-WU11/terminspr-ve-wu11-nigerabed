import PageHeader from "@/components/PageHeader";

import { serverFetch } from "@/lib/server-fetch";
import ActivityCard from "@/components/ActivityCard";
import Footer from "@/components/Footer";
import SearchField from "@/components/SearchFeield";

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
       <SearchField />
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
