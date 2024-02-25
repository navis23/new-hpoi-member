<template>
    <button class="flex gap-x-1 text-sm justify-center items-center hover:text-gray-100 py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.main {
    @apply bg-sky-600 text-gsi-smokewhite hover:bg-sky-500 hover:text-gray-100 
}
.danger {
    @apply bg-red-600 text-gsi-smokewhite hover:bg-red-500
}
.warning {
    @apply bg-yellow-600 text-gsi-smokewhite hover:bg-yellow-500
}
.muted {
    @apply bg-slate-500 text-gsi-smokewhite hover:bg-slate-400
}
.gold {
    @apply bg-gsi-gold text-slate-800 hover:bg-gsi-gold hover:text-gsi-darkblue
}
.mono {
    @apply bg-slate-50 text-gray-800 border hover:bg-white
}
.dark {
    @apply text-slate-50 bg-gray-800 border hover:bg-gray-700
}
.hpoi {
    @apply text-gray-800 bg-hpoi-main hover:bg-gsi-gold
}

</style>