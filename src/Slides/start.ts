export const start = [{
    Id: "start",
    Type: "choose",
    Title: `Wybierz opcje:`,
    Options: [
        { Label: "Pierwsze uruchomienie", Text: "Wybierze te opcje jeśli masz styczność z naszym sprzętem po raz pierwszy", ImageUrl: "unboxing.jpg", GoTo: "pierwsze-uruchomienie" },
        { Label: "Użytkowanie", Text: "Wskazówki na temat użytkowania, ukrywania, ładowania itp", ImageUrl: "usage.png", GoTo: "uzytkowanie" },
        { Label: "Rozwiązywanie problemów", Text: "Wybierze te opcje jeśli masz problem z którymś elementem zestawu", ImageUrl: "fixing.png", GoTo: "problem" },
        { Label: "Inne kwestie", Text: "Dowiedz się o czym jeszcze warto pomyśleć lub jak zwrócić sprzęt", ImageUrl: "package.png", GoTo: "inne-sprawy" },
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
    ]
},
{
    Id: "uzytkowanie",
    Type: "choose",
    Title: `Wybierz jedną z poniższych kategorii:`,
    Options: [
        { Label: "Włączanie i wyłączanie", Text: "Procedura uruchamiania i dezaktywacji", ImageUrl: "camera/switch.jpg", GoTo: "wlaczanie" },
        { Label: "Aplikacja odbiorcza", Text: "Korzystanie ze strony podglądu", ImageUrl: "camera/app.png", GoTo: "strona-odbiorcza" },
        { Label: "Kalibracja", Text:"Wyreguluj sprzęt pod swoje potrzeby", ImageUrl: "camera/kalibracja.jpg", GoTo: "kalibracja" },
        { Label: "Ukrywanie", Text:"Jak dobrze ukryć zestaw", ImageUrl: "camera/koszula.jpg", GoTo: "ukrywanie" },
        { Label: "Ładowanie", Text: "Ładowanie i czas pracy", ImageUrl: "camera/ladowanie.jpg", GoTo: "ladowanie" },
        { Label: "Przechowywanie", Text: "Jak utrzymać sprzęt w gotowości i dobrym stanie", ImageUrl: "camera/magazyn.png", GoTo: "przechowywanie" },
        { Label: "Czyszczenie", Text: "Jak utrzymać sprzęt w gotowości i dobrym stanie", ImageUrl: "camera/czyszczenie.png", GoTo: "czyszczenie" },
        { Label: "Komunikacja", Text: "Jak powinna wyglądać sprawna komunikacja z pomocnikiem?", ImageUrl: "camera/walkietalkie.jpg", GoTo: "komunikacja" },
        { Label: "Bezpieczeństwo", Text: "Jak radzić sobie z detektorami podsłuchów, wykrywaczami metali czy aplikacjami", ImageUrl: "camera/wykrywacz.jpg", GoTo: "bezpieczenstwo" },
    ]
},
{
    Id: "bezpieczenstwo",
    Type: "page",
    Content: `### Bezpieczeństwo

#### Detektory nadajników (wifi/bluetooth/etc)

Przez detektor nadajników rozumiemy proste wskaźniki promieniowania radiowego. W najprostszej acz skuteczej wersji są to względnie tanie i proste w obsłudze urządzenia, które mają stosunkowo niewielki zasięg. Trzeba podejść z nimi dosyć blisko do źródła promieniowania (czyli do nas kiedy mamy na sobie kamerę lub inny sprzęt), na odległość mniejszą niż metr co z pewnością zdążymy zauważyć...

Przed takimi detektorami względnie łatwo się ukryć. Wymaga to jednak odrobiny sprytu:
- trzeba jak najszybciej dać znać pomocnikowi by zerwał połączenie telefoniczne,
- wyłączyć kamerę rozłączając ją z powerbankiem,
- wyłączyć bluetooth przytrzmując przycisk na kilka sekund,

Wszystkie te czynności da się wykonać przez ubranie bez wzbudzania podejrzeń. Warto przećwiczyć sobie taki scenariusz w domu.  
Samo przywrócenie połączenia również nie powinno być trudne.

#### Wykrywacze metali

Klasyczny ręczny wykrywacz ma niezbyt dużą czułość i trzeba go przyłożyć na prawdę blisko by zaczął reagować. Jeśli ktoś tylko nim przed nami pomacha to raczej nie ma szans żeby coś znalazł.  
Dla pewności zawsze warto mieć na sobie coś metalowego: łańcuszek, zegarek, pasek z metalową klamrą itp. Szanse że każą nam się z tego rozbierać są raczej niewielkie.

Te znacznie trudniej oszukać aczkolwiek w naszej ofercie posiadamy sprzęt niewykrywalny przez takie detektory.  
Szczegóły na stronie sklepu [https://specteam.pl](https://specteam.pl)

#### Aplikacje szukające bluetooth

O ile prawdą jest, że takie aplikacje istnieją o tyle stwierdzenie za ich pomocą gdzie znajduje się konkretne urządzenie jest kompletną nieprawdą. Takie rozpoznanie wymaga co najmniej kilku anten i fachowej wiedzy. 

Jeśli mimo to nie chcesz ryzykować zawsze możesz posłużyć się jednym z naszych niewykrywalnych urządzeń. [Szczegóły na stronie sklepu](https://specteam.pl)
  `
},
{
    Id: "wlaczanie",
    Type: "page",
    Content: `### Włączanie i wyłączanie

#### Włączenie kamery

O ile kamera nie posiada przycisku wystarczy podłączyć ją do powerbanka i odczekać około 45 sekund. Stan włączenia zostanie zasygnalizowany przez diodę znajdującą się przy porcie zasilania.

#### Wyłączenie kamery

O ile kamera nie posiada przycisku wystarczy odłączyć ją od powerbanka. Jeśli przycisk posiada - należy nacisnąć go dwa razy.

#### Włączenie pętli indukcyjnej

W zależności od modelu wystarczy przytrzymać przycisk przez 3 sekundy lub przełączyć suwak włącznika w pozycję "ON".

#### Wyłączenie pętli indukcyjnej

Przytrzymaj przycisk przez 3 sekundy lub przełącz suwak włącznika w pozycję "OFF".

#### Włączenie słuchawki

Włóż baterię do słuchawki.

#### Wyłączenie słuchawki

Wyjmij baterię ze słuchawki.
    `
},
{
    Id: "strona-odbiorcza",
    Type: "page",
    Content: `### Aplikacja odbiorcza

Aplikacja jest de facto zwykłą stroną internetową, którą można otworzyć w przeglądarce. Nie wymaga instalowania ani specjalnych uprawnień.  

Wystarczy znać hasło by z niej korzystać. Hasło zwykle dostarczamy SMSem na numer użytkownika lub z kartą dołączoną do zestawu.  

Hasła są nadawane odgórnie i działają przez cały okres użytkowania sprzętu. Każdy nowy użytkownik zawsze otrzymuje nowe hasło.

![Aplikacja odbiorcza](camera/app.png)

#### Podgląd na żywo

Aby uruchomić podgląd na żywo należy kliknąć guzik \`Przywróć podgląd\`. Parametry transisji można zmienić wybierakiem w prawym górnym rogu: do dyspozycji jest kilka opcji rozdzielczości jak również możliwość dowolnej regulacji parametrów transmisji po wybraniu \`Ustawienia własne\`.

#### Stopklatki 

Zasadniczym zadaniem aplikacji jest udostępnienie podglądu na żywo z kamery jak również możliwość zapisania wybranych ujęć. Do tego celu służy guzik \`Stopklatka\` tuż pod okienkiem podglądu.

Podglądu zapisanych zdjęć można dokonać klikając na ich miniaturkę. Spowoduje to załadowanie zdjęcia do widoku podglądu na żywo. Aby przywrócić podgląd na żywo należy kliknąć guzik \`Przywróć podgląd\`.

#### Zapis stopklatek

Przeglądarka jest w stanie zachować w sposób persystentny tylko 5MB danych. Oznacza to że ilość zdjęć jaką jesteśmy w stanie zapisać jest ograniczona.  
Pamięć aplikacji nie jest ograniczona i jest w stanie pomieścić tysiące zdjęć tak długo jak nie przeładujemy strony.

#### Współdzielenie stopklatek

Zapisane zdjęcia można wysłać na nasz serwer, gdzie będą przechowywane przez kilka dni. Użyj w tym celu ikonki chmurki przy każdej miniaturce.  
Kliknij guzik \`Zapisz...\` aby dowiedzieć się jak uzyskać dostęp do zapisanych w ten sposób zdjęć.  

Co ważne - współdzieląc link do zapisanych zdjęć nie przekazujesz bezpośredniego dostępu do podglądu na żywo.

#### Status

Na samym dole strony znajduje się pasek statusu, który informuje o stanie połączenia i transmisji.
    `
},
{
    Id: "problem",
    Type: "choose",
    Title: `Z czym masz problem?`,
    Options: [
        { Label: "Z kamerą", ImageUrl: "tx.jpg", GoTo: "problem-z-kamera" },
        { Label: "Ze słuchawką", ImageUrl: "ms.jpeg", GoTo: "problem-ze-sluchawka" },
        
    ]
},
{
    Id: "inne-sprawy",
    Type: "choose",
    Title: ``,
    Options: [
        { Label: "Przygotowanie telefonu", ImageUrl: "phone.jpg", GoTo: "phone:prepare" },
        { Label: "O czym warto pomyśleć", ImageUrl: "else.jpg", GoTo: "o-czym-jeszcze-warto-pomyslec" },
        { Label: "Zwrot sprzętu", ImageUrl: "package.png", GoTo: "package:prepare" },
    ]
},
]