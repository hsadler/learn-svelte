<script>
    import { calcModel } from './stores.js'

    const handleClick = () => {
        if(type === 'clear') {
            calcModel.clearCalculations();
        } else if(type === 'equals') {
            calcModel.commitCalculations();
        } else {
            calcModel.appendOperation(symbol);
        }
    }

    export let symbol;
    export let type = "none";
</script>

<div>
    <button on:click={handleClick}>{symbol}</button>
</div>

<style>
    div, button {
        font-size: 30px;
        display: inline-block;
        width: 100px;
        height: 100px;
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    button:hover {
        cursor: pointer;
    }
</style>