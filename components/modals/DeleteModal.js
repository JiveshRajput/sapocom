import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  getDeleteModalState,
  getModalId,
  getModalType,
  setDeleteModalState,
  setLoadingState,
} from "@/store/reducers/valueReducer";
import ModalWrapper from "@/layouts/ModalWrapper";

export default function DeleteModal() {
  const dispatch = useDispatch();
  const deleteModalOpen = useSelector(getDeleteModalState);
  const id = useSelector(getModalId);
  const type = useSelector(getModalType);
  async function deleteHandler() {
    console.log(id);
    console.log(type);
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
    dispatch(setDeleteModalState(false));
  }

  return (
    <>
      {deleteModalOpen && (
        <ModalWrapper closeModal={closeModal}>
          <div className="w-full">
            <div className="max-w-[400px] mx-auto rounded-lg bg-white p-2 review:p-4 relative">
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
                <h1 className="text-secondary font-semibold text-xl review:text-2xl md:text-3xl mb-4 max-md:text-center">
                  Are you sure ?
                </h1>
                <div className="flex gap-2 max-md:justify-center">
                  <button
                    className="outline-none rounded-md py-2 px-3 text-white bg-gradient-to-r border-2 border-primary from-primary to-secondary transition-all hover:from-secondary hover:to-primary"
                    onClick={deleteHandler}
                  >
                    Delete
                  </button>
                  <button
                    className="py-2 px-3 text-sm border-2 border-primary text-primary rounded-md hover:bg-primary/10"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}
