var cv = null;
var cx = null;
var move = 5;

window.onload = function() {
    cv = document.getElementById("pacman");
    if (cv.getContext ) {
        cx = cv.getContext("2d");
        initPacman();
    }
};

window.addEventListener('WebComponentsReady', function() {
    var board = document.getElementById('board');

    board.on('ready', function() {
        boardsReady();
    });
}, false);

function boardsReady() {
    var buttonL = document.getElementById('buttonL');
    var buttonR = document.getElementById('buttonR');

    buttonL.on('pressed', function() {
        sizes.pacman.dX = sizes.pacman.dX - move;
        if ( sizes.pacman.dX < 30 ) {
            sizes.pacman.dX = 30;
        }
        
        redraw();
    });

    buttonR.on('pressed', function() {
        sizes.pacman.dX = sizes.pacman.dX + move;
        if ( sizes.pacman.dX > 690 ) {
            sizes.pacman.dX = 690;
        }
        
        redraw();
    });
}

var pacmanSource = "images/pacman.jpg";
var ghostSource = "images/Pacman_ghosts.png";
var pacman = new Image();
var blinky = new Image();
var pinky = new Image();
var inky = new Image();
var clyde = new Image();
var sizes = {
    "pacman": { "sX": 25, "sY": 25, "sW": 125, "sH": 150, "dX": 380, "dY": 188, "dW": 40, "dH": 48 },
    "blinky": { "sX": 25, "sY": 12, "sW": 80, "sH": 70, "dX": 30, "dY": 30, "dW": 40, "dH": 35 },
    "pinky": { "sX": 25, "sY": 96, "sW": 80, "sH": 70, "dX": 30, "dY": 290, "dW": 40, "dH": 35 },
    "inky": { "sX": 25, "sY": 180, "sW": 80, "sH": 70, "dX": 690, "dY": 30, "dW": 40, "dH": 35 },
    "clyde": { "sX": 25, "sY": 264, "sW": 80, "sH": 70, "dX": 690, "dY": 290, "dW": 40, "dH": 35 },
};

function initPacman() {
    drawBorder();
    cx.lineWidth = 2;
    cx.beginPath();
    cx.moveTo( 10, 10 );
    cx.lineTo( 790, 10 );
    cx.lineTo( 790, 390 );
    cx.lineTo( 10, 390 );
    cx.lineTo( 10, 10 );
    cx.strokeStyle = "#00F";
    cx.stroke();
    cx.closePath();
    
    pacman.onload = function() {
        draw( pacman, sizes.pacman );
    };
    pacman.src = pacmanSource;
    
    blinky.onload = function() {
        draw( blinky, sizes.blinky );
    };
    blinky.src = ghostSource;
    
    pinky.onload = function() {
        draw( pinky, sizes.pinky );
    };
    pinky.src = ghostSource;
    
    inky.onload = function() {
        draw( inky, sizes.inky );
    };
    inky.src = ghostSource;
    
    clyde.onload = function() {
        draw( clyde, sizes.clyde );
    };
    clyde.src = ghostSource;
}

function drawBorder() {
    cx.lineWidth = 2;
    cx.beginPath();
    cx.moveTo( 10, 10 );
    cx.lineTo( 790, 10 );
    cx.lineTo( 790, 390 );
    cx.lineTo( 10, 390 );
    cx.lineTo( 10, 10 );
    cx.strokeStyle = "#00F";
    cx.stroke();
    cx.closePath();
}

function redraw() {
    cx.clearRect(0, 0, cv.width, cv.height);
    drawBorder();
    draw( pacman, sizes.pacman );
    draw( blinky, sizes.blinky );
    draw( pinky, sizes.pinky );
    draw( inky, sizes.inky );
    draw( clyde, sizes.clyde );
}

function draw( item, size ) {
    var sourceX = size.sX;
    var sourceY = size.sY;
    var sourceWidth = size.sW;
    var sourceHeight = size.sH;
    var destWidth = size.dW;
    var destHeight = size.dH;
    var destX = size.dX;
    var destY = size.dY;

    cx.drawImage(item, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}

