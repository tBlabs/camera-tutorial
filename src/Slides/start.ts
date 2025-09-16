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
        { Label: "Mikrokamerę \"niewykrywalną\"", ImageUrl: "txbl.jpg", GoTo: "kamera-niewykrywalna" },
    ]
},
{
    Id: "kamera-niewykrywalna",
    Type: "page",
    Content: `### Kamera "niewykrywalna"

Niewykrywalność kamery polega na tym, że jest częściowo "niewidoczna" dla skanerów metali. *Nie oznacza to jednak, że jest całkowicie niewykrywalna! Wszelkie detektory fal radiowych jak i zaawansowane wykrywacze metali nadal są ją w stanie zauważyć!*

Siła tej konstrukcji polega na tym, że typowy ręczny detektor metali (typu Garrett) nie zapiszczy nawet przy ocieraninu się nim o sam obiektyw i przewód łączący kamerę z modułem komunikacyjnym. W prayktyce oznacza to, że pierwsze 25cm kamery nie jest widoczne.  
Aby nie zostać przyłapanym należy odpowiednio ukryć na sobie cały zestaw. Elektronike kamery trzeba schować pod pachę lub w spodnie (o ile wystarczy kabla). W te miejsca nikt nie będzie nam wciskał wykrywacza. Typowy detektor jest w stanie "złapać" metal z odległości około 2,5-4cm.

Umiejscownie kamery pod pachą oznacza, że obraz będzie odwrócony o 90 stopni w lewo lub prawo (zależnie od strony ciała).  
W wygodniejszej pracy może pomóc odpowiednie ustawienie parametrów kamery w aplikacji odbiorczej. Z ustawień po prawej nad oknem podglądu wybieramy "Ustawienia własne" a następnie za pomocą ostatniego parametru \`Obrót\` wybieramy 90 lub 270 stopni.

--- 

W następnym kroku uruchomimy kamere...
`,
    NextId: "kamera-niewykrywalna-wlaczanie"
},
{
    Id: "kamera-niewykrywalna-wlaczanie",
    Type: "page",
    Content: `### Włączanie kamery "niewykrywalnej"

*(Urządzenia z tej serii są wciąż prototypami, stąd tak wiele wersji włączników i wskaźników baterii)*

Kamery z seri TXBL posiadają wbudowaną baterie, która powinna wystarczyć na 3-4 godziny pracy.  
Seria TXL nie posiada baterii i musi być zasilana z zewnątrz.  

**Wersja z czerwonym przyciskiem**

Kamerę uruchamia się jednokrotnym naciśnięciem czerwonego przycisku przy porcie ładowania USB-C.  
Dwukrotne naciśnięcie powoduje wyłączenie kamery.

**Wersja z przełącznikiem suwakowym**

Kamerę uruchamia się przełączeniem suwakowego przełącznika w pozycję do środka konstrukcji (w stronę portu USB-C).  
Pozycja odwrotna powoduje wyłączenie kamery.

#### Pomiar stanu baterii

Różne kamery mają różne systemy oznaczeń stanu baterii.  
Wersja z czterema diodami pokazują stan baterii w następujący sposób:
- 1 dioda - 25% baterii,
- 2 diody - 50% baterii,
- 3 diody - 75% baterii,
- 4 diody - 100% baterii.  

Wersja z niebieską diodą:
- 1 mignięcie - 25% baterii,
- 2 mignięcia - 50% baterii,
- 3 mignięcia - 75% baterii,
- 4 mignięcia - 100% baterii.  

#### Ładowanie

*Kamery z tej serii należy ładować w stanie wyłączonym!*   
Jeśli kamera się mimo to uruchomi i będzie nadawać nie należy nic robić.

---

W kolejnym kroku sparujemy kamerę z telefonem...
`,
    NextId: "choose-phone"
},
{
    Id: "uzytkowanie",
    Type: "choose",
    Title: `Wybierz jedną z poniższych kategorii:`,
    Options: [
        { Label: "Włączanie i wyłączanie", Text: "Procedura uruchamiania i dezaktywacji", ImageUrl: "camera/switch.jpg", GoTo: "wlaczanie" },
        { Label: "Aplikacja odbiorcza", Text: "Korzystanie ze strony podglądu", ImageUrl: "camera/app.png", GoTo: "strona-odbiorcza" },
        { Label: "Kalibracja", Text: "Wyreguluj sprzęt pod swoje potrzeby", ImageUrl: "camera/kalibracja.jpg", GoTo: "kalibracja" },
        { Label: "Ukrywanie", Text: "Jak dobrze ukryć zestaw", ImageUrl: "camera/koszula.jpg", GoTo: "ukrywanie" },
        { Label: "Ładowanie", Text: "Ładowanie i czas pracy", ImageUrl: "camera/ladowanie.jpg", GoTo: "ladowanie" },
        { Label: "Przechowywanie", Text: "Jak utrzymać sprzęt w gotowości i dobrym stanie", ImageUrl: "camera/magazyn.png", GoTo: "przechowywanie" },
        { Label: "Czyszczenie", Text: "Jak utrzymać sprzęt w gotowości i dobrym stanie", ImageUrl: "camera/czyszczenie.png", GoTo: "czyszczenie" },
        { Label: "Komunikacja", Text: "Jak powinna wyglądać sprawna komunikacja z pomocnikiem?", ImageUrl: "camera/walkietalkie.jpg", GoTo: "komunikacja" },
        { Label: "Bezpieczeństwo", Text: "Jak radzić sobie z detektorami podsłuchów, wykrywaczami metali czy aplikacjami", ImageUrl: "camera/wykrywacz.jpg", GoTo: "bezpieczenstwo" },
    ]
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