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
- scrpt - scripting, czyli czas dzialania samego javascript : 7.9 (ms - zawsze milisekundy, wynik usrediony); 
-- +- 0.56 - odchylenie standardowe z probek; 1.00 - czas dzialania w odniesnieu do czasu vanillajs (w tym samym wierszu angular ma wartosc 6.31 - oznacza to, ze czas dzialania dla angulara, tj 49.9 jest 6.31 razy dluzysz niz dla vanillajs; vanillajs to zawsze odnosnik)
recalc- recalculate style - obliczanie styli (jedna z faz renderingu - kolor fioletowy)
layout - obliczanie rozmiarow i polozenia elementow html (kolejna z faz renderingu)
update - update layer tree - obliczanie tzw "warstw" (layers) (ostatnia z faz renderingu)
paint - tzw recording - przygotowywanie metod rysujacych komponenty html; tutaj nastepuje koniec formowania ramki 
frame - ramka, ca³kowity czas odswiezania strony, gdy zasz³a zmiana wymagajaca ponownego jej rysowania (sam proces rysowania zachodzi chyba poza czasem frame - tego dokladnie nie rozumiem; wyczytalem ze faza paint nie rysuje jeszcze strony a odpowiada za przygotowanie kodu ktory dopiero narysuje strone na nowo)

w drugim wierszu w kolumnie angularjs w komórce scrpt widnieje wartosc GC - oznacza to, ze by³ tutaj wywo³ywany garbage collector i zaja³ 20.53 ms, czas scrpt to natomiast czas javascript wraz z czasem GC


replace-benchmark-results.png - analogicznie

Dodatkowo aplikacja wyswietla podsumowania, tj srednie wyniki dla wszystkich operacji typu add, replace, update itd. Poza tym aplikacja prezentuje takze zajetosc pamieciowa przy kazdego z frameowrkow przy samym zalaodwaniu strony oraz dodaniu okreslonej liczby elementow. Wykresy i wyjasnienia dodam niedlugo.
