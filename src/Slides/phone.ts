export const phone = [{
    Id: "choose-phone",
    Type: "choose",
    Title: "Z czym chcesz połączyć kamerę?",
    Options: [
        { Label: "iPhone", ImageUrl: "iphone/iphone.jpg", GoTo: "iPhone-settings" },
        { Label: "Android", ImageUrl: "android/android.jpg", GoTo: "android" },
        { Label: "Router wifi", ImageUrl: "modem.jpg", GoTo: "modem" },
    ]
},
{
    Id: "camera-start",
    Type: "page",
    Content: `Hotspot jest już gotowy. Te ustawienia wprowadza się tylko raz i nie ma potrzeby ich zmieniać jeśli ta kamera będzie jedyną na sali.
    
Od tej pory wystarczy włączyć hotspot przed uruchomieniem kamery (guzikiem \`Dopuszczaj innych\` i poczekać aż kamera połączy się z hotspotem, dopiero wtedy można wyjść z ekranu hotspota).
    
Docelowo ustaw hotspot na ten, który otrzymasz w SMS od nas wraz z hasłem do serwisu.  
Przykładowa wiadomość wygląda następująco:
\`\`\`
🎓 Instrukcja obsługi: 
https://tutorial.specteam.pl

📱 Szybki podgląd: 
https://watcher.specteam.pl#watch/H1/myszowy_pomidorek_123

💻 Podgląd na komputerze: 
https://watcher.specteam.pl#login/H1 
hasło: "myszowy pomidorek 123"

🛜 Opcjonalnie w telefonie ustaw hotspot z nazwą "TX1234" i hasłem "TX1234password"
\`\`\`
Chodzi o ostatnią linijkę z SMSa, czyli: 
- zamień *hotspot1* na nazwę z SMS, czyli jak w przykładzie *TX1234*  
- zamień *hotspot1password* na *TX1234password*  

Po zmianie tych ustawień warto wyłączyć i włączyć hotspot ponownie.

Dzięki temu będziesz mieć pewność, że Twoja kamera łączy się tylko z Twoim telefonem.

### Co ma zrobić odbiorca?

Nic. Wystarczy, że otworzy link z SMS.  
Nie musi odpalać hotspota, bluetooth ani niczego innego.

---

W kolejnym kroku włączymy kamere...
    `,
    ImageUrl: "",
    NextId: "led"
},
{
    Id: "modem",
    Type: "page",
    Content: `### Połączenie z routerem wifi

Kamerę można podłączyć do dowolnego routera wifi. Ważne jest tylko żeby taki router wspierał standardową częstotliwość 2.4 GHz.  
Połączenie ogranicza się tylko do ustawienia odpowiedniej nazwy sieci i hasła.

Większość modemów jest obsługiwana przez przeglądarkę z poziomu komputera, który jest do ów modemu podłączony.

Przykładowo w przypadku routera 3G \`D-Link DWR-932\` wystarczy wpisać adres \`192.168.0.1\` aby otworzyć panel sterowania.
    `,
    ImageUrl: "",
    NextId: "modem-login"
},
{
    Id: "modem-login",
    Type: "page",
    Content: `### Logowanie do routera

Połącz komputer z routerem. Jeśli to nasz router to został już ustawiony na domyślą sięć \`hotspot1\` z hasłem \`hotspot1password\`.
Chcąc zmienić jego ustawienia wystarczy wpisać jako \`User name\` fraze \`admin\` a jako \`Password\` nic nie wpisywać. Następnie należy kliknąć guzik \`Sign in\`.
    `,
    ImageUrl: "modem/login.png",
    NextId: "modem-panel"
},
{
    Id: "modem-panel",
    Type: "page",
    Content: `### Panel sterowania routera

Kliknij przycisk/zakładkę \`Wi-Fi\`
    `,
    ImageUrl: "modem/panel.png",
    NextId: "modem-wifi"
},
{
    Id: "modem-wifi",
    Type: "page",
    Content: `### Ustawienia wifi

Nową nazwę sieci można podać w polu \`SSID For Wi-Fi 2.4GHz\`. Hasło w polu \`Pre-Shared Key\`.

Pamiętaj by używać tylko SSID, które kamera obsługuje, czyli te zaczynające się od "TX" (zwyczajowo podawane w sms z hasłami dostępu do strony odbiornika).

Po dokonaniu zmian należy kliknąć guzik \`Apply\`.

    `,
    ImageUrl: "modem/wifi.png",
    NextId: "led"
}
]
