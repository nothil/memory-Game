const html =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <link rel="stylesheet" href="game.css">
</head>
<body>

<h1>
    The Great Memory Game
    <br>

</h1>

<div id="stripe">
    <button id="start"> Start</button>
    <button id="restart"> play Again</button>

    <span id="message"></span>


</div>


<section class="memory-game">


    <div class="memory-card" data-framework>
        <img class="colors" src="images/pink.png">
        <img class="cover" src="images/grey.png">
    </div>

    <div class="memory-card" data-framework>
        <img class="colors" src="images/pink.png">
        <img class="cover" src="images/grey.png">
    </div>

    <div class="memory-card" data-framework>
        <img class="colors" src="images/red.jpg">
        <img class="cover" src="images/grey.png">
    </div>

    <div class="memory-card" data-framework>
        <img class="colors" src="images/red.jpg">
        <img class="cover" src="images/grey.png">
    </div>

    <div class="memory-card" data-framework>
        <img class="colors" src="images/blue.jpg">
        <img class="cover" src="images/grey.png">
    </div>

    <div class="memory-card" data-framework>
        <img class="colors" src="images/blue.jpg">
        <img class="cover" src="images/grey.png">
    </div>

    <div class="memory-card" data-framework>
        <img class="colors" src="images/black.png">
        <img class="cover" src="images/grey.png">
    </div>

    <div class="memory-card" data-framework>
        <img class="colors" src="images/black.png">
        <img class="cover" src="images/grey.png">
    </div>

    <div class="memory-card" data-framework>
        <img class="colors" src="images/green.png">
        <img class="cover" src="images/grey.png">
    </div>

    <div class="memory-card" data-framework>
        <img class="colors" src="images/green.png">
        <img class="cover" src="images/grey.png">
    </div>

    <div class="memory-card" data-framework>
        <img class="colors" src="images/yellow.jpg">
        <img class="cover" src="images/grey.png">
    </div>

    <div class="memory-card" data-framework>
        <img class="colors" src="images/yellow.jpg">
        <img class="cover" src="images/grey.png">
    </div>
</section>

<script src="game.js"></script>

</body>
</html>
`
module.exports = html;