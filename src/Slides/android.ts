export const android = [
    {
        Id: "android",
        Type: "page",
        Content: `### Android
        
*⚠️ Ustawienie hotspota w systemie Android może wyglądać inaczej w zależności od jego wersji i producenta telefonu. Kolejne kroki mają charakter jedynie poglądowy*

Rozwiń menu górne i znajdź coś co przypomina hotspot lub router osobisty (może nazywać się \`Hotspot\` lub \`Router\` lub jakoś inaczej).  
Przytrzymaj te opcje i wejdź do ustawień.
`,
        ImageUrl: "android/android-1.jpg",
        NextId: "android-hotspot"
    },
    {
        Id: "android-hotspot",
        Type: "page",
        Content: `W polu \`Nazwa hotspota\`, \`SSID\` lub podobnym wpisz *hotspot1*. Wielkość znaków ma znaczenie! Nie pomyl się!  

W polu \`Hasło\` wpisz *hotspot1password*. Wielkość znaków ma znaczenie!
   
Docelowo ustaw hotspot na ten który otrzymasz w SMS od nas wraz z hasłem do serwisu - dzięki temu będziesz mieć pewność, że Twoja kamera łączy się tylko z Twoim telefonem.

Pozostałe opcje raczej nie mają znaczenia, ale jeśli gdzieś w menu zauważysz opcje *wstecznej kompatybilności* lub podobne - włącz je.  
Szyfrowanie należy ustawić na *WPA2 PSK*. Warto też wyłączyć takie opcje jak *automatyczny hotspot* czy *automatyczne wyłączanie*.
`,
        ImageUrl: "android/android-2.jpg",
        NextId: "led"
    },
]
