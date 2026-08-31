import { ISlideBase } from "./Core/ISlideBase";
import { start } from "./Slides/start";
import { txl } from "./Slides/txl";
import { prepare } from "./Slides/prepare";
import { phone } from "./Slides/phone";
import { magnetic } from "./Slides/magnetic";
import { iPhoneSlides } from "./Slides/iPhone";
import { android } from "./Slides/android";
import { leds } from "./Slides/leds";
import { contact } from "./Slides/contact";
import { hiding } from "./Slides/hiding";
import { detector } from "./Slides/detector";
import { calibration } from "./Slides/calibration";
import { charging } from "./Slides/charging";
import { cleaning } from "./Slides/cleaning";
import { usage } from "./Slides/usage";
import { msProblems, msSlides } from "./Slides/ms";
import { cameraProblems } from "./Slides/problems";


export const SLIDES: ISlideBase[] = [
    ...start,
    ...txl,
    ...prepare,
    ...msSlides,
    ...msProblems,
    ...phone,
    ...magnetic,
    ...iPhoneSlides,
    ...android,
    ...leds,
    ...cameraProblems,
    ...contact,
    ...hiding,
    ...detector,
    ...calibration,
    ...charging,
    ...cleaning,
    ...usage,
]