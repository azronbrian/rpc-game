<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles.css">
    <title>RPC Game</title>
</head>
<body>
    <h3>Rock Paper Scissor Game</h3>

    <div class="choices" onclick="choose(event)">
        <button class="choice" id="0">Rock</button>
        <button class="choice" id="1">Paper</button>
        <button class="choice" id="2">Scissor</button>
    </div>

    <div id="results">
        <p><span id="player"></span></p>
        <p><span id="computer"></span></p>
        <p><span id="res"></span></p>
    </div>

    <script src="/script.js"></script>
</body>
</html>