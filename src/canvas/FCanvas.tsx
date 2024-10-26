import PhoneFrame, { FrameType } from "../components/frames/PhoneFrame";
import { generateRandomImage } from "../shared/helpers/generateRandomImage";

const FCanvas = () => {
  return <div>
    <PhoneFrame
      safeArray={false}
      baseWidth={450}
      type={FrameType.android} >
      <img src={generateRandomImage({
      })} alt="" className="w-full" />
    </PhoneFrame>
  </div>
}

export default FCanvas;