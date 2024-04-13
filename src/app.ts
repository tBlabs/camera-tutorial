import { NumberInput, TextInput, Button, Select, ModalWindow, Root, DestroyingPatternContentSwitcher, Span, Link } from "@tblabs/truffle";
import { Router } from './Services/Router';
import { SlideFactory } from './Services/SlideFactory';
import { iPhoneSlides } from './Slides/iPhone';
import { msSlides } from './Slides/ms';
import { cameraProblems } from "./Slides/problems";
import { leds } from "./Slides/leds";
import { android } from "./Slides/android";

NumberInput.DefaultCssClasses = "uk-input uk-form-width-small";
TextInput.DefaultCssClasses = "uk-input";
Button.DefaultCssClasses = "uk-button uk-button-default";
Select.DefaultCssClasses = "uk-select";
ModalWindow.DefaultCssClasses = "tf-modal-window";
ModalWindow.Hook = Root.Hook;


const slides = [
    {
        Id: "start",
        Type: "choose",
        Title: `### Samouczek

Niniejszy poradnik ma za zadanie pomóc w samodzielnym uruchomieniu sprzętu.  
Pełna instrukcja obsługi znajduje się pod adresem [watcher.specteam.pl#help](https://watcher.specteam.pl/#help) i należy się z nią bezwzględnie zapoznać!

*Co chcesz uruchomić?*`,
        Options: [
            { Label: "Mikrokamerę", ImageUrl: "tx.jpg", GoTo: "choose-phone" },
            { Label: "Mikrosłuchawkę", ImageUrl: "ms.jpeg", GoTo: "ms-start" },
        ]
    },
    ...msSlides,
    {
        Id: "choose-phone",
        Type: "choose",
        Title: "Jaki masz telefon?",
        Options: [
            { Label: "iPhone", ImageUrl: "iphone/iphone.jpg", GoTo: "iPhone-settings" },
            { Label: "Android", ImageUrl: "android/android.jpg", GoTo: "android" },
        ]
    },
    ...iPhoneSlides,
    ...android,
    {
        Id: "camera-start",
        Type: "page",
        Content: "Hotspot jest już gotowy. Te ustawienia wprowadza się tylko raz.\n\nOd tej pory wystarczy włączyć hotspot przed uruchomieniem kamery (guzikiem `Dopuszczaj innych`).\n\nW kolejnym kroku włączymy kamere...",
        ImageUrl: "",
        NextId: "led"
    },
    ...leds,
    ...cameraProblems,
    {
        Id: "contact",
        Type: "page",
        Content: `### Pomoc

Jeśli nie udało Ci się samodzielnie poradzić sobie z problemem skorzystaj z opcji poniżej:

📜 Pełna instrukcja obsługi: [watcher.specteam.pl/#help](https://watcher.specteam.pl/#help)
        
☎️ Infolinia: *507-293-714*  

🌐 Strona kontaktu: [www.specteam.pl/Kontakt](https://specteam.pl/Kontakt)`,
    },
]

const root = new Root().Class("root")

const _router = new Router();
const _sf = new SlideFactory(_router);

root.Append(
    new DestroyingPatternContentSwitcher(_router.Hash).Class("PagesSwitcher")
        .AddContent("slide/:id", ({ id }) =>
        {
            const slide = slides.find(x => x.Id == id)
            return slide
                ? _sf.Create(slide)
                : new Span("Slide not found")
        })
        .AddDefaultContent(() =>
        {
            _router.GoToStart()
            return new Link("Go to start").OnClick(() => _router.GoToStart())
        })
)

