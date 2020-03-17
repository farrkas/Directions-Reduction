//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {

    arr.forEach((element)=>String(element));
    arr.forEach((arr) => { arr.toUpperCase() });
    //arr.forEach((element) =>{if (element!="NORTH" || element!="NORTH" || element!="EAST" || element!="WEST") console.log("Wpisano zły kierunek!"; break)});
    var wartosci = arr.map((element) => {
        if (element == "NORTH") return (1);
        else if (element == "SOUTH") return (-1);
        else if (element == "EAST") return (2);
        else if (element == "WEST") return (-2);
        //mozna zmienic na switch tylko musze przeczytac jak


    });
    wartosci.sort();



    console.log(wartosci);

}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);