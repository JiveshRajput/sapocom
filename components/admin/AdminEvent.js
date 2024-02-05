import Image from "next/image";
import edit from "@/assets/images/icons/edit.svg";
import dlt from "@/assets/images/icons/delete.svg";
import {
  setDeleteModalState,
  setEventModalState,
  setModalId,
  setModalType,
} from "@/store/reducers/valueReducer";
import { useDispatch } from "react-redux";
import { formatDate } from "./utils/formatDate";
export default function AdminEvent({ eventData }) {
  const { title, description, eventDate, eventTime } = eventData;
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(setDeleteModalState(true));
    dispatch(setModalType("events"));
    dispatch(setModalId(eventData._id));
  };
  const editHandler = () => {
    dispatch(setEventModalState(true));
    dispatch(setModalType("Edit"));
    dispatch(setModalId(eventData._id));
  };
  return (
    <div className="flex flex-wrap justify-between rounded-lg bg-white p-4 px-5 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:shadow-lg border gap-4 max-sm:justify-center max-sm:flex-col">
      <div className="flex-col max-sm:text-center">
        <h2 className="text-xl font-semibold mb-2 text-primary">{title}</h2>
        <p className="text-gray-500 text-xs">
          {formatDate(eventDate)} - {eventTime}
        </p>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex flex-row items-center gap-2 justify-center">
        <div
          onClick={editHandler}
          className="py-1 px-2 w-[40px] text-sm cursor-pointer text-primary rounded-full font-semibold hover:bg-primary/10"
        >
          <Image src={edit} className="h-auto w-auto" alt="header_logo" />
        </div>
        <div
          onClick={deleteHandler}
          className="py-1 px-2 w-[40px] text-sm cursor-pointer text-primary rounded-full font-semibold hover:bg-primary/10"
        >
          <Image src={dlt} className="h-auto w-auto" alt="header_logo" />
        </div>
      </div>
    </div>
  );
}
