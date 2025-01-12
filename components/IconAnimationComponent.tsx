import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function GithubAnim({
  width,
  height,
  src,
}: {
  width: any;
  height: any;
  src: string;
}) {
  return (
    <div>
      <DotLottieReact
        src={src} // Path to your .lottie file
        autoplay
        loop
        style={{ width: `${width}px`, height: `${height}px` }}
      ></DotLottieReact>
    </div>
  );
}
