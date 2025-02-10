export default function Button({text}) {
  return (
    <div className="flex justify-center ">
      <button className="bg-[#5E2E53] text-white h-[2.5em] w-[9em] rounded-lg absolute bottom-[2.5em] text-[2em]">
      {text}
      </button>
    </div>
  );
}
