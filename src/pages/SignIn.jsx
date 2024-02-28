import React from "react";

export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 h-96 relative bg-white">
        <button className="w-full py-2 bg-blue-500 text-white text-base font-thin font-['Inter'] rounded-lg shadow-md mb-4">
          Continue with Facebook
        </button>
        <button className="w-full py-2 bg-white text-neutral-800 text-base font-thin font-['Inter'] rounded-lg shadow-md mb-4">
          Continue with Google
        </button>
        <button className="w-full py-2 bg-black text-white text-base font-thin font-['Inter'] rounded-lg shadow-md mb-4">
          Continue with Apple
        </button>
        <div className="w-full mb-4">
          <div className="text-center text-black text-base font-normal font-['Inter'] leading-normal">
            or
          </div>
          <div className="w-full mt-1 border-t border-zinc-800"></div>
        </div>

        <input
          type="text"
          className="w-full py-2 bg-gray-100 text-neutral-800 text-base font-thin font-['Inter'] rounded-lg shadow-md mb-4"
          placeholder="Your email address or profile URL"
        />
        <div className="w-16 h-4 left-[335.28px] absolute text-right text-blue-700 text-xs font-normal font-['Inter'] leading-none">
          Need help?
        </div>
        <div className="w-96 h-16 mt-5 left-0 absolute">
          <p className="text-neutral-400 text-xs font-thin font-['Inter'] leading-none">
            When registering, you agree that we may use your provided data for
            the registration and to send you notifications on our products and
            services. You can unsubscribe from notifications at any time in your
            settings. For additional info please refer to our{" "}
            <span className="text-blue-700">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
