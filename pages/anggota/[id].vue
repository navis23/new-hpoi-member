<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <div class="relative mt-24 lg:mt-32  px-4 lg:px-32 py-10">

        </div>
        {{ route.params.id }}
        {{ selected?.nama_provider }}
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
const storeGlobalData = useGlobalDataStore()

const {
    hpois
} = storeToRefs(storeGlobalData)

const selected = computed(() =>
hpois.value.find(
        (p) => p.no_anggota.toString() == route.params.id
    )
)

</script>

<style scoped>

</style>