export const calibration = [
    {
        Id: "kalibracja",
        Type: "choose",
        Title: `Co chcesz skalibrować?`,
        Options: [
            { Label: "Kamerę", Text: "Dopasuj kamerę do tego, na co będzie patrzeć", ImageUrl: "tx.jpg", GoTo: "kalibracja-kamery" },
            { Label: "Słuchawkę", Text: "Ustaw bezpieczną głośność", ImageUrl: "ms.jpeg", GoTo: "kalibracja-sluchawki" },
        ]
    },
    {
        Id: "kalibracja-kamery",
        Type: "page",
        Content: `### Regulacja ostrości

Focus kamery jest regulowany za pomocą guzika-obiektywu. Kręcąc nim przesuwamy punkt w którym widać najostrzej. Należy to robić niezwykle ostrożnie pamiętając, że nie wolno całkowicie wykręcać guzika ani wkręcać go za mocno (to może skutkować połamaniem matrycy).  
Regulacji należy dokonywać bardzo powoli, dosłownie po 1-2mm co chwilę zerkając na docelowy obiekt.
    
*Guzik jest sklejony z obiektywem. Nie jest to jeden element i należy brać na to poprawkę. Choć klej jest bardzo wytrzymały to wszystko da się uszkodzić używając zbyt dużo siły. Zwłaszcza podczas montażu kamery w odzieży. Pamiętaj o tym!*
    

### Regulacja oświetlenia

Kamera jest domyślnie przystosowana do pracy przy typowym "klasowym" oświetleniu, czyli świetlówkach o barwie około 4000K (światło białe, naturalne lub zimne).  
W razie potrzeby światło można ustawić za pomocą aplikacji odbiorczej. W oknie podglądu znajduje się suwak regulacji jasności i kontrastu.

![Regulacja jasności](camera/light.png)

⨂ - odpowiada za jasność  
◩ - kontrast


### Regulacja rozdzielczości

Rozdzielczość regulujemy programowo za pomocą aplikacji odbiorczej. Nad okienkiem podglądu znajduje się wybierak pozwalający zmienić rozdzielczość na jedną z predefiniowanych lub dowolną własną.  
Należy pamiętać, że im większa rozdzielczość zdjęcia tym dłużej będzie przesyłane.

![Regulacja rozdzielczości](camera/resolution.png)

Opcje z żaróweczką 💡 delikatnie rozjaśnia obraz i zwiększa kontrast.`
    },
    {
        Id: "kalibracja-sluchawki",
        Type: "page",
        Content: `### Regulacja głośności

##### Na głośność w słuchawce wpływa wiele czynników:
- ułożenie słuchawki w uchu: i nie chodzi tu tylko o głębokość ale również o kąt wokół własnej osi, który może mieć wpływ nawet na 80% głośności,
- stan baterii w słuchawce: rozładowana bateria sprawia że słuchawka działa ciszej, ale biorąc pod uwagę długi czas pracy na baterii (ok 10 godzin) nie ma to większego znaczenia,
- odległość od cewki pętli indukcyjnej: im bliżej tym głośniej, pętla nie powinna być dalej niż na wysokości szyji, jej realny zasięg wynosi max pół metra,
- głośność w telefonie,
- regulator na pętli o ile pętla takowy posiada

##### Co nie ma wpływu na głośność:
- stan naładowania pętli indukcyjnej: nie ma żadnego znaczenia,
- stan naładowania telefonu: nie ma żadnego znaczenia
`
    },
];
