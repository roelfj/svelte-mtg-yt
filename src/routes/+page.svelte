<script>
    import './style1.css';
    import { Jumper } from 'svelte-loading-spinners';
    import { Circle3 } from 'svelte-loading-spinners';
    import { Wave } from 'svelte-loading-spinners';
    import { navigating,page, } from '$app/stores'
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';

    let original = 3; // TYPE NUMBER OF SECONDS HERE
    let timer = tweened(original)

    setInterval(() => {
        if ($timer > 0) $timer--;
    }, 1000);


    let now = new Date(), month, day, year;
    let dateString;

    onMount(()=> {
        month = '' + (now.getMonth() + 1),
            day = '' + now.getDate(),
            year = now.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        dateString = [year, month, day].join('-');
    })

    let questions = [
        { id: 1, text: `Muizenberg`, value: `Muizenberg` },
        { id: 2, text: `Kalk Bay Reef`, value: `Kalk-Bay-Reef` },
        { id: 3, text: `Long Beach`, value: `Long-Beach_2` },
        { id: 4, text: `Llandudno`, value: `Llandudno_1` },
        { id: 5, text: `Queens Beach` , value: `Queens_2`},
        { id: 6, text: `Bloubergstrand` , value: `Bloubergstrand`}
    ];

    let selected;

    let town = 'Muizenberg';
    let towntext = 'Muizenberg';
    let surfurl = "//www.surf-forecast.com/breaks/"+town+"/forecasts/widget/a";
    let refurl = "//www.surf-forecast.com/breaks/"+town;

    function changetown() {
        timer = tweened(original);
        town = `${selected.value}`;
        towntext  = `${selected.text}`;
        surfurl = "//www.surf-forecast.com/breaks/"+town+"/forecasts/widget/a";
        refurl = "//www.surf-forecast.com/breaks/"+town;

    }
</script>

<div id="container">

    <h3>Dirk's Surf Forecast</h3>

    {#if !dateString}
        <Circle3 size="30" color="#FF3E00" unit="px" duration="1s" />
    {:else}
        <h6>{dateString}</h6>
    {/if}

        <select bind:value={selected} on:change={changetown}>
            {#each questions as question}
                <option value={question}>
                    {question.text}
                </option>
            {/each}
        </select>




    <link href="//www.surf-forecast.com/stylesheets/widget.css" media="screen" rel="stylesheet" type="text/css" />

        {#if $timer == 0}
            <div class="surf-fc-widget" >
                <iframe
                        title="surf"
                        class="surf-fc-i"
                        allowtransparency="true"
                        src={surfurl}
                        >
                </iframe>
            </div>
        {:else}
            <Wave size="60" color="#5785eb" unit="px" duration="1s"/>
        {/if}
<!--        <a href={refurl} target="_blank">surf-forecast.com</a>-->



    <a href={refurl} target="_blank">See detail {towntext} forecast on</a>
    <a href={refurl} target="_blank">
        <img src="https://www.surf-forecast.com/images/logo_d.gif"
             alt="surf-forecast.com logo"
             width="70px"
        />
    </a>
<!--    <a target='_blank' href="https://www.artifak.com" >Best place in the world</a>-->

</div>

<style>
    .surf-fc-widget {
        width: 100%;
        /*max-width: 100vh;*/
        min-width: 753px;
        max-height: 400px;
        transition: all 1s;
        font-family: Helvetica,Arial,sans-serif;
        overflow: auto;
        /*background-color: red;*/
        border: solid 1px blue;
    }
    .surf-fc-widget .surf-fc-i {
        overflow: auto;
        border: none;
        height: 410px;
        width: 100%;
    }
</style>


