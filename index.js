
const mlb_season = 162
const aaa_season = 150
const aa_season = 140
const a_season = 130

let home_runs;
let games_played;
let league_type;
let games_in_season;
let player;

let projected_home_runs;

const select_league_type = document.getElementById("league_type_select");
const games_in_season_box = document.getElementById("games_in_season_box")

const submit_button = document.getElementById("submit_button")

select_league_type.addEventListener("change", () => {

    if(select_league_type.value === "non-professional") {
        games_in_season_box.style.display = "block";
    } 
    else {
        games_in_season_box.style.display = "none";
    }

});

submit_button.onclick = function(){

    // Equation
    // Projected Home Runs = Home Runs / Games Played * Games in Season 

    home_runs = Number(document.getElementById("home_runs_input").value);
    games_played = Number(document.getElementById("games_played_input").value);
    league_type = document.getElementById("league_type_select").value;
    games_in_season = Number(document.getElementById("games_in_season_input").value);
    player = document.getElementById("player_input").value;

    // console.log(select_league_type.value)

    if (select_league_type.value === "mlb") {
        games_in_season = mlb_season
    } else if (select_league_type.value === "aaa") {
        games_in_season = aaa_season
    } else if (select_league_type.value === "aa") {
        games_in_season = aa_season
    } else if (select_league_type.value === "a") {
        games_in_season = a_season
    }

    /*
    console.log(home_runs);
    console.log(games_played);
    console.log(league_type);
    console.log(games_in_season);
    console.log(player);
    */

    projected_home_runs = Math.round(home_runs / games_played * games_in_season);

    if (player === "") {
        document.getElementById("home_run_pace").textContent = `They are projected to hit ${projected_home_runs} home runs this season!`
    } else {
        document.getElementById("home_run_pace").textContent = `${player} is projected to hit ${projected_home_runs} home runs this season!`
    }



}


