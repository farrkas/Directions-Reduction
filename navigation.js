//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {


    const upperArr = arr.map((element) => { return element.toUpperCase() });
    //arr.forEach((element) =>{if (element!="NORTH" || element!="NORTH" || element!="EAST" || element!="WEST") console.log("Wpisano zły kierunek!"; break)});

    var wartosci = upperArr.map((element) => {
        switch (element) {


            case "NORTH": return (1); break;
            case "SOUTH": return (-1); break;
            case "EAST": return (2); break;
            case "WEST": return (-2); break;
            default: console.log("Wpisaleś zły kierunek!");
        }
    });
    //function porownanie(porownane) {
    //return this;
    var wynik = wartosci.map((el, i, array) => {
        if (Math.abs(el) != Math.abs(array[i + 1])) return el; i + 2;


    });

    //}
    //wartosci.porownanie();


    console.log(wynik);

}
dirReduc(["North", "South", "South", "East", "West", "North", "West"]);