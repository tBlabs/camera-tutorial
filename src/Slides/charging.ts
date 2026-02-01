export const charging = [
    {
        Id: "ladowanie-kamery",
        Type: "choose",
        Title: `Który model posiadasz?`,
        Options: [
            { Label: "Standardowy zestaw", Text: "Klasyczny zestaw zasilany powerbankiem", ImageUrl: "connection.jpg", GoTo: "ladowanie-kamery-standard" },
            { Label: "Kamera niewykrywalna", Text: "Kamera z własnym zasilaniem", ImageUrl: "usage.png", GoTo: "ladowanie-kamery-niewykrywalnej" },
        ]
    },
    {
        Id: "ladowanie",
        Type: "page",
        Content: `### Ładowanie kamery

Jeśli kamera nie posiada przycisku (zwykle jest to czerwony wciskany guziczek) to nie należy jej ładować ponieważ nie posiada własnego źródła zasilania. Taka kamera jest zasilana tylko z zewnątrz: za pomocą powerbanka lub innego źródła.

### Ładowanie powerbanka

Powerbanki które dostarczamy do zestawów są typowymi powerbankami bez żadnych dodatkowych czy wymyślnych funkcji. Co oznacza, że alternatywnie zawsze można użyć innego powerbanka.
Czas ładowania *czarnego powerbanka o kształcie cylindra* wynosi około 8 godzin. Czas użytkowania z kamerą wynosi około 4 godzin.
Podczas ładowania miga czerwona dioda. Po naładowaniu przestaje migać (świeci światłem ciągłym lub gaśnie zależnie od wersji).  

### Ładowanie słuchawki

Słuchaki się nie ładuje. Wystarczy wymienić w niej baterie (337 lub SR416SW).   
Słuchawkę należy przechowywać wyłączoną.    
Przed każdą "akcją" załóż nową baterię! W każdym zestawie powinny znajdować się co najmniej 2 nowe, zapakowane w blister.  
Średni czas pracy samej słuchawki to około 10 godzin. Pętle indukcyjne pracują około 6-10 godzin.   
Bateria dostarczona wraz ze słuchawką służy tylko do testów i nie jest w pełni naładowana.  

Wkładając baterię zadbaj o to, aby nie zrobić na niej niechcący zwarcia (np. wkładając ją odwrotnie).

### Ładowanie pętli indukcyjnej

Każda pętla ma gniazdo ładowania USB (zwykle mini-usb). Zależnie od modelu pętli czas ładowania wynosi około 3-5 godzin.
Czas użytkowania od 6 do 11 godzin ciągłej rozmowy (lub kilka dni w trybie czuwania).

### Ładowanie przenośnego routera

Router ładujemy za pomocą kabla USB. Zielona dioda oznacza naładowanie. Czerwona - ładowanie. Czas pracy to około 8 godzin. Czas ładowania około 10 godzin.
`,
        NextId: "kontakt"
    },
];
