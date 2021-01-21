<script>
    import { calcModel } from './stores.js'
    import CalcDisplay from './CalcDisplay.svelte'
    import CalcButton from './CalcButton.svelte'
</script>

<div class="calculator-container">
    <p>{$calcModel}</p>
</div>

<style>
    div.calculator-container {
        width: 400px;
        height: 400px;
        border: 1px solid black;
    }
</style>