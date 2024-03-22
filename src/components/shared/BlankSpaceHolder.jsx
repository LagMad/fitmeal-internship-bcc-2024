import React from 'react';

const BlankSpacePlaceholder = () => {
  return (
    <div className="flex flex-col w-full justify-start items-start text-cust-black-light-active border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-cust-black-light py-5 px-5 gap-3">
      <div className="text-sm">Paket {index + 1}</div>
      <div className="text-2xl">Tambahkan paket makan</div>
    </div>
  );
};

export default BlankSpacePlaceholder;