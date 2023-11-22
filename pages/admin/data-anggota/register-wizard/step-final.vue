<template>
    <div class="relative overflow-hidden">
        <div class="relative min-h-screen px-4 lg:px-32 overflow-hidden">
            <div class="relative z-40 flex flex-col gap-4 w-full min-h-screen items-center justify-center">
                <div class="space-y-2 text-center">
                    <p class="font-oswald text-3xl text-hpoi-main uppercase">
                        _Finish Process
                    </p>
                    <h4 class="text-2xl font-oswald">
                        Hai, {{ nama_provider }}
                    </h4>
                    <h3 class="font-oswald text-4xl">
                        Pengisian data registrasi anda selesai
                    </h3>
                    <p class="text-gray-500 font-oswald">
                        lihat preview halaman atau segera simpan data profil anda dibawah ini (jangan refresh halaman)
                    </p>
                    <div class="border-t-2 flex gap-x-2 pt-4 items-center justify-center">
                        <ButtonBaseSmall v-if="loading == false" @click="backStep()" class="muted flex items-center justify-center gap-x-1">
                            <Icon name="lucide:arrow-left-square" class="text-xl" />
                            <span>
                                Kembali
                            </span>
                        </ButtonBaseSmall>
                        <ButtonBaseSmall v-if="loading == false" @click="previewStep()" class="flex items-center justify-center gap-x-1">
                            <Icon name="lucide:eye" class="text-xl" />
                            <span>
                                Preview
                            </span>
                        </ButtonBaseSmall>
                        <ButtonBaseSmall v-if="loading == false" @click="nextStep()" class="hpoi flex items-center justify-center gap-x-1">
                            <Icon name="lucide:save" class="text-xl" />
                            <span>
                                Simpan Data
                            </span>
                        </ButtonBaseSmall>
                    </div>
                </div>
            </div>
            <p class="absolute py-10 -right-56 opacity-20 md:opacity-50 top-20">
                <Icon name="PatternThree" class="text-[28rem]"/>
            </p>
            <p class="absolute py-10 -left-56 opacity-20 md:opacity-50 bottom-10">
                <Icon name="PatternThree" class="text-[28rem]"/>
            </p>
        </div>
        <div class="relative min-h-screen px-4 lg:px-32 overflow-hidden">
            <div class="pb-4">1. {{no_anggota}}</div>
            <div class="pb-4">2. {{nama_provider}}</div>
            <div class="pb-4">3. {{alamat}}</div>
            <div class="pb-4">4. {{telepon}}</div>
            <div class="pb-4">5. {{email}} {{ user?.email }}</div>
            <div class="pb-4">6. {{instagram}}</div>
            <div class="pb-4">7. {{facebook}}</div>
            <div class="pb-4">8. {{youtube}}</div>
            <div class="pb-4">9. {{website}}</div>
            <div class="pb-4">10. {{nama_pic}}</div>
            <div class="pb-4">11. {{profile_one}}</div>
            <div class="pb-4">12. {{profile_two}}</div>
            <div class="pb-4">13. {{layanan}}</div>
            <div class="pb-4">14. {{layananAll}}</div>
            <div class="pb-4">15. {{logo_img}}</div>
            <div class="pb-4">16. {{hero_img}}</div>
            <div class="pb-4">17. {{gallery_one}}</div>
            <div class="pb-4">18. {{gallery_two}}</div>
            <div class="pb-4">19. {{gallery_three}}</div>
            <div class="pb-4">20. {{gallery_four}}</div>
            <div class="pb-4">21. {{nama_dpc}}</div>
            <div class="pb-4">22. {{logo_img_temp}}</div>
            <div class="pb-4">23. {{hero_img_temp}}</div>
            <div class="pb-4">24. {{gallery_one_temp}}</div>
            <div class="pb-4">25. {{gallery_two_temp}}</div>
            <div class="pb-4">26. {{gallery_three_temp}}</div>
            <div class="pb-4">27. {{gallery_four_temp}}</div>
            <div class="pb-4">28. {{instagram_url}}</div>
            <div class="pb-4">29. {{facebook_url}}</div>
            <div class="pb-4">30. {{youtube_url}}</div>
            <div class="pb-4">31. {{website_url}}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'register-layout'
})

const storeGlobalData = useGlobalDataStore()
const storeAnggota = useAnggotaStore()
const client = useSupabaseClient()
const user = useSupabaseUser()

const {
    dpcAll,
    no_anggota,
    nama_provider,
    alamat,
    telepon,
    email,
    instagram,
    facebook,
    youtube,
    website,
    nama_pic,
    profile_one,
    profile_two,
    layanan,
    layananAll,
    logo_img,
    hero_img,
    gallery_one,
    gallery_two,
    gallery_three,
    gallery_four,
    nama_dpc,
    logo_img_temp,
    hero_img_temp,
    gallery_one_temp,
    gallery_two_temp,
    gallery_three_temp,
    gallery_four_temp,
    instagram_url,
    facebook_url,
    youtube_url,
    website_url,
} = storeToRefs(storeAnggota)

const {
    loading,
    progress
} = storeToRefs(storeGlobalData)

onMounted(async () => {
    progress.value = 100
})

const nextStep = async () => {
    progress.value = 100
    navigateTo("/admin/data-anggota/register-wizard/step-final")
}

const previewStep = async () => {
    progress.value = 100
    navigateTo("/admin/data-anggota/register-wizard/preview")
}

const backStep = async () => {
    progress.value = 80
    navigateTo("/admin/data-anggota/register-wizard/step-five")
}


</script>

<style scoped>

</style>