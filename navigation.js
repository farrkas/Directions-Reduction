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

    var zmienione = [];
    let i = 0;
    let l = 0;
    do {
        if (wartosci[i] == -wartosci[i + 1]) {

            i = i + 2;
        }
        else {
            zmienione[l] = arr[i];
            i++;
            l++;
        }
    } while (i <= arr.lenght + 1);
    console.log(zmienione);

}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);