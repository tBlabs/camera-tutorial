export const msProblems = [
    {
        Id: "problem-ze-sluchawka",
        Type: "choose",
        Title: `Poniżej znajduje się lista potencjalnych problemów, które nie powinny wystąpić przy normalnym użytkowaniu. Jeśli jednak coś jest nie tak zacznij od tej listy:`,
        Options: [
            { Label: "Nic nie słychać", Icon: "🔇", GoTo: "ms:brak-dzwieku" },
            { Label: "Słabo słychać", Icon: "🔈", GoTo: "ms:niska-glosnosc" },
            { Label: "Słychać za głośno", Icon: "📢", GoTo: "ms:za-glosno" },
            { Label: "Słychać na zewnątrz", Icon: "🦻", GoTo: "ms:slychac" },
            { Label: "Występują zakłócenia", Icon: "📡", GoTo: "ms:zaklocenia" },
            { Label: "Brak połączenia", Icon: "🔗", GoTo: "ms:brak-polaczenia" },
        ]
    },
    {
        Id: "ms:brak-dzwieku",
        Type: "page",
        Content: `### Brak dźwięku
        
Powodów braku dźwięku w słuchawce może być kilka. Szukając usterki upewnij się, że:
- *Słychać szum w słuchawce* - Słuchawka powinna delikatnie szumieć po włożeniu baterii. Jeśli tego nie robi to najprawdopodobniej bateria nie została włożona lub wyczerpała się
- *Słuchawka nie jest zapchana* - Zanieczyszczenie słuchawki woskowiną spowoduje znaczne obniżenie głośności. Słuchawki nie da się samodzielnie wyczyścić, dlatego tak ważne jest dbanie o czystość ucha
- *Pętla indukcyjna jest na szyi* - Jej skuteczny zasięg pracy wynosi max 50cm
- *Pętla jest naładowana i włączona* - Jeśli nie miga żadna dioda oznacza to brak prądu
- *Pętla jest sparowana z telefonem* - Musisz mieć pewność, że pętla jest połączona za pomocą Bluetooth z Twoim telefonem
- *Trwa połączenie głosowe* - Upewnij się, że "ktoś jest na linii" i nie mówi szeptem
- *Głośność jest ustawiona na maksymalną* - Podczas prób warto zacząć od maksymalnej głośności, którą ustawia się w telefonie a czasem na pętli

Jeśli powyższe sprawdzenia nie przyniosły efektu:
- Przyłóż pętle bliżej ucha i włącz ją - powinien być słyszalny pisk. Jeśli go nie ma to najprawdopodobniej cewka pętli została uszkodzona i należy ją wymienić,
`,
        NextId: "kontakt"
    },
    {
        Id: "ms:niska-glosnosc",
        Type: "page",
        Content: `### Za cicho
        
Zbyt niska głośność może być oznaką:
- *Zbyt małej odległości pętli od słuchawki* - Pętla powinna być najdalej na szyi
- *Słaba bateria w słuchawce* - Spróbuj włożyć nową
- *Zapchana słuchawka* - Woskowina mogła zablokować wylot dźwięku
- *Ustawiona zbyt niska głośność* - Ustaw w telefonie maksymalną głośność rozmowy
`,
        NextId: "kontakt"
    },
    {
        Id: "ms:za-glosno",
        Type: "page",
        Content: `### Zbyt głośno
        
Wysoka głośność może być oznaką:
- *Zbyt małej odległości pętli od słuchawki* - Pętla powinna być na szyi
- *Ustawiona jest zbyt wysoka głośność* - Ustaw w telefonie mniejszą głośność rozmowy
`,
        NextId: "kontakt"
    },
    {
        Id: "ms:zaklocenia",
        Type: "page",
        Content: `### Zakłócenia
        
Zakłócenia w słuchawce w postaci buczenia bądź pisku mogą być oznaką przebywania w otoczeniu czegoś co te zakłócenia emituje (świetlówka, silnik elektryczny, silnik samochodu, silne pole magnetyczne itp). W takim wypadku warto zmienić otoczenie. Jeśli mimo to problemy nadal występują należy upewnić się, że:
- *Klapka baterii jest dobrze dokręcona* - Słabe dociśnięcie baterii może powodować trzaski
- *Bateria w słuchawce nie jest stara* - Słaba bateria może czasem objawiać się delikatnym piskiem`,
        NextId: "kontakt"
    },
    {
        Id: "ms:brak-polaczenia",
        Type: "page",
        Content: `### Brak połączenia
        
Może być spowodowany:
- *Nieudanym parowaniem pętli z telefonem* - Wykonaj procedure ponownie i upewnij się, że telefon "widzi" pętle
- *Nie wybraniem bluetooth na czas rozmowy* - Dzwoniąc upewnij się, że rozmowa jest przekierowana na bluetooth
- *Bycie poza zasięgiem bluetooth* - Efektywny zasięg bluetooth to kilka metrów. Nie odchodź za daleko od pętli`,
        NextId: "kontakt"
    },
    {
        Id: "ms:slychac",
        Type: "page",
        Content: `### Słuchawkę słychać na zewnątrz
        
Jeżeli Twojego rozmówcę słychać poza uchem, w którym jest słuchawka oznacza to, że:
- *Słuchawka jest za słabo włożona* - dociśnij ją mocniej, ma uszczelnić ucho tak by żadne dźwięki nie "przelatywały" ani w jedną ani w drugą stronę
- *Ścisz rozmowę* - użyj regulatora głośności w telefonie by obniżyć głośność. Jeśli ten nie działa - zmień telefon
- *Odsuń pętle od słuchawki* - odległość pętli od słuchawki ma duży wpływ na głośność
- *Poproś swojego rozmówcę by mówił ciszej* - siła głosu "po drugiej stronie" również ma znaczenie`,
        NextId: "kontakt"
    },
]
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
        Content: `Odkręć wieczko tak jak odkręca się butelkę.`,
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
Pętle należy umieścić na szyi zakładając ją przez głowę.  
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
Upewnij się, że ucho jest czyste.  
Załóż pętle na szyje i wybierz do kogoś numer. Sprawdź czy wszystko działa.

Każda pętla ma kilka dodatkowych funkcji:
- *podwójne naciśnięcie przycisku* - wybierze ostatni number,
- *dłuższe przytrzymanie* - rozłączenie rozmowy, 
- *krótkie naciśnięcie* - odebranie połączenia

Działanie powyższych funkcji należy sprawdzić eksperymentalnie, ponieważ każdy telefon może działać trochę inaczej.
`,
        NextId: "ms:important"
    },
    {
        Id: "ms:important",
        Type: "page",
        Content: `- *Pamiętaj by ładować pętle* - Stan naładowania jest sygnalizowany przez diodę.  
- *Nie nadwyrężaj pętli* - Nie rozciągaj jej i nie skręcaj. Jest zbudowana z cienkiego drutu, którego przerwanie spowoduje awarie zestawu.  
- *Pamiętaj by nie wychodzić poza zasięg pętli* - Pętla działa maksymalnie kilka metrów od telefonu. Miej telefon przy sobie.  
`,
        ImageUrl: "",
        NextId: "ms:ready"
    },
    {
        Id: "ms:ready",
        Type: "page",
        Content: `### Gotowe!

Masz już przygotowanie teoretyczne i praktyczne. Sprawdź wszystko dwa razy i przyzwyczaj ucho do słuchawki.  

*Pamiętaj by dokładnie czyścić ucho przed każdym włożeniem słuchawki!*

Jeśli masz z czymś problem - przejdź do następnego kroku
`,
        ImageUrl: "",
        NextId: "problem-ze-sluchawka"
    },
]

