"use client";

import { useState } from "react";
import Link from "next/link";

export default function FindResellerPage() {
  const [step, setStep] = useState<1 | 2>(1);

  const next = () => setStep(2);
  const prev = () => setStep(1);

  return (
    <div
      className="fixed inset-0 z-[60]"
      style={{
        backgroundImage: "url(/reseller.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Scrim */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Close */}
      <div className="relative z-10 flex items-start justify-end p-6">
        <Link
          href="/"
          aria-label="Close"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white"
        >
          ✕
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-full items-start justify-center px-4 pb-16">
        <div className="w-full max-w-4xl mt-6">
          <h1 className="text-center text-white text-3xl md:text-4xl font-extrabold tracking-wide mb-6">
            FIND A RESELLER
          </h1>

          {/* Card */}
          <div className="mx-auto rounded-lg bg-white/90 backdrop-blur border border-white/40 shadow-xl">
            {/* Progress */}
            <div className="px-6 pt-4 text-xs text-gray-600">{step === 1 ? "50%" : "100%"}</div>
            <div className="px-6 pb-2">
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-[#2bb3d4] transition-all duration-300 ${step === 1 ? "w-1/2" : "w-full"}`}
                />
              </div>
            </div>

            {/* Form body */}
            {step === 1 ? (
              <div className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name <span className="text-red-600">*</span></label>
                    <input
                      type="text"
                      placeholder="E.g. John Doe"
                      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2bb3d4]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone <span className="text-red-600">*</span></label>
                    <input
                      type="tel"
                      placeholder="123-456-7890"
                      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2bb3d4]"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Email Address <span className="text-red-600">*</span></label>
                  <input
                    type="email"
                    placeholder="E.g. john@doe.com"
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2bb3d4]"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">How can we assist you?</label>
                  <select className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2bb3d4]">
                    <option>Please select an option</option>
                    <option>I&apos;m an individual wanting to purchase a FWRD product/s</option>
                    <option>I owe a promotional / printing business and would like to resell a FWRD products/s</option>
                  </select>
                </div>
                <div className="mt-6 flex justify-end">
                  <button onClick={next} className="px-5 py-2 rounded-md bg-[#8E857B] hover:bg-[#8E857B]/90 text-white">
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div className="px-6 pb-6">
                <div className="mt-2">
                  <label className="block text-sm font-medium mb-1">Your Business Name <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    placeholder="E.g. text placeholder"
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2bb3d4]"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Website or Social Media page of your business <span className="text-red-600">*</span></label>
                  <input
                    type="url"
                    placeholder="E.g. text placeholder"
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2bb3d4]"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Your message</label>
                  <textarea
                    rows={6}
                    placeholder=""
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2bb3d4]"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button onClick={prev} className="px-5 py-2 rounded-md bg-[#8E857B]/70 hover:bg-[#8E857B] text-white">
                    Previous
                  </button>
                  <button className="px-5 py-2 rounded-md bg-[#2bb3d4] hover:bg-[#229ab7] text-white">
                    Send Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
