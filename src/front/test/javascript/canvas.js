var canvas = document.getElementById("demoCanvas");
var stage = new Stage("demoCanvas");
var tkr = new Object;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 5;

var clock = document.getElementById("clockdiv");

var playerScore = new Text('0', 'bold 35px Arial', '#6600ff');
playerScore.x = 300;
playerScore.y = 60;

var player2Score = new Text('0', 'bold 35px Arial', '#ff2f56');
player2Score.x = window.innerWidth - 300;
player2Score.y = 60;

var player = new Shape();
player.graphics.beginFill("#6600ff").drawRect(-10, -40, 20, 150);
var player2 = new Shape();
player2.graphics.beginFill("#ff2f56").drawRect(-10, -40, 20, 150);
var ball = new Shape();
ball.graphics.beginFill("#ff2f56").drawCircle(-3, -10, 10);
var xSpeed = 8;
var ySpeed = 8;

ball.x = 800;
ball.y = 300;

stage.addChild(ball, player, player2, playerScore, player2Score);

player.x = 100;
player2.x = innerWidth - 100;

function startGame(e) {
    stage.onPress = null;
    stage.onMouseMove = moveplayer;

    Ticker.addListener(tkr, false);
    tkr.tick = update;
}

function reset() {
    ball.x = window.innerWidth/2;
    ball.y = window.innerHeight/2 + 30;
    player.y = window.innerHeight/2;
    player2.y = window.innerHeight/2;

    stage.onMouseMove = null; //stop listening to the mouse
    Ticker.removeListener(tkr); //pause the game
    stage.onPress = startGame;
}

    /* player2 Score */

    if((ball.x) < 0)
    {
        xSpeed = -xSpeed;
        player2Score.text = parseInt(player2Score.text + 1);
        reset();
    }

    /* Player Score */

    if((ball.x) > 480)
    {
        xSpeed = -xSpeed;
        playerScore.text = parseInt(playerScore.text + 1);
        reset();
    }


function update()
{
    // Ball Movement

    ball.x = ball.x + xSpeed;
    ball.y = ball.y + ySpeed;

    // // player2 Movement
    //
    // if((player2.y+32) < (ball.y-14)) {
    // 	player2.y = player2.y + player2Speed;
    // }
    // else if((player2.y+32) > (ball.y+14)) {
    // 	player2.y = player2.y - player2Speed;
    // }

    // Wall Collision

    if((ball.y) < 0) { ySpeed = -ySpeed};//Up
    if((ball.y + (30)) > 720) { ySpeed = -ySpeed};

    /* Player Score */

    if((ball.x) > window.innerWidth)
    {
        xSpeed = -xSpeed;
        playerScore.text = parseInt(playerScore.text + 1);
        reset();
    }
    /* player2 Score */

    if((ball.x) < 0)
    {
        xSpeed = -xSpeed;
        player2Score.text = parseInt(player2Score.text + 1);
        reset();
    }

    if(ball.x + 10 > player.x && ball.x + 10 < player.x + 40 && ball.y >= player.y && ball.y < player.y + 150)
    {
        xSpeed *= -1;
    }
    if(ball.x - 10 < player2.x && ball.x - 10 > player2.x - 40 && ball.y >= player2.y && ball.y < player2.y + 150)
    {
        xSpeed *= -1;
    }

    /* Stop player from going out of canvas */

    if(player.y >= 800)
    {
        player.y = 800;
    }

    if(player2.y >= 800)
    {
    player2.y = 800;
    }
    /* Check for Win */

    if(playerScore.text == '10')
    {
        alert('win');
    }

    /* Check for Game Over */

    if(player2Score.text == '10')
    {
        alert('lose');
    }
}

function handleTick(event) {
    moveBall();
    stage.update();
}

//         $(function () {
//     $("#pauseButton").text("Pause").data("paused", false).click(function () {
//         $(this).data("paused", !$(this).data("paused"));
//         if ($(this).data("paused")) {
//           console.log('coucou');
//             $(this).text("Resume");
//             game.paused = true;
//         } else {
//             $(this).text("Pause");
//             game.paused = false;
//         }
//     })
// });
Ticker.setFPS(60);
Ticker.addListener(stage);

function moveplayer(e) {
    player.y = e.stageY;
}
