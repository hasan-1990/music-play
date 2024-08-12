import React from "react";
import { assets } from "../assets/frontend-assets/assets";
import { useNavigate } from "react-router-dom";



const sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex ">
      <div className="bg-[#121212] h-[20%] rounded flex-col justify-around">
        <div onClick={()=>navigate("/")} className="flex items-center gap-3 pl-8 cursor-pointer py-3 ">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">صفحه اصلی</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer py-3">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">جستجو</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
      <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
      <img className="w-8" src={assets.stack_icon} alt="" />
      <p className="font-semibold">کتابخانه شما</p>

      </div>
      <div className="flex items-center gap-3">
      <img className="w-5" src={assets.arrow_icon} alt="" />
      <img className="w-5" src={assets.plus_icon} alt="" />

      </div>

      </div>
        <div className=" p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-3 pl-4">
        <h1>اولین فهرست پخشتان را ایجاد کنید</h1>
        <p className="font-light">خیلی ساده است کمکتان میکنیم</p>
        <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">ساخت فهرست پخش</button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-3 pl-4 mt-4">
        <h1>بیایید چند پادکست برایه دنبال کردن پیدا کنیم</h1>
        <p className="font-light">برایه قسمت هایه جدید به شما عطلاع میدهیم</p>
        <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">گشتن در پادکست ها</button>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
