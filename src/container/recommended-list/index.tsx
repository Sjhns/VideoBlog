interface RecommendedListProps{
  imgSrc: string
  videoName: string
}
export const RecommendedList = ({ imgSrc, videoName}: RecommendedListProps) => {
  return (
    <div
      className="flex items-center mb-2 cursor-pointer px-3 py-2 
    hover:bg-gray-900 duration-200 ease-in-out"
    >
      <img
        src={imgSrc}  
        alt=""
        className="sm:w-[150px] sm:h-[100px]
      lg:w-[160px] lg:h-[100px] rounded-lg object-cover
      "
      />
      <div className="ml-2 flex-1 pt-2">
        <h3 className="text-textColor lg:text-[15px] sm:text-[14px]  w-full
        flex flex-col 
        ">
          {videoName}
          <span className="text-[12px] mt-3 w-max 
           px-[13px] rounded-xl flex items-center justify-center lowercase bg-slate-500
           text-gray-300 font-bold pb-[2px]">Em alta</span>
        </h3>
        <div className="flex items-center mt-2">

        </div>
      </div>
    </div>
  );
};
