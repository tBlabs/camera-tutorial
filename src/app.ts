import 'reflect-metadata';
import { NumberInput, TextInput, Button, Select, ModalWindow, Root, MultilineInput, Span, DestroyingContentSwitcher, DestroyingPatternContentSwitcher } from "@tblabs/truffle";
import "moment/locale/pl";
import { Router } from './Router';
import { SlideFactory } from './SlideFactory';
import { ISlide } from './ISlide';
import { iPhoneSlides } from './Slides/iPhone';
import { ms } from './Slides/ms';

NumberInput.DefaultCssClasses = "uk-input uk-form-width-small";
TextInput.DefaultCssClasses = "uk-input";
Button.DefaultCssClasses = "uk-button uk-button-default";
Select.DefaultCssClasses = "uk-select";
ModalWindow.DefaultCssClasses = "tf-modal-window";
ModalWindow.Hook = Root.Hook;
MultilineInput.DefaultCssClasses = "uk-textarea";

const root = new Root().Class("root")

const slides: (ISlide)[] = [
    ...iPhoneSlides,
    ...ms,
    {
        Id: "start",
        Type: "choose",
        Title: `### Samouczek

Co chcesz uruchomić?`,
        Options: [
            { Label: "Mikrokamere", ImageUrl: "tx.jpg", GoTo: "choose-phone" },
            { Label: "Mikrosłuchawke", ImageUrl: "ms.jpg", GoTo: "ms-start" },
        ]
    },
    {
        Id: "choose-phone",
        Type: "choose",
        Title: "Jaki masz telefon?",
        Options: [
            { Label: "iPhone", ImageUrl: "iphone/iphone.jpg", GoTo: "iPhone-settings" },
            { Label: "Android", ImageUrl: "android/android.jpg", GoTo: "Android" },
        ]
    },
    {
        Id: "camera-start",
        Type: "page",
        Content: "Hotspot jest już gotowy. Te ustawienia wprowadza się tylko raz.\n\nOd tej pory wystarczy włączyć hotspot przed uruchomieniem kamery (guzikiem `Dopuszczaj innych`).\n\nW kolejnym kroku włączymy kamere...",
        ImageUrl: "",
        NextId: "led"
    },
    {
        Id: "iPhone:end-x",
        Type: "page",
        Content: "Podłącz kamere do prądu i odczekaj minute.\nPrzy gniazdku zasilania kamery znajduje się dioda, jeśli miga na:\n\n🟢 zielono - wszystko jest ok\n\n🔴 czerwono - hotspot nie działa (upewnij się, że poprzednie kroki zostały wykonane poprawnie)\n\n---\n⚠️ *Pamiętaj by pozostawić telefon na tym ekranie hotspota na czas uruchamiania kamery*",
        ImageUrl: "iphone/hot.png",
        NextId: "led"
    },
    {
        Id: "led",
        Type: "choose",
        Title: `### Uruchomienie kamery
Podłącz kamere do powerabanka. Można użyć dowolnego kabla mini-USB.

![Połączenie](conn.jpeg)

Odczekaj minute aż kamera się uruchomi.  

Przy gniazdku zasilania kamery znajduje się dioda.\n\nNa jaki miga kolor?`,
        Options: [
            { Label: "🟢 Zielony", ImageUrl: "green.jpeg", GoTo: "led-green" },
            { Label: "🔴 Czerwony", ImageUrl: "red.jpeg", GoTo: "red-led" },
            { Label: "🟢🔴Światło ciągłe", ImageUrl: "red.jpeg", GoTo: "const-led" },
            { Label: "⚪ Nic nie miga", ImageUrl: "noled.jpeg", GoTo: "no-led" },
        ]
    },
    {
        Id: "red-led",
        Type: "page",
        Content: `🔴 Czerwona migająca dioda oznacza, że kamera pracuje poprawnie, ale nie może się połączyć z serwerem.  
Powodów może być kilka:
- *Hotspot nie jest włączony lub nie działa poprawnie* - upewnij się, że działa prawidłowo sprawdzając czy działa pod odpowiednią nazwą oraz czy "widzą go" inne urządzenia, np. komputer,
- *Hotspot nie udostępnia internetu* - upewnij się, że transmisja danych w telefonie jest włączona oraz że rozmowa telefoniczna nie blokuje transmisji,
- *Hotspot jest poza zasięgiem* - kamera musi znajdować się w odległości maksymalnie kilku metrów od telefonu`,
        ImageUrl: "",
        NextId: "contact"
    },
    {
        Id: "no-led",
        Type: "page",
        Content: `Kamera potrzebuje około 50 sekund aby się uruchomić. Brak światła może oznaczać, że:
- *Nie upłyneło jeszcze dość czasu* - odczekaj co najmniej minute,
- *Brak zasilania* - sprawdź czy powerbank działa, powinna się palić na nim jakaś dioda,
- *Uszkodzony przewód USB* - należy wymienić na dowolny inny

Jeśli to żadna z powyższych przyczyn - skontaktuj się z naszą infolinią.`,
        ImageUrl: "",
        NextId: "contact"
    },
    {
        Id: "const-led",
        Type: "page",
        Content: `W teorii światło ciągłe diody kontrolnej nie jest możliwe. Upewnij się, że patrzysz na właściwą lampke - tą przy gnieździe zasilania. Jeśli jesteś absolutnie pewien, że to właściwa dioda, pozostaje tylko jedna możliwość - kamera się zawiesiła. Odłącz ją od prądu i podłącz ponownie. Zgłoś problem na infolinii ponieważ nie powinien nigdy wystąpić.`,
        ImageUrl: "",
        NextId: "contact"
    },
    {
        Id: "led-green",
        Type: "choose",
        Title: `🟢 Zielona migająca dioda oznacza, że kamera poprawnie nawiązała połączenie z serwerem.
        
Wejdź na stronę odbiornika, której adres znajdziesz w *SMS od nas* lub na *karcie dołączonej do zestawu*.

Zaloguj się i sprawdź czy wszystko jest w porządku. Jeśli nie - wybierz którąś z poniższych opcji:`,
        Options: [
            // { Label: "🙂 Wszystko ok!", ImageUrl: "", GoTo: "led-green" },
            { Label: "Brak obrazu", ImageUrl: "", GoTo: "kamera:brak-obrazu" },
            { Label: "Niewyraźny obraz", ImageUrl: "", GoTo: "kamera:niewyrazny-obraz" },
            { Label: "Powolna transmisja", ImageUrl: "", GoTo: "led-red" },
            { Label: "Za mała rozdzielczość", ImageUrl: "", GoTo: "led-red" },
        ]
    },
    {
        Id: "kamera:brak-obrazu",
        Type: "page",
        Content: `### Brak obrazu 

Jeżeli po zalogowaniu się na stronie nie widzisz podglądu z kamery sprawdź:
- *Czy obiektyw nie jest zasłonięty?* - odsłoń go,
- *Czy trasnsmisja jest włączona?* - w prawym górnym rogu jest wybierak rozdzielczości, sprawdź czy nie jest w pozycji \`Nadawanie wstrzymane\`. Pod ramką podglądu znajduje się czerwony guzik \`Przywróć nadawanie\`. Kliknij go aby kamera zaczęła pracować.

Obserwuj diodę na kamerze. Jeśli zaczęła migać na czerwono oznacza to problem z hotspotem. Sprawdź czy ten na pewno działa.
`,
         NextId: "contact"
    },
    {
        Id: "kamera:niewyrazny-obraz",
        Type: "page",
        Content: `### Rozmazany obraz
        
Rozmazany obraz może oznaczać tylko jedno: obiektyw kamery został przestawiony. Kamera ma stałą ogniskową i można ją zmieniać obracając guziczkiem. Trzymając kamerę 30-40cm od kartki, kręć powoli guzikiem tak by tekst stał się dobrze widoczny. Rób to ostrożnie ponieważ to delikatny element. Staraj się nie wykręcić guzika zupełnie jak i nie wkręcić go za mocno. Zalecamy ruchy po 2-3mm.

Zwróć również uwagę na to by podczas montażu w odzieży guzik nie obrócił się samoistnie.
`,
         NextId: "contact"
    },
    {
        Id: "contact",
        Type: "page",
        Content: `### Pomoc

Jeśli nie udało Ci się samodzielnie poradzić sobie z problemem skorzystaj z opcji poniżej:
        
☎️ Infolinia: *507-293-714*  

🌐 Strona kontaktu: [www.specteam.pl](https://specteam.pl/Kontakt)`,
    },
]

const _router = new Router();
const _sf = new SlideFactory(_router);

root.Append(
    // new SlideEngine(sf, slides)
    new DestroyingPatternContentSwitcher(_router.Hash).Class("PagesSwitcher")
        .AddContent("slide/:id", ({ id }) =>
        {
            const slide = slides.find(x => x.Id == id)
            if (slide)
                return _sf.Create(slide)
        })
)

