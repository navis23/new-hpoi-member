<template>
    <!-- top navbar -->
    <nav class="fixed px-4 lg:px-32 w-full h-16 flex items-center bg-gray-50 shadow justify-between z-[99]">
        <div 
        v-if="
        route.fullPath == '/admin/data-anggota/register-wizard' ||
        route.fullPath == '/admin/data-anggota/register-wizard/step-two' ||
        route.fullPath == '/admin/data-anggota/register-wizard/step-three' ||
        route.fullPath == '/admin/data-anggota/register-wizard/step-four' ||
        route.fullPath == '/admin/data-anggota/register-wizard/step-five' ||
        route.fullPath == '/admin/data-anggota/register-wizard/step-final' ||
        route.fullPath == '/admin/data-anggota/register-wizard/preview'
        "
        class="flex items-center justify-start w-44">
            <h2 class="font-oswald text-xl lg:text-3xl font-semibold uppercase text-gsi-darkblue"><span class="text-hpoi-main">Register</span> Data</h2>
        </div>
        <div
        v-if="
        route.fullPath == '/admin/data-anggota/edit-wizard' ||
        route.fullPath == '/admin/data-anggota/edit-wizard/edit-two' ||
        route.fullPath == '/admin/data-anggota/edit-wizard/edit-three' ||
        route.fullPath == '/admin/data-anggota/edit-wizard/edit-four' ||
        route.fullPath == '/admin/data-anggota/edit-wizard/edit-five' ||
        route.fullPath == '/admin/data-anggota/edit-wizard/edit-final'
        "
        class="flex items-center justify-start w-44">
            <h2 class="font-oswald text-xl lg:text-3xl font-semibold uppercase text-gsi-darkblue"><span class="text-hpoi-main">Edit</span> Data</h2>
        </div>
        <div
        v-if="
        route.fullPath == '/admin/data-anggota/edit-wizard/get-card'
        "
        class="flex items-center justify-start w-44">
            <h2 class="font-oswald text-xl lg:text-3xl font-semibold uppercase text-gsi-darkblue"><span class="text-hpoi-main">Unduh</span> kartu</h2>
        </div>
        <div class="flex items-center justify-end w-44">
            <nuxt-link 
                v-if="
                    route.fullPath == '/admin/data-anggota/register-wizard'
                "  
                to="/admin/data-anggota">
                <ButtonBaseSmall class="hpoi">
                    <Icon name="lucide:book-user" class="text-xl" />
                    <span>Halaman Profil</span>
                </ButtonBaseSmall>
            </nuxt-link>
            <ButtonBaseSmall 
            v-if="
            route.fullPath == '/admin/data-anggota/edit-wizard' ||
            route.fullPath == '/admin/data-anggota/edit-wizard/edit-two' ||
            route.fullPath == '/admin/data-anggota/edit-wizard/edit-three' ||
            route.fullPath == '/admin/data-anggota/edit-wizard/edit-four' ||
            route.fullPath == '/admin/data-anggota/edit-wizard/edit-five' ||
            route.fullPath == '/admin/data-anggota/edit-wizard/edit-final' ||
            route.fullPath == '/admin/data-anggota/edit-wizard/get-card'
            " @click="backFromEdit()"
            class="hpoi">
                <Icon name="lucide:book-user" class="text-xl" />
                <span>Halaman Profil</span>
            </ButtonBaseSmall>
            <p class="font-oswald text-xl lg:text-3xl font-semibold uppercase text-gsi-darkblue">
                <span v-if="route.fullPath == '/admin/data-anggota/register-wizard/step-two'">
                    _STEP 02
                </span>
                <span v-if="route.fullPath == '/admin/data-anggota/register-wizard/step-three'">
                    _STEP 03
                </span>
                <span v-if="route.fullPath == '/admin/data-anggota/register-wizard/step-four'">
                    _STEP 04
                </span>
                <span v-if="route.fullPath == '/admin/data-anggota/register-wizard/step-five'">
                    _STEP 05
                </span>
                <span v-if="route.fullPath == '/admin/data-anggota/register-wizard/step-final'">
                    _FINAL STEP
                </span>
                <nuxt-link v-if="route.fullPath == '/admin/data-anggota/register-wizard/preview'"  to="/admin/data-anggota/register-wizard/step-final">
                    <ButtonBaseSmall class="hpoi">
                        <Icon name="lucide:arrow-left-from-line" class="text-xl" />
                        <span>Kembali ke Final Step</span>
                    </ButtonBaseSmall>
                </nuxt-link>
            </p>
        </div>
        <div class="absolute w-full bottom-0 left-0">
            <div role="progressbar" :aria-valuenow="progress" aria-valuemax="100" class="relative w-full overflow-hidden h-1 rounded-full bg-gray-200">
                <div class="absolute start-0 top-0 h-full transition-[width] duration-500 bg-hpoi-main rounded-full" :style="`width: ${progress}%;`"></div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const storeGlobalData = useGlobalDataStore()
const storeAnggota = useAnggotaStore()

const {
    progress
} = storeToRefs(storeGlobalData)

const backFromEdit = async () => {
    storeAnggota.$reset()
    navigateTo("/admin/data-anggota")
}
</script>

<style scoped>

</style>