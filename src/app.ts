import { NumberInput, TextInput, Button, Select, ModalWindow, Root, DestroyingPatternContentSwitcher, Span, Link } from "@tblabs/truffle";
import { Router } from './Services/Router';
import { SlideFactory } from './Services/SlideFactory';
import { iPhoneSlides } from './Slides/iPhone';
import { msProblems, msSlides } from './Slides/ms';
import { cameraProblems } from "./Slides/problems";
import { leds } from "./Slides/leds";
import { android } from "./Slides/android";
import { magnetic } from "./magnetic";

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
        Title: `Wybierz opcje:`,
        Options: [
            { Label: "Pierwsze uruchomienie", Text: "Wybierze te opcje jeśli masz styczność z naszym sprzętem po raz pierwszy", ImageUrl: "unboxing.jpg", GoTo: "pierwsze-uruchomienie" },
            { Label: "Rozwiązywanie problemów", Text: "Wybierze te opcje jeśli masz problem z którymś elementem zestawu", ImageUrl: "fixing.png", GoTo: "problem" },
        ]
    },
    {
        Id: "pierwsze-uruchomienie",
        Type: "choose",
        Title: `Co chcesz uruchomić?`,
        Options: [
            { Label: "Mikrokamerę", ImageUrl: "tx.jpg", GoTo: "choose-phone" },
            { Label: "Mikrosłuchawkę", ImageUrl: "ms.jpeg", GoTo: "ms-start" },
            { Label: "Słuchawkę Nano", ImageUrl: "mag1.jpg", GoTo: "magnetic" },
            { Label: "Przygotowanie telefonu", ImageUrl: "phone.jpg", GoTo: "phone:prepare" },
        ]
    },
    {
        Id: "problem",
        Type: "choose",
        Title: `Z czym masz problem?`,
        Options: [
            { Label: "Z Mikrokamerą", ImageUrl: "tx.jpg", GoTo: "led" },
            { Label: "Z Mikrosłuchawką", ImageUrl: "ms.jpeg", GoTo: "ms:problems" },
        ]
    },
    {
        Id: "start-v0",
        Type: "choose",
        Title: `### Samouczek

Niniejszy poradnik ma za zadanie pomóc w rozwiązaniu ewentualnych problemów jak i w samodzielnym uruchomieniu sprzętu.  
Pełna instrukcja obsługi znajduje się pod adresem [watcher.specteam.pl#help](https://watcher.specteam.pl/#help) i należy się z nią bezwzględnie zapoznać!

*Jeśli masz problem:*  
- [Pomoc dotycząca już sparowanej słuchawki](#slide/ms:problems)  
- [Pomoc dotycząca już połączonej kamery](#slide/led)  

*Jeśli chcesz coś uruchomić:*`,
        Options: [
            { Label: "Mikrokamera", ImageUrl: "tx.jpg", GoTo: "choose-phone" },
            { Label: "Mikrosłuchawka", ImageUrl: "ms.jpeg", GoTo: "ms-start" },
            { Label: "Słuchawka Nano", ImageUrl: "mag1.jpg", GoTo: "magnetic" },
            { Label: "Przygotowanie telefonu", ImageUrl: "phone.jpg", GoTo: "phone:prepare" },
            { Label: "Jak zwrócić sprzęt?", ImageUrl: "package.png", GoTo: "package:prepare" },
        ]
    },
    {
        Id: "phone:prepare",
        Type: "page",
        Content: `### Jak wyciszyć telefon
        
Jeśli obawiasz się, że Twój telefon zacznie wydawać jakieś dźwięki podczas "akcji" zadbaj o jego prawidłowe wyciszenie:
- *Wyłącz dźwięki* - większość aparatów posiada funkcję dezaktywacji dźwięków
- *Włącz tryb "nie przeszkadzać"* - w każdym telefonie może to się nazywać inaczej, przeczytaj instrukcje
- *Podepnij słuchawki przewodowe* - w razie gdyby bluetooth się odłączyło telefon (w teorii) przekierować rozmowę na zwykłe słuchawki. Sprawdź czy Twój telefon się tak zachowa
- *Wykonaj próbę* - sprawdzaj i testuj każdy możliwy scenariusz. Np. podczas rozmowy odsuń telefon na 20 metrów i sprawdź co się stanie kiedy telefon straci połączenie
- *Zaklej głośniczki* - użyj grubej taśmy lub jakiegoś wyciszającego materiału i przyklej go do głośników
- *Zdemontuj głośniki* - usuń z telefonu elementy emitujące dźwięki, jesli nie wiesz jak to zrobić - idź do serwisu

### Sprawdź czas pracy

Upewnij się, że Twój telefon "podoła" zadaniu i wytrzyma co najmniej tyle czasu ile potrzebujesz. W tym celu:
- *Włącz hotspota i kamere*
- *Otwórz stronę podglądu z kamery* - niech przesyła faktyczne zdjęcia tekstu
- *Podłącz bluetooth*
- *Wykonaj połączenie głosowe* - przekieruj rozmowe na bluetooth
- *Używaj całego zestawu tak jak będziesz go używać podczas "akcji"* - dopiero taki test "powie" czy bateria w Twoim telefonie poradzi sobie z zadaniem

Przy okazji w ten sposób wykonasz również próbę ogniw w zestawie. Zanim wejdziesz na salę musisz mieć pewność, że baterie (powerbank i pętla) są naładowane i wytrzymają tyle ile potrzebujesz.`,
    },
    {
        Id: "package:prepare",
        Type: "page",
        Content: `### Jak odesłać sprzęt
        
- Zestaw należy odesłać jak najszybciej po jego wykorzystaniu. Najpóźniej w ostatnim dniu do kiedy był zarezerwowany lub następnego dnia rano.  
- Przed wysyłką należy upewnić się, że nie brakuje wszystkich elementów. Zwłaszcza *ładowarek* i *kabli*.  
- Zestawów nie należy czyścić jeśli są ubrudzone klejem po taśmach. Mikrosłuchawkę należy tylko przetrzeć na sucho papierem i wyjąć z niej baterie na czas podróży.  
- Sprzętu nie trzeba ładować przed odesłaniem.  
- Należy zadbać aby urządzenia w etui/pudełku nie latały luźno. W razie potrzeby należy wypełnić pojemnik czymś miękkim (folią bąbelkową lub papierem).  
- Etui ze sprzętem na czas wysyłki należy umieścić w kopercie z folii bąbelkowej lub pudełku. Nie należy wkładać samego etui bezpośrednio do paczkomatu!

Zwrotu należy dokonać za pośrednictwem firmy **Inpost** na adres:

*Paczkomat WAW02H*  
*Człuchowska 2A, 01-100 Warszawa*  
*specTeam*  
*507-293-714*  
*specteam@specteam.pl*  

### Zwrot osobisty

Zadzwoń pod numer ☎️ 507-293-714 i umów się na spotkanie.`
    },
    ...msSlides,
    ...msProblems,
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
        Content: "Hotspot jest już gotowy. Te ustawienia wprowadza się tylko raz.\n\nOd tej pory wystarczy włączyć hotspot przed uruchomieniem kamery (guzikiem `Dopuszczaj innych` i poczekać aż kamera się połączy z hotspotem, dopiero wtedy można wyjść z ekranu hotspota).\n\nW kolejnym kroku włączymy kamere...",
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

🌐 Strona kontaktu: [www.specteam.pl/Kontakt](https://specteam.pl/Kontakt)

### O czym jeszcze warto pomyśleć?

Kliknij \`Dalej\``,
        NextId: "what-else"
    },
    {
        Id: "what-else",
        Type: "page",
        Content: `### O czym jeszcze warto pomyśleć

Zanim przystąpisz do akcji pomyśl o tym co może pójść nie tak.  
Na przykład, co zrobisz jeśli:
- W Twoim telefonie przestanie działać internet?
    - Przed wejściem na sale?
    - Po wejściu na sale?
    - Po 10 minutach od wejścia na sale?
- Co zrobią Twoi pomocnicy jeśli to im przestanie działać internet?
    - Czy mają zapasowe łącze? Np. w postaci hotspota w telefonie
- A co jeśli zawiesi im się komputer? Czy mają zapasowy?
- Co jeśli przerwie Wam rozmowe?
    - Czy wiesz jak przywrócić łączność bez sięgania po telefon? Da się to zrobić
    - Czy masz zapasowy telefon? 
    - A co jeśli zabiorą Ci telefon przy wejściu?
    - Czy Twoi pomocnicy mają zapasowy telefon?
- A co jeśli telefon się zawiesi lub zacznie aktualizować w najmniej odpowiednim momencie?
- Czy w telefonie na pewno jest "zapas" internetu? Kamera zużywa ok 400MB danych na godzine.
- Co zrobicie jeśli połączenie głosowe przestanie działać tylko w jedną strone?
    - Jakie sygnały sobie prześlecie?
    - Jak określisz, że nie ma łączności siedząc na sali i nie słysząc nic w słuchawce? Warto by pomocnicy odzywali się co jakiś czas.
    - Czy wiesz jak zresetować połączenie głosowe bez wzbudzania podejrzeń?
- A co jeśli zasięg jest słaby i słychać co drugie słowo?
    - Czy macie protokół na taką sytuacje? Może warto po prostu powtarzać każdą odpowiedź i każde zdanie po 2-3 razy.
- Co jeśli będą Ci za szybko albo za wolno dyktować?
    - Czy będzie czas na pokazanie kartki? A co jeśli internet będzie w tym momencie słabszy i zdjęcia będą wysyłane co minute?
- Czy macie pomysł na komunikacje, jeśli internet będzie tak powolny, że zdjęcia będą się pojawiać dużo rzadziej niż to zakładane?
- A co jeśli zabiorą Ci telefon przy wejściu na sale?
    - Czy masz zapasowy do oddania?
    - Czy wiesz co się stanie jeśli kamera i słuchawka wyjdą z zasięgu telefonu, który oddasz?
        - Czy masz pewność, że Twój telefon nie przekieruje rozmowy na głośnik? Sprawdź to.
        - Czy w ogóle telefon został jakoś wyciszony żeby przypadkiem nie narobić hałasu?
- A co jeśli niechcący rozregulujesz kamere?
    - Czy wiesz jak ją ustawić?
    - Czy wiesz jak sprawdzić czy dobrze wszystko widać? Czy masz jakiś punkt odniesienia? Przed wejście na sale warto do ostatniej chwili trzymać w ręku jakąś kartke.
    - Czy Twoi pomocnicy wiedzą w razie czego jak Cię pokierować?
- Czy masz pewność, że wszystko jest naładowane i baterie wytrzymają dokładnie tyle czasu ile potrzebujesz? Pamiętaj, że każdy ma obowiązek samodzielnie sprawdzić czas pracy każdego podzespołu!
    - Czy jesteś pewien, że Twój telefon wytrzyma tak duże obciążenie? Włączone wifi, bluetooth, połączenie głosowe itd jest sporym wydatkiem energetycznym
    - Czy jesteś pewien, że w tle nie pracują zbędne aplikacje, które pobierają energie lub wpływają jakoś na połączenie głosowe bądź internetowe? Wyłącz wszystko co zbędne.
- Czy macie pomysł jak sprawnie komunikować się na samym początku, kiedy kierujecie kamerę na tekst? Zwykle komunikaty "lewo", "prawo" niewiele mówią osobie z kamerą i trzeba wyrażać się bardziej precyzyjnie, np: "przesuń kartke o 10cm w prawo"
- Co zrobisz jeśli jakiś element zestawu zostanie uszkodzony w trakcie "akcji"? Np wypadnie Ci guzik albo wysunie się słuchawka?
    - Czy masz w razie czego gdzie je schować?
    - Czy możesz się czymś zakryć?
    - Czy wiesz jak udawać, że nic się nie stało?
- Czy masz ze sobą waciki do czyszczenia ucha? Pamiętaj by używać ich zawsze przed włożeniem słuchawki
    - A co jeśli słuchawka jednak się zapcha? Czy masz jakąś zapasową?
- Co jeśli zgubisz jakiś element zestawu w ostatniej chwili?
    -Czy masz na przykład zapasowy powerbank albo kabelek usb?

Warto też zadać sobie bardziej ekstremalne pytania:
- Co jeśli na sali będzie zagłuszanie? 
    - I wysiądzie tylko kamera?
    - Albo przestanie działać tylko słuchawka?
    - lub łączność będzie przerywana?
- Co jeśli przed wejściem na sale lub w trakcie "akcji" pojawi się ktoś z detektorem?
    - Czy wiesz jak chronić się przed wykrywaczem metali?
    - A jak przed wykrywaczem nadajników? Najlepiej jest wszystko wyłączyć. Warto umieć to robić przez ubranie.
- Co jeśli dojdzie do jakiejś poważnej awarii i sprzęt zacznie się przegrzewać lub piszczeć?
    - Czy wiesz jak go wyłączyć nie wzbudzając podejrzeń? Taki scenariusz jest mało prawdopodobny, ale gotowym warto być na wszystko.

Uwaga! 
Odpowiedzią na powyższe pytania *nie* jest "zadzwonię na infolinie i zapytam", bo nie będzie na to czasu.
Nigdy nie zakładaj, że odbierzemy telefon akurat wtedy kiedy coś się stanie. Bądź gotowy zawczasu!
Odpowiedź na większość pytań można znaleźć w instrukcjach obsługi, które trzeba bezwzględnie znać!

Pamiętaj!
Podczas testowania wychodzą wszelkie niuanse korzystania ze sprzętu.
Warto także w trakcie prób specjalnie spowodować kilka awarii i przemyśleć swoje zachowanie w ich wyniku.
Stres może być ogromny dlatego tym bardziej warto wszystko sobie przemyśleć zawczasu.
Bardzo przydatne jest także umówienie się z pomocnikami na pewne sygnały dźwiękowe: np. chrząknięcie może oznaczać, że potrzebujesz powtórzyć ostatnie zdanie, a pstryknięcie długopisem, że za szybko Ci dyktują. Warto o tyle, że w praktyce zwykle nie ma czasu na pisanie na kartce "cofnij mi do zadania czwartego" i trzeba komunikować się szybciej. 

Ze wszystkich opisanych problemów najgorszy jest stres. To przez niego przestajemy racjonalnie myśleć i wpadamy w panikę kiedy coś idzie nie tak. Dlatego tak ważna jest symulacja każdej potencjalnie niebezpiecznej sytuacji.

Wiele osób zabezpiecza się przed niepowodzeniem dublując wszystko co możliwe. Wielu naszych klientów korzysta często z dwóch zestawów jednocześnie. Mają dwie kamery, podłączone do dwóch różnych telefonów, w dwóch różnych sieciach. 
Na szyjach mają dwie pętle różnych producentów, a w pogotowiu zapasową słuchawke.
Niewątpliwie warto mieć przy sobie drugi telefon, dodatkowy powerbank czy ładowarkę. 
W 99% przypadków wystarcza pojedynczy zestaw i nadmiarowe dublowanie nie poprawia wyniku, ale niewątpliwe podnosi poziom spokoju.
Pierwszy raz jest zawsze stresujący. Każdy kolejny coraz łatwiejszy. Dlatego tym bardziej warto przeprowadzać próby wśród ludzi, np w kawiarni czy gdzieś gdzie może ktoś na nas patrzeć. W domowym zaciszu wszystko jest proste. Dopiero w terenie człowiek odkrywa swój brak przygotowania.  
Z naszych statystyk wynika, że wszyscy którzy poświęcili co najmniej kilka godzin na trening - zaliczali z dobrym wynikiem. Ci którzy olali temat i czekali do ostatniej chwili - zaliczali w +/- 50%. Trening czyni mistrza! Pamiętaj o tym.
`,
    },
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
                    const slide = slides.find(x => x.Id == id)
                    return slide
                        ? _sf.Create(slide)
                        : new Span("Nie znaleziono slajdu")
                })
                .AddDefaultContent(() =>
                {
                    _router.GoToStart()
                    return new Link("Powrót do strony głównej").OnClick(() => _router.GoToStart())
                }),
        )
}
catch (ex: any)
{
    root.Append("Błąd podczas ładowania treści")
    console.error(ex.message)
}