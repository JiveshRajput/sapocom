import Image from "next/image";
import dlt from "@/assets/images/icons/delete.svg";
import { setDeleteModalState, setModalId, setModalType } from "@/store/reducers/valueReducer";
import { useDispatch } from "react-redux";
export default function ApplicantData({ data }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(setDeleteModalState(true));
    dispatch(setModalType('applicants'));
    dispatch(setModalId(data._id));
  }
  return (
    <>
      <div className="flex text-gray text-gray-600 max-w-[350px] flex-col rounded-lg bg-white py-4 px-2 review:px-5 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:shadow-lg border gap-2 max-sm:justify-center max-sm:flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-secondary">{data.name}</h3>
          <div onClick= {deleteHandler} className="py-1 cursor-pointer  w-[40px] text-sm text-primary rounded-full font-semibold hover:bg-primary/10">
            <Image src={dlt} className="h-auto w-auto" alt="header_logo" />
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="hidden x-sm:block font-semibold">Email</div> <div>{data.email}</div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="hidden x-sm:block font-semibold">Mobile</div>
           <div>{data.mobileNumber}</div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="hidden x-sm:block font-semibold">Highest Graduation</div> <div>{data.highestGraduation}</div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="hidden x-sm:block font-semibold">Relevant Experience</div> <div>{data.relevantExperience}</div>
        </div>
      </div>
    </>
  );
}
