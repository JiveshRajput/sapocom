import Link from "next/link";

export default function JobCard({ jobData }) {
  return (
    <div className="container flex-col space-y-2 mx-auto px-8 xl:px-24 py-20">
      <div>
        <Link passHref href={"/careers"}>
          <button className="py-1 px-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10">
            &larr; View All Openings
          </button>
        </Link>
      </div>
      <div className="flex-col space-y-4 p-4">
        <div className="flex justify-center">
          <span className="py-1 px-4 rounded-full text-green-500 border-2 border-green-500 text-sm font-semibold">
            {jobData.department.toUpperCase()}
          </span>
        </div>
        <div className="text-center text-5xl font-bold">{jobData.title}</div>
        <div className="text-center text-gray-500 text-md">{jobData.place}</div>
        <div className="flex justify-center review:px-16 lg:px-32 xl:px-44 ">
          <p className="text-center text-md">{jobData.description}</p>
        </div>
      </div>
    </div>
  );
}
