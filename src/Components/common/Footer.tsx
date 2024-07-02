import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeFooter = () => {
  return (
    <div className="flex flex-col items-center space-y-16 px-[8%] pt-[5%] 2xl:px-[12%]">
      <div className="flex w-full flex-col gap-y-8  lg:flex-row lg:gap-x-24">
        <div className="flex w-full flex-col gap-y-8 lg:w-1/2">
          <div className="w-3/5 sm:w-2/5 lg:w-3/5 xl:w-2/5">
            <Image
              src="/assets/images/ShareEase.svg"
              alt="icon"
              width={0}
              height={0}
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>

          <p className="font-regular text-xl text-[#757575] max-w-lg">
            ShareEase is a one stop solution to all your bill management needs,
            split bills with friends, send payment reminders and settle up,
            without the awkward conversations about money.
          </p>
          <div className="footer-icons flex flex-col">
            <p className="mb-3 text-xl font-semibold">Follow Us</p>
            <div className="flex items-center">
              {[
                {
                  icon: "facebook",
                  url: "",
                },
                { icon: "instagram", url: "" },
                {
                  icon: "linkedin",
                  url: "",
                },
                // { icon: "twitter", url: "https://twitter.com/example" },
              ].map((platform, index) => (
                <div key={index} className="mr-2">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/assets/icons/${platform.icon}.svg`}
                      alt={platform.icon}
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20 lg:w-1/2 lg:flex-row lg:justify-center lg:gap-x-16">
          {[
            {
              title: "Quick Links",
              links: [
                { title: "Home", url: "/" },
                { title: "Product", url: "/" },
                { title: "Pricing", url: "/" },
                { title: "About us", url: "/" },
              ],
            },
            {
              title: "Support",
              links: [
                { title: "Contact Us", url: "/" },
                { title: "Report a Bug", url: "/" },
                { title: "Request Feature", url: "/" },
              ],
            },
            {
              title: "Legal",
              links: [
                { title: "Privacy Policy", url: "/" },
                { title: "Terms & Conditions", url: "/" },
              ],
            },
          ].map((section, index) => (
            <div key={index} className="flex flex-col gap-y-6 lg:gap-y-8">
              <p className="whitespace-nowrap lg:text-xl font-bold">
                {section.title}
              </p>
              {section.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="md:text-xl lg:text-lg"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-[56px] w-full flex-col items-center justify-center">
        <p className="text-center lg:text-xl">
          © 2024, Share Ease. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default HomeFooter;
