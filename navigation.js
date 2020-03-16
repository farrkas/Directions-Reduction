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
    wartosci.forEach((element, i) => { if (element[i] == -element[i + 1] ) arr[i]=""; arr[i+1]="" });
    console.log(arr);

}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);