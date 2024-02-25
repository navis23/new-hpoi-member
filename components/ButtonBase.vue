<template>
    <button class="py-3 pl-2 pr-4 text-sm lg:text-base w-40 rounded-md hover:text-gray-100 transition ease-in-out duration-300 font-oswald tracking-wide">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.main {
    @apply bg-sky-600 text-gsi-smokewhite hover:bg-sky-500
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
    @apply bg-slate-50 text-gray-600 border hover:bg-white
}
.dark {
    @apply text-gray-50 bg-gray-800 border hover:bg-gray-700
}

.darkblue {
    @apply bg-gsi-darkblue text-gsi-smokewhite hover:bg-gray-800
}

.hpoi {
    @apply text-gray-800 bg-hpoi-main hover:bg-gsi-gold
}
</style>