import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  getEventModalState,
  getModalId,
  getModalType,
  setEventModalState,
  setLoadingState,
} from "@/store/reducers/valueReducer";
import ModalWrapper from "@/layouts/ModalWrapper";
import axios from "axios";
import { useRouter } from "next/router";
import { formatDate, parseDate } from "../admin/utils/formatDate";
import {
  convertTo12HourFormat,
  convertTo24HourFormat,
} from "../admin/utils/formatTime";

export default function EventModal() {
  const router = useRouter();
  const dispatch = useDispatch();
  const eventModalOpen = useSelector(getEventModalState);
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    description: "",
    eventTime: "",
    eventDate: "",
  });
  const id = useSelector(getModalId);
  const type = useSelector(getModalType);

  useEffect(() => {
    const fetchData = async () => {
      let url = `/api/events?_id=${id}`;
      try {
        const res = await axios.get(url);
        res.data[0].eventDate = parseDate(res.data[0].eventDate);
        res.data[0].eventTime = convertTo24HourFormat(res.data[0].eventTime);
        setForm(res.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // if edit , then first fetch the previous data
    if (type == "Edit") {
      fetchData();
    } else {
      setForm({
        title: "",
        description: "",
        eventTime: "",
        eventDate: "",
      });
    }
    setIsLoading(false);
  }, [eventModalOpen]);
  async function createEvent(e) {
    e.preventDefault();
    const createUrl = `/api/events`;
    try {
      dispatch(setLoadingState(true));
      form["eventDate"] = formatDate(form["eventDate"]);
      form["eventTime"] = convertTo12HourFormat(form["eventTime"]);
      await axios.post(createUrl, form);
      closeModal(true);
      router.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoadingState(false));
    }
  }
  async function editEvent(e) {
    e.preventDefault();
    const editUrl = `/api/events?id=${id}`;
    try {
      dispatch(setLoadingState(true));
      form["eventDate"] = formatDate(form["eventDate"]);
      form["eventTime"] = convertTo12HourFormat(form["eventTime"]);
      await axios.put(editUrl, form);
      closeModal(true);
      router.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoadingState(false));
    }
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    if (type == "Edit") editEvent(e);
    else createEvent(e);
  }

  function closeModal() {
    setForm({
      title: "",
      description: "",
      eventTime: "",
      eventDate: "",
    });
    dispatch(setEventModalState(false));
  }
  return (
    <>
      {eventModalOpen && !isLoading && (
        <ModalWrapper closeModal={closeModal}>
          <div className="max-w-800 rounded-lg bg-white pt-4 px-4 pb-2 x-sm:pb-4 md:pb-0 relative">
            {/* close modal button */}
            <div
              className="absolute right-4 top-4 md:right-6 md:top-6 bg-black p-2 z-50 rounded-sm cursor-pointer opacity-30 hover:opacity-100 transition-[opacity]"
              onClick={closeModal}
            >
              <Image
                src={require("../../assets/images/icons/cross-menu.svg")}
                width={15}
                height={15}
                alt="hamburger"
              />
            </div>
            <div className="md:m-4">
              <h1 className="text-secondary font-semibold text-xl review:text-2xl md:text-3xl max-md:text-center">
                {type} Event
              </h1>
              <form
                className="max-w-800 mx-auto md:p-4"
                onSubmit={formSubmitHandler}
              >
                <label htmlFor="title" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">
                    Event Title *
                  </span>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Title"
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value.toUpperCase() })
                    }
                  />
                </label>

                <label htmlFor="description" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">
                    Event Description *
                  </span>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    required
                    placeholder="Description"
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    value={form.description}
                    rows={6}
                    style={{ resize: "none" }}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </label>

                <label htmlFor="eventDate" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">
                    Event Date *
                  </span>
                  <input
                    type="date"
                    name="eventDate"
                    id="eventDate"
                    required
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    value={form.eventDate}
                    onChange={(e) =>
                      setForm({ ...form, eventDate: e.target.value })
                    }
                  />
                </label>

                <label htmlFor="eventTime" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">
                    Event Time *
                  </span>
                  <input
                    type="time"
                    name="eventTime"
                    id="eventTime"
                    required
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent"
                    value={form.eventTime}
                    onChange={(e) =>
                      setForm({ ...form, eventTime: e.target.value })
                    }
                  />
                </label>
                <div>
                  <button
                    type="submit"
                    className="py-2 px-4 w-full bg-[#641977] text-white rounded-lg hover:opacity-100 hover:bg-[#390D44] transition duration-300 "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}
