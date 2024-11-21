"use client";

import useValidate from "@/hooks/useValidate";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import HTML from "@/assets/html.png";
import Arrow from "@/assets/arrow.svg";
import { useAppContext } from "@/context/AppContext";

export interface StatType {
  rank: number;
  percentile: number;
  currentScore: number;
}

interface ModalProps {
  showModal: boolean;
  setModal: (arg: boolean) => void;
}

const UpdateStatModal = ({ showModal, setModal }: ModalProps) => {
  const initialValues = {
    rank: 0,
    percentile: 0,
    currentScore: 0,
  };
  const [statData, setStatData] = useState(initialValues);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { formErrors, isLoading, handleSubmit } = useValidate(statData);

  const { UpdateStat } = useAppContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStatData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    UpdateStat(statData);
    setModal(false);
  };

  const submitStat = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(onSubmit);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModal(false);
      }
    };

    if (showModal) {
      window.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal, setModal]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
      <div
        ref={modalRef}
        className=" p-5 sm:w-[40rem] w-[25rem] rounded-md bg-white font-semibold flex flex-col gap-8 justify-between items-center relative"
      >
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-bold">Update Scores</h2>
          <Image src={HTML} alt="html logo" width={50} height={50} />
        </div>

        <form className="w-full flex flex-col gap-5" onSubmit={submitStat}>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-btnBlue text-white flex items-center justify-center">
                1
              </div>
              <label
                htmlFor="rank"
                className="text-base sm:text-lg font-normal"
              >
                Update your{" "}
                <span className="sm:font-bold font-medium">Rank</span>
              </label>
            </div>
            <div>
              <input
                type="number"
                name="rank"
                id="rank"
                className={`outline-none border px-2 py-1 rounded-md ${
                  formErrors.rank ? "border-red-500" : "border-[#117afa]"
                }`}
                onChange={handleChange}
              />
              <p className="text-xs font-light text-red-500">
                {formErrors.rank && formErrors.rank}
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-btnBlue text-white flex items-center justify-center">
                2
              </div>
              <label
                htmlFor="percentile"
                className="text-base sm:text-lg font-normal"
              >
                Update your{" "}
                <span className="sm:font-bold font-medium">Percentile</span>
              </label>
            </div>
            <div>
              <input
                type="number"
                name="percentile"
                id="percentile"
                className={`outline-none border px-2 py-1 rounded-md ${
                  formErrors.percentile ? "border-red-500" : "border-[#117afa]"
                }`}
                onChange={handleChange}
              />
              <p className="text-xs font-light text-red-500">
                {formErrors.percentile && formErrors.percentile}
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-btnBlue text-white flex items-center justify-center">
                3
              </div>
              <label
                htmlFor="currentScore"
                className="text-base sm:text-lg font-normal"
              >
                Update your{" "}
                <span className="sm:font-bold font-medium">
                  Current Score (out of 15)
                </span>
              </label>
            </div>
            <div>
              <input
                type="number"
                name="currentScore"
                id="currentScore"
                className={`outline-none border px-2 py-1 rounded-md ${
                  formErrors.currentScore
                    ? "border-red-500"
                    : "border-[#117afa]"
                }`}
                onChange={handleChange}
              />
              <p className="text-xs font-light text-red-500">
                {formErrors.currentScore && formErrors.currentScore}
              </p>
            </div>
          </div>
          <div className="flex gap-5 justify-end">
            <button
              disabled={isLoading}
              className="outline-none border-btnBlue border rounded-md p-4 text-btnBlue"
              onClick={() => setModal(false)}
            >
              cancel
            </button>
            <div className="w-28 relative flex justify-center items-center">
              {isLoading ? (
                <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
              ) : (
                <button
                  disabled={isLoading}
                  type="submit"
                  className="bg-btnBlue rounded-md w-full h-full text-left px-5 text-white"
                >
                  save
                </button>
              )}

              <Image
                src={Arrow}
                alt="arrow"
                width={20}
                height={15}
                className="absolute inset-y-0 right-4 my-auto"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStatModal;
