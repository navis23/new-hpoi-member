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
                        lihat preview halaman atau segera simpan data profil anda dibawah ini
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
                        <ButtonBaseSmall v-if="loading == false" @click="openConfirmSaveAll()" class="hpoi flex items-center justify-center gap-x-1">
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
        <!-- <div class="relative min-h-screen px-4 lg:px-32 overflow-hidden">
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
            <div class="pb-4">31. DPC ID : {{id_dpc}}</div>
        </div> -->
        <ClientOnly>
            <HeadlessTransitionRoot appear :show="isConfirmSaveAll" as="template">
                <HeadlessDialog as="div" class="relative z-[999]">
                    <HeadlessTransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <div class="fixed inset-0 bg-black bg-opacity-50" />
                    </HeadlessTransitionChild>

                    <div class="fixed inset-0 overflow-y-auto">
                        <div class="flex min-h-full items-center justify-center p-4 text-center">
                            <HeadlessTransitionChild
                                as="template"
                                enter="duration-300 ease-out"
                                enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100"
                                leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100"
                                leave-to="opacity-0 scale-95"
                            >
                                <HeadlessDialogPanel class="w-full text-center max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                                    <HeadlessDialogTitle as="h3" class="font-oswald border-b-2 pb-2 text-2xl font-medium leading-6 text-hpoi-main">
                                        Konfirmasi Penyimpanan Data
                                    </HeadlessDialogTitle>
                                    
                                    <div v-if="loading == false" class="my-4">
                                        <p class="font-oswald text-xl text-gsi-darkblue">
                                        Hai, {{ nama_provider }}
                                        </p>
                                        <p class="">
                                            Apakah anda yakin untuk menyimpan data anda?
                                        </p>
                                        <p class="text-sm">
                                            silahkan proses dibawah
                                        </p>
                                    </div>

                                    <div v-if="loading == false" class="border-t-2 flex gap-x-2 pt-4 items-center justify-center">
                                        <ButtonBaseSmall v-if="loading == false" @click="closeConfirmSaveAll()" class="muted flex items-center justify-center gap-x-1">
                                            <Icon name="lucide:arrow-left-square" class="text-xl" />
                                            <span>
                                                Kembali
                                            </span>
                                        </ButtonBaseSmall>
                                        <ButtonBaseSmall v-if="loading == false" @click="saveAllData()" class="flex items-center justify-center gap-x-1">
                                            <Icon name="lucide:save" class="text-xl" />
                                            <span>
                                                Proses Simpan Data
                                            </span>
                                        </ButtonBaseSmall>
                                    </div>
                                    <div v-if="loading" class="w-full my-8 flex justify-center">
                                        <p class="flex gap-x-2 text-2xl justify-center items-center text-gsi-darkblue py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                            <Icon name="svg-spinners:blocks-shuffle-3" class="text-4xl text-hpoi-main" />
                                            <span >
                                                Proses Simpan Data...
                                            </span>
                                        </p>
                                    </div>
                                </HeadlessDialogPanel>
                            </HeadlessTransitionChild>
                        </div>
                    </div>
                </HeadlessDialog>
            </HeadlessTransitionRoot>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'register-layout'
})

const storeGlobalData = useGlobalDataStore()
const storeAnggota = useAnggotaStore()
const client = useSupabaseClient<any>()
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
    id_dpc,
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
    dpc,
    dpd,
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
    imagesAll_temp
} = storeToRefs(storeAnggota)

const {
    loading,
    progress
} = storeToRefs(storeGlobalData)

onMounted(async () => {
    progress.value = 100
})

const isConfirmSaveAll = ref(false)

// save all data to main db
const saveAllData = async () => {
    loading.value = true
    const allData = {
        no_anggota: no_anggota.value,
        nama_provider: nama_provider.value,
        alamat: alamat.value,
        dpc : dpc.value,
        dpd : dpd.value,
        telepon: telepon.value,
        email: user.value?.email,
        instagram: instagram.value,
        facebook: facebook.value,
        youtube: youtube.value,
        website: website.value,
        nama_pic: nama_pic.value,
        profile_one: profile_one.value,
        profile_two: profile_two.value,
        layanan: layananAll.value,
        logo_img: logo_img_temp.value,
        hero_img: hero_img_temp.value,
        gallery_one: gallery_one_temp.value,
        gallery_two: gallery_two_temp.value,
        gallery_three: gallery_three_temp.value,
        gallery_four: gallery_four_temp.value,
        website_url: website_url.value,
        instagram_url: instagram_url.value,
        facebook_url: facebook_url.value,
        youtube_url: youtube_url.value,
        user_id: user.value?.id
    }

    const dataDetail = {
        id_anggota: user.value?.id,
        id_dpc: id_dpc.value,
    }

    const { data: anggota, error } = await client
        .from('hpoi_anggota')
        .upsert(allData)
        .select()

    const { data: detail, error: err } = await client
        .from('hpoi_detail_anggota')
        .upsert(dataDetail)
        .select()

    if(detail) {
        const { error } = await client
        .from('hpoi_gambartemp')
        .delete()
        .eq('user_id', user.value?.id)

        if(error) throw error

    }
    console.log(anggota)
    console.log(detail)
    console.log('save all data')
    
    setTimeout(async () => {
        isConfirmSaveAll.value = false
        loading.value = false
        storeAnggota.$reset()
        navigateTo("/admin/data-anggota")
    }, 1000);
}

// open modal confirmation
const openConfirmSaveAll = async () => {
    isConfirmSaveAll.value = true
}
const closeConfirmSaveAll = async () => {
    isConfirmSaveAll.value = false
    
}

// moving pages
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