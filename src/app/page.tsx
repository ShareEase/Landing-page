"use client";

import HomeFooter from "@/Components/common/Footer";
import Faqs from "@/Components/faqs/Faqs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
  const [isOpacity, setIsOpacity] = useState<boolean>(false);

  const handleNavbarNavigation = () => {
    setIsOpacity(!isOpacity);
    // document.body.style.overflow = !isOpacity ? "auto" : "hidden";
  };

  const [size, setSize] = useState("1.25rem"); // Default size

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSize("2.5rem");
      } else if (window.innerWidth >= 640) {
        setSize("1.5rem");
      } else {
        setSize("1.25rem");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div id="Home" className="relative ">
      <div className=" bg-primary pt-8 pb-16 px-6  sm:pt-8 sm:pb-[10%] relative ">
        <div className="   sm:px-[8%] flex items-center flex-row justify-between mb-10 2xl:px-[12%]">
          <div className=" w-12 md:w-16">
            <Image
              src="/assets/images/ShareEaselogo.svg"
              alt="icon"
              width={70}
              height={86}
              // style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>

          <FaBars size={32} color="white" onClick={handleNavbarNavigation} />
        </div>
        <div className="flex flex-col gap-6 lg:gap-8 justify-center items-center md:mb-24 lg:mb-0">
          <div className=" w-40 lg:w-56">
            <Image
              src="/assets/images/ShareEasewhite.svg"
              alt="icon"
              width={220}
              height={53}
              // style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-0 font-black text-3xl md:text-5xl md:leading-normal text-white text-center">
              <text>
                Split Bills Without{" "}
                <span className="hidden md:inline-block">
                  The <span className="text-secondary">Worry</span>
                </span>
              </text>
              <text>
                <span className="hidden md:inline-block">Of</span>{" "}
                <span className="text-secondary">Awkward</span> Conversations
              </text>
              <text>
                About <span className="text-secondary">Money</span>
              </text>
            </div>
            <div className="flex flex-row  items-center justify-center gap-8 lg:gap-8 md:gap-5">
              <Image
                src="/assets/images/AppStore.svg"
                alt="icon"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",
                  width: "30%",
                  height: "auto",
                }}
              />

              <Image
                src="/assets/images/GooglePlay.svg"
                alt="icon"
                width={236}
                height={78}
                style={{
                  objectFit: "contain",
                  width: "30%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
        <div className="hidden absolute left-0 bottom-0 md:flex md:mt-10 lg:mt-0 md:flex-row md:justify-between md:w-full px-[8%] md:items-end 2xl:px-[12%]">
          <div className="w-3/12">
            <Image
              src="/assets/images/leftphonefull.svg"
              alt="icon"
              width={360}
              height={78}
            />
          </div>
          <div className="w-3/12">
            <Image
              src="/assets/images/rightphone.svg"
              alt="icon"
              width={360}
              height={78}
            />
          </div>
        </div>
      </div>

      {/* Second section  */}

      <div className=" py-8  px-6  sm:py-20 sm:px-[8%] bg-white flex flex-col gap-8 md:flex-row md:justify-between 2xl:px-[12%]">
        <div className="flex flex-col gap-4 md:w-2/5 2xl:w-1/3 ">
          <div className="flex flex-col gap-2 leading-10 ">
            <text className="font-black text-2xl">
              Introducing: Virtual Card
            </text>
            <text className="font-bold text-2xl ">
              A Card that helps you manage all your
              <span className="text-primary"> group payments</span>
            </text>
          </div>
          <text className="font-medium text-[#757575]">
            A virtual card streamlines group expense management by using a
            single account for payments, facilitating easy expense splitting and
            automatic reminder requests to all group members.
          </text>
        </div>
        <div className="relative flex   w-auto sm:w-3/6 sm:my-10 lg:m-0 lg:w-2/5 xl:w-2/6 2xl:w-1/4">
          <div className="absolute z-20 w-[60%]">
            <Image
              src="/assets/images/topcard.svg"
              alt="icon"
              width={236}
              height={78}
            />
          </div>
          <div className="pt-[20%] pl-[40%] ">
            <Image
              src="/assets/images/bottomcard.svg"
              alt="icon"
              width={236}
              height={78}
            />
          </div>
        </div>
      </div>

      {/* Third section  */}

      <div
        id="Shareeasefor"
        className="bg-primary flex flex-col gap-8 items-center py-8 px-6 sm:flex-row sm:gap-10 lg:justify-between sm:px-[8%]  sm:py-16 2xl:px-[12%]"
      >
        <Image
          src="/assets/images/fullphone.svg"
          alt="icon"
          width={236}
          height={78}
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-0 font-black leading-8 text-2xl sm:text-4xl lg:text-5xl sm:leading-tight text-white">
            <text>ShareEase helps you</text>
            <text>manage expenses with</text>
            <text className="text-secondary">Friends</text>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center font-regular text-sm text-white sm:text-xl lg:text-3xl">
              <FaCheckCircle style={{ fontSize: size }} color="white" />
              <text>Create groups for any occasions.</text>
            </div>
            <div className="flex flex-row gap-4 items-center font-regular text-sm text-white sm:text-xl lg:text-3xl">
              <FaCheckCircle style={{ fontSize: size }} color="white" />
              <text>Connect to existing bank accounts.</text>
            </div>
            <div className="flex flex-row gap-4 items-center font-regular text-sm text-white sm:text-xl lg:text-3xl">
              <FaCheckCircle style={{ fontSize: size }} color="white" />
              <text>Customize your expense to the last detail.</text>
            </div>
            <div className="flex flex-row gap-4 items-center font-regular text-sm text-white sm:text-xl lg:text-3xl">
              <FaCheckCircle style={{ fontSize: size }} color="white" />
              <text>Win exciting discounts by redeeming points.</text>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth section  */}

      <div
        id="features"
        className="sm:px-[8%] py-8 px-6 gap-8 sm:py-[5%] flex flex-col sm:gap-24 bg-white 2xl:px-[12%]"
      >
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:justify-between">
          <div className="rounded-[32px] bg-secondary flex items-end justify-center pt-10 sm:w-2/5 px-5">
            <Image
              src="/assets/images/groupphone1.svg"
              alt="icon"
              width={0}
              height={0}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="flex flex-col sm:gap-2 lg:gap-4 sm:w-1/2">
            <text className="font-bold sm:text-3xl lg:text-4xl">
              Customized Split Options
            </text>
            <text className="text-[#757575] sm:text-lg sm:leading-5 lg:text-xl">
              When you add an expense in ShareEase, you have multiple options
              for splitting it among the participants. You can divide the
              expense equally, allocate it based on the percentage each person
              paid, or assign specific amounts paid by each participant. This
              flexibility ensures that the cost-sharing is fair and transparent
              for everyone involved.
            </text>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-8 items-center sm:justify-between">
          <div className="flex flex-col sm:gap-2 lg:gap-4 sm:w-1/2">
            <text className="font-bold sm:text-3xl lg:text-4xl">
              Loyalty Rewards
            </text>
            <text className="text-[#757575] sm:text-lg sm:leading-5 lg:text-xl">
              When you use ShareEase, you earn loyalty points through various
              activities, such as creating a group, adding group expenses,
              adding a virtual card, settling an expense, and more. These points
              can be accumulated and redeemed for ShareEase rewards, which
              include exciting discounts and deals at your favorite restaurants
              and outlets.
            </text>
          </div>
          <div className=" rounded-[32px] flex flex-row justify-between bg-secondary gap-10 sm:w-2/5 px-10">
            <div className="mt-20 ">
              <Image
                src="/assets/images/Loyaltyphonedown.svg"
                alt="icon"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="bottom-0 right-0">
              <Image
                src="/assets/images/Loyaltyphoneup.svg"
                alt="icon"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:justify-between">
          <div className="rounded-[32px] bg-secondary w-full flex items-end justify-center pt-10 sm:w-2/5 px-5">
            <div>
              <Image
                src="/assets/images/virtualcardphone.svg"
                alt="icon"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col sm:gap-2 lg:gap-4 sm:w-1/2">
            <text className="font-bold sm:text-3xl lg:text-4xl">
              Group Virtual Card
            </text>
            <text className="text-[#757575] sm:text-lg sm:leading-5 lg:text-xl">
              A virtual card simplifies group expense management by using a
              single account for all payments. It facilitates easy expense
              splitting and sends automatic reminder requests to all group
              members, ensuring timely contributions and reducing manual
              follow-ups. This streamlines the entire process, making managing
              shared finances more efficient.
            </text>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-8 items-center sm:justify-between">
          <div className="flex flex-col sm:gap-2 lg:gap-4 sm:w-1/2">
            <text className="font-bold sm:text-3xl lg:text-4xl">
              In-App Payment Requests
            </text>
            <text className="text-[#757575] sm:text-lg sm:leading-5 lg:text-xl">
              ShareEase allows you to effortlessly record and settle group
              expenses directly within the app. You can send expense requests or
              settle outstanding balances using your existing bank account,
              ensuring a fast and efficient process. This seamless integration
              makes managing shared expenses straightforward and convenient, all
              in one place.
            </text>
          </div>
          <div className="rounded-[32px] bg-secondary flex items-end justify-center sm:w-2/5 px-5">
            <div>
              <Image
                src="/assets/images/inappphone.svg"
                alt="icon"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",

                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Faqs section  */}
      <div id="Faqs">
        <Faqs screenSize={size} />
      </div>

      {/* Below faqs section  */}

      <div className="bg-primary flex flex-col py-8 gap-8 sm:py-0 sm:flex-row sm:justify-between sm:px-[8%] sm:items-center 2xl:px-[12%]">
        <div className="flex flex-col gap-8 mx-6 sm:mx-0 sm:gap-2 md:gap-6 lg;gap-8 sm:w-7/12">
          <Image
            src="/assets/images/ShareEasewhite.svg"
            alt="icon"
            width={size === "1.5rem" ? 300 : 250}
            height={size === "1.5rem" ? 300 : 250}
          />

          <div className="flex flex-col gap-3 md:gap-4 text-white">
            <text className="font-bold text-3xl sm:text-2xl lg:text-3xl">
              Start splitting the bill, the smart way,
            </text>
            <text className="font-bold text-3xl sm:text-2xl lg:text-3xl">
              Download ShareEase today.
            </text>
          </div>
          <div className="flex flex-row gap-8">
            <div>
              <Image
                src="/assets/images/AppStore.svg"
                alt="icon"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div>
              <Image
                src="/assets/images/GooglePlay.svg"
                alt="icon"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
        {size === "1.25rem" ? (
          <Image
            src="/assets/images/tiltedsmall.svg"
            alt="icon"
            width={0}
            height={0}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
            }}
          />
        ) : (
          <div className="h-full">
            <Image
              src="/assets/images/tiltedphone.svg"
              alt="icon"
              width={0}
              height={0}
              style={{
                objectFit: "contain",
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        )}
      </div>

      {/* Footer section  */}

      <HomeFooter />

      {/* navigation section  */}

      <div
        className={`${
          isOpacity
            ? "absolute top-0 flex flex-row w-full h-full justify-between z-50 overflow-y-hidden opacity-100 transition-opacity delay-150"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className=" sm:bg-black/40 sm:px-[35%]"></div>
        <div className="flex flex-col pt-10 bg-primary gap-8 lg:gap-16 h-screen fixed w-full sm:w-[30%] right-0 px-6 lg:px-12">
          <div className="flex flex-row justify-between items-center">
            <div className="w-16 sm:w-20">
              <Image
                src="/assets/images/ShareEaselogo.svg"
                alt="icon"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>

            <RxCross2
              size={40}
              color="white"
              onClick={handleNavbarNavigation}
            />
          </div>
          <div className="flex flex-col gap-6 lg:gap-8 font-black text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
            <a onClick={handleNavbarNavigation} href="#Home">
              <text>Home</text>
            </a>
            <a href="#Shareeasefor" onClick={handleNavbarNavigation}>
              <text>Who is ShareEase for?</text>
            </a>
            <a href="#features" onClick={handleNavbarNavigation}>
              <text>Features</text>
            </a>
            <a href="#Faqs" onClick={handleNavbarNavigation}>
              <text>FAQs</text>
            </a>
          </div>
          <div className="flex flex-row items-center justify-between ">
            <Image
              src="/assets/images/AppStore.svg"
              alt="icon"
              width={236}
              height={78}
              style={{
                objectFit: "contain",
                width: "45%",
                height: "auto",
              }}
            />

            <Image
              src="/assets/images/GooglePlay.svg"
              alt="icon"
              width={236}
              height={78}
              style={{
                objectFit: "contain",
                width: "45%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
