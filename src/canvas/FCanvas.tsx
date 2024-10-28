import PhoneFrame, { FrameType } from "../components/frames/PhoneFrame";
import { useBuildAppInCanvas } from "./useBuildAppInCanvas";

const FCanvas = () => {
  const { scaffold } = useBuildAppInCanvas()
  return <div>
    <PhoneFrame
      safeArray={!scaffold?.hasAppBar}
      baseWidth={400}
      type={FrameType.android}
    >
      {scaffold?.render()}
    </PhoneFrame>
  </div>
}

export default FCanvas;