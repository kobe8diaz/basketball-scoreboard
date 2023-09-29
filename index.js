// HOME POINTS FUNCTIONS ------------------------------

let home_pts = 0
let home_pts_GEBI = document.getElementById("home-pts")

function homePlus1() {
    home_pts += 1
    home_pts_GEBI.textContent = home_pts
}

function homePlus2() {
    home_pts += 2
    home_pts_GEBI.textContent = home_pts
}

function homePlus3() {
    home_pts += 3
    home_pts_GEBI.textContent = home_pts
}

// AWAY POINTS FUNCTIONS ------------------------------

let away_pts = 0
let away_pts_GEBI = document.getElementById("away-pts")

function awayPlus1() {
    away_pts += 1
    away_pts_GEBI.textContent = away_pts
}

function awayPlus2() {
    away_pts += 2
    away_pts_GEBI.textContent = away_pts
}

function awayPlus3() {
    away_pts += 3
    away_pts_GEBI.textContent = away_pts
}

// HOME UNDO FUNCTIONALITY ------------------------------

let home_mementos = [0]

function saveMementoHome() {
    home_mementos.push(home_pts)
}

function undoHome() {
    if (home_mementos.length > 1) {
        home_mementos.pop()
        home_pts_GEBI.textContent = home_mementos.at(-1)
        home_pts = home_mementos.at(-1)
    }
}

// AWAY UNDO FUNCTIONALITY ------------------------------

let away_mementos = [0]

function saveMementoAway() {
    away_mementos.push(away_pts)
}

function undoAway() {
    if (away_mementos.length > 1) {
        away_mementos.pop()
        away_pts_GEBI.textContent = away_mementos.at(-1)
        away_pts = away_mementos.at(-1)
    }
}

// Both .slice() and .at() work in this situation,
// but .at() is a more appropriate method.
// .slice() returns a sublist with the element e.g. [5]
// .at() returns the element alone e.g. 5

// PERIOD BUTTONS FUNCTIONS ------------------------------

let period_GEBI = document.getElementById("period-number")
let curr_val = parseInt(period_GEBI.textContent)

function leftArrow() {
    if (curr_val > 1) {
        curr_val -= 1
        period_GEBI.textContent = curr_val
    }
}

function rightArrow() {
    if (curr_val < 4) {
        curr_val += 1
        period_GEBI.textContent = curr_val
    }
}

// RESET BUTTON ------------------------------

function reset() {
    
    // Reset Home Section
    home_pts = 0
    home_pts_GEBI.textContent = home_pts
    home_mementos = [0]
    
    // Reset Away Section
    away_pts = 0
    away_pts_GEBI.textContent = away_pts
    away_mementos = [0]
    
    // Reset Period Section
    curr_val = 1
    period_GEBI.textContent = curr_val
    
}