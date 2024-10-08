import React from "react";

const Bill = () => {
  return (
    <div className=" p-5 w-[80vw] md:w-[60vw] rounded-lg border-[1px] border-[#272b2f] text-slate-300 space-y-4">
      <div className="flex items-center justify-between mx-3">
        <h1>Pro Plan </h1>
        <p>$30</p>
      </div>
      <div className="flex items-center justify-between mx-3">
        <h1>Additionals </h1>
        <p>$30</p>
      </div>
      <div className="border-b-[1px] border-[#272b2f]"></div>
      <div className="flex items-center justify-between mx-3">
        <h1>Estimated total</h1>
        <p>$30</p>
      </div>
      <p className="mt-3 max-w-md">
        Your payment method will be charged this amount plus usage fees every 30
        days starting Nov 8, 2024.
      </p>
    </div>
  );
};

export default Bill;
