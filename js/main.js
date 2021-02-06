function tria() {
    var numRandom = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(numRandom);
    switch (numRandom) {
        case 1:
            document.getElementById("partit").src = "../img/psc.png";
            break;
        case 2:
            document.getElementById("partit").src = "../img/esquerra.png";
            break; 
        case 3:
            document.getElementById("partit").src = "../img/junts.png";
            break;      
        case 4:
            document.getElementById("partit").src = "../img/ecp.png";
            break;
        case 5:
            document.getElementById("partit").src = "../img/cs.jpg";
            break;
        case 6:
            document.getElementById("partit").src = "../img/vox.png";
            break;
        case 7:
            document.getElementById("partit").src = "../img/CUP.svg";
            break;
        case 8:
            document.getElementById("partit").src = "../img/ppcat.png";
            break;
        case 9:
            document.getElementById("partit").src = "../img/pdecat.png";
            break;
        default:
            break;
    }
}