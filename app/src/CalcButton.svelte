<script>
    import { calcModel } from './stores.js'
    export let symbol;
    export let type = "none";
    export let buttonColor = "slategray";
    
    const handleClick = () => {
        if(type === 'clear') {
            calcModel.clearCalculations();
        } else if(type === 'equals') {
            calcModel.commitCalculations();
        } else {
            calcModel.appendOperation(symbol);
        }
    }
</script>

<div>
    <button 
        on:click={handleClick} 
        style="background-color: {buttonColor}"
    >{symbol}</button>
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
        color: white;
    }
    button:hover {
        cursor: pointer;
    }
    button:focus {
        border: 3px solid black;
    }
</style>