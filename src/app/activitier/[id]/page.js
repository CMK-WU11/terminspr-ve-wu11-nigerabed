import Button from "@/components/Button";
import Footer from "@/components/Footer";
import TidmeldButton from "@/components/TidmeldButton";
import { serverFetch, serverFetchWithAuth } from "@/lib/server-fetch";
import { cookies } from "next/headers";
import Image from "next/image";

export const metadata = {
  title: "Details-Activities",
  description: "se activiti detailer here.",
};

export default async function ActivityDetails({ params }) {
  const cookieStore = await cookies();

  const activityId = params?.id;

  const data = await serverFetch(
    `http://localhost:4000/api/v1/activities/${activityId}`
  );

  const userId = cookieStore.get("landrup_userid");
  const token = cookieStore.get("landrup_token");
  let isTilmeldt = false;

  if(userId && token){
    const userData = await serverFetchWithAuth(
      `http://localhost:4000/api/v1/users/${userId.value}`,
      token.value
    );
  
    const tilmeldtActivity = userData.activities.find((act) => activityId == act.id);
    
    if (tilmeldtActivity) {
      isTilmeldt = true;
    } 
  }

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
          {!isTilmeldt ? <TidmeldButton activityId={activityId} /> : <div className="absolute bottom-7 left-[6em]"> <Button text ={"Forlad"} /> </div>}
        </div>
        <div className="p-[2em]">
          <h2 className="text-white text-[1.9em] font-semibold">{data.name}</h2>
          <div className="text-white text-[1.4em]">
            {data.minAge}-{data.maxAge} år
            <p className="text-[18px]">{data.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
