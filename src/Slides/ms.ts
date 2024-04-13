export const msSlides = [
    {
        Id: "ms-start",
        Type: "page",
        Content: `### Uruchomienie mikrosłuchawki
        
⚠️ Przed przystąpieniem do uruchomienia mikrosłuchawki wyczyść porządnie ucho. Pamiętaj by czyścić je przed każdym włożeniem słuchawki!  
Zapchanej słuchawki nie da się samodzielnie wyczyścić, więc należy bezwzględnie dbać o higienę!

`,
        ImageUrl: "ms/ms.jpeg",
        NextId: "ms-open"
    },
    {
        Id: "ms-open",
        Type: "page",
        Content: `Odkręć wieczko tak jak odkręca się butelkę.
`,
        ImageUrl: "ms/open.jpeg",
        NextId: "ms-bat"
    },
    {
        Id: "ms-bat",
        Type: "page",
        Content: `Włóż baterie. Płaską częścią do góry. Kółeczkiem w strone sprężynki.  

Zakręć i włóż słuchawkę do *czystego ucha*. Powinien być słyszalny szum. Póki co nie dociskaj słuchawki. Postaraj się znaleźć punkt w którym szum jest najgłośniejszy poprzez obracanie słuchawki i dopiero wtedy dociśnij ją w głąb kanału.
`,
        ImageUrl: "ms/bat.jpeg",
        NextId: "ms-loop"
    },
    {
        Id: "ms-loop",
        Type: "choose",
        Title: `### Pętla indukcyjna 
        
Pętla łączy telefon z mikrosłuchawką za pomocą indukcji magnetycznej generowanej w cewce (to ten długi czarny element w oplocie przypominający sznurek - należy się z nim obchodzić delikatnie ponieważ jest zbudowany z cienkiego drutu, który może pęknąć).   
Pętle należy umieścić na szyji zakładając ją przez głowę.  
Przed przystąpieniem do użytkowania należy ją sparować z telefonem.
        
*Jaką pętle posiadasz?*`,
        Options: [
            { Label: "Samsung", ImageUrl: "ms/samsung.jpeg", GoTo: "samsung" },
            { Label: "Jabra", ImageUrl: "ms/jabra.jpeg", GoTo: "jabra" },
        ]
    },
    {
        Id: "jabra",
        Type: "page",
        Content: `Aby sparować Jabre z telefonem należy przytrzymać przycisk (ten podłużny odstający element) przez 5 sekund do momentu, w którym dioda znajdująca się w przycisku zacznie świecić *światłem ciągłym* (nie będzie migać) na niebiesko.  
        
W telefonie należy wejść w liste urządzeń bluetooth i odnaleźć \`Jabra\` lub podobne na liście nowo odnalezionych urządzeń.`,
        ImageUrl: "ms/talk5.png",
        NextId: "jabra-onlist"
    },
    {
        Id: "samsung",
        Type: "page",
        Content: `Aby sparować pętle Samsung z telefonem należy przesunąć suwak z boku obudowy a następnie przytrzymać okrągły przycisk na przednim panelu przez 5 sekund do momentu, w którym dioda znajdująca się obok włącznika zacznie *migać na dwa kolory*.
        
W telefonie należy wejść w liste urządzeń bluetooth i odnaleźć \`Samsung\` lub podobne na liście nowo odnalezionych urządzeń.`,
        ImageUrl: "ms/sams.png",
        NextId: "samsung-onlist"
    },
    {
        Id: "jabra-onlist",
        Type: "page",
        Content: `Po sparowaniu urządzenie powinno pokazać się na liście`,
        ImageUrl: "ms/talk5onlist.png",
        NextId: "call"
    },
    {
        Id: "samsung-onlist",
        Type: "page",
        Content: `Po sparowaniu urządzenie powinno pokazać się na liście`,
        ImageUrl: "ms/samsonlist.png",
        NextId: "call"
    },
    {
        Id: "call",
        Type: "page",
        Content: `Gotowe!
        
Od teraz możesz wykonywać połączenia z użyciem mikrosłuchawki.  
Załóż pętle na szyje i wybierz do kogoś numer. Sprawdź czy wszystko działa.

Każda pętla ma kilka dodatkowych funkcji:
- *podwójne naciśnięcie przycisku* - wybierze ostatni number,
- *dłuższe przytrzymanie* - rozłączenie rozmowy, 
- *krótkie naciśnięcie* - odebranie połączenia

Działanie powyższych funkcji należy sprawdzić eksperymentalnie, ponieważ każdy telefon może działać trochę inaczej.

🔋 Pamiętaj by ładować pętle. Stan naładowania jest sygnalizowany przez diodę.  
🪢 Nie nadwyrężaj pętli. Nie rozciągaj jej i nie skręcaj. Jest zbudowana z cienkiego drutu, którego przerwanie spowoduje awarie zestawu.  
🦷 Pamiętaj by nie wychodzić poza zasięg pętli (maksymalnie kilka metrów). Miej telefon przy sobie.  

---  

*Co dalej?*

Koniecznie zapoznaj się z pełną wersją instrukcji mikrosłuchawki: [watcher.specteam.pl](https://watcher.specteam.pl/#help/activation/ear)  
Jest tam opisanych dużo detali, które mogą Ci uratować życie! 
`,
        ImageUrl: "",
        NextId: ""
    },
]