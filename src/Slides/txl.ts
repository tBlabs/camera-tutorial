
export const txl = [
    {
        Id: "kamera-niewykrywalna",
        Type: "page",
        Content: `### Kamera "niewykrywalna"
    
Niewykrywalność kamery polega na tym, że jest częściowo "niewidoczna" dla skanerów metali. *Nie oznacza to jednak, że jest całkowicie niewykrywalna! Wszelkie detektory fal radiowych jak i zaawansowane wykrywacze metali nadal są ją w stanie zauważyć!*

Siła tej konstrukcji polega na tym, że typowy ręczny detektor metali (typu Garrett) nie zapiszczy nawet przy ocieraninu się nim o sam obiektyw i przewód łączący kamerę z modułem komunikacyjnym. W prayktyce oznacza to, że pierwsze 25cm kamery nie jest widoczne.  
Aby nie zostać przyłapanym należy odpowiednio ukryć na sobie cały zestaw. Elektronike kamery trzeba schować pod pachę lub w spodnie (o ile wystarczy kabla). W te miejsca nikt nie będzie nam wciskał wykrywacza. Typowy detektor jest w stanie "złapać" metal z odległości około 2,5-4cm.

Brak metalu w konstrukcji sprawia iż ta jest niezwykle delikatna. Prosimy obchodzić się z kamerą możliwie jak najostrożniej: unikać skręcania i rozciągania taśmy na której umieszczona jest kamera. Szczególną uwagę należy zachować podczas montażu kamery w odzieży. Warto unikać przeciskania obiektywu "na siłę". Lepiej poświęcić koszulę: na przykład nacinając materiał aniżeli siłować się z obiektywem i go złamać.

Umiejscownie kamery pod pachą oznacza, że obraz będzie odwrócony o 90 stopni w lewo lub prawo (zależnie od strony ciała).  
W wygodniejszej pracy może pomóc odpowiednie ustawienie parametrów kamery w aplikacji odbiorczej. Z ustawień po prawej nad oknem podglądu wybieramy "Ustawienia własne", a następnie za pomocą ostatniego parametru \`Obrót\` wybieramy 90 lub 270 stopni.

--- 

W następnym kroku uruchomimy kamere...
    `,
        NextId: "kamera-niewykrywalna-wlaczanie"
    },
    {
        Id: "kamera-niewykrywalna-wlaczanie",
        Type: "page",
        Content: `### Włączanie kamery "niewykrywalnej"
    
*Uwaga:Urządzenia z tej serii są wciąż prototypami, stąd tak wiele wersji włączników i wskaźników baterii.*

Kamery z tej serii posiadają wbudowaną baterie, która powinna wystarczyć na 3-4 godziny pracy.  


**Wersja z czerwonym przyciskiem**

Kamerę uruchamia się jednokrotnym naciśnięciem czerwonego przycisku przy porcie ładowania USB-C.  
Dwukrotne naciśnięcie powoduje wyłączenie kamery.

**Wersja z przełącznikiem suwakowym**

Kamerę uruchamia się przełączeniem suwakowego przełącznika w pozycję do środka konstrukcji (w stronę portu USB-C).  
Pozycja odwrotna powoduje wyłączenie kamery.

#### Pomiar stanu baterii

Różne kamery mają różne systemy oznaczeń stanu baterii.  
Wersja z czterema diodami pokazują stan baterii w następujący sposób:
- 1 dioda - 25% baterii,
- 2 diody - 50% baterii,
- 3 diody - 75% baterii,
- 4 diody - 100% baterii.  

Wersja z niebieską diodą:
- 1 mignięcie - 25% baterii,
- 2 mignięcia - 50% baterii,
- 3 mignięcia - 75% baterii,
- 4 mignięcia - 100% baterii.  

#### Ładowanie

Kamerę należy ładować za pomocą dowolnego kabla USB-C z dołączonej ładowarki lub innej. Nie ma to większego znaczenia.  
Jeśli kamera uruchomi się podczas ładowania i będzie nadawać nie należy nic robić.  
Kamery z włącznikiem suwakowym lepiej ładować w stanie wyłączonym.

---

W kolejnym kroku sparujemy kamerę z telefonem...
    `,
        NextId: "choose-phone"
    },
];
