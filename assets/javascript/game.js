var YTS = {
    name: "Yellow Toothed Spider",
    health: 100,
    attack: 12
};

var WT = {
    name: "Wattley Turkey",
    health: 125,
    attack: 10
};

var BT = {
    name: "Beaver Teeth",
    health: 150,
    attack: 8
};

var SCC = {
    name: "Stuffy Cheeked Chipmunk",
    health: 175,
    attack: 6
};

$(document).ready(function() {

    $("#YTS").on("click", function () {
        
        charset = $("<img>").attr("src", "assets/images/Spider.jpg").addClass("char-select");
        $("#character").append(charset);
        
        
    });

});