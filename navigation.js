//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {


    arr.forEach((element) => { element.toUpperCase() });
    //arr.forEach((element) =>{if (element!="NORTH" || element!="NORTH" || element!="EAST" || element!="WEST") console.log("Wpisano zły kierunek!"; break)});
    var wartosci = arr.map((element) => {
        if (element == "NORTH") return (1);
        else if (element == "SOUTH") return (-1);
        else if (element == "EAST") return (2);
        else if (element == "WEST") return (-2);
        //else {console.log("Wpisano zły kierunek!"); break;}
    });

    var wynik = [];
    let l = 0;
    wartosci.forEach((i, array) => {

        if (arr[i] + array[i + 1] != 0) {
        wynik[l] = arr[i];
        l++;
        i=i+2;
        }

        else if ()
    });


    console.log(wynik);

}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);