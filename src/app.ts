import { NumberInput, TextInput, Button, Select, ModalWindow, Root, DestroyingPatternContentSwitcher, Span, Link } from "@tblabs/truffle";
import { Router } from './Services/Router';
import { SlideFactory } from './Services/SlideFactory';
import { iPhoneSlides } from './Slides/iPhone';
import { msProblems, msSlides } from './Slides/ms';
import { cameraProblems } from "./Slides/problems";
import { leds } from "./Slides/leds";
import { android } from "./Slides/android";
import { magnetic } from "./magnetic";
import { prepare } from "./Slides/prepare";
import { contact } from "./Slides/contact";
import { start } from "./Slides/start";
import { phone } from "./Slides/phone";

NumberInput.DefaultCssClasses = "uk-input uk-form-width-small";
TextInput.DefaultCssClasses = "uk-input";
Button.DefaultCssClasses = "uk-button uk-button-default";
Select.DefaultCssClasses = "uk-select";
ModalWindow.DefaultCssClasses = "tf-modal-window";
ModalWindow.Hook = Root.Hook;


const slides = [
    ...start,
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
]

const root = new Root("body").Class("root")

try
{
    const _router = new Router();
    const _sf = new SlideFactory(_router);

    root.Append(
        new DestroyingPatternContentSwitcher(_router.Hash).Class("PagesSwitcher")
            .AddContent("slide/:id", ({ id }) =>
            {
                const slide = slides.find(x => x.Id == id);

                window.scrollTo(0, 0);

                return slide
                    ? _sf.Create(slide)
                    : new Span("Nie znaleziono slajdu")
            })
            .AddDefaultContent(() =>
            {
                return _sf.Create(start[0]);
            }),
    )
}
catch (ex: any)
{
    root.Append("Błąd podczas ładowania treści")
    console.error(ex.message)
}