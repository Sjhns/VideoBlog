import { FiSearch, FiMenu } from "react-icons/fi";
import { IoSettingsSharp, IoNotificationsSharp } from "react-icons/io5";

export const Header = () => {
  const github = () => {
    window.open("https://github.com/Sjhns");
  };

  return (
    <div className="flex items-center justify-between w-full h-[80px]  md:px-4 sm:px-4">
      <FiMenu
        className=" md:w-[25px] 
      md:h-[25px] sm:w-[20px] sm:h-[20px] lg:ml-[3px]

      text-gray-400 hover:text-textColor
          text-lg cursor-pointer mr-6"
      />
      <div
        className="m-auto bg-searchBar h-[40px] px-4  md:flex 
      items-center rounded-3xl overflow-hidden sm:hidden
      md:w-[600px]
      
      "
      >
        <FiSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full bg-transparent outline-none border-none
         text-textColor placeholder-gray-400 px-3 text-base"
        />
      </div>

      <div className="flex items-center">
        <IoSettingsSharp
          className="text-gray-400 hover:text-textColor lg:mr-6
          text-lg cursor-pointer   md:block ml-6 mr-4
          "
        />

        <IoNotificationsSharp
          className="text-gray-400 hover:text-textColor lg:mr-6
          text-lg cursor-pointer
          mr-4
          "
        />
        <img
          onClick={github}
          src="./profile.jpg"
          className="md:w-[37px] md:h-[37px] rounded-full object-cover
        min-w-[31px]  w-[31px] h-[31px]  cursor-pointer
        "
        />
        <p onClick={github} className="text-textColor text-[14.5px] font-bold ml-2
        hidden md:block leading-[15px] cursor-pointer ">
          Johnson
          <span className="block text-[10px] text-gray-500 ">
            software engineer
          </span>
        </p>
      </div>
    </div>
  );
};
