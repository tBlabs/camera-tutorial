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

const magnetic = [
    {
        Id: "magnetic",
        Type: "page",
        Content: `### Kulki magnetyczne
    
Kulki z magnesów neodymowych mogą być alternatywą dla słuchawek aktywnych. Działają na innej zasadzie niż zwykłe słuchawki: dźwięk przenoszą poprzez drgania przenoszone bezpośrednio na błonę bębenkową w uchu. *Z tego tytułu jest to rozwiązanie skrajnie niebezpieczne i istnieje możliwość utraty słuchu podczas montażu!* 
    
Z innych wad: 
- głośność jest dosyć niska,  
- kulki też dosyć łatwo wypadają samoistnie,  
- ciężko też jest poprawnie ułożyć je w uchu tak żeby było cokolwiek słychać,

Oczywiście są ludzie, którzy nie mają z tym problemu i u nich wszystko działa świetnie, ale może to wynikać ze specyficznej budowy anatomicznej ich uszu. *My nie polecamy stosowania kulek, słuchawki aktywne są wystarczającą, dużo lepszą alternatywą*, która sprawdza się od lat i jak do tej pory nie została przyuważona przez nikogo z zewnątrz ;)

---

Słuchawki te posiadają też pewne zalety:
- są mniejsze (choć to nie ma znaczenia),
- nie wydają dźwięku,
- nie wymagają baterii,
- nie psują się

Mimo powyższych zalet i tak *zalecamy korzystanie ze słuchawek aktywnych* (tych na baterie).`,
        ImageUrl: "",
        NextId: "magnetic-install"
    }, 
    {
        Id: "magnetic-install",
        Type: "page",
        Content: `### Wkładanie
        
Istnieje kilka sposobów na włożenie kulki:
        
- siłą rozpędu - po prostu wrzucając ją do ucha przez słomkę,
- siłowo - dociskając wacikiem

W obydwu przypadkach należy uważać by nie przepchnąć kulki za daleko by nie przebiła błony bębenkowej.  
W uchu nie ma dobrego czucia, więc nie sposób określić czy słuchawka jest już na miejscu. Można to poznać tylko po tym, że słychać już dźwięk, ale będzie go słychać dopiero kiedy kulka dotknie błony.

Zwykle wkłada się dwie "słuchawki". Po jednej do każdego ucha.  
Można też włożyć dwie połączone - powinno być trochę głośniej.  
Zwykle dajemy kulki w różnych rozmiarach. Należy dobrać właściwy eksperymentalnie, zaczynając od największego.

### Wyjmowanie

Kulkę można wyjąć tylko za pomocą cylindrycznego magnesu (tego długiego) dołączonego do zestawu. Wystarczy go zbliżyć do kulki wewnątrz ucha, by ta została wyciągnięta automatycznie.
`,
        ImageUrl: "mag.jpg",
        NextId: "contact"
    },];


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
            { Label: "Mikrosłuchawkę Nano", ImageUrl: "mag1.jpg", GoTo: "magnetic" },
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
    ...magnetic,
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

