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
            { Label: "Słychać piszczenie", Icon: "🎺", GoTo: "ms:piszczenie" },
            { Label: "Brak połączenia", Icon: "🔗", GoTo: "ms:brak-polaczenia" },
        ]
    },
    {
        Id: "ms:piszczenie",
        Type: "page",
        Content: `### Piszczenie w słuchawce

Jeśli słuchawka piszczy to najprawdopodobniej dostała się do niej *wilgoć*.
W takiej sytuacji problem nie dotyczy pętli indukcyjnej.    
Pisk może być efektem *złego przechowywania słuchawki* lub *włożeniem jej do jeszcze mokrego ucha*. 
Intensywne pocenie może dać podobny efekt - *para wodna wydzielana przez skórę wnika w słuchawkę i powoduje zwarcie*. Dlatego tak ważne jest dokładne dosuszenie ucha przed włożeniem słuchawki.  

Jedynym wyjściem może być próba osuszenia wnętrza słuchawki. W domowych warunkach należy zostawić ją rozkręconą w suchym miejscu na kilka godzin. Nie traktować suszarką czy sprężonym powietrzem! To może spowodować jeszcze większe szkody.  

Pamiętaj by po każdym użyciu przetrzeć słuchawkę papierem toaletowym lub chusteczką. Nie należy stosować żadnej chemii.    

Jeśli mimo próby suszenia efekt nadal się pojawia - należy wymienić słuchawkę.
`,
        NextId: "kontakt"
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
- Przyłóż pętle bliżej ucha i włącz ją - powinien być słyszalny pisk. Jeśli go nie ma to najprawdopodobniej cewka pętli została uszkodzona i należy ją wymienić.
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
- *Zbyt małej odległości pętli od słuchawki* - Pętla powinna być na szyi, nie przy samym uchu
- *Ustawiona jest zbyt wysoka głośność* - Ustaw w telefonie mniejszą głośność rozmowy. Zdarza się, że telefon "zawiesi się" podczas regulacji głośności (i nie ma to związku z samym zestawem). Reset (wyłączenie i ponowne włączenie) całego telefonu może pomóc.
`,
        NextId: "kontakt"
    },
    {
        Id: "ms:zaklocenia",
        Type: "page",
        Content: `### Zakłócenia
        
Zakłócenia w słuchawce w postaci buczenia bądź pisku mogą być oznaką przebywania w otoczeniu czegoś co te zakłócenia emituje (świetlówka, silnik elektryczny, silnik samochodu, silne pole magnetyczne itp). W takim wypadku warto zmienić otoczenie. Jeśli mimo to problemy nadal występują należy upewnić się, że:
- *Klapka baterii jest dobrze dokręcona* - Słabe dociśnięcie baterii może powodować trzaski
- *Bateria w słuchawce nie jest stara* - Słaba bateria może czasem objawiać się delikatnym piskiem
- *Słuchawka jest sucha* - Nawet odrobina wody wewnątrz słuchawki może powodować zwarcie`,
        NextId: "kontakt"
    },
    {
        Id: "ms:brak-polaczenia",
        Type: "page",
        Content: `### Brak połączenia
        
Może być spowodowany:
- *Nieudanym parowaniem pętli z telefonem* - [Wykonaj procedure parowania](#slide/petla-indukcyjna) ponownie i upewnij się, że telefon "widzi" pętle,
- *Nie wybraniem bluetooth na czas rozmowy* - Dzwoniąc upewnij się, że rozmowa jest przekierowana na bluetooth,
- *Bycie poza zasięgiem bluetooth* - Efektywny zasięg bluetooth to kilka metrów. Nie odchodź za daleko od pętli,
- *Zakłóceniami w paśmie 2,4GHz* - Jeśli stoisz w pobliżu zagłuszarki Bluetooth to nic dziwnego, że pętla nie działa
- *Uszkodzeniem cewki* - W tym przypadku rozmowa będzie się odbywać, ale tylko Twój rozmówca będzie Cię słyszał. O ile pętla znajduje się na szyi to takie (nie) działanie oznacza najpewniej uszkodzenie cewki indukcyjnej. Nic nie da się z tym zrobić. Pętle należy wymienić. 
`,
        NextId: "kontakt"
    },
    {
        Id: "ms:slychac",
        Type: "page",
        Content: `### Słuchawkę słychać na zewnątrz
        
Jeżeli Twojego rozmówcę słychać poza uchem, w którym jest słuchawka oznacza to, że:  
- *Słuchawka jest za słabo włożona* - dociśnij ją mocniej, ma uszczelnić ucho tak by żadne dźwięki nie "przelatywały" ani w jedną ani w drugą stronę,
- *Ścisz rozmowę* - użyj regulatora głośności w telefonie by obniżyć głośność. Jeśli ten nie działa - zmień telefon,
- *Odsuń pętle od słuchawki* - odległość pętli od słuchawki ma duży wpływ na głośność,
- *Poproś swojego rozmówcę by mówił ciszej* - siła głosu "po drugiej stronie" również ma znaczenie`,
        NextId: "kontakt"
    },
]
export const msSlides = [
    {
        Id: "ms-start",
        Type: "page",
        Content: `### Uruchomienie mikrosłuchawki
        
⚠️ Przed przystąpieniem do uruchomienia mikrosłuchawki *wyczyść porządnie ucho*. Pamiętaj by czyścić je **przed każdym** włożeniem słuchawki!  
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

Zakręć i włóż słuchawkę do *czystego ucha* zwężeniem do środka (przezroczysta żyłka powinna być skierowana na zewnątrz).  
Powinien być słyszalny szum.  
Póki co nie dociskaj słuchawki. Postaraj się znaleźć punkt, w którym szum jest najgłośniejszy poprzez obracanie słuchawki i dopiero wtedy dociśnij ją w głąb kanału.
`,
        ImageUrl: "ms/bat.jpeg",
        NextId: "petla-indukcyjna"
    },
    {
        Id: "petla-indukcyjna",
        Type: "choose",
        Title: `### Pętla indukcyjna 
        
Pętla łączy telefon z mikrosłuchawką za pomocą indukcji magnetycznej generowanej w cewce (to ten długi czarny element w oplocie przypominający sznurek - należy się z nim obchodzić delikatnie ponieważ jest zbudowany z cienkiego drutu, który może pęknąć).   
Pętle należy umieścić *na szyi* zakładając ją przez głowę.  
Przed przystąpieniem do użytkowania należy ją sparować z telefonem.
        
*Jaką pętle posiadasz?*`,
        Options: [
            { Label: "Samsung", ImageUrl: "ms/samsung.jpeg", GoTo: "samsung" },
            { Label: "Jabra", ImageUrl: "ms/jabra.jpeg", GoTo: "jabra" },
            { Label: "Faceil", ImageUrl: "ms/btv4m.jpg", GoTo: "faceil" },
        ]
    },
    {
        Id: "jabra",
        Type: "page",
        Content: `Aby sparować Jabre z telefonem należy przytrzymać przycisk (ten podłużny odstający element) przez 5 sekund do momentu, w którym dioda znajdująca się w przycisku zacznie świecić *światłem ciągłym* (nie będzie migać) na niebiesko.  
        
W telefonie należy wejść w liste urządzeń bluetooth i odnaleźć \`Jabra\`, \`Talk 5\`, \`BT2045\` lub podobne na liście nowo odnalezionych urządzeń.`,
        ImageUrl: "ms/talk5.png",
        NextId: "petla-jabra-widok-na-liscie-urzadzen"
    },
    {
        Id: "faceil",
        Type: "page",
        Content: `Aby sparować pętle z telefonem należy przytrzymać przycisk (ten na przednim panelu) przez kilka sekund do momentu, w którym dioda znajdująca się na dole tego samego panelu przedniego zacznie migać na czerwono i niebiesko. W słuchawce będzie słyszalny komunikat *"Power on"*.  
        
W telefonie należy wejść w liste urządzeń bluetooth i odnaleźć na nim \`H08\`.`,
        ImageUrl: "ms/btv4.jpg",
        NextId: "petla-h08-widok-na-liscie-urzadzen"
    },
    {
        Id: "samsung",
        Type: "page",
        Content: `### Parowanie z telefonem
        
Aby sparować pętle Samsung z telefonem należy przesunąć suwak z boku obudowy a następnie przytrzymać okrągły przycisk na przednim panelu przez 5 sekund do momentu, w którym dioda znajdująca się obok włącznika zacznie *migać na dwa kolory*.
        
W telefonie należy wejść w liste urządzeń bluetooth i odnaleźć \`Samsung\` lub podobne na liście nowo odnalezionych urządzeń.`,
        ImageUrl: "ms/sams.png",
        NextId: "petla-samsung-widok-na-liscie-urzadzen"
    },
    {
        Id: "petla-jabra-widok-na-liscie-urzadzen",
        Type: "page",
        Content: `Po sparowaniu urządzenie powinno pokazać się na liście`,
        ImageUrl: "ms/talk5onlist.png",
        NextId: "petla-jabra-ladowanie"
    },
    {
        Id: "petla-jabra-ladowanie",
        Type: "page",
        Content: `### Ładowanie pętli

Pętle można naładować za pomocą kabla **micro-USB**.
        
Stan ładowania sygnalizowany jest przez diodę znajdującą się na przednim panelu modułu bluetooth, gdzie:  
🔵 **dioda niebieska** - oznacza proces ładowania,  
⚪ **brak świecenia** - oznacza naładowanie  

Po podłączeniu pętli do ładowarki należy bezwzględnie upewnić się, że dioda zapaliła się na niebiesko chociaż na chwilę!  
Brak zaświecenia się diody może oznaczać, że na kablu zasilającym nie ma prądu. Jeśli tak się dzieje należy upewnić się, że ładowarka działa.
        `,
        NextId: "call"
    },
    {
        Id: "petla-h08-widok-na-liscie-urzadzen",
        Type: "page",
        Content: `Po sparowaniu urządzenie powinno pokazać się na liście jako \`H08\``,
        ImageUrl: "ms/h08onlist.jpg",
        NextId: "h08-ladowanie"
    },
    {
        Id: "h08-ladowanie",
        Type: "page",
        Content: `### Ładowanie pętli
        
Pętle należy podłączyć do ładowarki za pomocą kabla **USB-C**.

Stan ładowania sygnalizowany jest przez diodę znajdującą się na przednim panelu urządzenia:  
🔴 **dioda czerwona** - oznacza trwające ładowanie,    
⚪ **dioda nie świeci** - pętla jest już naładowana

**Czas ładowania** wynosi około 3-4 godzin.

#### Odczyt stanu naładowania

Stopień naładowania pętli można sprawdzić w momencie jej użytkowania klikając dwa razy przycisk do zmniejszenia głośności. Stan będzie widoczny na 4 niebieskich diodach znajdujących się na przednim panelu:  
- 4 diody = 100%
- 3 = 75%
- 2 = 50%
- 1 = 25%
`,
        NextId: "call"
    },
    {
        Id: "petla-samsung-widok-na-liscie-urzadzen",
        Type: "page",
        Content: `Po sparowaniu urządzenie powinno pokazać się na liście.`,
        ImageUrl: "ms/samsonlist.png",
        NextId: "petla-samsung-ladowanie"
    },
    {
        Id: "petla-samsung-ladowanie",
        Type: "page",
        Content: `### Ładowanie
        
Stan ładowania widoczny jest na bocznym panelu urządzenia i sygnalizowany jest przez kolor diody:  
🔴 **czerwony** - oznacza, że ładowanie jest w toku,  
🔵 **niebieski** - oznacza, że pętla jest w pełni naładowana

**Czas ładowania** wynosi około 2 godzin.
`,
        NextId: "call"
    },
    {
        Id: "call",
        Type: "page",
        Content: `**Gotowe!**
        
Od teraz możesz wykonywać połączenia z użyciem mikrosłuchawki.  
Upewnij się, że *ucho jest czyste*, zanim włożysz do niego słuchawkę!  
Załóż pętle na szyje i wybierz do kogoś numer. Sprawdź czy wszystko działa.

Każda pętla ma kilka dodatkowych funkcji:
- *podwójne naciśnięcie przycisku* - wybierze ostatni numer,
- *dłuższe przytrzymanie* - rozłączenie rozmowy lub wyłączenie pętli, 
- *krótkie naciśnięcie* - odebranie połączenia jeśli ktoś dzwoni

Działanie powyższych funkcji należy sprawdzić eksperymentalnie, ponieważ każdy telefon może działać trochę inaczej.

Uwaga!  
Pętla musi znajdować się **na szyi**. Nie będzie działać z kieszeni czy plecaka. Jej zasięg jest bardzo ograniczony i wynosi około 20-30cm.  
Telefon może znajdować się w odległości do 10m metrów od pętli, ale zalecamy mieć go przy sobie.
`,
        NextId: "mikrosluchawka-wazne-kwestie"
    },
    {
        Id: "mikrosluchawka-wazne-kwestie",
        Type: "page",
        Content: `Inne ważne kwestie: 
- *Pamiętaj by naładować pętle* - pętla wymaga ładowania przed każdym użyciem,  
- *Nie nadwyrężaj pętli* - nie rozciągaj jej i nie skręcaj. Jest zbudowana z cienkiego drutu, którego przerwanie spowoduje nieodwracalną awarię zestawu,  
- *Pamiętaj by nie wychodzić poza zasięg pętli* - pętla działa maksymalnie kilka metrów od telefonu. Miej telefon zawsze przy sobie,  
- *W pętli znajduje się mikrofon* - najlepiej mieć go z przodu na klatce piersiowej
- *Wykonaj kilka próbnych połączeń* - zadzwoń do kogoś i zobacz jak reaguje Twój telefon. Niech ktoś zadzwoni do Ciebie. Niech ktoś zadzwoni do Ciebie w trakcie kiedy masz już trwające połączenie. Wykonuj różne próby po to aby nic Cię nie zaskoczyło w trakcie docelowej pracy,
- *Pętle można przykleić do ciała* - ale zwykle nie ma takiej potrzeby. Lepiej nie ryzykować zerwania cewki poprzez zbędne naprężenia spowodowane taśmą, ale jeśli pętla gdzieś wystaje to warto ją "przyłapać" plasterkiem medycznym,
- *Wykonaj test zerwania połączenia* - i zobacz jak reaguje Twój telefon. Wyjdź z zasięgu pętli (zostaw telefon w innym pomieszczeniu i oddal się od niego na tyle by stracić połączenie bluetooth). Upewnij się, że Twój telefon nie przerzuca rozmowy na głośnik. Jeśli tak robi to rozwiązaniem może być wpięcie zwykłych przewodowych słuchawek.
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

