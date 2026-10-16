export const checklists = [
    {
        Id: "checklists",
        Type: "choose",
        Title: "Jaka jest Twoja misja?",
        Options: [
            { Label: "Wchodzę na salę", Text: "Sprawdź co musisz wiedzieć zanim zaczniesz", ImageUrl: "naegzaminie.jpg", GoTo: "klient" },
            { Label: "Jestem pomocnikiem", Text: "Wskazówki dla Operatorów", ImageUrl: "operator.png", GoTo: "operator" },
        ]
    },
    {
        Id: "klient",
        Type: "choose",
        Title: "Wybierz etap pracy",
        Options: [
            { Label: "Przed akcją", Text: "Co koniecznie należy sprawdzić kiedy jest jeszcze czas", ImageUrl: "before.jpg", GoTo: "klient-przed-akcja" },
            { Label: "W dniu egzaminu", Text: "Najważniejsze rzeczy do sprawdzenia na chwile przed akcją", ImageUrl: "egzamin.jpg", GoTo: "klient-chwile-przed-akcja" },
            { Label: "Po akcji", Text: "Co zrobić po akcji", ImageUrl: "poegzaminie.jpg", GoTo: "klient-po-akcji" },
        ]
    },
    {
        Id: "operator",
        Type: "choose",
        Title: "Wybierz etap pracy",
        Options: [
            { Label: "Przed akcją", Text: "Co koniecznie należy sprawdzić kiedy jest jeszcze czas", ImageUrl: "before.jpg", GoTo: "operator-przed-akcja" },
            { Label: "W dniu egzaminu", Text: "Najważniejsze rzeczy do sprawdzenia na chwile przed akcją", ImageUrl: "egzamin.jpg", GoTo: "operator-chwile-przed-akcja" },
            { Label: "Po akcji", Text: "Co zrobić po akcji", ImageUrl: "poegzaminie.jpg", GoTo: "operator-po-akcji" },
        ]
    },
    {
        Id: "klient-przed-akcja",
        Type: "page",
        Content: `### O co warto zadbać co najmniej dzień przed egzaminem

Pełne przygotowanie to gwarancja spokoju. W trakcie egzaminu nie ma miejsca na niepewność czy testowanie sprzętu. Oto lista rzeczy, które polecamy zrobić póki jest na to czas:

- [x] *Przeczytać cały ten samouczek*
- [x] *Zrobić test czasu pracy*- włącz wszystko i zosta na kilka godzin. Upewnij się, że żadna bateria nie padła i nic się nie przegrzewa
- [x] *Poćwicz komunikację* ze swoim Operatorem - wydrukuj sobie to co będziesz zdawał i zobaczcie jak idzie wam współpraca
- [x] Sprawdź jak naładować sprzęt - wszystko jest opisane w tym samouczku
- [x] *Sprawdzić czy na sali jest zasięg sieci* - idź tam dzień wcześniej i zobacz czy masz łączność
- [x] Upewnij się czy Twój telefon nie robi dziwnych rzeczy: np. nie ustawia maksymalnej głośności przy każdym nowym połączeniu albo automatycznie nie wyłącza hotspota
- [x] Upewnij się, że na sali nie będzie zagłuszarek albo skanerów. Jeśli będą - miej plan B

`
    },
    {
        Id: "operator-przed-akcja",
        Type: "page",
        Content: `
#### Przygotuj otoczenie
- Zadbaj o ciszę: zamknij okna, wyłącz muzykę, psa schowaj w pralce. Twój rozmówca (osoba na sali) nie chce słyszeć odgłosów z otoczenia
- Pracuj na komputerze: ekran telefonu jest za mały do sprawnej współpracy, duży ekran będzie lepszy
- Bądź w miejscu gdzie jest dobry zasięg sieci. Nie ma nic gorszego jak przerywająca rozmowa.
- Miej zapasowy komputer. Na wypadek jakby główny się zawiesił.
- Zrób wszystkie aktualizacje systemu za wczasu
- Miej zapasowy telefon na wypadek jakby Twój się zawiesił albo rozładował
- Trzymaj ładowarki pod ręką
- Miej awaryjne łącze internetowe, np w postaci routera z telefonu
- Warto też mieć kartę SIM innego operatora w razie jakby Twój akurat padł

Podsumowując: Wszystko powinno być zdublowane. Dwa komputery, dwa telefony, w dwóch różnych sieciach. Pracuj z miejsca gdzie jest dobry zasięg. Upewnij się, że wszystko jest naładowane i nie zabraknie Ci internetu.
`
    }, 
    {
        Id: "klient-chwile-przed-akcja",
        Type: "page",
        Content: `### Oto co musisz zrobić przed wejściem na salę:

Przygotuj **słuchawkę**:  
- [x] Wyczyść ucho przed włożeniem słuchawki
- [x] Załóż nową baterię do słuchawki
- [x] Włącz pętle bluetooth i upewnij się, że jest połączona z telefonem
- [x] Upewnij się, że masz zasięg pod salą
- [x] Połącz się co najmniej 20 minut wcześniej i pochodź po okolicy
- [x] Upewnij się że głośność w słuchawce nie jest za duża i że nie słychać Twojego rozmówcy na zewnątrz

Jeśli korzystasz z **kamery**:  
- [x] Włącz transmisję danych w telefonie
- [x] Włącz hotspota i nie wychodź z ekranu hotspota póki nie uruchomisz kamery
- [x] Nie dotykaj guzika od Wifi 
- [x] Sprawdź stan naładowania powerbanka
- [x] Podłącz kamerę do powerbanka i odczekaj minutę, upewnij się że na kamerze miga zielona dioda
- [x] Bądź na linii ze swoim Operatorem i upewnij się, że wszystko widzi i słyszy

Jeśli dodatkowo korzystasz z **mikrowyświetlacza**:  
- [x] Upewnij się, że jest naładowany i połączony z Twoim telefonem
- [x] Sprawdź ubranie i mocowanie urządzenia

Wskazówka strategiczna:
- Zalecamy popełnienie 2-3 celowych błędów, aby ostateczny wynik nie wyglądał podejrzanie (100% poprawnych odpowiedzi może budzić niepotrzebne wątpliwości).

Zalecane etapy pracy:
- Na samym początku spróbujcie przesłać jak najwięcej zdjęć, skupcie się na samym robieniu stopklatek
- Zamienianiem stopklatek na tekst powinno się zająć kilka osób
- Odpowiedzi dyktujcie w miarę możliwości na bieżąco jak tylko zaczną się pojawiać
`
    },
    {
        Id: "operator-chwile-przed-akcja",
        Type: "page",
        Content: `### Oto co musisz zrobić siedząc w domu:

Przygotuj połączenie głosowe:
- Zadbaj o ciszę w swoim otoczeniu
- Miej w pogotowiu naładowany telefon
- Przygotuj sobie słuchawki
- Pamiętaj o sygnałach, które ustaliliście: o tym jak sygnalizujecie potwierdzenie, zaprzeczenie, przerwanie akcji itp  
- Mów głośno i wyraźnie
- Odpowiedzi powtarzaj najlepiej po 2 razy
- Porozmawiaj z osobą na sali - upewnij się że słyszycie się nawzajem
- Korzystaj z formuły: A jak Alicja, B jak Barbara itd
- Po podyktowaniu następuje 1-2 sekundy pauzy
- Cisza z Twojej strony → Przechodzimy do następnego zadania
- Uzgodniony dźwięk → Odpowiedź zostanie podyktowana ponownie

Pamiętaj:
- Osoba na sali nie jest w stanie nic powiedzieć, nie zadawaj jej pytań w stylu "Czy mnie słyszysz" bo i tak Ci nie odpowie
- Jeśli ustaliliście jakiś sygnał na np. odgłos kaszlnięcia to weźcie poprawkę na to że ktoś inny na sali może wydać taki sam dźwięk, dlatego za każdym razem proś o potwierdzenie

Jeśli korzystacie dodatkowo z kamery:  
- Otwórz stronę z podglądem i czekaj na obraz ([watcher.specteam.pl](https://watcher.specteam.pl))
- Pamiętaj by informować osobę na sali o tym co widzi kamera 
- Wyreguluj rozdzielczość i jasność kamery
- Rób stopklatki często 
- Jeśli pracujecie w zespole - wyślij link do zapisanych stopklatek do wszystkich osób

Jeśli używacie mikrowyświetlacza:  
- Otwórz panel sterowania wyświetlaczem ([display.specteam.pl](https://display.specteam.pl))
- Jeśli osób jest kilka to nie ładowaniem danych zajmie się tylko jedna osoba
- Wszyscy powinni mieć ze sobą kontakt przez jakiś chat w celu synchronizowania odpowiedzi
`
    }, 
    {
        Id: "klient-po-akcji",
        Type: "page",
        Content: `### Oto co musisz zrobić po egzaminie:

- [x] Wyjmij słuchawkę z ucha i przetrzyj ją chusteczką higieniczną, nie używaj żadnej chemii ani wody
- [x] Wyjmij baterię ze słuchawki
- [x] Zakręć słuchawkę i schowaj ją do etui
- [x] Odłącz powerbank od kamery
- [x] Wyłącz pętle bluetooth
- [x] Jeśli jakieś elementy zestawu zostały oklejone taśmą - nie musisz jej usuwać ani czyścić po niej śladów. My się tym zajmiemy.
- [x] Zapakuj wszystkie elementy zestawu do etui łącznie z ładowarką i kablem USB do ładowania
- [x] Dane do zwrotu znajdziesz w swoim zamówieniu ([shop.specteam.pl](https://shop.specteam.pl))
- [x] Jak już otrzymasz wyniki to daj nam znać sms'em ;)
`
    },
    {
        Id: "operator-po-akcji",
        Type: "page",
        Content: `### Oto co musisz zrobić po egzaminie:

Zasadniczo nic nie musisz robić, ale jeśli chcecie zachować stopklatki to warto je zapisać na własnym komputerze. Na serwerze będą przechowywane tylko przez kilka dni.  
Jeśli korzystaliście z Chata to warto go zapisać lub usunąć. Wedle uznania.
`
    },
];