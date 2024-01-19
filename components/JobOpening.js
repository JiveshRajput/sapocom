import Link from "next/link";

export default function JobOpening({ jobData }) {
  const slug = jobData._id;
  return (
    <div className="flex flex-wrap justify-between  rounded-lg bg-white p-6 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:border-blue-400 hover:shadow-xl">
      <div className="flex-col m-2">
        <p className="text-green-500 text-sm">{jobData.department.toUpperCase()}</p>
        <h2 className="text-xl font-semibold">{jobData.title}</h2>
        <p className="text-gray-500 text-sm">{jobData.place}</p>
      </div>
      <div className="flex flex-row items-center">
        <Link passHref href={`/careers/${slug}`}>
          <button className="py-1 px-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10">
            View Opening
          </button>
        </Link>
      </div>
    </div>
  );
}
