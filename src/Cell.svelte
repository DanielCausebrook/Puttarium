<script lang="ts">
    import {CellType, getCellData} from "./course";
    import {
        IconBackground,
        IconChristmasTreeFilled,
        IconGolf,
        IconGrain,
        IconInnerShadowTopLeftFilled,
        IconRipple, IconSquareFilled, IconSquareXFilled
    } from "@tabler/icons-svelte";

    export let cellType: CellType;
    export let hasBall: boolean = false;
    export let size: number|null = null;

    let cellData = getCellData(cellType);

</script>
<div class="cell" style="{size === null ? 'width:100%;  height: 100%; ' : `width:${size}px; height:${size}px; `}background:{cellData.primaryColor};">
    {#if hasBall}
        <IconInnerShadowTopLeftFilled size="90%" />
    {:else if cellType === CellType.Rough}
        <IconBackground size="90%" color="hsl(120, 60%, 20%)" />
    {:else if cellType === CellType.Tree}
        <IconChristmasTreeFilled size="90%" color="hsl(120, 60%, 10%)" />
    {:else if cellType === CellType.Rock}
        <IconSquareXFilled size="90%" color="hsl(0, 0%, 37%)" stroke="3" />
    {:else if cellType === CellType.Hole}
        <IconGolf size="100%" stroke="3" color="hsl(180, 80%, 70%)" />
    {:else if cellType === CellType.Water}
        <IconRipple size="90%" color="hsl(210, 50%, 45%)" />
    {:else if cellType === CellType.Sand}
        <IconGrain size="90%" color="hsl(55, 50%, 50%)"/>
    {/if}
</div>
<style>
    .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15%;
    }
</style>