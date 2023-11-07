<template>
    <span class="bg-sky-100 text-sky-700 bg-opacity-30 h-6 px-3 font-medium text-xs flex justify-center items-center rounded-full">
        <slot />
    </span>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.danger {
    @apply bg-red-100 text-red-700 
}
.warning {
    @apply bg-yellow-100 text-yellow-700 
}
.muted {
    @apply bg-slate-100 text-slate-700
}
.mono {
    @apply bg-slate-50 text-gray-500 border
}
.dark {
    @apply text-slate-50 bg-gray-800
}

</style>