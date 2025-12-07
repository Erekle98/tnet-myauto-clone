import React from "react";
import { Check, Flag } from "lucide-react";
import {
  CompareIcon,
  EditIcon,
  EmergencyIcon,
  FavouriteIcon,
  FireIcon,
  HistoryIcon,
  PerfectIcon,
} from "../../../assets/images/ProductIcons";
import { ProductCardProps } from "../ProductsViewList/ProductsViewListItem";

const ProductViewListMobileItem = ({
  isCustomsPassed,
  isVip,
  isVipPlus,
  isColorCard,
  location,
  isAdditionalInfo,
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
        isColorCard ? "bg-green50 border-green400 border-[1px]" : "bg-white"
      } rounded-[14px] overflow-hidden`}
    >
      <div className='p-[16px]'>
        <div className='flex items-center gap-[8px] mb-[12px]'>
          {(isVipPlus || isVip) && (
            <div
              className={`py-[3px] px-[8px] rounded-full min-w-fit ${
                isVipPlus ? "bg-yellow500" : "bg-violet500"
              }`}
            >
              <p className='text-[10px] font-[700] text-white uppercase'>
                {isVipPlus ? "S-VIP" : "VIP"}
              </p>
            </div>
          )}
          <h3 className='text-[14px] text-black800 line-clamp-1 break-words'>
            {name}
          </h3>
          <p className='text-[12px] text-black600 whitespace-nowrap'>
            {year} წ
          </p>
        </div>

        <div className='flex justify-between items-center mb-[12px]'>
          <div className='flex items-center gap-[4px]'>
            <p className='text-[20px] font-[700] text-black900'>
              {price?.toLocaleString()}
            </p>
            <span className='text-[14px] bg-gray50 rounded-full w-[24px] h-[24px] flex items-center justify-center text-black400 font-[700]'>
              ₾
            </span>
          </div>
          {isCustomsPassed ? (
            <div className='flex items-center bg-green100 px-[10px] py-[4px] rounded-[6px] gap-[4px]'>
              <Check size={12} className='text-green800' />
              <p className='text-[11px] text-green800 font-[500]'>
                განბაჟებული
              </p>
            </div>
          ) : (
            <div className='flex items-center bg-red100 px-[10px] py-[4px] rounded-[6px] gap-[4px]'>
              <p className='text-red800 text-[11px] font-[500]'>
                განბაჟება {customsPrice?.toLocaleString()} ₾
              </p>
            </div>
          )}
        </div>

        <div className='relative w-full h-[200px] rounded-[12px] overflow-hidden mb-[16px]'>
          <img className='w-full h-full object-cover' src={image} alt='img' />
          <div className='absolute top-[12px] right-[12px] z-10 text-white drop-shadow-md'>
            <FavouriteIcon color='white' />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-y-[8px] gap-x-[16px] text-[12px] text-black800'>
          <p>{milage} კმ</p>
          <p className='font-[500]'>ჰეჩბექი</p> <p>{engine}</p>
          <p>{wheel}</p>
          <p>{gear}</p>
          <div className='flex items-center gap-[4px]'>
            <Flag size={14} className='text-orange500' />
            <p className='truncate'>{location}</p>
          </div>
        </div>
      </div>
      {isAdditionalInfo && (
        <div className='flex items-center gap-[8px] overflow-x-auto w-full scrollbar-none px-[16px] pb-[16px]'>
          <div className='flex items-center gap-[8px] bg-white px-[8px] py-[5px] rounded-full border border-gray100'>
            <EmergencyIcon />
            <p className='text-[12px] whitespace-nowrap'>სასწრაფოდ</p>
          </div>
          <div className='flex items-center gap-[8px] bg-white px-[8px] py-[5px] rounded-full border border-gray100'>
            <PerfectIcon />
            <p className='text-[12px] whitespace-nowrap'>
              იდიალურ მდგომარეობაში
            </p>
          </div>
          <div className='flex items-center gap-[8px] bg-white px-[8px] py-[5px] rounded-full border border-gray100'>
            <HistoryIcon />
            <p className='text-[12px] whitespace-nowrap'>სუფთა ისტორია</p>
          </div>
        </div>
      )}

      <div className='border-t border-gray100' />

      <div className='p-[16px] flex justify-between items-center'>
        <div className='flex items-center gap-[8px] text-black400'>
          <FireIcon />
          <p className='text-[11px] text-black600'>
            {views} ნახვა &bull; {time}
          </p>
        </div>
        <div className='flex items-center gap-[16px] text-black400'>
          <CompareIcon />
          <EditIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductViewListMobileItem;
