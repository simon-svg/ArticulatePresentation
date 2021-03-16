function ExecuteScript(strId) {
    switch (strId) {
        case "6EKdgjZeH8j":
            Script1();
            break;
    }
}

function Script1() {
    var player = GetPlayer();
    player.SetVar("Txt11", "");
    player.SetVar("Txt22", "");
    player.SetVar("Txt33", "");
    player.SetVar("Txt44", "");
    player.SetVar("Txt55", "");
    player.SetVar("Txt66", "");
    player.SetVar("Txt77", "");
    player.SetVar("Txt88", "");
    player.SetVar("Txt99", "");
    player.SetVar("Txt1010", "");

    let allArr = [
        player.GetVar("Txt1"),
        player.GetVar("Txt2"),
        player.GetVar("Txt3"),
        player.GetVar("Txt4"),
        player.GetVar("Txt5"),
        player.GetVar("Txt6"),
        player.GetVar("Txt7"),
        player.GetVar("Txt8"),
        player.GetVar("Txt9"),
        player.GetVar("Txt10"),
    ];
    let trueArr = [];

    allArr.forEach((item) => {
        if (item) {
            trueArr.push(item);
        }
    })

    if (trueArr[0]) {
        player.SetVar("Txt11", trueArr[0]);
    }
    if (trueArr[1]) {
        player.SetVar("Txt22", trueArr[1]);
    }
    if (trueArr[2]) {
        player.SetVar("Txt33", trueArr[2]);
    }
    if (trueArr[3]) {
        player.SetVar("Txt44", trueArr[3]);
    }
    if (trueArr[4]) {
        player.SetVar("Txt55", trueArr[4]);
    }
    if (trueArr[5]) {
        player.SetVar("Txt66", trueArr[5]);
    }
    if (trueArr[6]) {
        player.SetVar("Txt77", trueArr[6]);
    }
    if (trueArr[7]) {
        player.SetVar("Txt88", trueArr[7]);
    }
    if (trueArr[8]) {
        player.SetVar("Txt99", trueArr[8]);
    }
    if (trueArr[9]) {
        player.SetVar("Txt1010", trueArr[9]);
    }
}

