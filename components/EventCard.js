import { formatDate } from "./admin/utils/formatDate";

export default function EventCard({ eventData }) {
  const { title, description, eventDate, eventTime } = eventData;

  
  return (
    <div className="flex flex-wrap justify-between rounded-lg bg-white p-4 px-5 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:shadow-lg border gap-4 max-sm:justify-center max-sm:flex-col">
      <div className="flex-col max-sm:text-center">
        <h2 className="text-xl font-semibold mb-1 text-primary">{title}</h2>
        <p>{description}</p>
        <p className="text-gray-500 text-xs">
          {formatDate(eventDate)} - {eventTime}
        </p>
      </div>
    </div>
  );
}
