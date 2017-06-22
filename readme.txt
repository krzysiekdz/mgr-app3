katalog nadrzêdny (mgr-main) : https://github.com/krzysiekdz/mgr-main

Aplikacja w formie strony internetowej (angularjs) prezentuj¹cej wyniki w zestawieniu tabelarycznym uzyskane 
w rezultacie dzialania app1 i app2. Przetwarzany jest plik results.json. Jest to rezultat dzia³ania calego projektu.

w folderze screens przykladowe zrzuty z aplikacji (folder pobrac w celu analizy)
aby zapoznac siê z nazewnictwem metod testowych przeczytaj: 
https://github.com/krzysiekdz/mgr-test-app-prototype

add-benchmark-results.png 
Fragment tabeli reprezentujacej wyniki badañ dla frameworka angular1 oraz vanillajs. Kazdy wiersz to pewna metoda testowa, widoczne kolejno: 
add_500 - dodanie 500 elementow, 
add_1k - 1tys,
add_2k-  2tys,
add_500f_500 - dodanie 500 na poczatku (500f - "first") przy istniejaych 500 elementach 
add_500f_2k - 500 na poczatek przy 2tys
add_500f_1k - 500 na poczatek przy 1tys 
add_500m_1k - 500 w srodek (500m- "middle") przy 1tys 
add500L_1k - 500 na koniec (500L - "Last") przy 1tys 

przykladowe odczyty dla add500 dla vanillajs: 
scrpt - scripting czyli czas dzialania samego javascript : 7.9 (ms - zawsze milisekundy, wynik usrediony); +- 0.56 - odchylenie standardowe z probek; 1.00 - czas dzialania w odniesnieu do czasu vanillajs (w tym samym wierszu angular ma wartosc 6.31 - oznacza to, ze czas dzialania dla angulara, tj 49.9 jest 6.31 razy dluzysz niz dla vanillajs; vanillajs to zawsze odnosnik)
recalc- recalculate style - obliczanie styli (jedna z faz renderingu - kolor fioletowy)
layout - obliczanie rozmiarow i polozenia elementow html (kolejna z faz renderingu)
update - update layer tree - obliczanie tzw "warstw" (layers) (ostatnia z faz renderingu)
paint - tzw recording - przygotowywanie metod rysujacych komponenty html; tutaj nastepuje koniec formowania ramki 
frame - ramka, ca³kowity czas odswiezania strony, gdy zasz³a zmiana wymagajaca ponownego jej rysowania (sam proces rysowania zachodzi chyba poza czasem frame - tego dokladnie nie rozumiem; wyczytalem ze faza paint nie rysuje jeszcze strony a odpowiada za przygotowanie kodu ktory dopiero narysuje strone na nowo)


replace-benchmark-results.png - analogicznie
