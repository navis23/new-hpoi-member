<template>
    <div class="relative overflow-hidden">
        <div class="relative min-h-screen px-4 lg:px-32 my-20 overflow-hidden">
            <div class="relative z-40 flex flex-col gap-4 w-full min-h-screen items-center justify-center">
                <div class="space-y-2 text-center">
                    <p class="font-oswald text-3xl text-hpoi-main uppercase">
                        _Step 01
                    </p>
                    <h3 class="font-oswald text-4xl">
                        Data Profil Anggota
                    </h3>
                    <p class="text-gray-500 font-oswald">
                        Masukkan data lengkap profil anda
                    </p>
                </div>
                <div class="relative overflow-hidden z-40 bg-gray-50 w-96 shadow rounded-xl px-4 lg:px-8 py-6">
                    <div class="mt-4 mb-5">
                        <FormKit
                            type="text"
                            v-model="no_anggota"
                            prefix-icon="solana"
                            label="Nomor Anggota"
                            placeholder="Ketikkan No Anggota Anda"
                            help="Masukkan No Anggota yang terdaftar"
                        />
                        <FormKit
                            type="text"
                            v-model="nama_provider"
                            prefix-icon="people"
                            label="Nama Provider"
                            placeholder="Ketikkan nama Provider Anda"
                            help="Masukkan Nama Provider yang terdaftar"
                        />
                        <FormKit
                            type="text"
                            v-model="nama_pic"
                            prefix-icon="avatarMan"
                            label="Nama PIC"
                            placeholder="Ketikkan nama PIC Anda"
                            help="Masukkan Nama penanggung jawab yang terdaftar"
                        />
                        <div class="flex gap-x-2">
                            <ButtonBaseSmall @click="openModalListDpc()" class="hpoi flex items-center justify-center gap-x-1">
                                <Icon name="lucide:search" class="text-xl" />
                                <span>
                                    cari
                                </span>
                            </ButtonBaseSmall>
                            <FormKit
                                type="text"
                                prefix-icon="flag"
                                label="DPC Terdaftar"
                                placeholder="Klik untuk memilih DPC"
                                help="Pilih DPC tempat Provider terdaftar"
                                v-model="nama_dpc"
                                disabled
                            />
                        </div>
                        
                    </div>
                    <div class="border-t-2 pt-4">
                        <ButtonBaseSmall
                        v-if="loading == false &&
                            no_anggota != '' &&
                            nama_provider != '' &&
                            nama_pic != '' &&
                            nama_dpc != ''" 
                        @click="nextStep()" 
                        class="flex items-center justify-center gap-x-1">
                            <Icon name="lucide:arrow-right-square" class="text-xl" />
                            <span>
                                Lanjutkan
                            </span>
                        </ButtonBaseSmall>
                        <ButtonBaseSmall
                        v-if="loading == false &&
                            no_anggota == '' ||
                            nama_provider == '' ||
                            nama_pic == '' ||
                            nama_dpc == ''" 
                        class="muted flex items-center justify-center gap-x-1" disabled>
                            <Icon name="lucide:x" class="text-xl"/>
                            <span>
                                Lengkapi Semua Data
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

        <!-- modal to choose dpc -->
        <ClientOnly>
            <HeadlessTransitionRoot appear :show="is_open_dpc" as="template">
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
                                <HeadlessDialogPanel class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-gsi-smokewhite p-6 text-left align-middle shadow-xl transition-all">
                                    <HeadlessDialogTitle as="h3" class="text-2xl flex items-center justify-between font-oswald font-semibold leading-6 text-gsi-darkblue">
                                        <h3>List DPC</h3>
                                        <button @click="CloseModal()">
                                            <Icon name="lucide:x" class="text-3xl" />
                                        </button>
                                    </HeadlessDialogTitle>
                                    
                                    <div class="mt-4">
                                        <div class="flex flex-col gap-2 w-full ">
                                            <div v-if="loading == true" class="w-full flex justify-center items-center">
                                                <LoadingMini />
                                            </div>
                                            <div v-if="loading == false" v-for="(item, index) in dpcAll" :key="index" class="flex items-center justify-between bg-gray-50 py-2 px-3 border rounded-xl">
                                                <div class="flex gap-x-2 items-center">
                                                    <Icon v-if="item.nama_dpc == nama_dpc" name="lucide:check-square" class="text-xl text-hpoi-main" />
                                                    <p class="font-oswald">
                                                        {{ item.nama_dpc }}
                                                    </p>
                                                </div>
                                                <ButtonBaseSmall v-if="loading == false" @click="closeModalListDpc(item)" class="flex items-center justify-center gap-x-1">
                                                    <Icon name="lucide:check" class="text-xl" />
                                                    <span>
                                                        Pilih DPC
                                                    </span>
                                                </ButtonBaseSmall>
                                            </div>
                                        </div>
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
    progress,
    is_open_dpc,
    pass_step_one,
} = storeToRefs(storeGlobalData)

onMounted(async () => {
    progress.value = 5
})

// fetch data
const fetchDataDpc = async () => {
    loading.value = true

    const { data: list_dpc, error } = await useAsyncData('list_dpc', async () => client
        .from('hpoi_dpc')
        .select(`*`)
        , { transform: (result : any) => result.data }
    )

    // if(error){
    //     console.log(error.value?.message)
    //     setTimeout(async () => {
    //         loading.value = false
    //     }, 1000);
    // }

    if(list_dpc.value){
        dpcAll.value = list_dpc.value
        setTimeout(async () => {
            loading.value = false
        }, 1000);
    }

}


// function method utilities

const nextStep = async () => {
    if(
        no_anggota.value == '' &&
        nama_provider.value == '' &&
        nama_pic.value == '' &&
        nama_dpc.value == ''
    ){
        pass_step_one.value == true
    } else {
        pass_step_one.value == false
    }
    
    progress.value = 20
    navigateTo("/admin/data-anggota/register-wizard/step-two")
}

const openModalListDpc = async () => {
    is_open_dpc.value = true
    await fetchDataDpc()
}

const CloseModal = () => {
    is_open_dpc.value = false
}

const closeModalListDpc = (item : any) => {
    nama_dpc.value = item.nama_dpc
    is_open_dpc.value = false
}


</script>

<style scoped>

</style>