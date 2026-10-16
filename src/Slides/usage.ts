
export const usage = [
    {
        Id: "bezpieczenstwo",
        Type: "page",
        Content: `### Bezpieczeństwo
    
#### Detektory nadajników radiowych (wifi/bluetooth/etc)
    
Przez detektor nadajników rozumiemy proste wskaźniki promieniowania radiowego. W najprostszej acz skuteczej wersji są to względnie tanie i proste w obsłudze urządzenia, które mają stosunkowo niewielki zasięg. Trzeba podejść z nimi dosyć blisko do źródła promieniowania (czyli do nas kiedy mamy na sobie kamerę lub inny sprzęt), na odległość mniejszą niż metr co z pewnością zdążymy zauważyć...

Przed takimi detektorami względnie łatwo się ukryć. Wymaga to jednak odrobiny sprytu:  
- trzeba jak najszybciej dać znać pomocnikowi by zerwał połączenie telefoniczne,  
- wyłączyć kamerę rozłączając ją z powerbankiem,  
- wyłączyć bluetooth przytrzmując przycisk na kilka sekund,  

Wszystkie te czynności da się wykonać przez ubranie bez wzbudzania podejrzeń. Warto przećwiczyć sobie taki scenariusz w domu.  
Samo przywrócenie połączenia również nie powinno być trudne.

#### Wykrywacze metali

Klasyczny ręczny wykrywacz ma niezbyt dużą czułość i trzeba go przyłożyć na prawdę blisko by zaczął reagować. Jeśli ktoś tylko nim przed nami pomacha to raczej nie ma szans żeby coś znalazł.  
Dla pewności zawsze warto mieć na sobie coś metalowego: łańcuszek, zegarek, pasek z metalową klamrą itp. Szanse, że każą nam się z tego rozbierać, są raczej niewielkie.

Wykrywacz metali znacznie trudniej oszukać aczkolwiek w naszej ofercie posiadamy sprzęt niemal niewykrywalny przez takie detektory.  
Szczegóły na stronie sklepu [https://specteam.pl](https://specteam.pl)

#### Detektory optyczne

Na rynku istnieją detektory, które pozwalają wykrywać obiektywy kamer z użyciem światła czerwonego. Takie sprawdzenie jest dość inwazyjne ponieważ wymaga bezpośredniego świecenia na obiektyw z kilku metrów. Nie da się tego nie zauważyć.  

**Jak się bronić?** Wystarczy zakleić obiektyw w guziku na czas sprawdzenia.

#### Aplikacje skanujące bluetooth

O ile prawdą jest, że takie aplikacje istnieją o tyle stwierdzenie za ich pomocą gdzie konkretne znajduje się urządzenie jest kompletną nieprawdą. Takie rozpoznanie wymaga co najmniej kilku anten i fachowej wiedzy. 
`
    },
    {
        Id: "przechowywanie",
        Type: "page",
        Content: `### Przechowywanie
    
Sprzęt należy przechowywać zawsze wyłączony. Dotyczy to szczególnie mikrosłuchawki bateryjnej, która reaguje na zmiany pola elektormagnetycznego w swoim otoczeniu i zużywa baterię.

Odkładając sprzęt na dłużej warto go naładować i doładowywać co najmniej raz na pół roku.

Ważne też zadbać o czystość elementów, szczególnie słuchawki, która miała styczność ze skórą.

Wszelkie kable powinny zostać rozłączone.

Pętli indukcyjnej nie należy zbyt mocno skręcać. Powinna leżeć w miarę luźno, złożona maksymalnie 4 razy na kształ ósemki.

Nowe baterie do słuchawki mogą być przechowywane przez kilka lat. W miarę degradacji pokryją się białym nalotem - należy je wtedy wymienić na nowe.  
Żywotność ogniw (akumulatorów) w innych urządzeniach wynosi kilka lat. Nasze najstarsze urządzenia mają po 8 i więcej lat i nadal zachowują wystarczający czas pracy (za minimum przyjmujemy 4 godzin ciągłego działania).
`
    },
    {
        Id: "komunikacja",
        Type: "page",
        Content: `### Komunikacja
    
Sprawna komunikacja z pomocnikiem jest kluczem do sukcesu. Dobry "Operator" ma niełatwe zadanie: musi zadbać o łączność jak i o "poprawne odpowiedzi". To duże obciążenie dla jednej osoby, dlatego warto zawsze rozważyć co najmniej kilku pomocników.

W sprawnej komunikacji pomaga przede wszystkim trening - im więcej tym lepiej. Podczas prób wychodzą drobne niuanse, takie jak na przykład co robić w czasie kiedy połączenie zostanie z jakiegoś powodu zerwane lub zwyczajnie czegoś nie dosłyszymy, bo na przykład ktoś dyktuje za szybko, sieć na chwilę się przytnie lub przeszkodzi nam jakiś hałas.

Warto wykorzystać fakt, że w zestawie jest mikrofon i dzięki temu można umówić się na jakieś dyskretne sygnały typu chrząknięcie, kaszlnięcie, podrapanie się po mikrofonie lub pstryknięcie długopisem. Będzie to zdecydowanie szybsze niż pisanie na kartce i pokazywanie tego kamerą.

Dobrą praktyką jest też każdorazowe zadawanie pytania przez Operatora "Czy komenda była zrozumiała*, a w przypadku braku potwierdzenia zapytanie *Czy coś zostało niezrozumiane*.

Najtrudniejszą rzeczą jest samo nawigowanie kamerą, kiedy słyszymy tylko komunikaty lewo/prawo. Takie informacje nie są zbyt precyzyjne i lepiej jest mówić coś w stylu: "przesuń kartkę 5cm w prawo" niż "przesuń w lewo".

Sprawnie przerprowadzona akcja charakteryzuje się tym, że samo przesłanie zdjęć zajmuje góra kilka minut. Potem Operator pracuje tylko na zapisanych zdjęciach. Dzięki tmeu można zaoszczędzić sporo czasu na ponowne celowanie w papier.
`,
    // NextId: "protokol-komunikacji",
    },
//     {
//         Id: "protokol-komunikacji",
//         Type: "page",
//         Content: `### Protokół komunikacji
    
// Ta instrukcja dotyczy głównie tego jak powinien komunikować się Operator (pomagający) z Klietem (osobą na sali).  
// Ważne są następujące aspekty:

// ### Przygotuj otoczenie
// - Zadbaj o oświetlenie podobne do tego, które będzie na sali (raczej sztuczne, świetlówki 4000kK, unikaj światła słonecznego)
// - Znajdź stół podobny do tego, który będzie na sali
// - Ubierz się tak jak będziesz docelowo ubrany (testuj sprzęt który jest już wpięty w ubranie)
// - Używaj dokładnie tego telefonu, który planujesz zabrać
// - Twoi pomocnicy powinni pracować na dokładnie tym sprzęcie na którym zamierzają docelowo pracować

// ### Komendy do sterowania kamerą
// - Komendy należy powtarzać co najmniej 2 razy
// - Lepiej mówić "kartka 5 cm w prawo" niż samo "w prawo"
// - Lepiej odnosić się do przesunięcia kartki niż ciała (Klient nie ma pojęcia gdzie patrzy kamera)

// ### Sposób przekazywania odpowiedzi
// - Klient nie ma możliwości mówienia, co najwyżej może wydawać odgłosy
// `
//     },
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

Wyjmij baterię ze słuchawki.`
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
];
