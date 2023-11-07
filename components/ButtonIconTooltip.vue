<template>
    <button class="relative group bg-sky-200 text-sky-700 bg-opacity-30 w-12 h-12 text-3xl flex justify-center items-center rounded-full hover:bg-sky-500 hover:text-gray-100 transition ease-in-out duration-300">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.danger {
    @apply bg-red-200 text-red-700 hover:bg-red-500 hover:text-gray-100
}
.warning {
    @apply bg-yellow-200 text-yellow-700 hover:bg-yellow-500 hover:text-gray-100
}
.muted {
    @apply bg-slate-200 text-slate-700 hover:bg-slate-400 hover:text-gray-100
}
.square {
    @apply rounded-md
}
.mono {
    @apply bg-slate-50 text-gray-500 border hover:bg-white hover:text-gray-800
}
.dark {
    @apply text-slate-50 bg-gray-800 border hover:bg-gray-700
}


</style>