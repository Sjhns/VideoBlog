export const RecommendedList = () => {
  const urlImage =
    "https://www.ufmt.br/ocs/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png";

  return (
    <div className="flex items-center mb-2 cursor-pointer px-3 py-2 
    hover:bg-gray-900 duration-200 ease-in-out hover:scale-110
    
    ">
      <img
        src={urlImage}
        alt=""
        className="sm:w-[60px] sm:h-[60px]
      lg:w-[140px] lg:h-[80px] rounded-lg object-cover
      "
      />
      <div className="ml-2 flex-1">
        <h3 className="text-textColor lg:text-[16px] sm:text-[12px]">
          animal Kingdom <span className="block text-[12px] text-gray-400">animal</span>
        </h3>
        <div className="flex items-center mt-2">
          <p className="text-[14px] font-bold text-gray-500">40:30</p>
          <p className="text-[14px] font-bold text-gray-500 ml-6">65,000</p>
        </div>
      </div>
    </div>
  );
};
