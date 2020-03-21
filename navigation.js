//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {
    const upperArr = arr.map((element) => { return element.toUpperCase() });

    var wartosci = upperArr.map((element) => {
        switch (element) {
            case "NORTH": return (1); break;
            case "SOUTH": return (-1); break;
            case "EAST": return (2); break;
            case "WEST": return (-2); break;
            default: console.log("Wpisaleś zły kierunek!"); return 0;
        }
    });

    function porownanie(wart) {
        let i = 0;
        wynik = wartosci;
        while (i <= wart.length - 1) {
            if ((wart[i]) == (wart[i + 1])) i++;
            else if (Math.abs(wart[i]) == Math.abs(wart[i + 1])) { wynik.splice(i, 2); i = i + 2; }
            else i++;
        }
        //wynik = wartosci;
    }
    porownanie(wartosci);


    for (let i = 1; i <= wynik.length; i++) { porownanie(wynik); }


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
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); //"WEST"
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]); //"NORTH", "WEST", "SOUTH", "EAST"
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]); //[]
dirReduc(['NORTH', 'SOUTH', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'SOUTH', 'WEST', 'EAST', 'WEST', 'SOUTH', 'NORTH', 'WEST', 'EAST']); // 'SOUTH', 'WEST'
dirReduc(['WEST', 'EAST', 'SOUTH', 'NORTH', 'NORTH', 'NORTH', 'NORTH', 'WEST', 'EAST', 'SOUTH', 'NORTH']); //'NORTH', 'NORTH', 'NORTH'
