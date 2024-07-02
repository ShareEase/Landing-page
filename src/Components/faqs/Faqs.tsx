"use client";

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
type FaqsProps = {
  screenSize?: string;
};
export default function Faqs({ screenSize }: FaqsProps) {
  const [isQ1Check, setIsQ1Check] = useState<boolean>(false);
  const [isQ2Check, setIsQ2Check] = useState<boolean>(false);
  const [isQ3Check, setIsQ3Check] = useState<boolean>(false);
  const [isQ4Check, setIsQ4Check] = useState<boolean>(false);

  const handleQ1Check = () => {
    setIsQ1Check(!isQ1Check);
  };
  const handleQ2Check = () => {
    setIsQ2Check(!isQ2Check);
  };
  const handleQ3Check = () => {
    setIsQ3Check(!isQ3Check);
  };
  const handleQ4Check = () => {
    setIsQ4Check(!isQ4Check);
  };
  return (
    <div className="py-8 px-6 sm:px-[8%] sm:py-[5%] flex flex-col gap-6 sm:gap-16 bg-[#faf9f5] 2xl:px-[12%]">
      <text className="font-bold text-xl  sm:text-3xl text-center">
        Frequently Asked<span className="text-primary"> Questions</span>{" "}
      </text>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between items-center py-6 pr-8 border-b border-[#DADADA]">
          <text
            className={`sm:text-2xl text-lg font-medium ${
              isQ1Check ? "text-primary" : ""
            } `}
          >
            What is a virtual card?
          </text>
          {isQ1Check ? (
            <FaAngleUp
              style={{ fontSize: screenSize }}
              color="#DADADA"
              onClick={handleQ1Check}
            />
          ) : (
            <FaAngleDown
              style={{ fontSize: screenSize }}
              color="#DADADA"
              onClick={handleQ1Check}
            />
          )}
        </div>
        <div
          className={`flex flex-row justify-between items-start py-6 pr-8 border-b border-[#DADADA]`}
        >
          <text
            className={`sm:text-2xl text-lg font-medium ${
              isQ2Check ? "text-primary" : ""
            } `}
          >
            How does ShareEase ensure security & protection in financial
            transactions?
          </text>
          <div className="pt-2">
            {isQ2Check ? (
              <FaAngleUp
                style={{ fontSize: screenSize }}
                color="#DADADA"
                onClick={handleQ2Check}
              />
            ) : (
              <FaAngleDown
                style={{ fontSize: screenSize }}
                color="#DADADA"
                onClick={handleQ2Check}
              />
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between items-start py-6 pr-8 border-b border-[#DADADA]">
          <div className="flex flex-col gap-6">
            <text
              className={`sm:text-2xl text-lg font-medium ${
                isQ3Check ? "text-primary" : ""
              } `}
            >
              What are ShareEase Loyalty Points?
            </text>

            <text
              className={`sm:text-2xl text-lg font-medium transition-opacity duration-300 ${
                isQ3Check ? "opacity-100" : "opacity-0 pointer-events-none h-0"
              }`}
            >
              ShareEase Loyalty Points are in app points you can earn by
              completing milestones such as creating a group or completing a
              transaction, these points help you unlock exciting discounts and
              offers.
            </text>
          </div>

          {isQ3Check ? (
            <FaAngleUp
              // style={{ fontSize: screenSize }}
              size={60}
              color="#DADADA"
              onClick={handleQ3Check}
            />
          ) : (
            <FaAngleDown
              // style={{ fontSize: screenSize }}
              size={60}
              color="#DADADA"
              onClick={handleQ3Check}
            />
          )}
        </div>
        <div className="flex flex-row justify-between items-start py-6 pr-8 border-b border-[#DADADA]">
          <text
            className={`sm:text-2xl text-lg font-medium ${
              isQ4Check ? "text-primary" : ""
            } `}
          >
            How much does it cost?{" "}
          </text>
          {isQ4Check ? (
            <FaAngleUp
              style={{ fontSize: screenSize }}
              color="#DADADA"
              onClick={handleQ4Check}
            />
          ) : (
            <FaAngleDown
              style={{ fontSize: screenSize }}
              color="#DADADA"
              onClick={handleQ4Check}
            />
          )}
        </div>
      </div>
    </div>
  );
}
