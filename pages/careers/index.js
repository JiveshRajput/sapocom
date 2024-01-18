import { BannerWithClickHandler } from "@/components/banners/banners";
import SetHeaders from "@/layouts/SetHeaders";
import bgBanner from "@/assets/images/bgImages/careersBanner.jpg";
import JobOpening from "@/components/JobOpening";
import OpeningsData from "./dummyData";
export default function Careers() {
  const scrollLogic = () => {
    // Smooth scroll to the element with id "openings"
    const targetElement = document.getElementById("openings");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <SetHeaders title="Careers | Sapocom" />

      {/* Banner */}
      <BannerWithClickHandler
        heading="Join Our Talented Team"
        para="Explore exciting career opportunities and be a part of something amazing!"
        bgImg={bgBanner}
        clickHandler={scrollLogic}
      />

      {/* Job Openings */}
      <div class="container mx-auto px-8 xl:px-24 py-20" id="openings">
        <h1 class="mb-4 text-center text-4xl font-bold">Join Our Team</h1>
        <p class="mb-8 text-center text-lg text-gray-600">
          Explore exciting opportunities to work with us.
        </p>
        <div class="flex-col space-y-4">
          {OpeningsData.map((opening, ind) => {
            return (
              <JobOpening
                title={opening.title}
                department={opening.department}
                place={opening.place}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
