export const phone = [{
    Id: "choose-phone",
    Type: "choose",
    Title: "Jaki masz telefon?",
    Options: [
        { Label: "iPhone", ImageUrl: "iphone/iphone.jpg", GoTo: "iPhone-settings" },
        { Label: "Android", ImageUrl: "android/android.jpg", GoTo: "android" },
    ]
},
{
    Id: "camera-start",
    Type: "page",
    Content: `Hotspot jest już gotowy. Te ustawienia wprowadza się tylko raz.\n\nOd tej pory wystarczy włączyć hotspot przed uruchomieniem kamery (guzikiem \`Dopuszczaj innych\` i poczekać aż kamera się połączy z hotspotem, dopiero wtedy można wyjść z ekranu hotspota).
    
    
Docelowo ustaw hotspot na ten który otrzymasz w SMS od nas wraz z hasłem do serwisu - dzięki temu będziesz mieć pewność, że Twoja kamera łączy się tylko z Twoim telefonem.

W kolejnym kroku włączymy kamere...
    `,
    ImageUrl: "",
    NextId: "led"
}
]