export const start = [{
    Id: "start",
    Type: "choose",
    Title: `Wybierz opcje:`,
    Options: [
        { Label: "Pierwsze uruchomienie", Text: "Wybierze te opcje jeśli masz styczność z naszym sprzętem po raz pierwszy", ImageUrl: "unboxing.jpg", GoTo: "pierwsze-uruchomienie" },
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
    Id: "problem",
    Type: "choose",
    Title: `Z czym masz problem?`,
    Options: [
        { Label: "Z kamerą", ImageUrl: "tx.jpg", GoTo: "led" },
        { Label: "Ze słuchawką", ImageUrl: "ms.jpeg", GoTo: "ms:problems" },
        
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