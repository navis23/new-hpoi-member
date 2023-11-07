<template>
    <div class="bg-slate-100 w-14 h-14 flex justify-center items-center rounded-full hover:ring-2 hover:ring-sky-600 hover:ring-offset-2 transition ease-in-out duration-300">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>

.square {
    @apply rounded-md
}

.lg{
    @apply w-20 h-20
}
.sm{
    @apply w-12 h-12
}
.xs{
    @apply w-8 h-8
}
</style>