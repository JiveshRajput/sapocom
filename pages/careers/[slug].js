import SetHeaders from "@/layouts/SetHeaders";
import { useRouter } from "next/router";
import JobCard from "@/components/JobCard";
import JobForm from "@/components/JobForm";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { setLoadingState } from "@/store/reducers/valueReducer";
import { useDispatch } from "react-redux";
import Loader from "@/layouts/Loader";

function MyPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const [jobData, setJobData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoadingState(true));
        const response = await axios.get(
          `/api/jobs?id=${slug}`
        );
        setJobData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setLoadingState(false));
      }
    };
    if (slug) {
      fetchData();
    }
  }, [dispatch, slug]);
  return (
    <>
      <Loader />
      <SetHeaders title={`${jobData.title} | Sapocom`} />
      <JobCard jobData={jobData} />
      {jobData.requirements && (
        <div className="w-full p-4 py-8 md:py-10">
          <h2 className="max-w-1000 mx-auto text-2xl font-bold text-secondary pb-2">
            {"Job Requirements:"}
          </h2>
          <ul
            className="max-w-900 mx-auto text-lg text-secondary list-disc pl-4"
            dangerouslySetInnerHTML={{ __html: jobData.requirements }}
          />
        </div>
      )}
      <div className="mx-auto max-w-1200 p-4">
        <Link passHref href={"/careers"}>
          <button className="py-1 px-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10">
            &larr; View All Openings
          </button>
        </Link>
      </div>
      <JobForm jobData={jobData} />
    </>
  );
}

export default MyPage;
