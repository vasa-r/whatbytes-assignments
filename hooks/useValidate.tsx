"use client";

import { StatType } from "@/components/UpdateStatModal";
import { useState } from "react";

interface StatError {
  rank: string;
  percentile: string;
  currentScore: string;
}

const useValidate = (statData: StatType) => {
  const [formErrors, setFormErrors] = useState<Partial<StatError>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const rank = Number(statData.rank);
  const percentile = Number(statData.percentile);
  const currentScore = Number(statData.currentScore);

  const validate = () => {
    const errors: Partial<StatError> = {};

    if (
      !statData.rank ||
      isNaN(rank) ||
      rank < 0 ||
      !Number.isInteger(rank) ||
      rank === 0
    ) {
      errors.rank = "required | rank should be from 1";
    }

    if (
      !statData.percentile ||
      isNaN(percentile) ||
      percentile < 0 ||
      percentile > 100
    ) {
      errors.percentile = "required | percentile 0-100";
    }

    if (
      !statData.currentScore ||
      isNaN(currentScore) ||
      currentScore < 0 ||
      currentScore > 15
    ) {
      errors.currentScore = "required | current score 0-15";
    }

    // console.log("hook error", errors);

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (onSubmit: () => Promise<void>) => {
    setIsLoading(true);
    if (validate()) {
      try {
        await onSubmit();
      } catch (err) {
        console.error("Submission failed:", err);
      }
    }
    setIsLoading(false);
  };

  return { formErrors, isLoading, validate, handleSubmit };
};

export default useValidate;
