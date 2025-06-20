
export const hiding = [
    {
        Id: "ukrywanie",
        Type: "choose",
        Title: `Co chcesz ukryć?`,
        Options: [
            { Label: "Kamerę", ImageUrl: "tx.jpg", GoTo: "ukrywanie-kamery" },
            { Label: "Słuchawkę", ImageUrl: "ms.jpeg", GoTo: "ukrywanie-sluchawki" },
            { Label: "Telefon", ImageUrl: "phone.jpg", GoTo: "ukrywanie-telefonu" },
        ]
    },
    {
        Id: "ukrywanie-kamery",
        Type: "page",
        Content: `### Ukrywanie kamery
        
Najlepszym miejscem na ukrycie kamery jest zwykła koszula.

Są dwie szkoły montowania obiektywu:
- w mankiecie - pod zegarkiem lub zamiast jednego guzika,
- lub na wysokości mostka - to miejsce zapewnia dobre ujęcia kartki i łatwą sterowność.

Montując guzik należy pamiętać o tym, że jest to element stosunkowo delikatny:
- soczewka obiektywu jest klejona z guzikiem - nie wolno jej narażać na przeciążenia, bo może się złamać,
- sam guzik się obraca - co ma wpływ na "ostrość widzenia" kamery

Podczas montażu zwróć uwagę na to, by guzik swobodnie przeszedł przez wybrany otwór. Jeśli ten jest za mały, powiększ go rozcinając materiał.

Samą kamerę należy przykleić do ubrania. Nie do ciała!
Power bank najlepiej schować za paskiem, tak żeby był do niego swobodny dostęp.

Po przymocowaniu sprzętu upewnij się, że nigdzie nie prześwitują diody i że nic nie odstaje podczas ruchu.
Potrenuj nawigowanie sprzętem wraz ze swoim Pomocnikiem przez co najmniej 30 minut.`,
        NextId: "kontakt"
    },
    {
        Id: "ukrywanie-sluchawki",
        Type: "page",
        Content: `### Ukrywanie słuchawki
        
Słuchawkę należy włożyć do ucha cielistą stroną najgłębiej jak to możliwe.

Wystarczy docisnąć ją palcem.
Nie obawiaj się uszkodzenia ucha - słuchawka jest w 100% bezpieczna i nie ma fizycznej możliwości żeby dotknęła błony bębenkowej.

Słuchawkę wyciągniesz za przezroczystą żyłkę, która znajduje się na wieczku baterii. Zwykle nie ma potrzeby używania pencety. Da się ją wyjąć palcami lub paznokciem przeciągając przy skórze. W razie problemów można też poruszać szczęką na lewo i prawo - sprawi to że słuchawka zacznie się wysuwać (co jednocześnie oznacza że lepiej nie rozmawiać i nie żuć gumy podczas używania słuchawki)`,
        NextId: "kontakt"
    },
    {
        Id: "ukrywanie-telefonu",
        Type: "page",
        Content: `### Ukrywanie telefonu
        
Dzisiejszy, typowy smartfon nie łatwo ukryć, dlatego zachęcamy do korzystania z naszych subminiaturowych telefonów, które posiadają wszelkie niezbędne funkcje do obsługi naszych zestawów (bluetooth, hotspot, internet itd). Poza tym są przystosowane do bezpiecznej pracy - nie posiadają głośników ani układów wibracyjnych - nie wydają więc żadnych dźwięków.

Ukrywając własny telefon warto zwrócić uwagę na następujące kwestie:
- telefon powinien być we względnie niedużej odległości od zestawu (max kilka metrów),
- powinien być wyciszony,
- powinien być skierowany wyświetlaczem w stronę ciała, tak żeby jego anteny były skierowane na zewnątrz,
- nie powinien stykać się bezpośrednio ze skórą (żeby coś się przypadkiem samo nie nacisnęło)

Co do miejsca - nie ma to większego znaczenia. Brzuch, uda, łydki - wszystkie te miejsca będą dobre. Warto uzbroić się w taśmę elastyczną albo bandaż do zamocowania telefonu.
`,
        NextId: "kontakt"
    },
];
