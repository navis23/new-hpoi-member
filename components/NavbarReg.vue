<template>
    <!-- top navbar -->
    <nav class="fixed px-4 lg:px-32 w-full h-16 flex items-center bg-gray-50 shadow justify-between z-[99]">
        <div class="flex items-center justify-start w-44">
            <h2 class="font-oswald text-xl lg:text-3xl font-semibold uppercase text-gsi-darkblue">Register Data</h2>
        </div>
        <div class="flex items-center justify-end w-44">
            <nuxt-link to="/admin/data-anggota">
                <ButtonBaseSmall class="hpoi">
                    <Icon name="lucide:book-user" class="text-xl" />
                    <span>Halaman Profil</span>
                </ButtonBaseSmall>
            </nuxt-link>
        </div>
        <div class="absolute w-full bottom-0 left-0">
            <div role="progressbar" :aria-valuenow="progress" aria-valuemax="100" class="relative w-full overflow-hidden h-1 rounded-full bg-gray-200">
                <div class="absolute start-0 top-0 h-full transition-[width] duration-500 bg-hpoi-main rounded-full" :style="`width: ${progress}%;`"></div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const storeGlobalData = useGlobalDataStore()

const {
    progress
} = storeToRefs(storeGlobalData)
</script>

<style scoped>

</style>