import SetHeaders from "@/layouts/SetHeaders";
import { useRouter } from "next/router";
import OpeningsData from "./dummyData";
import JobCard from "@/components/JobCard";
import JobForm from "@/components/JobForm";
function MyPage() {
  const router = useRouter();
  const { slug } = router.query;
  let jobTitle = slug && slug.replace(/-/g, " ");
  let jobData = slug && OpeningsData.find(opening => opening.title === jobTitle);
  return slug && (
    <>
      <SetHeaders title={jobTitle + " | Sapocom"} />
      <JobCard jobData={jobData} />
      <JobForm jobData={jobData} />
    </>
  );
}

export default MyPage;
