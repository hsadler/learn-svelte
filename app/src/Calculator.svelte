<script>
    import { calcModel } from './stores.js'
    import CalcDisplay from './CalcDisplay.svelte'
    import CalcButton from './CalcButton.svelte'

    const { numbers, operators, equals, clear } = $calcModel.layout;
</script>

<div class="calculator">
    <div class="display">
        <CalcDisplay/>
    </div>
    <div class="numbers">
        {#each numbers as number}
            <CalcButton symbol={number}/>
        {/each}
    </div>
    <div class="operators">
        {#each operators as operator}
        <CalcButton symbol={operator} buttonColor="darkBlue"/>
        {/each}
    </div>
    <div class="equals-and-clear">
        <CalcButton symbol={equals} type="equals" buttonColor="salmon"/>
        <CalcButton symbol={clear} type="clear" buttonColor="salmon"/>
    </div>
</div>

<style>
    div {
        display: inline-block;
        box-sizing: border-box;
    }
    div.calculator {
        width: 420px;
        height: 620px;
        border: 1px solid black;
    }
    div.display {
        width: 400px;
        height: 110px;
    }
    div.numbers {
        width: 305px;
        height: 405px;
    }
    div.operators {
        width: 100px;
        height: 400px;
    }
    div.equals-and-clear {
        width: 400px;
        height: 100px;
    }
</style>