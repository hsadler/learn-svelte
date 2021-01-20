<script>
    import Display from './Display.svelte'
    import NumberButton from './NumberButton.svelte'
    import OperatorButton from './OperatorButton.svelte'
    import EqualsButton from './EqualsButton.svelte'
    import ClearButton from './ClearButton.svelte'
</script>

<div class="calculator-container">
    <EqualsButton></EqualsButton>
    <ClearButton></ClearButton>
</div>

<style>
    div.calculator-container {
        width: 400px;
        height: 400px;
        border: 1px solid black;
    }
</style>