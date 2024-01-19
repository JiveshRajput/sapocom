import { BannerWithClickHandler } from "@/components/banners/banners";
import SetHeaders from "@/layouts/SetHeaders";
import bgBanner from "@/assets/images/bgImages/careersBanner.jpg";
import JobOpening from "@/components/JobOpening";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "@/layouts/Loader";
import { useDispatch } from "react-redux";
import { setLoadingState } from "@/store/reducers/valueReducer";
export default function Careers() {
  const [OpeningsData, setOpeningsData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoadingState(true));
        const response = await axios.get(`/api/jobs`);
        setOpeningsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setLoadingState(false));
      }
    };
    fetchData();
  }, [dispatch]);
  const scrollLogic = () => {
    // Smooth scroll to the element with id "openings"
    const targetElement = document.getElementById("openings");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Loader />
      <SetHeaders title="Careers | Sapocom" />
      {/* Banner */}
      <BannerWithClickHandler
        heading="Join Our Talented Team"
        para="Explore exciting career opportunities and be a part of something amazing!"
        bgImg={bgBanner}
        clickHandler={scrollLogic}
      />

      {/* Job Openings */}
      {OpeningsData.length > 0 ? (
        <div className="w-full py-12 md:py-20" id="openings">
          <div className="max-w-800 mx-auto">
            <h1 className="mb-4 text-center text-4xl font-bold">
              Join Our Team
            </h1>
            <p className="mb-8 text-center text-lg text-gray-600">
              Explore exciting opportunities to work with us.
            </p>
            <div className="flex-col space-y-4">
              {OpeningsData.map((opening, ind) => {
                return <JobOpening jobData={opening} key={ind} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-800 mx-auto">
          <div className="max-w-800 mx-auto">
            <p className="my-8 text-center text-lg text-gray-600">
              Currently, No Open Positions - Stay Tuned for Exciting Career
              Opportunities Ahead!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
