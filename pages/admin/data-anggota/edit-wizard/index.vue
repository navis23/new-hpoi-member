<template>
    <div class="relative overflow-hidden">
        <div class="relative min-h-screen px-4 lg:px-32 my-20 overflow-hidden">
            <div class="relative z-40 flex flex-col gap-4 w-full min-h-screen items-center justify-center">
                <div class="space-y-2 text-center">
                    <p class="font-oswald text-3xl text-hpoi-main uppercase">
                        _EDIT PROFIL
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
                        <div class="flex gap-x-2 items-center">
                            <ButtonBaseSmall @click="openModalListDpc()" class="hpoi flex items-center justify-center gap-x-1">
                                <Icon name="lucide:search" class="text-xl" />
                                <span>
                                    cari
                                </span>
                            </ButtonBaseSmall>
                            <!-- <FormKit
                                type="text"
                                label="DPC/Lokasi Anda"
                                placeholder="Klik untuk memilih lokasi"
                                help="Pilih Lokasi tempat Provider anda"
                                v-model="nama_dpc"
                                disabled
                                hidden
                            /> -->
                            <div class="space-y-1 w-full">
                                <p class="font-oswald font-bold text-sm">DPC/Lokasi Anda</p>
                                <p class="text-xs p-2 border rounded w-full">{{ dpc }}, {{ dpd }}</p>
                                <p class="text-xs font-oswald text-gray-500">Pilih Lokasi tempat Provider anda</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="border-t-2 pt-4 flex gap-2">
                        <ButtonBaseSmall
                        v-if="loading == false"
                        @click="saveUpdate()" 
                        class="flex items-center justify-center gap-x-1">
                            <Icon name="lucide:file-edit" class="text-xl" />
                            <span>
                                Update Data
                            </span>
                        </ButtonBaseSmall>
                        <ButtonBaseSmall
                        v-if="loading == false"
                        @click="cancelUpdate()" 
                        class="danger flex items-center justify-center gap-x-1">
                            <Icon name="lucide:x" class="text-xl" />
                            <span>
                                Cancel Update
                            </span>
                        </ButtonBaseSmall>
                        <ButtonBaseSmall
                        v-if="loading == true"
                        class="dark flex items-center justify-center gap-x-1" disabled>
                            <Icon name="svg-spinners:blocks-shuffle-3" class="text-xl" />
                            <span>
                                Updating Data ...
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
        <!-- <ClientOnly>
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
                                        <div :class="loading == false ? 'h-96 overflow-y-scroll' : ''" class="flex flex-col gap-2 w-full">
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
        </ClientOnly> -->

        <!-- modal choose with api prov n kab -->
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
                                    <HeadlessDialogTitle as="h3" class="mb-4 text-2xl flex items-center justify-between font-oswald font-semibold leading-6 text-gsi-darkblue">
                                        <h3>Pilih Lokasi Anda</h3>
                                        <button @click="CloseModal()">
                                            <Icon name="lucide:x" class="text-3xl" />
                                        </button>
                                    </HeadlessDialogTitle>
                                    
                                    <div v-if="loading == false && getProv" class="flex items-center justify-between py-2 mb-3">
                                        <div class="flex flex-col">
                                            <p class="text-sm">Provinsi dipilih :</p>
                                            <p class="font-semibold tracking-tight text-gsi-darkblue">{{ provNameChoosed }}</p>
                                        </div>
                                        <ButtonBaseSmall @click="changeProv" class="dark flex items-center justify-center gap-x-1">
                                            <Icon name="lucide:refresh-cw" class="text-xl" />
                                            <span>
                                                Ganti Provinsi
                                            </span>
                                        </ButtonBaseSmall>
                                    </div>
                                    <!-- <div v-if="loading == false" class="px-3 pt-2 border rounded-lg shadow-sm mb-2">
                                        <FormKit
                                            type="search"
                                            :placeholder="getProv ? 'Masukkan nama Kabupaten/Kota . . .' : 'Masukkan nama Provinsi . . .' "
                                            :label="getProv ? 'Cari Kabupaten/Kota' : 'Cari Provinsi'"
                                        />
                                    </div> -->
                                    <h3 v-if="loading == false" class="font-semibold">
                                        {{ getProv ? 'List Kabupaten/Kota' : 'List Provinsi' }}
                                    </h3>
                                    <div class="mt-2">
                                        <div :class="loading == false ? 'h-96 overflow-y-scroll' : ''" class="flex flex-col gap-2 w-full">
                                            <div v-if="loading == true" class="w-full flex justify-center items-center">
                                                <LoadingMini />
                                            </div>
                                            <div v-if="loadingData == true" class="w-full flex justify-center items-center">
                                                <LoadingMini />
                                            </div>
                                            <div v-if="loading == false && !getProv && loadingData == false" v-for="(item, index) in provAllTemp" :key="index" class="flex items-center justify-between bg-gray-50 py-2 px-3 border rounded-lg">
                                                <div class="flex gap-x-2 items-center">
                                                    <Icon v-if="item.name == dpd" name="lucide:check-square" class="text-xl text-hpoi-main" />
                                                    <p class="font-medium">
                                                        {{ item.name }}
                                                    </p>
                                                </div>
                                                <ButtonBaseSmall v-if="loading == false" @click="chooseProv(item)" class="flex items-center justify-center gap-x-1">
                                                    <Icon name="lucide:check" class="text-xl" />
                                                    <span>
                                                        Pilih 
                                                    </span>
                                                </ButtonBaseSmall>
                                            </div>

                                            <div v-if="loading == false && getProv && loadingData == false" v-for="(item, index) in kabAllTemp" :key="index" class="flex items-center justify-between bg-gray-50 py-2 px-3 border rounded-lg">
                                                <div class="flex gap-x-2 items-center">
                                                    <Icon v-if="item.name == dpc" name="lucide:check-square" class="text-xl text-hpoi-main" />
                                                    <p class="font-medium">
                                                        {{ item.name }}
                                                    </p>
                                                </div>
                                                <ButtonBaseSmall v-if="loading == false" @click="closeModalListDpc(item)" class="flex items-center justify-center gap-x-1">
                                                    <Icon name="lucide:check" class="text-xl" />
                                                    <span>
                                                        Pilih 
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
    dpc,
    dpd,
    id_dpc,
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

const provIdChoosed = ref('')
const provNameChoosed = ref('')
const kabNameChoosed = ref('')
const provAllTemp = ref<any[]>([])
const kabAllTemp = ref<any[]>([])
const getProv = ref(false)
const loadingData = ref(false)

onMounted(async () => {
    progress.value = 100
    await fetcDataProfil()
})


const { data: detail_anggota } = await useAsyncData('detail_anggota', async () => client
    .from('hpoi_detail_anggota')
    .select(`
        *,
        hpoi_anggota!inner(*),
        hpoi_dpc(*)
    `)
    .eq('hpoi_anggota.email',`${user.value?.email}`)
    .single()
    , { transform: (result : any) => result.data }
)

const { data: list_dpc, error } = await useAsyncData('list_dpc', async () => client
    .from('hpoi_dpc')
    .select(`*`)
    , { transform: (result : any) => result.data }
)
if(list_dpc.value){
    dpcAll.value = list_dpc.value
}

// fetch data

const fetcDataProfil = async () => {
    no_anggota.value = await detail_anggota.value.hpoi_anggota.no_anggota
    nama_provider.value = await detail_anggota.value.hpoi_anggota.nama_provider
    nama_pic.value = await detail_anggota.value.hpoi_anggota.nama_pic
    dpc.value = await detail_anggota.value.hpoi_anggota.dpc
    dpd.value = await detail_anggota.value.hpoi_anggota.dpd
}

const fetchDataDpc = async () => {
    loading.value = true

    const { data: list_dpc, error } = await useAsyncData('list_dpc', async () => client
        .from('hpoi_dpc')
        .select(`*`)
        , { transform: (result : any) => result.data }
    )

    if(list_dpc.value){
        dpcAll.value = list_dpc.value
        setTimeout(async () => {
            loading.value = false
        }, 1000);
    }

}

const {data: provinsi } = await useAsyncData(
    'provinsi', 
    () => $fetch('https://api.binderbyte.com/wilayah/provinsi?api_key=1bc6ebeca08d336cece6db2404974520559d8a6d83c85bb97c1112778bb2690b')
    ,{ transform: (result : any) => result.value }
)
provAllTemp.value = await provinsi.value


// choose data
const chooseProv = async (item:any) => {
    provIdChoosed.value = await item.id
    provNameChoosed.value = await item.name
    getProv.value = true
    loadingData.value = true

    await nextTick().then(async () => {
        setTimeout(async () => {
            console.log("Continue here")
            const fetchKabupaten: any = await $fetch(`https://api.binderbyte.com/wilayah/kabupaten?api_key=1bc6ebeca08d336cece6db2404974520559d8a6d83c85bb97c1112778bb2690b&id_provinsi=${provIdChoosed.value}`)
            kabAllTemp.value = fetchKabupaten.value
            loadingData.value = false
        }, 1000);
        // DOM is now updated
    })
}

const changeProv = async () => {
    loadingData.value = true
    provIdChoosed.value = ''
    provNameChoosed.value = ''
    getProv.value = false
    kabAllTemp.value = []

    setTimeout(async () => {
        loadingData.value = false
    }, 1000);
}

// function method utilities

const saveUpdate = async () => {
    const allData = {
        no_anggota: no_anggota.value,
        nama_provider: nama_provider.value,
        nama_pic: nama_pic.value,
        dpc: dpc.value,
        dpd: dpd.value,
    }

    // const dataDetail = {
    //     id_dpc: id_dpc.value
    // }

    console.log('data ditemukan gas update')
    loading.value = true

    const { data: anggota, error } = await client
    .from('hpoi_anggota')
    .update(allData)
    .eq('user_id', user.value?.id)
    .select()


    // const { data: detail_anggota, error: err } = await client
    // .from('hpoi_detail_anggota')
    // .update(dataDetail)
    // .eq('id_anggota', user.value?.id)
    // .select()

    setTimeout(async () => {
        loading.value = false
        storeAnggota.$reset()
        navigateTo("/admin/data-anggota")
    }, 1000);
}

const cancelUpdate = async () => {
    storeAnggota.$reset()
    navigateTo("/admin/data-anggota")
    
}

const openModalListDpc = async () => {
    is_open_dpc.value = true
    await fetchDataDpc()
}

const CloseModal = () => {
    is_open_dpc.value = false
    provIdChoosed.value = ''
    provNameChoosed.value = ''
    getProv.value = false
    kabAllTemp.value = []
}

// const closeModalListDpc = (item : any) => {
//     id_dpc.value = item.id
//     nama_dpc.value = item.nama_dpc
//     is_open_dpc.value = false
//     if(is_open_dpc.value == false) {
//         dpcAll.value = []
//     }
// }

const closeModalListDpc = (item : any) => {
    dpd.value = provNameChoosed.value
    dpc.value = item.name
    is_open_dpc.value = false
    if(is_open_dpc.value == false) {
        provIdChoosed.value = ''
        provNameChoosed.value = ''
        getProv.value = false
        kabAllTemp.value = []
    }
}


</script>

<style scoped>

</style>