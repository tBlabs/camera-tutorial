export const iPhoneSlides = [
    {
        Id: "iPhone-settings",
        Type: "page",
        Content: "Wejdź w `Ustawienia`, a potem w `Ogólne`",
        ImageUrl: "iphone/setts.png",
        NextId: "iPhone-general"
    },
    {
        Id: "iPhone-general",
        Type: "page",
        Content: "Wybierz `To urządzenie...`",
        ImageUrl: "iphone/gen.png",
        NextId: "iPhone:this-device"
    },
    {
        Id: "iPhone:this-device",
        Type: "page",
        Content: "Kliknij `Nazwa`",
        ImageUrl: "iphone/thisdev.png",
        NextId: "iPhone:device-name"
    },
    {
        Id: "iPhone:device-name",
        Type: "page",
        Content: `Zmień nazwe na *hotspot1*.\nWielkość znaków jest istotna! Nie pomyl się!`,
        ImageUrl: "iphone/name.png",
        NextId: "iPhone:go-back"
    },
    {
        Id: "iPhone:go-back",
        Type: "page",
        Content: "Wróć do `Ustawień` i wejdź w `Hotspot osobisty`",
        ImageUrl: "iphone/hot.png",
        NextId: "iPhone:hotspot-options"
    },
    {
        Id: "iPhone:hotspot-options",
        Type: "page",
        Content: "Zaznacz opcje `Maksymalna zgodność` o ile masz taką na ekranie. Bez tego kamera nie zadziała!",
        ImageUrl: "iphone/hot.png",
        NextId: "iPhone:hotspot-password"
    },
    {
        Id: "iPhone:hotspot-password",
        Type: "page",
        Content: "Zmień `Hasło Wi-Fi` na *hotspot1password*. Wielkość znaków ma znaczenie! Nie pomyl się!",
        ImageUrl: "iphone/pass.png",
        NextId: "iPhone:on-off"
    },
    {
        Id: "iPhone:on-off",
        Type: "page",
        Content: `Wyłącz i włącz hotspota (Guzik \`Dopuszczaj innych\`).  
        
### ⚠️ *Pozostaw telefon na tym ekranie na czas uruchamiania kamery!*  

Bez tego urządzenie się nie podłączy!  
  
Jedną z wielu wad iPhonów jest właśnie to, że nie pozwalają na podłączanie się innym urządzeniom na czas bycia poza tym ekranem. Dlaczego producent tak to sobie wymyślił? Trudno powiedzieć. Na Androidach nie ma tego problemu.`,
        ImageUrl: "iphone/hot.png",
        NextId: "iPhone:wifi-warning"
    },
    {
        Id: "iPhone:wifi-warning",
        Type: "page",
        Content: "⚠️ *Od tej pory nie dotykaj opcji związanych z Wifi!*\n\nPamiętaj, że moduł wifi, który zwyczajowo służy do odbierania danych teraz jest w stanie nadawania. Klikając ikone wifi uruchomisz odbieranie a tym samym wyłączysz router. Telefon tego nie komunikuje (choć czasem tak) a kamera przestaje po prostu działać.\n\nCo ciekawe dezaktywacja routera poprzez włączenie wifi nie jest widoczna w menu telefonu. Opcja \"Dopuszczaj innych\" nadal świeci się na zielono co może bardzo wprowadzać w błąd.",
        ImageUrl: "iphone/router-disable.jpg",
        NextId: "camera-start"
    }
]