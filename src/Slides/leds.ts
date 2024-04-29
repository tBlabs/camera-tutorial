export const leds = [
    {
        Id: "led",
        Type: "choose",
        Title: `### Uruchomienie kamery
Podłącz kamere do powerabanka. Można użyć dowolnego kabla mini-USB jak i dowolnego powerbanka. Ten dostarczony przez nas powinien wystarczyć na co najmniej 4 godziny pracy.

![Połączenie](connection.jpeg)

Odczekaj około **50 sekund**, aż kamera się uruchomi.  

Przy gniazdku zasilania kamery znajduje się dioda.\n\n*Na jaki miga kolor?*`,
        Options: [
            { Label: "🟢 Zielony", ImageUrl: "green.jpeg", GoTo: "led-green" },
            { Label: "🔴 Czerwony", ImageUrl: "red.jpeg", GoTo: "red-led" },
            { Label: "🟢lub🔴 Światło ciągłe", ImageUrl: "red.jpeg", GoTo: "const-led" },
            { Label: "⚪ Nie miga", ImageUrl: "noled.jpeg", GoTo: "no-led" },
        ]
    },
    {
        Id: "red-led",
        Type: "page",
        Content: `🔴 Czerwona migająca dioda oznacza, że kamera pracuje poprawnie, ale nie może się połączyć z serwerem.  
Powodów może być kilka:
- *Hotspot nie jest włączony lub nie działa poprawnie* - upewnij się, że działa prawidłowo sprawdzając czy działa pod odpowiednią nazwą oraz czy "widzą go" inne urządzenia, np. komputer,
- *Hotspot nie udostępnia internetu* - upewnij się, że transmisja danych w telefonie jest włączona oraz że rozmowa telefoniczna nie blokuje transmisji,
- *Hotspot jest poza zasięgiem* - kamera musi znajdować się w odległości maksymalnie kilku metrów od telefonu`,
        ImageUrl: "",
        NextId: "contact"
    },
    {
        Id: "no-led",
        Type: "page",
        Content: `Kamera potrzebuje około 50 sekund aby się uruchomić. Brak światła może oznaczać, że:
- *Nie upłyneło jeszcze dość czasu* - odczekaj co najmniej minute,
- *Brak zasilania* - sprawdź czy powerbank działa, powinna się palić na nim jakaś dioda,
- *Uszkodzony przewód USB* - należy wymienić na dowolny inny

Jeśli to żadna z powyższych przyczyn - skontaktuj się z naszą infolinią.`,
        ImageUrl: "",
        NextId: "contact"
    },
    {
        Id: "const-led",
        Type: "page",
        Content: `W teorii światło ciągłe diody kontrolnej nie jest możliwe. Upewnij się, że patrzysz na właściwą lampke - tą przy gnieździe zasilania. Jeśli jesteś absolutnie pewien, że to właściwa dioda, pozostaje tylko jedna możliwość - kamera się zawiesiła. Odłącz ją od prądu i podłącz ponownie. Zgłoś problem na infolinii ponieważ nie powinien nigdy wystąpić.`,
        ImageUrl: "",
        NextId: "contact"
    },
    {
        Id: "led-green",
        Type: "choose",
        Title: `🟢 Zielona migająca dioda oznacza, że kamera poprawnie nawiązała połączenie z serwerem.
        
Wejdź na stronę odbiornika, której adres znajdziesz w *SMS od nas* lub na *karcie dołączonej do zestawu*.  
    
☎️ *Jeśli nie otrzymałeś haseł - zadzwoń i poproś o ich wygenerowanie!*

Zaloguj się i sprawdź czy wszystko jest w porządku. Jeśli nie - wybierz którąś z poniższych opcji:`,
        Options: [
            { Label: "Brak obrazu", ImageUrl: "🚫", GoTo: "kamera:brak-obrazu" },
            { Label: "Niewyraźny obraz", ImageUrl: "👓", GoTo: "kamera:niewyrazny-obraz" },
            { Label: "Powolna transmisja", ImageUrl: "🐢", GoTo: "kamera:powolna-transmisja" },
            { Label: "Za mała rozdzielczość", ImageUrl: "📺", GoTo: "kamera:mala-rozdzielczosc" },
            { Label: "Brak obrazu podczas rozmowy", ImageUrl: "☎️", GoTo: "kamera:podczas-rozmowy" },
        ]
    },
]