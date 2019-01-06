//Creation of Objects for Fighting Game
var YTS = {
    name: "Yellow Toothed Spider",
    health: 100,
    attack: 18
};

var WT = {
    name: "Wattley Turkey",
    health: 125,
    attack: 14
};

var BT = {
    name: "Beaver Teeth",
    health: 150,
    attack: 12
};

var SCC = {
    name: "Stuffy Cheeked Chipmunk",
    health: 175,
    attack: 10
};

var currentHealth;
var currentAttack = 0;
var enemyHealth;
var startingAttack;
var opponentsRemaining = 3;

//Game functions
//UI after character has been selected
hideCharacters = function() {
    $("#YTS").hide();
    $("#WT").hide();
    $("#BT").hide();
    $("#SCC").hide();
    $("#char-selector").hide();
    $("#opp-selector").show();       
} 

game = function() {
    //Enemy Selection
    opponent1.on("click", function () {
        enemySelected = opponent1.addClass("enemy-selected")
        $("#opponent").append(enemySelected)
        $("#battle").show() 
        $("#enemy-health").text("Enemy Health: " + opponent1Health);
        enemyHealth = opponent1Health;        
    });

    opponent2.on("click", function () {
        enemySelected = opponent2.addClass("enemy-selected")
        $("#opponent").append(enemySelected)
        $("#battle").show() 
        $("#enemy-health").text("Enemy Health: " + opponent2Health);
        enemyHealth = opponent2Health;        
    });

    opponent3.on("click", function () {
        enemySelected = opponent3.addClass("enemy-selected")
        $("#opponent").append(enemySelected)
        $("#battle").show() 
        $("#enemy-health").text("Enemy Health: " + opponent3Health);
        enemyHealth = opponent3Health;        
    }); 
}

//Fight Button Function
fight = function() {
    //Character & Enemy Hitpoints are reduced
    currentAttack = currentAttack + startingAttack;
    currentHealth = currentHealth - 15;
    $("#hero-health").text("Current Health: " + currentHealth);
    enemyHealth = enemyHealth - currentAttack;
    $("#enemy-health").text("Enemy Health: " + enemyHealth);

    //Gameover conditions
    if (currentHealth <= 0) {
        $("#win-loss").show();
        $("#win-loss").text("You lost! Refresh the page to try a new fighter!")
    } else if (enemyHealth <= 0) {
        $("#win-loss").show();
        $("#win-loss").text("Enemy Defeated! Select your next opponent!")
        opponentsRemaining--;
        $("#enemy-health").text("Enemy Health: ")
        enemySelected.hide();
    } 
    
    if (opponentsRemaining === 0) {
        $("#win-loss").show();
        $("#win-loss").text("You Won!")
    }
}

// On page load.
$(document).ready(function() {
    $("#opp-selector").hide();
    $("#battle").hide();
    $("#win-loss").hide();


    //Player selects a character, character selection is removed, and opponents are generated. Fight!
    $("#YTS").on("click", function () {
        //UI update
        hideCharacters();
        //Player's is selected character
        charset = $("<img>").attr("src", "assets/images/Spider.jpg").addClass("char-select");
        $("#character").append(charset);
        currentHealth = YTS.health;
        startingAttack = YTS.attack;
        $("#hero-damage").append(currentAttack);
        $("#hero-health").append(currentHealth);



        //Enemies are generated and Hitpoint pools are set
        opponent1 = $("<img>").attr("src", "assets/images/Turkey.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent1);
        opponent1Health = WT.health;

        opponent2 = $("<img>").attr("src", "assets/images/Beaver.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent2);
        opponent2Health = BT.health;

        opponent3 = $("<img>").attr("src", "assets/images/Chipmunk.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent3);
        opponent3Health = SCC.health;
        
        //Enable opponent selection
        game();
 
    });

    $("#WT").on("click", function () {
        
        hideCharacters();
        charset = $("<img>").attr("src", "assets/images/Turkey.jpg").addClass("char-select");
        $("#character").append(charset);
        currentHealth = WT.health;
        startingAttack = WT.attack;
        $("#hero-damage").append(currentAttack);
        $("#hero-health").append(currentHealth);

        opponent1 = $("<img>").attr("src", "assets/images/Spider.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent1);
        opponent1Health = YTS.health;

        opponent2 = $("<img>").attr("src", "assets/images/Beaver.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent2);
        opponent2Health = BT.health;

        opponent3 = $("<img>").attr("src", "assets/images/Chipmunk.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent3);
        opponent3Health = SCC.health;

        game();

    });

    $("#BT").on("click", function () {
        
        hideCharacters();
        charset = $("<img>").attr("src", "assets/images/Beaver.jpg").addClass("char-select");
        $("#character").append(charset);
        currentHealth = BT.health;
        startingAttack = BT.attack;
        $("#hero-damage").append(currentAttack);
        $("#hero-health").append(currentHealth);

        opponent1 = $("<img>").attr("src", "assets/images/Spider.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent1);
        opponent1Health = YTS.health;

        opponent2 = $("<img>").attr("src", "assets/images/Turkey.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent2);
        opponent2Health = WT.health;

        opponent3 = $("<img>").attr("src", "assets/images/Chipmunk.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent3);
        opponent3Health = SCC.health;

        game();

    });

    $("#SCC").on("click", function () {
        
        hideCharacters();
        charset = $("<img>").attr("src", "assets/images/Chipmunk.jpg").addClass("char-select");
        $("#character").append(charset);
        currentHealth = SCC.health;
        startingAttack = SCC.attack;
        $("#hero-damage").append(currentAttack);
        $("#hero-health").append(currentHealth);

        opponent1 = $("<img>").attr("src", "assets/images/Spider.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent1);
        opponent1Health = YTS.health;

        opponent2 = $("<img>").attr("src", "assets/images/Turkey.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent2);
        opponent2Health = WT.health;

        opponent3 = $("<img>").attr("src", "assets/images/Beaver.jpg").addClass("opp-select");
        $("#opponents-select").append(opponent3);
        opponent3Health = BT.health;

        game();

    });

    $("#fight-btn").on("click", function() {
        fight()
    });

});