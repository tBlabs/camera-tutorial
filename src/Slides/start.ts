export const start = [{
    Id: "start",
    Type: "choose",
    Title: `Wybierz opcje:`,
    Options: [
        { Label: "Pierwsze uruchomienie", Text: "Wybierze te opcje jeśli masz styczność z naszym sprzętem po raz pierwszy", ImageUrl: "unboxing.jpg", GoTo: "pierwsze-uruchomienie" },
        { Label: "Rozwiązywanie problemów", Text: "Wybierze te opcje jeśli masz problem z którymś elementem zestawu", ImageUrl: "fixing.png", GoTo: "problem" },
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
        { Label: "Przygotowanie telefonu", ImageUrl: "phone.jpg", GoTo: "phone:prepare" },
    ]
},
{
    Id: "problem",
    Type: "choose",
    Title: `Z czym masz problem?`,
    Options: [
        { Label: "Z Mikrokamerą", ImageUrl: "tx.jpg", GoTo: "led" },
        { Label: "Z Mikrosłuchawką", ImageUrl: "ms.jpeg", GoTo: "ms:problems" },
    ]
},
{
    Id: "start-v0",
    Type: "choose",
    Title: `### Samouczek

Niniejszy poradnik ma za zadanie pomóc w rozwiązaniu ewentualnych problemów jak i w samodzielnym uruchomieniu sprzętu.  
Pełna instrukcja obsługi znajduje się pod adresem [watcher.specteam.pl#help](https://watcher.specteam.pl/#help) i należy się z nią bezwzględnie zapoznać!

*Jeśli masz problem:*  
- [Pomoc dotycząca już sparowanej słuchawki](#slide/ms:problems)  
- [Pomoc dotycząca już połączonej kamery](#slide/led)  

*Jeśli chcesz coś uruchomić:*`,
    Options: [
        { Label: "Mikrokamera", ImageUrl: "tx.jpg", GoTo: "choose-phone" },
        { Label: "Mikrosłuchawka", ImageUrl: "ms.jpeg", GoTo: "ms-start" },
        { Label: "Słuchawka Nano", ImageUrl: "mag1.jpg", GoTo: "magnetic" },
        { Label: "Przygotowanie telefonu", ImageUrl: "phone.jpg", GoTo: "phone:prepare" },
        { Label: "Jak zwrócić sprzęt?", ImageUrl: "package.png", GoTo: "package:prepare" },
    ]
}
]