interface VideoContainerProps {
  data: {
    videoSrc: string;
    name: string;
  };
}
export const VideoContainer = ({ data }: VideoContainerProps) => {
  return (
    <div className="relative w-full h-full">
      <video
        src={data.videoSrc}
        controls={true}
        className="min-w-full min-h-full w-auto h-auto bg-cover"/>

      <div
        className="absolute top-0 left-0 z-10 w-full h-[60px] py-2 px-3
      bg-gradient-to-b from-black to-transparent
      "
      >
        <h2 className="text-textColor text-sm">{data.name}</h2>
      </div>
    </div>
  );
};
