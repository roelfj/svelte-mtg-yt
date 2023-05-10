<script>
    import './style1.css'
</script>

<div id="container">

    <h1>Dirk Surf Report</h1>

    <link href="//www.surf-forecast.com/stylesheets/widget.css" media="screen" rel="stylesheet" type="text/css" />
    <div class="wf-width-cont surf-fc-widget">
        <div class="widget-container">
            <div class="external-cont">
                <iframe title="surf" class="surf-fc-i" allowtransparency="true" src="//www.surf-forecast.com/breaks/Muizenberg/forecasts/widget/a">
                </iframe>
            </div>
        </div>
    </div>


    <a target='_blank' href="https://www.artifak.com" >Best place in the world</a>

</div>

<style>
    .surf-fc-widget {
        max-width: 753px;
        transition: all 1s;
        font-family: Helvetica,Arial,sans-serif;
        font-size: 12px;
        color: white;
    }
</style>


<!--<script>-->
<!--    import '../global.css'-->
<!--    import Player from "./Player.svelte";-->
<!--    let redScore = 20;-->
<!--    let blueScore = 20;-->
<!--    $ : blueWon = redScore <= 0;-->
<!--    $ : redWon = blueScore <= 0;-->
<!--    $:  gameOver = blueWon || redWon;-->

<!--    function updateBlueScore(e) {-->
<!--         const updateScore = e.detail;-->
<!--         blueScore += updateScore;-->
<!--    }-->

<!--    function updateRedScore(e) {-->
<!--        const updateScore = e.detail;-->
<!--        redScore += updateScore;-->
<!--    }-->


<!--    function newGame() {-->
<!--        redScore = 20;-->
<!--        blueScore = 20;-->
<!--    }-->
<!--</script>-->

<!--<style>-->
<!--    main {-->
<!--        width: 80%;-->
<!--        padding: 20px;-->
<!--        border: solid gray 1px;-->
<!--        margin: 0 auto;-->
<!--        background-color: wheat;-->
<!--        margin: 10vh auto;-->
<!--    }-->

<!--    #controls-container {-->
<!--        display: flex;-->
<!--    }-->

<!--    button {-->
<!--        display: block;-->
<!--        width: 100%;-->
<!--        margin-top: 20px;-->
<!--        border: solid salmon 1px;-->
<!--        background-color: sandybrown;-->
<!--        color: rgb(61,56,56);-->
<!--        font-size: 20px;-->
<!--        border-right: 3px;-->
<!--    }-->
<!--</style>-->

<!--<main>-->
<!--    <h1>Roelf Demo</h1>-->
<!--    <div id="controls-container">-->
<!--        <Player-->
<!--                {gameOver}-->
<!--                on:points={updateBlueScore}-->
<!--                fontColour=blue-->
<!--                won={blueWon}-->
<!--                winningText="Blue Wins"-->
<!--                score={blueScore}/>-->
<!--        <Player-->
<!--                {gameOver}-->
<!--                on:points={updateRedScore}-->
<!--                fontColour=red-->
<!--                won={redWon}-->
<!--                winningText="Red Wins"-->
<!--                score={redScore}/>-->
<!--    </div>-->
<!--    <button on:click={ newGame } >Start Game</button>-->
<!--</main>-->
