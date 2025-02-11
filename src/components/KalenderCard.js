

export default function KalenderCard({userData}){
   
    return(
        <>
        <div className="bg-white w-[90%] flex flex-col justify-center items-start h-[8em]">
            <h2 className="text-black font-semibold text-[2em]">{userData.activities.name}</h2>
            <p>{userData.activities.time}</p>

        </div>
        </>
    )
}