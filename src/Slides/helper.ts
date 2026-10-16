export const helper = [
    {
        Id: "wspolpraca",
        Type: "choose",
        Title: `Jaka jest Twoja rola?`,
        Options: [
            { Label: "Wchodzę na salę", Text: "...", ImageUrl: "tx.jpg", GoTo: "zasady-dla-klienta" },
            { Label: "Jestem pomocnikiem", Text: "Informacje dla Operatorów", ImageUrl: "ms.jpeg", GoTo: "zasady-dla-operatora" },
        ]
    },
    {
        Id: "zasady-dla-klienta",
        Type: "page",
        Content: `### Zasady dla klienta

Jako osoba wchodząca na salę masz stosunowo proste zadanie:  
Wejść, wykonywać polecenia Operatora i się nie ruszać :)
`
    },
    {
        Id: "zasady-ogolne-wspolpracy",
        Type: "page",
        Content: `
### Co najmniej dwa dni przed egzaminem      

- Opanowanie zasad funkcjonowania sprzętu
- Testy czasu pracy baterii
- Samodzielne próby celowania w kartkę/ekran kamerą
        
### Dzień przed egzaminem

- Omówienie zasad współpracy
- Próba łączności
- Przejście checklisty technicznej
- Kalibracja kamery
- Omówienie protokołu komunikacji

### W dniu egzaminu

#### Godzinę przed
- Próba łączności
- Przypomnienie o założeniu nowej baterii
- Sprawdzenie stanu akumulatorów
- Regulacja głośności
- Test kalibracji kamery
- Kalibracja pozycji kartki

#### 20 minut przed
- Nawiązanie połączenia
`
    },
    {
        Id: "zasady-dla-operatora",
        Type: "page",
        Content: `### Zasady dla operatora

#### Dzień wcześniej
-

#### Przygotowanie środowiska
- Zadbaj o ciszę: zamknij okna, wyłącz muzykę, psa schowaj w pralce. Twój rozmówca (osoba na sali) nie chce słyszeć odgłosów z otoczenia
- Pracuj na komputerze: ekran telefonu jest za mały do sprawnej współpracy, duży ekran będzie lepszy
- Bądź w miejscu gdzie jest dobry zasięg sieci. Nie ma nic gorszego jak przerywająca rozmowa.
- Miej zapasowy komputer. Na wypadek jakby główny się zawiesił.
- Zrób wszystkie aktualizacje systemu za wczasu
- Miej zapasowy telefon na wypadek jakby Twój się zawiesił albo rozładował
- Trzymaj ładowarki pod ręką
- Miej awaryjne łącze internetowe, np w postaci routera z telefonu
- Warto też mieć kartę SIM innego operatora w razie jakby Twój akurat padł

Podsumowując: Wszystko powinno być zdublowane. Dwa komputery, dwa telefony, w dwóch różnych sieciach. Pracuj z miejsca gdzie jest dobry zasięg sieci.

#### Przed wejściem na salę...

- Zróbcie pełną próbę połączenia. Rozmawiajcie i wysyłajcie zdjęcia jednocześnie. Musicie się upewnić, że dane i głos działają na antenie do której jest podpięta osoba wchodząca na salę.
- Poproś osobę z kamerą żeby do ostatniej chwili trzymała przed sobą jakiś tekst. Dzięki temu będziecie mieć pewność, że kamera jest dobrze ustawiona. W razie problemów z ostrością zajrzyjcie do rozdziału "rozwiązywanie problemów".

#### Protokół komunikacji
`    },
   
];
