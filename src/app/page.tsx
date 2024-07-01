"use client";

import HomeFooter from "@/Components/common/Footer";
import Faqs from "@/Components/faqs/Faqs";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
  const [isOpacity, setIsOpacity] = useState<boolean>(false);

  const handleNavbarNavigation = () => {
    setIsOpacity(!isOpacity);
    // document.body.style.overflow = !isOpacity ? "auto" : "hidden";
  };
  return (
    <div id="Home" className="relative ">
      <div className=" bg-primary pt-8 pb-[10%] relative">
        <div className="px-[8%] flex items-center flex-row justify-between mb-10">
          <div className="w-12 md:w-16">
            <Image
              src="/assets/images/ShareEaselogo.svg"
              alt="icon"
              width={70}
              height={86}
              // style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>

          <div className="h-12">
            <button>
              <FaBars
                size={32}
                color="white"
                onClick={handleNavbarNavigation}
              />
            </button>
          </div>
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
            <div className="flex flex-row items-center justify-center gap-8 lg:gap-8 md:gap-5">
              <Image
                src="/assets/images/AppStore.svg"
                alt="icon"
                width={236}
                height={78}
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
        <div className="hidden absolute bottom-0 md:flex md:mt-10 lg:mt-0 flex-row justify-between w-full px-[8%] items-end">
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
      <div className="py-20 px-[8%] bg-white flex flex-row justify-between">
        <div className="flex flex-col gap-4 w-2/5 ">
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
        <div className="relative sm:w-3/6 sm:my-10 lg:m-0 lg:w-2/5 xl:w-[27%]">
          <div className="absolute z-20">
            <Image
              src="/assets/images/topcard.svg"
              alt="icon"
              width={236}
              height={78}
            />
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src="/assets/images/bottomcard.svg"
              alt="icon"
              width={236}
              height={78}
            />
          </div>
        </div>
      </div>
      <div
        id="Shareeasefor"
        className="bg-primary flex flex-row justify-between px-[8%] py-16"
      >
        <Image
          src="/assets/images/fullphone.svg"
          alt="icon"
          width={236}
          height={78}
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-0 font-black text-5xl leading-tight text-white">
            <text>ShareEase helps you</text>
            <text>manage expenses with</text>
            <text className="text-secondary">Friends</text>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center font-regular text-white text-3xl">
              <FaCheckCircle size={32} color="white" />
              <text>Create groups for any occasions.</text>
            </div>
            <div className="flex flex-row gap-4 items-center font-regular text-white text-3xl">
              <FaCheckCircle size={32} color="white" />
              <text>Connect to existing bank accounts.</text>
            </div>
            <div className="flex flex-row gap-4 items-center font-regular text-white text-3xl">
              <FaCheckCircle size={32} color="white" />
              <text>Customize your expense to the last detail.</text>
            </div>
            <div className="flex flex-row gap-4 items-center font-regular text-white text-3xl">
              <FaCheckCircle size={32} color="white" />
              <text>Win exciting discounts by redeeming points.</text>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[8%] py-[5%] flex flex-col gap-24 bg-white">
        <div className="flex flex-row items-center justify-between">
          <div className="rounded-[32px] bg-secondary flex items-end justify-center pt-10 w-2/5 px-5">
            <Image
              src="/assets/images/groupphone1.svg"
              alt="icon"
              width={500}
              height={400}
            />
          </div>
          <div className="flex flex-col gap-4 w-1/2">
            <text className="font-bold text-4xl">Customized Split Options</text>
            <text className="text-[#757575] text-xl">
              When you add an expense in ShareEase, you have multiple options
              for splitting it among the participants. You can divide the
              expense equally, allocate it based on the percentage each person
              paid, or assign specific amounts paid by each participant. This
              flexibility ensures that the cost-sharing is fair and transparent
              for everyone involved.
            </text>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-4 w-1/2">
            <text className="font-bold text-4xl">Loyalty Rewards</text>
            <text className="text-[#757575] text-xl">
              When you use ShareEase, you earn loyalty points through various
              activities, such as creating a group, adding group expenses,
              adding a virtual card, settling an expense, and more. These points
              can be accumulated and redeemed for ShareEase rewards, which
              include exciting discounts and deals at your favorite restaurants
              and outlets.
            </text>
          </div>
          <div className=" rounded-[32px] flex flex-row justify-between bg-secondary  gap-10 w-2/5 px-10">
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
        <div className="flex flex-row items-center justify-between">
          <div className="rounded-[32px] bg-secondary flex items-end justify-center pt-10 w-2/5 px-5">
            <div className="w-3/5">
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
          <div className="flex flex-col gap-4 w-1/2">
            <text className="font-bold text-4xl">Group Virtual Card</text>
            <text className="text-[#757575] text-xl">
              A virtual card simplifies group expense management by using a
              single account for all payments. It facilitates easy expense
              splitting and sends automatic reminder requests to all group
              members, ensuring timely contributions and reducing manual
              follow-ups. This streamlines the entire process, making managing
              shared finances more efficient.
            </text>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-4 w-1/2">
            <text className="font-bold text-4xl">In-App Payment Requests</text>
            <text className="text-[#757575] text-xl">
              ShareEase allows you to effortlessly record and settle group
              expenses directly within the app. You can send expense requests or
              settle outstanding balances using your existing bank account,
              ensuring a fast and efficient process. This seamless integration
              makes managing shared expenses straightforward and convenient, all
              in one place.
            </text>
          </div>
          <div className="rounded-[32px] bg-secondary flex items-end justify-center w-2/5 px-5">
            <div className="w-3/4">
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
      <Faqs />
      <div className="bg-primary flex flex-row justify-between px-[8%] items-center">
        <div className="flex flex-col gap-8 ">
          <Image
            src="/assets/images/ShareEasewhite.svg"
            alt="icon"
            width={0}
            height={0}
            style={{ width: "40%", height: "auto", objectFit: "contain" }}
          />

          <div className="flex flex-col gap-4 text-white">
            <text className="font-bold text-3xl">
              Start splitting the bill, the smart way,
            </text>
            <text className="font-bold text-3xl">
              Download ShareEase today.
            </text>
          </div>
          <div className="flex flex-row gap-8">
            <Image
              src="/assets/images/AppStore.svg"
              alt="icon"
              width={236}
              height={78}
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
        <Image
          src="/assets/images/tiltedphone.svg"
          alt="icon"
          width={236}
          height={78}
          style={{
            objectFit: "contain",
            width: "auto",
            height: "auto",
          }}
        />
      </div>
      <HomeFooter />
      <div
        className={`${
          !isOpacity
            ? "absolute top-0 flex flex-row w-full h-full justify-between z-50 overflow-y-hidden opacity-100 transition-opacity delay-150"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className=" bg-black/40 px-[35%]"></div>
        <div className="flex flex-col pt-10 bg-primary gap-16 h-screen fixed w-[30%] right-0 px-12">
          <div className="flex flex-row justify-between items-center">
            <Image
              src="/assets/images/ShareEaselogo.svg"
              alt="icon"
              width={236}
              height={78}
              style={{
                objectFit: "contain",
                width: "auto",
                height: "auto",
              }}
            />
            <RxCross2
              size={40}
              color="white"
              onClick={handleNavbarNavigation}
            />
          </div>
          <div className="flex flex-col gap-8 font-black md:text-3xl lg:text-4xl xl:text-5xl text-white">
            <a onClick={handleNavbarNavigation} href="#Home">
              <text>Home</text>
            </a>
            <a href="#Shareeasefor" onClick={handleNavbarNavigation}>
              <text>Who is ShareEase for?</text>
            </a>
            <a href="">
              <text>Features</text>
            </a>
            <a href="">
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
