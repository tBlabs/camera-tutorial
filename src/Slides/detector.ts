export const detector = [
    {
        Id: "wykrywacz-podsluchow",
        Type: "page",
        Content: `## Wykrywacz podsłuchów (seria RF-xxx)
        
Wykrywacz wszystkich urządzeń podsłuchowych pracujących w oparciu o transmisje, cyfrowe GSM, GPS, oraz podsłuchy analogowe. Pozwala na wykrycie podsłuchów, telefonów komórkowych (2G, 3G,HSDPA), lokalizatorów GPS a także kamer bezprzewodowych. Oprócz tego, daje możliwość zlokalizowania rzadziej spotykanych nadajników, działających w technologii Bluetooth oraz Wi-Fi.

### Obsługa 

Włączenie wykrywacza następuje przez przekręcenie gałki potencjometru w prawo, należy wstępnie ustawić poziom czułości potencjometrem, czyli tzw. poziom tła. Należy ustawić maksymalne wzmocnienie, następnie jeżeli świecą diody ustawić potencjometr tak, aby świeciła jedna, dwie diody LED wyświetlacza. Pierwsza czerwona LED świeci ciągle, jest wskaźnikiem włączenia detektora. 
Z chwilą wykrycia podsłuchu świecą kolejne diody LED. 
- Podczas wykrycia podsłuchu radiowego analogowego diody świecą ciągłym światłem.
- Wszystkie urządzenia cyfrowe - diody świecą światłem pulsującym ( WiFi, GSM itp.)
- Lokalizatory GPS - diody zaświecą się szybko 3 - 6 razy po czym nastąpi przerwa od 30 sekund do pięciu minut w zależności od ustawień lokalizatora. 
- Zapalanie się diod w równych odstępach czasu świadczy o obecności lokalizatora GPS.

W sprawdzanym pomieszczeniu należy wyłączyć takie urządzenia jak: routery WiFi, bluetooth, telefony komórkowe, stacjonarne bezprzewodowe oraz inne nadajniki które mogą mieć wpływ na fałszywe wskazania.

### Wykrywane pasma: 
- 20 MHz - 9 GHz GSM (880-915 MHz) 
- CDMA (824-849 MHz) WCDMA (1920-1980MHz) 
- DCS (1710-1785 MHz)
- Pasmo 2G 3G, 4G, GSM 1800, CDMA 2100, 1920-1980MHz
- Kamery 1,2GHz, 2,4GHZ, 5,8Ghz
- GPS - wszystkie pasma WiFi, Bluetooth

### Zasilanie
- bateria 9V (6F22)`,
        ImageUrl: "detector/rf-xxx.jpg",
        NextId: ""
    },
];
