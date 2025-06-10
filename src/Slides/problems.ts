export const cameraProblems = [
    {
        Id: "kamera:brak-obrazu",
        Type: "page",
        Content: `### Brak obrazu 

Jeżeli po zalogowaniu się na stronie nie widzisz podglądu z kamery sprawdź:
- *Czy obiektyw nie jest zasłonięty?* - odsłoń go,
- *Czy transmisja jest włączona?* - w prawym górnym rogu jest wybierak rozdzielczości, sprawdź czy nie jest w pozycji \`Nadawanie wstrzymane\`. Pod ramką podglądu znajduje się czerwony guzik \`Przywróć nadawanie\`. Kliknij go aby kamera zaczęła pracować.

Obserwuj diodę na kamerze. Jeśli zaczęła migać na czerwono oznacza to problem z hotspotem. Sprawdź czy ten na pewno działa.
`,
        NextId: "kontakt"
    },
    {
        Id: "kamera:niewyrazny-obraz",
        Type: "page",
        Content: `### Rozmazany obraz
        
Rozmazany obraz może oznaczać tylko jedno: obiektyw kamery został przestawiony. Kamera ma stałą ogniskową i można ją zmieniać obracając guziczkiem. Trzymając kamerę 30-40cm od kartki, kręć powoli guzikiem tak by tekst stał się dobrze widoczny. Rób to ostrożnie ponieważ to delikatny element. Staraj się nie wykręcić guzika zupełnie jak i nie wkręcić go za mocno. Zalecamy ruchy po 2-3mm.

### Obraz rozmazany częściowo

Jeśli dobrze widoczna jest tylko część kartki a reszta jest rozmazana oznacza to, że guzik-soczewka nie jest ustawiony równolegle do matrycy kamery. To bardzo niebezpieczna sytuacja, która może oznaczać uszkodzenie gwintu, w którym jest osadzony obiektyw. Rozwiązaniem problemu jest wypoziomowanie guzika względem matrycy. Można spróbować wykręcić guzik zupełnie i wkręcić go na nowo dbając o zachowanie równoległości elementów.
 

Zwróć również uwagę na to by podczas montażu w odzieży guzik nie obrócił się samoistnie.
`,
        NextId: "kontakt"
    },
    {
        Id: "kamera:powolna-transmisja",
        Type: "page",
        Content: `### Powolna transmisja
        
Kamera wysyła zdjęcia co maksymalnie 2-3 sekundy. Nie da się szybciej. Taka forma transmisji gwarantuje te samą jakość zdjęć za każdym razem niezależnie od jakości połączenia z internetem.  
Jeśli natomiast czas przesłania zdjęcia przekracza 5 sekund może to oznaczać, że:
- *Hotspot jeszcze się rozgrzewa* - dotyczy to głównie iPhone'ów które często na początku działają wolniej,
- *Internet działa zbyt wolno* - i może to zależeć od miejsca, w którym jesteś, 
- *Internet kończy się* - sprawdź czy masz wystarczającą ilość pakietów danych,
- *Kiepski zasięg danego operatora* - być może inny operator będzie miał lepszy zasięg w tym miejscu,
- *Operator ogranicza internet na czas rozmowy* - niektórzy operatorzy ograniczają transmisje danych podczas rozmowy telefonicznej. Rozłącz sie i sprawdź jak zareaguje kamera,
- *Ustawiona jest zbyt duża rozdzielczość* - i ważące dużo zdjęcia potrzebują więcej czasu na przesłanie, ich rozdzielczość można zmienić wybierakiem w prawym górnym rogu aplikacji do podglądu,
`,
        NextId: "kontakt"
    },
    {
        Id: "kamera:mala-rozdzielczosc",
        Type: "page",
        Content: `### Za mała rozdzielczość
        
Rozdzielczość zdjęć można ustawić wybierakiem w prawym górnym rogu aplikacji.

Im większe jest zdjęcie - tym dłużej będzie przesyłane.  

Jeśli mimo zwiększenia rozdzielczości obraz nadal jest niewyraźny - oznacza to problem z ostrością kamery (opisany w rozdziale "Niewyraźny obraz" w menu wyżej).

`,
        NextId: "kontakt"
    },
    {
        Id: "kamera:podczas-rozmowy",
        Type: "page",
        Content: `### Kamera nie nadaje podczas rozmowy telefonicznej
        
Ten problem jest związany z operatorem Twojej sieci, który nie udostępnia łącza internetowego podczas rozmowy telefonicznej (tak jakby zakładali, że skoro człowiek rozmawia to nie korzysta z internetu...).  
W tej sytuacji jedyne co można zrobić to:
- *Udać się do swojego operatora i poprosić o włączenie internetu na czas rozmów* - Czasem się to udaje, ale procedura trwa,
- *Kupić starter innego operatora* - Nowy starter kosztuje kilka złotych i zwykle ma włączone wszystkie dostępne opcje,
- *Użyć drugiego telefonu do połączeń* - Cały zestaw można skonfigurować tak by działał z dwoma telefonami: jeden do internetu dla kamery, drugi do połączeń głosowych,
- *Użyć aplikacji do połączeń głosowych zamiast połączenia GSM* - Rozmowę można prowadzić przez Messengera lub inny komunikator, który wykorzystuje do połączeń internet a nie sieć GSM.

`,
        NextId: "kontakt"
    },
]