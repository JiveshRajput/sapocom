import { HeaderBanner } from "@/components/banners/banners";
import SetHeaders from "@/layouts/SetHeaders";
import bgBanner from "@/assets/images/bgImages/careersBanner.jpg";
import JobOpening from "@/components/JobOpening";
export default function Careers() {
  const OpeningsData = [
    {
      department: "Engineering",
      title: "Backend Developer",
      place: "Gurgaon, Haryana",
    },
    {
      department: "Management",
      title: "Interviewer",
      place: "Chandigarh, Punjab",
    },
    {
      department: "Engineering",
      title: "Frontend Developer",
      place: "Gurgaon, Haryana",
    },
    {
      department: "Project Management",
      title: "Associate Project Manager",
      place: "Chandigarh, Punjab",
    },
  ];
  return (
    <>
      <SetHeaders title="Careers | Sapocom" />
      <HeaderBanner
        heading="Join Our Talented Team"
        para="Explore exciting career opportunities and be a part of something amazing!"
        cta="#openings"
        bgImg={bgBanner}
        btnText="View Openings"
      />
      <div class="container mx-auto px-8 xl:px-24 pt-20 pb-8" id="openings">
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
