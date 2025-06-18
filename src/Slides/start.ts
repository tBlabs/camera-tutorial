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