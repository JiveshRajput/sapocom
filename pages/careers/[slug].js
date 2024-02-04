import SetHeaders from "@/layouts/SetHeaders";
import { useRouter } from "next/router";
import JobCard from "@/components/JobCard";
import JobForm from "@/components/JobForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { setLoadingState } from "@/store/reducers/valueReducer";
import { useDispatch } from "react-redux";
import Loader from "@/layouts/Loader";
import { MAIN_URL } from '@/configs/config';

function MyPage() {
  // function MyPage({ jobData = {} }) {
  // console.log(jobData);
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const [jobData, setJobData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoadingState(true));
        const response = await axios.get(`/api/jobs?slug=${slug}`);
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
      <SetHeaders title={`${jobData?.title} | Sapocom`} />

      {/* Job info */}
      <JobCard jobData={jobData} />

      {/* Job Requirements */}
      {jobData.details && (
        <div className="w-full ">
          <div className="max-w-1200 mx-auto py-8 md:py-10 px-4">
            <h2 className="text-2xl font-bold text-secondary pb-2">
              {"About this position"}
            </h2>
            <div
              className="text-base text-black opacity-70"
              id="custom"
              dangerouslySetInnerHTML={{ __html: jobData.details }}
            />
          </div>
        </div>
      )}

      {/* Back to careers page button */}
      {/* <div className="mx-auto max-w-1200 px-2">
        <Link passHref href={"/careers"}>
          <button className="py-1 px-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10">
            &larr; View All Openings
          </button>
        </Link>
      </div> */}

      {/* form to apply for job */}
      <JobForm jobData={jobData} />
    </>
  );
}

// export async function getServerSideProps({ request, response, resolvedUrl }) {
//   // console.log(resolvedUrl);
//   const slug = resolvedUrl.split('/')[2];
//   // console.log(slug);
//   let data;
//   try {
//     // Fetch data from external API
//     const res = await fetch(`${MAIN_URL}/api/jobs?slug=${slug}`)
//     data = await res.json();
//     return { props: { jobData: data?.[0], error: '', isError: false } }
//   } catch (error) {
//     return { props: { jobData: {}, error: error.message, isError: true } }
//   }
// }

export default MyPage;
