import PhoneFrame, { FrameType } from "../components/frames/PhoneFrame";
import { generateRandomImage } from "../shared/helpers/generateRandomImage";

const FCanvas = () => {
  return <div>
    <PhoneFrame
        safeArray={false}
        baseWidth={400}
        type={FrameType.ios}
    >
      <img src={generateRandomImage({})} alt="" className="w-full"/>
      <img src={generateRandomImage({})} alt="" className="w-full"/>
      <img src={generateRandomImage({})} alt="" className="w-full"/>
      <img src={generateRandomImage({})} alt="" className="w-full"/>
    </PhoneFrame>
  </div>
}

export default FCanvas;