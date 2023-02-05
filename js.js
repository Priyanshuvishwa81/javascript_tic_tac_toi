var user = false;
let arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let arr2 = [];
let popup = (user) => {
    var pop = document.getElementById("popup").style.display = "block";
    if(user == true){
        document.getElementById("XandO").innerText = "X";
        document.getElementById("para").innerText = "won the match  ";
    }
    else if(user == false){
        document.getElementById("XandO").innerText = "O";
        document.getElementById("para").innerText = "won the match ";
    }
    else{
        document.getElementById("XandO").innerText = "X/O";
        document.getElementById("para").innerText = "match draw ";
    }

}
let reset_game = () => {
    var pop = document.getElementById("popup").style.display = "none";

    setTimeout(clear_me, 1000);
}
checking = () => {
    for (let i = 0; i <= arr.length - 1; i++) {
        arr2[i] = document.getElementById(arr[i]).innerText;

    }
}

clear_me = () => {
    for (let i = 0; i <= arr.length - 1; i++) {
        document.getElementById(arr[i]).innerText = "";
        let local_var = document.getElementById(arr[i]);
        local_var.setAttribute("onclick", "insert_data(id)");
    }
}
let insert_data = (value) => {
    var val = "X";



    if (user == false) {

        document.getElementById(value).innerText = "X";
        var m = document.getElementById(value);
        m.removeAttribute("onclick");
        user = true;
        checking();

    }

    else {

        document.getElementById(value).innerText = "O";
        var m = document.getElementById(value);
        m.removeAttribute("onclick");
        user = false;
        checking();


    }




    // console.log(arr2[i]);

    // vertical

    if (arr2[0] != "" && arr2[1] != "" && arr2[2] != "" && arr2[0] == arr2[1] && arr2[1] == arr2[2] && arr2[2] == arr2[0]) {
        
        popup(user);

    }
    else if (arr2[3] != "" && arr2[4] != "" && arr2[5] != "" && arr2[3] == arr2[4] && arr2[4] == arr2[5] && arr2[5] == arr2[3]) {
        popup(user);

    }
    else if (arr2[6] != "" && arr2[7] != "" && arr2[8] != "" && arr2[6] == arr2[7] && arr2[7] == arr2[8] && arr2[8] == arr2[6]) {
        popup(user);

    }

    // horizontal


    else if (arr2[0] != "" && arr2[3] != "" && arr2[6] != "" && arr2[0] == arr2[3] && arr2[3] == arr2[6] && arr2[6] == arr2[0]) {
        popup(user);

    }
    else if (arr2[1] != "" && arr2[4] != "" && arr2[7] != "" && arr2[1] == arr2[4] && arr2[4] == arr2[7] && arr2[7] == arr2[1]) {
        popup(user);

    }
    else if (arr2[2] != "" && arr2[5] != "" && arr2[8] != "" && arr2[2] == arr2[5] && arr2[5] == arr2[8] && arr2[8] == arr2[2]) {
        popup(user);

    }

    else if (arr2[0] != "" && arr2[4] != "" && arr2[8] != "" && arr2[0] == arr2[4] && arr2[4] == arr2[8] && arr2[8] == arr2[0]) {
        popup(user);

    }
    else if (arr2[2] != "" && arr2[4] != "" && arr2[6] != "" && arr2[2] == arr2[4] && arr2[4] == arr2[6] && arr2[6] == arr2[2]) {
        popup(user);

    }
    else if (arr2[0] != "" && arr2[1] != "" && arr2[2] != "" && arr2[3] != "" && arr2[4] != "" && arr2[5] != "" && arr2[6] != "" && arr2[7] != "" && arr2[7] != "") {
        popup("draw");

    }


}
