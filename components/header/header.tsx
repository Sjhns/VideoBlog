import { Notifications, Search, Settings } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Header = () => {
  const urlLogo = "https://github.com/Sjhns/library/blob/main/img/girl-tv.png?raw=true";
  const urlProfilePicture = "https://i.pinimg.com/originals/be/cc/ae/beccae03868f95f2ca90fd3418b19cd4.jpg";
  
    return (
    <div className="flex items-center w-full h-[80px] py-4 md:px-8 sm:px-4">
      {/* logo */}
      <img
        src={urlLogo}
        alt=""
        className="mt-[7px] md:w-[90px] md:h-[90px] sm:w-[73px] sm:h-[73px] lg:ml-[3px]"
      />

      {/* Search box */}
      <div
        className="ml-20 bg-searchBar h-[40px] px-2 md:flex 
      items-center rounded-md overflow-hidden sm:hidden"
      >
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full bg-transparent outline-none border-none
         text-textColor placeholder-gray-400 px-2"
        />
      </div>

      {/* profile container */}
      <div className="flex items-center justify-evenly h-[40px] lg:w-[25%] ml-auto">
        <IconButton className="lg:mx-4">
          <Settings className="text-gray-400 hover:text-textColor" />
        </IconButton>
        <IconButton className="lg:mx-4">
          <Notifications className="text-gray-400 hover:text-textColor" />
        </IconButton>
      </div>

      <div className="flex items-center">
        <img
          src={urlProfilePicture}
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover
        min-w-[40px]
        "
        />
        <p className="text-textColor text-[16px] font-bold ml-2">
          Johnson
          <span className="block text-[12px] text-gray-500">
            software engineer
          </span>
        </p>
      </div>
    </div>
  );
};
