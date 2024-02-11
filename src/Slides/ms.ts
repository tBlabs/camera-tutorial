export const msSlides = [
    {
        Id: "ms-start",
        Type: "page",
        Content: `### Uruchomienie mikrosłuchawki
        
⚠️ Przed przystąpieniem do uruchomienia mikrosłuchawki wyczyść porządnie ucho. Pamiętaj by czyścić je przed każdym włożeniem słuchawki!

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

Zakręć i włóż słuchawke do *czystego ucha*. Powinien być słyszalny szum.
`,
        ImageUrl: "ms/bat.jpeg",
        NextId: "ms-loop"
    },
    {
        Id: "ms-loop",
        Type: "choose",
        Title: `### Pętla indukcyjna 
        
Pętla łączy telefon z mikrosłuchawką.   
Należy ją umieścić na szyji.  
Przed przystąpieniem do użytkowania należy ją sparować z telefonem.
        
Jaką pętle posiadasz?`,
        Options: [
            { Label: "Samsung", ImageUrl: "ms/samsung.jpeg", GoTo: "samsung" },
            { Label: "Jabra", ImageUrl: "ms/jabra.jpeg", GoTo: "jabra" },
        ]
    },
    {
        Id: "jabra",
        Type: "page",
        Content: `Aby sparować te pętle z telefonem należy przytrzymać przycisk (ten podłużny odstający element) przez 5 sekund do momentu w którym dioda znajdująca się w przycisku zacznie świecić *światłem ciągłym* (nie będzie migać).  
        
W telefonie należy wejść w liste urządzeń bluetooth i odnaleźć \`Jabra\` lub podobne na liście nowo odnalezionych urządzeń.`,
        ImageUrl: "ms/talk5.png",
        NextId: "jabra-onlist"
    },
    {
        Id: "samsung",
        Type: "page",
        Content: `Aby sparować te pętle z telefonem należy przesunąć suwak z boku obudowy a następnie przytrzymać okrągły przycisk na przednim panelu przez 5 sekund do momentu w którym dioda znajdująca się obok włącznika zacznie *migać na dwa kolory*.
        
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

🔋 Pamiętaj również by ładować pętle. Stan naładowania jest sygnalizowany przez diodę.`,
        ImageUrl: "",
        NextId: ""
    },
]