"use client";

import React from "react";

export const FormContact = () => {
  return (
    <div className="flex flex-col rounded-md gap-4 px-6 py-9 items-start border-2 border-black bg-white">
      <div className="relative w-fit text-xl font-semibold text-black">
        Contact Infomation
      </div>
      <div className="w-full justify-between flex items-start relative">
        <div className="flex-col w-1/2 pr-2 gap-3 flex items-start relative">
          <label className="relative w-fit font-hairline-2" htmlFor="input-1">
            FIRST NAME
          </label>
          <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
            <input
              className="relative flex-1"
              id="input-1"
              placeholder="First name"
              type="text"
            />
          </div>
        </div>
        <div className="flex-col w-1/2 pl-2 gap-3 flex items-start relative">
          <label className="relative w-fit font-hairline-2 " htmlFor="input-2">
            LAST NAME
          </label>
          <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
            <input
              className="relative flex-1"
              id="input-2"
              placeholder="Last name"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-start gap-3 relative">
        <label className="relative w-fit font-hairline-2" htmlFor="input-3">
          PHONE NUMBER
        </label>
        <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
          <input
            className="relative flex-1"
            id="input-3"
            placeholder="Phone number"
            type="tel"
          />
        </div>
      </div>
      <div className="flex flex-col w-full items-start gap-3 relative">
        <label className="relative w-fit font-hairline-2" htmlFor="input-4">
          EMAIL ADDRESS
        </label>
        <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
          <input
            className="relative flex-1"
            id="input-4"
            placeholder="Your Email"
            type="email"
          />
        </div>
      </div>
    </div>
  );
};
