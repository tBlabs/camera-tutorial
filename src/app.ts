import "./Css/app.css";

import { NumberInput, TextInput, Button, Select, ModalWindow, Root, DestroyingPatternContentSwitcher, Div } from "@tblabs/truffle";
import { Router } from './Services/Router';
import { SlideFactory } from './Services/SlideFactory';
import { start } from "./Slides/start";
import { MapPage } from "./Pages/MapPage";
import { SLIDES } from "./slides";


NumberInput.DefaultCssClasses = "uk-input uk-form-width-small";
TextInput.DefaultCssClasses = "uk-input";
Button.DefaultCssClasses = "uk-button uk-button-default";
Select.DefaultCssClasses = "uk-select";
ModalWindow.DefaultCssClasses = "tf-modal-window";
ModalWindow.Hook = Root.Hook;


const root = new Root("body").Class("root");

try
{
    const _router = new Router();
    const _sf = new SlideFactory(_router);

    root.Append(
        new DestroyingPatternContentSwitcher(_router.Hash).Class("PagesSwitcher")
            .AddContent("map", () => new MapPage())
            .AddContent("slide/:id", ({ id }) =>
            {
                const slide = SLIDES.find(x => x.Id == id);

                if (!slide)
                {
                    return new Div().Text("Nie znaleziono slajdu").Margin(32).TextAlignCenter();
                }

                window.scrollTo(0, 0);

                return _sf.Create(slide);
            })
            .AddDefaultContent(() =>
            {
                return _sf.Create(start[0]);
            }),
    )
}
catch (ex: any)
{
    root.Append("Błąd ładowania treści").Margin(32).TextAlignCenter();
    console.error(ex.message);
}