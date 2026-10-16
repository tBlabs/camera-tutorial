export const microdisplay = [
    {
        Id: "mikrowyswietlacz",
        Type: "page",
        Content: `### Mikrowyświetlacz

Mikrowyświetlacz to urządzenie przeznaczone do dyskretnego przekazywania licznych, ale krótkich wiadomości tekstowch.  
Jest idealny do wszelkiego rodzaju testów gdzie jedyne co trzeba przekazać to numer pytania i odpowiedź, np "12 B".
Chowa się go zwykle w rękawie przy nadgarstku gdzie powinien być widoczny tylko dla użytkownika.  
`,
        NextId: "mikrowyswietlacz-uruchomienie"
    },
    {
        Id: "mikrowyswietlacz-uruchomienie",
        Type: "page",
        Content: `### Uruchomienie mikrowyświetlacza

Aby włączyć wyświetlacz wystarczy podłączyć go do dowolnego źródła zasilania, np. do powerbanka z wyjświem USB-C.  
Wcześniej warto włączyć hotspot o nazwie i haśle z listy poniżej:

NAZWA SIECI            | HASŁO
---------------------- | ----------------------
hotspot1               | hotspot1password
Orange Free Wifi 5G    | superstrongpassword
Sala wykladowa C14-F   | superstrongpassword
VP3C4F44Y-MP9          | superstrongpassword
hotspot2               | hotspot2password
hotspot3               | hotspot3password
hotspot4               | hotspot4password
hotspot5               | hotspot5password

W czasie uruchamiania wyświetlacz pokazuje kolejne sieci z którymi próbuje się połączyć. Na każdą czeka kilka sekund.

Jeśli w telefonie dostępna jest opcja \`Wstecznej kompatybilności\` albo \`Pełnej kompatybilności\` należy ją zaznaczyć.  
Wyświetlacz obsługuje wifi w standardzie 2,4GHz.
`,
NextId: "mikrowyswietlacz-praca"
    },
    {
        Id: "mikrowyswietlacz-praca",
        Type: "page",
        Content: `### Praca z mikrowyświetlaczem

Kiedy wyświetlacz już się połączy spróbuje od razu pobrać tekst do wyświetlenia z naszego serwera.  
Swój tekst można wpisać na stronie (display.specteam.pl)[https://display.specteam.pl] podając hasło podane przy odbiorze urządzenia (w SMS lub na stronie zamówienia). 
Dalsza obsługa sprowadza się tylko do edycji tekstu. Wyświetlacz będzie ją pobierał automatycznie co minutę.
`,
        NextId: "mikrowyswietlacz-przycisk"
    },
    {
        Id: "mikrowyswietlacz-przycisk",
        Type: "page",
        Content: `### Przycisk dotykowy

Urządzenie wyposażone jest w dotykowy przycisk, który pozwala cofnąć się o 5 linijek tekstu. Sensor działa przez ubranie.  
Ta opcja jest przydatna kiedy np. przegapimy wyświetlaną odpowiedź lub chcemy wrócić na początek listy (wtedy należy nacisnąć przycisk kilkanaście razy).
`,
        NextId: "mikrowyswietlacz-ladowanie-i-czas-pracy"
    },
    {
        Id: "mikrowyswietlacz-ladowanie-i-czas-pracy",
        Type: "page",
        Content: `### Ładowanie

Urządzenia się nie ładuje ponieważ nie posiada własnej baterii. Naładować należy jedynie dołączony powerbank.

### Czas pracy

Jest zależny od dołączonego powerbanka. Te które zwykle dołączamy do zestawu wystarczają zwykle na 5 lub 10 godzin pracy. Te płaskie działają krócej, cylindryczne dłużej.
`,
        NextId: "problemy-z-mikrowyswietlaczem"
    },
    {
        Id: "problemy-z-mikrowyswietlaczem",
        Type: "choose",
        Title: `Poniżej znajduje się lista potencjalnych problemów, które nie powinny wystąpić przy normalnym użytkowaniu. Jeśli jednak coś jest nie tak zacznij od tej listy:`,
        Options: [
            { Label: "Brak tekstu", Icon: "🖥️", GoTo: "mikrowyswietlacz-brak-tekstu" },
            { Label: "Brak połączenia z hotspotem", Icon: "📡", GoTo: "mikrowyswietlacz-brak-polaczenia" },
            { Label: "Nie pobiera tekstu", Icon: "📄", GoTo: "mikrowyswietlacz-nie-pobiera-tekstu" },
        ]
    },
    {
        Id: "mikrowyswietlacz-brak-tekstu",
        Type: "page",
        Content: `### Brak tekstu na mikrowyswietlaczu

Aby wyświetlacz wyświetlił tekst należy go najpierw wpisać na stronie (display.specteam.pl)[https://display.specteam.pl] podając hasło podane przy odbiorze urządzenia (w SMS lub na stronie zamówienia).  
Jeśli zaraz po starcie tekst się nie pokazuje i wyświetlany jest napis "No data" należy odczekać około półtorej minuty. Jeśli tekst nie pokaże się po tym czasie warto sprawdzić czy hotspot na pewno działa.
`,
        NextId: "kontakt"
    },
    {
        Id: "mikrowyswietlacz-brak-polaczenia",
        Type: "page",
        Content: `### Brak połączenia z hotspotem

Jeśli po starcie wyświetlacz nie połączył się z żadną ze wskazanych wyżej sieci należy upewnić się że w ustawieniach hotspota nie ma literówek i spacji na początku lub końcu nazwy lub hasła. Ważna jest też kompatybilność z trybem 2,4GHz.  
Stan hotspota i hasło warto sprawdzić na komputerze lub innym urządzeniu.
`,
        NextId: "kontakt"
    },
    {
        Id: "mikrowyswietlacz-nie-pobiera-tekstu",
        Type: "page",
        Content: `### Wyświetlacz przestał pobierać tekst

Przyczyną może być: 
- *brak internetu* - sprawdź czy ładują się inne strony internetowe
- *wyłączony hotspot* - np. iPhone potrafi bez uprzedzenia wyłączyć hotspot pokazując stan włączenia
- *awaria serwera* - sprawdź wchodząc na stronę (display.specteam.pl)[https://display.specteam.pl] 
- *zbyt duża odległość wyświetlacza od hotspota* - maks to kilka metrów
- *zbyt krótki czas oczekiwania* - wyświetlacz odświeża treść co minutę

`,
        NextId: "kontakt"
    }
]

