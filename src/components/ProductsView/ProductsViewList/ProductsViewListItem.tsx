import React from "react";

import { Check, Flag } from "lucide-react";
import {
  CompareIcon,
  EditIcon,
  FavouriteIcon,
  GearIcon,
  MilageIcon,
  MotorIcon,
  WheelIcon,
  EmergencyIcon,
  PerfectIcon,
  HistoryIcon,
  UnionIcon,
} from "../../../assets/images/ProductIcons";

export interface ProductCardProps {
  isCustomsPassed?: boolean;
  isSaloon?: boolean;
  isVip?: boolean;
  isVipPlus?: boolean;
  isNew?: boolean;
  isColorCard?: boolean;
  isAdditionalInfo?: boolean;
  isDealer?: boolean;
  location?: string;
  name?: string;
  year?: number;
  price?: number;
  engine?: string;
  gear?: string;
  milage?: string;
  wheel?: string;
  views?: number;
  time?: string;
  customsPrice?: number;
  image?: string;
}

const ProductsViewListItem = ({
  isCustomsPassed,
  isSaloon,
  isVip,
  isVipPlus,
  isNew,
  isColorCard,
  isAdditionalInfo,
  isDealer,
  location,
  name,
  year,
  price,
  engine,
  gear,
  milage,
  wheel,
  views,
  time,
  customsPrice,
  image,
}: ProductCardProps) => {
  return (
    <div
      className={`w-full ${
        isColorCard ? "bg-green50 border-green200 border-[1px]" : "bg-white"
      } rounded-[14px]`}
    >
      <div className='flex gap-[16px] p-[16px]'>
        <img
          className='w-[180px] h-[130px] object-cover rounded-[10px]'
          src={image}
          alt='img'
        />
        <div className='w-full'>
          <div className='w-full flex items-start justify-between'>
            <div className='flex items-center gap-[8px] pb-[16px]'>
              {isNew && (
                <div className='flex items-center bg-violet500 text-white text-[10px] font-[700] px-[8px] py-[3px] rounded-[4px]'>
                  ახალი
                </div>
              )}
              <p className='text-[14px] font-[500]'>{name}</p>
              <p className='text-[14px] text-black500'>{year} წ</p>
            </div>
            <div className='flex items-center gap-[16px]'>
              {!isSaloon &&
                (isCustomsPassed ? (
                  <div className='flex items-center text-green300 gap-[4px] font-[500]'>
                    <Check size={11} />
                    <p className='text-[11px]'>განბაჟებული</p>
                  </div>
                ) : (
                  <p className='text-red800 text-[11px] font-[500]'>
                    განბაჟება {customsPrice?.toLocaleString()} ₾
                  </p>
                ))}
              <div className='flex items-center gap-[8px]'>
                <Flag size={16} />
                <p className='text-black600 text-[12px]'>{location}</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-start'>
            <div className='flex gap-[32px]'>
              <div>
                <div className='flex items-center gap-[12px] w-[182px] py-[8px]'>
                  <MotorIcon />
                  <p className='text-[12px] text-black800'>{engine}</p>
                </div>
                <div className='flex items-center gap-[12px] w-[182px] py-[8px]'>
                  <GearIcon />
                  <p className='text-[12px] text-black800'>{gear}</p>
                </div>
              </div>
              <div>
                <div className='flex items-center gap-[12px] w-[182px] py-[8px]'>
                  <MilageIcon />
                  <p className='text-[12px] text-black800'>{milage}</p>
                </div>
                <div className='flex items-center gap-[12px] w-[182px] py-[8px]'>
                  <WheelIcon />
                  <p className='text-[12px] text-black800'>{wheel}</p>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-[4px] font-[500]'>
              <p className='text-[20px]'>{price?.toLocaleString()}</p>
              <span className='text-[16px] bg-gray50 rounded-full w-[24px] h-[24px] flex items-center justify-center'>
                ₾
              </span>
            </div>
          </div>
          <div className='flex items-center justify-between mt-[20px]'>
            <div className='flex items-center gap-[16px]'>
              {(isVipPlus || isVip) && (
                <div
                  className={`py-[3px] px-[8px] rounded-full ${
                    isVipPlus ? "bg-yellow500" : "bg-violet500"
                  }`}
                >
                  <p className='text-[10px] font-[700] text-white'>
                    {isVipPlus ? "VIP +" : "VIP"}
                  </p>
                </div>
              )}
              <p className='text-black600 text-[12px]'>
                {views} ნახვა &bull; {time}
              </p>
            </div>
            <div className='flex items-center gap-[16px]'>
              <EditIcon />
              <CompareIcon />
              <FavouriteIcon />
            </div>
          </div>
        </div>
      </div>
      {(isAdditionalInfo || isDealer || isSaloon) && (
        <>
          <div
            className={`w-full h-[1px] ${
              isColorCard ? "bg-green150" : "bg-gray50"
            }`}
          />
          <div
            className={`p-[16px] flex items-center ${
              isSaloon ? "justify-between" : ""
            }`}
          >
            {isAdditionalInfo && (
              <div className='flex items-center gap-[8px]'>
                <div className='flex items-center gap-[8px] bg-white px-[8px] py-[5px] rounded-full border border-gray100'>
                  <EmergencyIcon />
                  <p className='text-[12px]'>სასწრაფოდ</p>
                </div>
                <div className='flex items-center gap-[8px] bg-white px-[8px] py-[5px] rounded-full border border-gray100'>
                  <PerfectIcon />
                  <p className='text-[12px]'>იდიალურ მდგომარეობაში</p>
                </div>
                <div className='flex items-center gap-[8px] bg-white px-[8px] py-[5px] rounded-full border border-gray100'>
                  <HistoryIcon />
                  <p className='text-[12px]'>სუფთა ისტორია</p>
                </div>
              </div>
            )}
            {(isDealer || isSaloon) && (
              <div className='flex items-center gap-[8px]'>
                <img
                  src='/dealerLogo.png'
                  alt=''
                  className='w-[40px] h-[40px] rounded-full'
                />
                <div>
                  <p className='text-[12px] font-[500]'>MC TRANS</p>
                  <div className='flex items-center gap-[8px] text-[11px] text-black600'>
                    <UnionIcon />
                    <p>ყველა განცხადება (26)</p>
                  </div>
                </div>
              </div>
            )}
            {isSaloon && (
              <div className='bg-gray50 rounded-[6px] px-[16px] py-[11px] flex items-center gap-[8px] cursor-pointer hover:bg-gray100 transition duration-200'>
                <WheelIcon color='#272A37' />
                <p className='text-black800 font-[500] text-[12px]'>
                  ტესტ დრაივი
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsViewListItem;
