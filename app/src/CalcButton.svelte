<script>
    import { calcModel } from './stores.js'
    export let symbol;
    export let type = "none";
    export let buttonColor = "slategray";
    export let buttonFocusColor = "darkslategray";
    
    const handleClick = () => {
        if(type === 'clear') {
            calcModel.clearCalculations();
        } else if(type === 'equals') {
            calcModel.commitCalculations();
        } else {
            calcModel.appendOperation(symbol);
        }
    }

    let focus = false;
    const handleFocus = () => focus = true;
    const handleBlur = () => focus = false;
</script>

<div>
    <button 
        on:click={handleClick} 
        on:focus={handleFocus}
        on:blur={handleBlur}
        style="background-color: {focus ? buttonFocusColor : buttonColor}"
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
        border: 4px solid black;
    }
</style>