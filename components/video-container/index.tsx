export const VideoContainer = () => {
  // const urlVideo = "https://firebasestorage.googleapis.com/v0/b/video-blog-b036d.appspot.com/o/videos%2Fzsh%202023-01-13%2015-20-09.mp4?alt=media&token=d49eeedb-9621-489d-a4ae-b62997cc734e";
  const urlVideo = "https://firebasestorage.googleapis.com/v0/b/video-blog-b036d.appspot.com/o/videos%2Fgym.mp4?alt=media&token=641bc3d8-d8e7-4399-b35c-d5f602dfb496"
  return (
    <div className="relative w-full h-full">
      <video src={urlVideo} controls={true} 
      className="min-w-full min-h-full w-auto h-auto bg-cover
       "></video>

      <div className="absolute top-0 left-0 z-10 w-full h-[60px] py-2 px-3
      bg-gradient-to-b from-black to-transparent
      ">
        <h2 className="text-textColor text-sm">This is our first video</h2>
      </div>
    </div>
  );
};
