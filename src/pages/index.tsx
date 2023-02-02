import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../container/header/header";
import { VideoContainer } from "../container/video-container";
import { RecommendedList } from "../container/recommended-list";
import { Collection } from "../container/collection";
import { useEffect, useState } from "react";
import { data } from "../container/data";

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
    <div className="bg-mainBg w-screen h-screen overflow-hidden flex flex-col ">
      <Head>
        <title>{isVideo.name}</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />

      <div className="w-full h-[calc(100%-80px)] flex md:px-4">
        <div className="w-full md:w-[100%] h-full">
          <div className="w-full h-[70%] max-h-[480px] grid grid-cols-3 gap-2 p-2">
            <div
              className="sm:col-span-3 md:col-span-2 rounded-lg
            overflow-hidden flex items-center justify-center
            "
            >
              <VideoContainer data={isVideo} />
            </div>

            <div
              className="sm:col-span-3  md:col-span-1 bg-searchBar  overflow-y-auto
            scrollbar scrollbar-thin scrollbar-thumb-gray-700 duration-200 ease-in-out
            "
            >
              <p className="text-textColor text-[18px] font-medium mt-3 mb-4 px-2">
                Recomendados para você
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
        </div>
      </div>
    </div>
  );
};

export default Home;
