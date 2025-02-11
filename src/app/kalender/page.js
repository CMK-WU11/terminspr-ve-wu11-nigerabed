import KalenderCard from "@/components/KalenderCard";
import PageHeader from "@/components/PageHeader";
import { serverFetch } from "@/lib/server-fetch";
import { cookies } from "next/headers";

export default async function kalender(){
     const cookieStore = await cookies();
        const token = cookieStore.get("landrup_token");
        const userId = cookieStore.get("landrup_userid");
try {
        const res = await fetch(`http://localhost:4000/api/v1/users/${userId.value}`, {
            "method": "GET",
            "headers": {
              "Authorization":  "Bearer " + token.value,
            }
        });
        console.log("res", res);
        
        const data = await res.json()

        return(
            <>
            <PageHeader indhold={"Kalender"}/>
            <KalenderCard userData={data}/>
            </>
        )
    } catch(err) {

        console.error(err)
    }
   
}