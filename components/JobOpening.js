export default function JobOpening({ title, department, place }) {
  return (
    <div class="flex justify-between rounded-md bg-white p-6 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:border-blue-400 hover:shadow-xl">
      <div class="flex-col">
        <p class="mb-2 text-green-500">{department.toUpperCase()}</p>
        <h2 class="mb-2 text-xl font-medium">{title}</h2>
        <p class="mb-2 text-gray-600">{place}</p>
      </div>
      <div class="flex flex-row items-center">
        <button class="rounded-full border-2 border-blue-500 bg-white px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
          View Opening
        </button>
      </div>
    </div>
  );
}
