//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {
    const upperArr = arr.map((element) => { return element.toUpperCase() });

    var wartosci = upperArr.map((element) => {
        switch (element) {
            case "NORTH": return (1); break;
            case "SOUTH": return (-1); break;
            case "EAST": return (2); break;
            case "WEST": return (-2); break;
            default: console.log("Wpisaleś zły kierunek!");
        }
    });

    function porownanie(wart) {
        let i = 0;
        wynik = wartosci;
        while (i <= wart.length - 1) {
            if (Math.abs(wart[i]) == Math.abs(wart[i + 1])) { wynik.splice(i, 2); i++; }
            else i = i + 2;
        }
        //wynik = wartosci;
    }
    porownanie(wartosci);
    porownanie(wynik);


    var koncowy = wartosci.map((element) => {
        switch (element) {
            case 1: return ("NORTH"); break;
            case -1: return ("SOUTH"); break;
            case 2: return ("EAST"); break;
            case -2: return ("WEST"); break;
            //default: ;
        }
    });
    console.log(koncowy);
}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);
