import React from 'react';

export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="w-96 h-96 relative bg-white">
      <div className="w-96 px-24 py-2.5 left-0 top-[39.47px] absolute bg-blue-500 rounded-sm border border-blue-500 justify-center items-end gap-2 inline-flex">
        <img className="w-3.5 h-3.5" src="https://via.placeholder.com/15x15" alt="Facebook" />
        <div className="w-48 h-4 text-center text-white text-base font-thin font-['Inter'] leading-none">Continue with Facebook</div>
      </div>
      <div className="w-96 px-28 py-2.5 left-0 top-[94.47px] absolute bg-white rounded-sm border border-stone-300 justify-center items-center gap-2 inline-flex">
        <div className="w-3.5 h-3.5 justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
              <div className="w-3.5 h-3.5 relative"></div>
            </div>
          </div>
        </div>
        <div className="w-40 h-4 text-center text-neutral-800 text-base font-thin font-['Inter'] leading-none">Continue with Google</div>
      </div>
      <div className="w-96 px-28 py-2.5 left-0 top-[149.47px] absolute bg-black rounded-sm border border-black justify-center items-start gap-2 inline-flex">
        <div className="w-3 h-4 flex-col justify-center items-center inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center inline-flex">
            <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center inline-flex">
              <div className="w-5 h-6 relative"></div>
            </div>
          </div>
        </div>
        <div className="w-40 h-4 text-center text-white text-base font-thin font-['Inter'] leading-none">Continue with Apple</div>
      </div>
      <div className="w-4 h-6 left-[192.09px] top-[204.77px] absolute text-center text-black text-base font-normal font-['Inter'] leading-normal">or</div>
      <div className="w-44 h-px left-0 top-[216.66px] absolute border-t border-zinc-800" />
      <div className="w-44 h-px left-[228px] top-[216.66px] absolute border-t border-zinc-800" />
      <div className="w-96 h-24 left-0 top-[244.86px] absolute bg-white flex-col justify-center items-start gap-4 inline-flex">
        <div className="self-stretch grow shrink basis-0 px-2 pt-2 pb-2.5 bg-white rounded border border-neutral-400 justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch pr-24 justify-start items-center inline-flex">
            <div className="w-72 h-5 text-neutral-400 text-lg font-thin font-['Inter']">Your email address or profile URL</div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 py-2.5 bg-orange-600 rounded-sm border border-orange-600 justify-center items-center inline-flex">
          <div className="w-16 h-4 text-center text-white text-base font-thin font-['Inter'] leading-none">Continue</div>
        </div>
      </div>
      <div className="w-16 h-4 left-[335.28px] top-[356.59px] absolute text-right text-blue-700 text-xs font-normal font-['Inter'] leading-none">Need help?</div>
      <div className="w-96 h-16 left-0 top-[384.11px] absolute">
        <p className="text-neutral-400 text-xs font-thin font-['Inter'] leading-none">
          When registering, you agree that we may use your provided data for the registration and to send you notifications on our products and services. You can unsubscribe from notifications at any time in your settings. For additional info please refer to our <span className="text-blue-700">Privacy Policy</span>.
        </p>
      </div>
    </div>
    </div>
  );
}

