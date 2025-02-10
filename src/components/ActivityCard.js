import Image from "next/image";
import Link from "next/link";

export default function ActivityCard({activity}){
    return(
        <>
        <section className="p-[2em]">
            <h2>{activity.name}</h2>

      <Link href={`/activitier/${activity.id}`}>

      <div>
        <Image src={activity.asset.url} height={150} width={150}alt="activity-pic" className="h-[25em] w-full rounded-l-lg rounded-tr-lg"  />
      </div>
        {/* <Image
          src={activity.name}
          height={250}
          width={200}
          alt="activity"
          className="h-[15em] w-[100%]"
        />
       */}

{/* 
      <div className="pl-[2em] pt-[1em] border-b-2 pb-[1em]">
        <address className="font-semibold mb-[1em]">{bolig.adress1}</address>
        <p className="text-xs">
          {bolig.postalcode} {bolig.city}
        </p>
        <span>
          {bolig.type}.
          <span className="text-xs">Ejerudgift : {bolig.netto} kr</span>
        </span>
      </div> */}
      </Link>
    </section>
        </>
    )
}