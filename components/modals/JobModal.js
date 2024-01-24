import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  getJobModalState,
  getModalId,
  getModalType,
  setJobModalState,
  setLoadingState,
} from "@/store/reducers/valueReducer";
import ModalWrapper from "@/layouts/ModalWrapper";
import { MAIN_URL } from "@/configs/config";

export default function JobModal() {
  const dispatch = useDispatch();
  const jobModalOpen = useSelector(getJobModalState);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const id = useSelector(getModalId);
  const type = useSelector(getModalType);
  async function formSubmitHandler(e) {
    e.preventDefault();
    try {
      dispatch(setLoadingState(true));
      const url = `${MAIN_URL}/api/send-mail-to-admin`;
      const jsonResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const response = await jsonResponse.json();
      dispatch(setLoadingState(false));
      closeModal(true);
      setTimeout(() => {
        alert("Form Submitted Successfully!!!");
      }, 10);
      setForm({ name: "", email: "", number: "", message: "" });
    } catch (error) {
      console.log(error);
      dispatch(setLoadingState(false));
    }
  }

  function closeModal() {
    dispatch(setJobModalState(false));
  }

  return (
    <>
      {jobModalOpen && (
        <ModalWrapper closeModal={closeModal}>
          <div className="max-w-800 rounded-lg bg-white p-4 relative">
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
            {/* Contact Form*/}
            <div className="md:m-4">
              <h1 className="text-secondary font-semibold text-xl review:text-2xl md:text-3xl mb-2 max-md:text-center">
                {type} Job
              </h1>
              <form
                className="max-w-800 mx-auto md:p-4"
                onSubmit={formSubmitHandler}
              >
                <div className="grid md:grid-cols-2 md:gap-6">
                  <label htmlFor="title" className="mb-6 block">
                    <span className="block text-sm text-gray-600">
                      Job Title *
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
                        setForm({ ...form, title: e.target.value })
                      }
                    />
                  </label>
                  <label htmlFor="department" className="mb-6 block">
                    <span className="block text-sm text-gray-600">
                      Department *
                    </span>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      required
                      placeholder="Department"
                      className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                      value={form.department}
                      onChange={(e) =>
                        setForm({ ...form, department: e.target.value })
                      }
                    />
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                <label htmlFor="description" className="mb-6 block">
                    <span className="block text-sm text-gray-600">
                    Job Description *
                    </span>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      required
                      placeholder="Description"
                      className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                    />
                  </label>
                  <label htmlFor="place" className="mb-6 block">
                    <span className="block text-sm text-gray-600">
                      Job Location *
                    </span>
                    <input
                      type="text"
                      name="place"
                      id="place"
                      required
                      placeholder="Location"
                      className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                      value={form.place}
                      onChange={(e) =>
                        setForm({ ...form, place: e.target.value })
                      }
                    />
                  </label>
                </div>

                <label htmlFor="details" className="mb-6 block">
                    <span className="block text-sm text-gray-600">
                      Job Details *
                    </span>
                    <textarea
                      type="text"
                      name="details"
                      id="details"
                      required
                      placeholder="details"
                      className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                      value={form.details}
                      onChange={(e) =>
                        setForm({ ...form, details: e.target.value })
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
