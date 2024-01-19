export default function JobCard({ jobData }) {
  return (
    <div className="w-full py-12 md:py-20 bg-gradient-to-r from-[#641977] via-[#390D44] to-[#0D0110] text-white">
      <div className="flex-col space-y-4 p-4">
        <div className="flex justify-center">
          <span className="py-1 px-4 rounded-full border-2 text-sm font-semibold">
            {jobData.department}
          </span>
        </div>
        <h2 className="text-center text-5xl font-bold">{jobData.title}</h2>
        <div className="text-center text-md">{jobData.place}</div>
        <div className="flex justify-center review:px-16 lg:px-32 xl:px-44 ">
          <p className="text-center text-md">{jobData.description}</p>
        </div>
      </div>
    </div>
  );
} 
