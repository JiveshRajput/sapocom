import SetHeaders from "@/layouts/SetHeaders";
import { useRouter } from "next/router";
import OpeningsData from "./dummyData";
import JobCard from "@/components/JobCard";
import JobForm from "@/components/JobForm";
import Link from "next/link";
function MyPage() {
  const router = useRouter();
  const { slug } = router.query;
  let jobTitle = slug && slug.replace(/-/g, " ");
  let jobData =
    slug && OpeningsData.find((opening) => opening.title === jobTitle);
  return (
    slug && (
      <>
        <SetHeaders title={jobTitle + " | Sapocom"} />
        <JobCard jobData={jobData} />
        <div className="w-full p-4 py-8 md:py-10">
          <h2 className="max-w-1000 mx-auto text-2xl font-bold text-secondary pb-2">
            {"Job Requirements:"}
          </h2>
          <ul
            className="max-w-900 mx-auto text-lg text-secondary list-disc pl-4"
            dangerouslySetInnerHTML={{ __html: jobData.requirements }}
          />
        </div>
        <div className="mx-auto max-w-1200 p-4">
          <Link passHref href={"/careers"}>
            <button className="py-1 px-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10">
              &larr; View All Openings
            </button>
          </Link>
        </div>
        <JobForm jobData={jobData} />
      </>
    )
  );
}

export default MyPage;
