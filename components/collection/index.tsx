interface CollectionProps {
  imgSrc: string;
}

export const Collection = ({ imgSrc }: CollectionProps) => {
  return (
    <div
      className="relative min-w-[250px] max-h-[140px] w-[250px] h-[100%] rounded-lg
    bg-gray-400 mx-2 overflow-hidden
    "
    >
      <img src={imgSrc} alt="" className="w-full h-full object-cover" />
      <div
        className="w-full h-[40px] bg-collectioBg absolute bottom-0
      flex items-center px-2
      "
      >
        <h2 className="text-textColor text-[16px] font-boldk">Nature</h2>
      </div>
    </div>
  );
};
