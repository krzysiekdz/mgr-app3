Mgr-App3
================

[powrót do strony głównej](https://github.com/krzysiekdz/mgr-main) <br>

Aplikacja w formie strony internetowej (angularjs) prezentującej wyniki w zestawieniu tabelarycznym uzyskane w rezultacie dzialania app1 i app2. Przetwarzany jest plik results.json. Jest to wynik końcowy działania calego projektu.



Fragment tabeli reprezentujacej wyniki badań dla frameworka angular1 oraz vanillajs. Kazdy wiersz to pewna metoda testowa, widoczne kolejno: 
- add_500 - dodanie 500 elementow, 
- add_1k - 1tys,
- add_2k-  2tys,
- add_500f_500 - dodanie 500 na poczatku (500f - "first") przy istniejaych 500 elementach 
- add_500f_2k - 500 na poczatek przy 2tys
- add_500f_1k - 500 na poczatek przy 1tys 
- add_500m_1k - 500 w srodek (500m- "middle") przy 1tys 
- add500L_1k - 500 na koniec (500L - "Last") przy 1tys 
![](http://i.imgur.com/Ty3pF0G.png)


Przykładowe odczyty dla add500 dla vanillajs: 
- scrpt - scripting, czyli czas dzialania samego javascript : 7.9 (ms - zawsze milisekundy, wynik usredniony); 
	- +- 0.56 - odchylenie standardowe z probek; 
	- 1.00 - czas dzialania w odniesnieu do czasu vanillajs (w tym samym wierszu angular ma wartosc 6.31 - oznacza to, ze czas dzialania dla angulara, tj 49.9ms jest 6.31 razy dluższy niz dla vanillajs; vanillajs to zawsze odnosnik)
- recalc- recalculate style - obliczanie styli (jedna z faz renderingu - kolor fioletowy)
- layout - obliczanie rozmiarow i polozenia elementow html (kolejna z faz renderingu)
- update - update layer tree - obliczanie tzw "warstw" (layers) (ostatnia z faz renderingu)
- paint - tzw recording - przygotowywanie metod rysujacych komponenty html; tutaj nastepuje koniec formowania ramki 
- frame - ramka, całkowity czas odswiezania strony, gdy zaszła zmiana wymagajaca ponownego jej rysowania (sam proces rysowania zachodzi chyba poza czasem frame - tego dokladnie nie rozumiem :) , wyczytalem ze faza paint nie rysuje jeszcze strony a odpowiada za przygotowanie kodu ktory dopiero narysuje strone na nowo)
- GC - w drugim wierszu w kolumnie angularjs w komórce scrpt widnieje wartosc GC - oznacza to, ze był tutaj wywoływany garbage collector i zajał 20.53 ms. Czas scrpt jest podawany zawsze jako suma, czyli wraz z czasem GC (o ile istnieje).


Fragment tabeli z wynikami dla testu typu "replace".
![](http://i.imgur.com/e4S7sfs.png)


Dodatkowo aplikacja prezentuje:
- podsumowania, tj srednie wyniki dla wszystkich operacji typu add, replace, update itd. 
- zużycie pamięci przy starcie aplikacji oraz dodaniu okreslonej liczby elementow. Tabele i wyjasnienia dodam wkrótce.
