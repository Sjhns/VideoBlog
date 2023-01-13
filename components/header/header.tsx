import { Notifications, Search, Settings } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Header = () => {
  const urlLogo = "https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/Images%2Flogo.png?alt=media&token=f8038ccb-49f6-4fad-859c-1b53cae70575";
  const urlProfilePicture = "https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/Images%2Fportrait.jpg?alt=media&token=287a4599-200f-4720-94b5-b6a06c72c349";
  
    return (
    <div className="flex items-center w-full h-[80px] py-4 md:px-8 sm:px-4">
      {/* logo */}
      <img
        src={urlLogo}
        alt=""
        className="md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] lg:ml-[30px]"
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

      <div className="flex items-center ">
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
