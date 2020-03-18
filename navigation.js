//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {

    arr.forEach((element) => String(element));
    arr.forEach((arr) => { arr.toUpperCase() });

    //arr.forEach((element) =>{if (element!="NORTH" || element!="NORTH" || element!="EAST" || element!="WEST") console.log("Wpisano zły kierunek!"; break)});

    /*
    var wartosci = arr.map((element) => {
        if (element == "NORTH") return (1);
        else if (element == "SOUTH") return (-1);
        else if (element == "EAST") return (2);
        else if (element == "WEST") return (-2);
        //mozna zmienic na switch tylko musze przeczytac jak

    });

    wartosci.sort();
    */

    let north = arr.filter(function (el) { return el == "NORTH" });
    let south = arr.filter(function (el) { return el == "SOUTH" });
    let east = arr.filter(function (el) { return el == "EAST" });
    let west = arr.filter(function (el) { return el == "WEST" });

    var wynik = [];
    /*
    if (north.length>0 && north.length% 2 == 0) wynik.splice(1,0,north[0]);
    else if (south.length>0 && south.length% 2 == 0) wynik.splice(1,0,south[0]);
    else if (east.length>0 && east.length% 2 == 0) wynik.splice(1,0,east[0]);
    else if (west.length>0 && west.length% 2 == 0) wynik.splice(1,0,west[0]);
    */
north=north.length;
south=-south.length;
east=east.length;
west=-west.length;

if (north+south>0 && (north+south)%2!=0) {wynik.splice(1,0,"NORTH");}
else if (north+south<0 && (north+south)%2!=0) {wynik.splice(1,0,"SOUTH");}

if (east+west>0 && (east+west)%2!=0) {wynik.splice(1,0,"EAST");}
else if (east+west<0 && (east+west)%2!=0) {wynik.splice(1,0,"WEST");}


    
    console.log(wynik);

}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);