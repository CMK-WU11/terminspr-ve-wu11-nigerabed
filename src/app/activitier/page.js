export const metadata = {
  title: "Activities",
  description: "Forskellige activitere here.",
};

import ActivityCard from "@/components/ActivityCard";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { serverFetch } from "@/lib/server-fetch";

export default async function Activitier() {
  const data = await serverFetch("http://localhost:4000/api/v1/activities");
  return (
    <>
      <main className="mb-[5em]">
        <PageHeader
          indhold={<h1 className="text-[1em] text-white">Activitier</h1>}
        />
        <ul>
          {data.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
