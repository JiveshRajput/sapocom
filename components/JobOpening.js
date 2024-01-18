import Link from "next/link";

export default function JobOpening({ title, department, place }) {
  const slug = title.replace(/ /g, "-");
  return (
    <div class="flex flex-wrap justify-between  rounded-lg bg-white p-6 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:border-blue-400 hover:shadow-xl">
      <div class="flex-col m-2">
        <p class="text-green-500 text-sm">{department.toUpperCase()}</p>
        <h2 class="text-xl font-semibold">{title}</h2>
        <p class="text-gray-500 text-sm">{place}</p>
      </div>
      <div class="flex flex-row items-center">
        <Link passHref href={`/careers/${slug}`}>
          <button class="py-1 px-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10">
            View Opening
          </button>
        </Link>
      </div>
    </div>
  );
}
