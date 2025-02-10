import ActivityCard from "@/components/ActivityCard"
import { serverFetch } from "@/lib/server-fetch"
export default async function activitier(){
    const data = await serverFetch("http://localhost:4000/api/v1/activities")
    return(
        <>
        <h1 className="text-[3.5em] text-white">Activitier</h1>
        <ul>
				{data.map(activity => <ActivityCard key={activity.id} activity={activity} />)}
			</ul>

        </>
    )
}