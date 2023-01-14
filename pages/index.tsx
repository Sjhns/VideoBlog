import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/header/header";
import { MenuItem } from "../components/menu-item";
import {
  Chat,
  Dashboard,
  Favorite,
  LocalMovies,
  Logout,
  Stream,
  TrendingUp,
  VideogameAsset,
} from "@mui/icons-material";
import { VideoContainer } from "../components/video-container";
import { RecommendedList } from "../components/recommended-list";
import { Collection } from "../components/collection";
import { useEffect, useState } from "react";
import { data } from "../components/data";

const effectScrollBar = () => {
  useEffect(() => {
    const scrollContainer = document.getElementById(
      "scrollContainer"
    ) as HTMLDivElement;
    scrollContainer?.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY < 0 ? -30 : 30;
    });
  }, []);
};

const Home: NextPage = () => {
  effectScrollBar();

  const [isVideo, setVideo] = useState({
    name: data[0].videoName,
    videoSrc: data[0].videoSrc,
  });

  return (
    <div className="bg-mainBg w-screen h-screen overflow-hidden flex flex-col">
      <Head>
        <title>{isVideo.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* main container */}
      <div className="w-full h-[calc(100%-80px)] flex">
        {/* left Menu */}
        <div
          className="sm:w-[6%] min-w-[60px]  md:w-[10%] h-full flex flex-col 
        items-center justify-evenly
        "
        >
          <MenuItem icon={<Dashboard />} name="Dashboard" />
          <MenuItem icon={<VideogameAsset />} name="Games" />
          <MenuItem icon={<LocalMovies />} name="Movies" />
          <MenuItem icon={<Stream />} name="Streamer" />
          <MenuItem icon={<TrendingUp />} name="Trending" />
          <MenuItem icon={<Chat />} name="Chat" />
          <MenuItem icon={<Favorite />} name="Favorite" />
          <MenuItem icon={<Logout />} name="Logout" />
        </div>
        {/* ---------------- */}

        {/* main container */}
        <div className="sm:w-[calc(100%-60px)] md:w-[90%] h-full">
          {/* top section */}
          <div className="w-full h-[70%] max-h-[480px] grid grid-cols-3 gap-2 p-2">
            {/* video container ------- */}
            <div
              className="sm:col-span-3 md:col-span-2 rounded-lg
            overflow-hidden flex items-center justify-center
            "
            >
              <VideoContainer data={isVideo} />
            </div>
            {/* ------end video container ------ */}

            {/* recommended list  */}
            <div
              className="sm:col-span-3  md:col-span-1 bg-searchBar overflow-y-auto
            scrollbar scrollbar-thin scrollbar-thumb-gray-700 duration-200 ease-in-out
            "
            >
              <p className="text-textColor text-[18px] font-bold my-2 px-2">
                Recommended
              </p>

              {data &&
                data.map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      setVideo({
                        name: item.videoName,
                        videoSrc: item.videoSrc,
                      })
                    }
                  >
                    <RecommendedList
                      imgSrc={item.imgSrc}
                      videoName={item.videoName}
                    />
                  </div>
                ))}
            </div>
          </div>
          {/* ------end top section---- */}

          {/* bottom section */}
          <div className="w-full h-[30%]">
            <div
              className="flex overflow-x-scroll items-center py-2
            scrollbar-none
            "
              id="scrollContainer"
            >
              {data &&
                data.map((item) => (
                  <Collection key={item.id} imgSrc={item.imgSrc} />
                ))}
            </div>
          </div>
          {/* -----end top section----- */}
        </div>
        {/* ---------end main container--------- */}
      </div>
    </div>
  );
};

export default Home;
