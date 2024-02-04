import { BannerWithClickHandler } from "@/components/banners/banners";
import SetHeaders from "@/layouts/SetHeaders";
import bgBanner from "@/assets/images/bgImages/eventsBanner.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";

export default function Events() {
  const [EventsData, setEventsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/events`);
        setEventsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const scrollLogic = () => {
    // Smooth scroll to the element with id "events"
    const targetElement = document.getElementById("events");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SetHeaders title="Careers | Sapocom" />
      {/* Banner */}
      <BannerWithClickHandler
        heading="Discover What's Happening"
        para="Stay informed about our upcoming events and join the excitement!"
        bgImg={bgBanner}
        btnText="View Events"
        clickHandler={scrollLogic}
      />

      {/* Events */}
      <div className="w-full py-20 p-4" id="events">
        <div className="max-w-1200 mx-auto">
          <h1 className="mb-2 text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Upcoming Events
          </h1>
          <p className="mb-8 text-center text-base text-black">
            Stay ahead of the curve with our upcoming events - mark your
            calendar for unforgettable experiences!
          </p>
          {isLoading ? (
            <p className="text-2xl text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-4xl z-40 font-semibold">
              Loading...
            </p>
          ) : (
            <>
              {EventsData && EventsData.length > 0 ? (
                <div className="mx-auto">
                  <div className="flex-col space-y-4">
                    {EventsData.map((opening, ind) => {
                      return <EventCard eventData={opening} key={ind} />;
                    })}
                  </div>
                </div>
              ) : (
                <div className="max-w-1200 mx-auto">
                  <p className="text-lg text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-xl z-40 font-semibold">
                    Currently, there are no upcoming events scheduled. Stay
                    tuned for future updates!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
