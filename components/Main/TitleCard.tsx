"use client";

import React, { useState } from "react";
import Card from "../Card";
import Image from "next/image";
import { titleCardData } from "@/utils/constants";
import UpdateStatModal from "../UpdateStatModal";

const TitleCard = () => {
  const [showModal, setShowModal] = useState(false);

  const { image, title, questions, duration, submittedOn } = titleCardData;

  const handleSHowModal = () => setShowModal(true);

  if (showModal)
    return <UpdateStatModal showModal={showModal} setModal={setShowModal} />;

  return (
    <Card>
      <div className="flex flex-col justify-between items-center sm:flex-row">
        <Image src={image} alt={title} width={60} height={60} />
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-extrabold">{title}</h2>
          <div className="flex flex-col text-gray-500 font-medium sm:flex-row">
            <div className="border-b-2 sm:border-b-0 sm:border-r-2 pr-2 py-2 sm:py-0 pl-2 sm:pl-0">
              Questions: {questions}
            </div>
            <div className="px-2 border-b-2 sm:border-b-0 sm:border-r-2 py-2 sm:py-0">
              Duration: {duration}
            </div>
            <div className="px-2 py-2 sm:py-0">Submitted on {submittedOn}</div>
          </div>
        </div>
        <button
          className="bg-btnBlue text-white text-lg font-semibold px-4 py-1 sm:px-6 sm:py-2 rounded-md"
          onClick={handleSHowModal}
        >
          Update
        </button>
      </div>
    </Card>
  );
};

export default TitleCard;
