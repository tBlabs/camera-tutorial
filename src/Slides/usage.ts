export const usage = [
{
    Id: "kalibracja",
    Type: "choose",
    Title: `Co chcesz skalibrować?`,
    Options: [
        { Label: "Kamerę", Text: "Dopasuj kamerę do tego, na co będzie patrzeć", ImageUrl: "tx.jpg", GoTo: "kalibracja-kamery" },
        { Label: "Słuchawkę", Text: "Ustaw bezpieczną głośność", ImageUrl: "ms.jpeg", GoTo: "kalibracja-sluchawki" },
    ]
},   
{
    Id: "kalibracja-kamery",
    Type: "page",
    Content: `### Regulacja ostrości

Focus kamery jest regulowany za pomocą guzika-obiektywu. Kręcąc nim przesuwamy punkt w którym widać najostrzej. Należy to robić niezwykle ostrożnie pamiętając, że nie wolno całkowicie wykręcać guzika ani wkręcać go za mocno (to może skutkować połamaniem matrycy).  
Regulacji należy dokonywać bardzo powoli, dosłownie po 1-2mm co chwilę zerkając na docelowy obiekt.
    
*Guzik jest sklejony z obiektywem. Nie jest to jeden element i należy brać na to poprawkę. Choć klej jest bardzo wytrzymały to wszystko da się uszkodzić używając zbyt dużo siły. Zwłaszcza podczas montażu kamery w odzieży. Pamiętaj o tym!*
    

### Regulacja oświetlenia

Kamera jest domyślnie przystosowana do pracy przy typowym "klasowym" oświetleniu, czyli świetlówkach o barwie około 4000K (światło białe, naturalne lub zimne).  
W razie potrzeby światło można ustawić za pomocą aplikacji odbiorczej. W oknie podglądu znajduje się suwak regulacji jasności i kontrastu.

![Regulacja jasności](camera/light.png)


### Regulacja rozdzielczości

Rozdzielczość regulujemy programowo za pomocą aplikacji odbiorczej. Nad okienkiem podglądu znajduje się wybierak pozwalający zmienić rozdzielczość na jedną z predefiniowanych lub dowolną własną.  
Należy pamiętać, że im większa rozdzielczość zdjęcia tym dłużej będzie przesyłane.

![Regulacja rozdzielczości](camera/resolution.png)

Opcje z żaróweczką 💡 delikatnie rozjaśnia obraz i zwiększa kontrast.`
},   
{
    Id: "kalibracja-sluchawki",
    Type: "page",
    Content: `### Regulacja głośności

##### Na głośność w słuchawce wpływa wiele czynników:
- ułożenie słuchawki w uchu: i nie chodzi tu tylko o głębokość ale również o kąt wokół własnej osi, który może mieć wpływ nawet na 80% głośności,
- stan baterii w słuchawce: rozładowana bateria sprawia że słuchawka działa ciszej, ale biorąc pod uwagę długi czas pracy na baterii (ok 10 godzin) nie ma to większego znaczenia,
- odległość od cewki pętli indukcyjnej: im bliżej tym głośniej, pętla nie powinna być dalej niż na wysokości szyji, jej realny zasięg wynosi max pół metra,
- głośność w telefonie,
- regulator na pętli o ile pętla takowy posiada

##### Co nie ma wpływu na głośność:
- stan naładowania pętli indukcyjnej: nie ma żadnego znaczenia,
- stan naładowania telefonu: nie ma żadnego znaczenia
`
},   
{
    Id: "ladowanie-kamery",
    Type: "choose",
    Title: `Który model posiadasz?`,
    Options: [
        { Label: "Standardowy zestaw", Text: "Klasyczny zestaw zasilany powerbankiem", ImageUrl: "connection.jpg", GoTo: "ladowanie-kamery-standard" },
        { Label: "Kamera niewykrywalna", Text: "Kamera z własnym zasilaniem", ImageUrl: "usage.png", GoTo: "ladowanie-kamery-niewykrywalnej" },
    ]
},   
{
    Id: "ladowanie",
    Type: "page",
    Content: `### Ładowanie kamery

Jeśli kamera nie posiada przycisku (zwykle jest to czerwony wciskany guziczek) to nie należy jej ładować ponieważ nie posiada własnego źródła zasilania. Taka kamera jest zasilana tylko z zewnątrz: za pomocą powerbanka lub innego źródła.

### Ładowanie powerbanka

Powerbanki które dostarczamy do zestawów są typowymi powerbankami bez żadnych dodatkowych czy wymyślnych funkcji. Co oznacza, że alternatywnie zawsze można użyć innego powerbanka.
Czas ładowania *czarnego powerbanka o kształcie cylindra* wynosi około 8 godzin. Czas użytkowania z kamerą wynosi około 4 godzin.
Podczas ładowania miga czerwona dioda. Po naładowaniu przestaje migać (świeci światłem ciągłym lub gaśnie zależnie od wersji).  

### Ładowanie słuchawki

Słuchaki się nie ładuje. Wystarczy wymienić w niej baterie (337 lub SR416SW). Przechowujemy wyłączoną!

### Ładowanie pętli indukcyjnej

Każda pętla ma gniazdo ładowania USB (zwykle mini-usb). Zależnie od modelu pętli czas ładowania wynosi około 3-5 godzin.
Czas użytkowania od 6 do 11 godzin ciągłej rozmowy (lub kilka dni w trybie czuwania).

### Ładowanie przenośnego routera

Router ładujemy za pomocą kabla USB. Zielona dioda oznacza naładowanie. Czerwona - ładowanie. Czas pracy to około 8 godzin. Czas ładowania około 10 godzin.
`,
    NextId: "kontakt"
},
{
    Id: "czyszczenie",
    Type: "page",
    Content: `### Czyszczenie i higiena

Zasadniczo nie należy czyścić sprzętu samodzielnie. My się tym zajmiemy. Aczkolwiek, jeśli użytkowników słuchawki ma być wielu to warto zadbać o higienę.

Najprostszym sposobem na wyczyszczenie słuchawki jest jej niezabrudzenie :) Pamiętaj o tym by czyścić ucho przed każdym jej użyciem! Zwykłymi wacikami, zawsze do sucha. W razie czego słuchawkę można przetrzeć suchym papierem toaletowym lub chusteczką. Nie należy stosować żadnej chemii! 
`,
    NextId: "kontakt"
},
]

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
]