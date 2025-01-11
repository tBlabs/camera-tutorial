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
    Content: "Hotspot jest już gotowy. Te ustawienia wprowadza się tylko raz.\n\nOd tej pory wystarczy włączyć hotspot przed uruchomieniem kamery (guzikiem `Dopuszczaj innych` i poczekać aż kamera się połączy z hotspotem, dopiero wtedy można wyjść z ekranu hotspota).\n\nW kolejnym kroku włączymy kamere...",
    ImageUrl: "",
    NextId: "led"
}
]