import KalenderCard from "@/components/KalenderCard";
import PageHeader from "@/components/PageHeader";
import { serverFetch } from "@/lib/server-fetch";
import { cookies } from "next/headers";

export default async function kalender(){
     const cookieStore = await cookies();
        const token = cookieStore.get("landrup_token");
        const userId = cookieStore.get("landrup_userid");
        
        const userData = await serverFetch(`http://localhost:4000/api/v1/users/${userId}`, {
            "method": "GET",
            "headers": {
              "Authorization":  "Bearer " + token.value,
            }
        });
    return(
        <>
        <PageHeader indhold={"Kalender"}/>
        <KalenderCard userData={userData}/>
        </>
    )
}