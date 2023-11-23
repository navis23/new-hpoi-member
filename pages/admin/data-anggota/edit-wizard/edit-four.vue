<template>
    <div class="relative overflow-hidden">
        <div class="relative min-h-screen px-4 lg:px-32 my-20 overflow-hidden">
            <div class="relative z-40 flex flex-col gap-4 w-full min-h-screen items-center justify-center">
                <div class="space-y-2 text-center">
                    <p class="font-oswald text-3xl text-hpoi-main uppercase">
                        _Step 04
                    </p>
                    <h3 class="font-oswald text-4xl">
                        Data Layanan & Deskripsi Profil Anggota
                    </h3>
                    <p class="text-gray-500 font-oswald">
                        Masukkan data lengkap layanan & deskripsi profil anda
                    </p>
                </div>
                <div class="relative overflow-hidden z-40 bg-gray-50 w-96 shadow rounded-xl px-4 lg:px-8 py-6">
                    <div class="mt-4 mb-5 divide-y-2">
                        <div>
                            <FormKit
                                type="textarea"
                                label="Deskripsi Profil (Paragraf 1)"
                                v-model="profile_one"
                                placeholder="Ketikkan deskripsi profil Anda untuk paragraf pertama"
                                help="Masukkan deskripsi profil Anda untuk paragraf pertama"
                            />
                            <FormKit
                                type="textarea"
                                label="Deskripsi Profil (Paragraf 2)"
                                v-model="profile_two"
                                placeholder="Ketikkan deskripsi profil Anda untuk paragraf kedua"
                                help="Masukkan deskripsi profil Anda untuk paragraf kedua"
                            />
                        </div>
                        <div class="pt-4">
                            <FormKit
                                type="text"
                                prefix-icon="megaphone"
                                label="Jenis Layanan"
                                v-model="nama_layanan"
                                placeholder="Ketikkan nama Layanan Anda"
                                help="Masukkan nama layanan provider anda, layanan dapat di masukkan berulang satu per satu"
                            />
                            <ButtonBaseSmall v-if="loading == false && nama_layanan != ''" @click="pushLayanan()" class="hpoi mb-4">
                                <Icon name="lucide:list-plus" class="text-xl" />
                                <span>
                                    Tambahkan Layanan
                                </span>
                            </ButtonBaseSmall>
                            <ButtonBaseSmall v-if="loading == false && nama_layanan == ''" class="muted mb-4" :disabled="loading == false">
                                <Icon name="lucide:list-plus" class="text-xl" />
                                <span>
                                    Tambahkan Layanan
                                </span>
                            </ButtonBaseSmall>
                            <ButtonBaseSmall v-if="loading == true" class="muted mb-4" :disabled="loading == true">
                                <Icon name="svg-spinners:blocks-shuffle-3" class="text-xl" />
                                <span>
                                    Menambahkan
                                </span>
                            </ButtonBaseSmall>
                            <div class="p-2 rounded bg-gsi-darkblue">
                                <h3 class="font-oswald text-gsi-smokewhite pb-2">List Layanan</h3>
                                <Badge v-if="layananAll.length == 0" class="mono">
                                    Belum ada layanan
                                </Badge>
                                <LoadingMini v-if="layananAll.length != 0 && loading == true" class="text-gsi-smokewhite w-full text-center" />
                                <div v-if="layananAll.length != 0 && loading == false" class="flex flex-wrap gap-2">
                                    <Badge v-for="(item, index) in layananAll" :key="index" class="mono flex gap-x-2 justify-between items-center">
                                        <p>
                                            {{ item }}
                                        </p>
                                        <button @click="pullLayanan(index)">
                                            <Icon name="lucide:x-circle" class="text-lg text-red-500" />
                                        </button>
                                    </Badge>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="border-t-2 pt-4">
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
    layananAll
} = storeToRefs(storeAnggota)

const {
    loading,
    progress,
    is_open_dpc,
    pass_step_one,
} = storeToRefs(storeGlobalData)

const nama_layanan = ref('')

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

// fetch data

const fetcDataProfil = async () => {
    profile_one.value = await detail_anggota.value.hpoi_anggota.profile_one
    profile_two.value = await detail_anggota.value.hpoi_anggota.profile_two
    layananAll.value = await detail_anggota.value.hpoi_anggota.layanan
}


// function method utilities

const saveUpdate = async () => {
    const allData = {
        profile_one: profile_one.value,
        profile_two: profile_two.value,
        layanan: layananAll.value
    }

    console.log('data ditemukan gas update')
    loading.value = true

    const { data: anggota, error } = await client
    .from('hpoi_anggota')
    .update(allData)
    .eq('user_id', user.value?.id)
    .select()

    setTimeout(async () => {
        loading.value = false
        storeAnggota.$reset()
        navigateTo("/admin/data-anggota")
    }, 1000);
}

// setup layanan array
const pushLayanan = async () => {
    loading.value = true
    setTimeout(async () => {
        await layananAll.value.push(nama_layanan.value)
        nama_layanan.value = ''
        loading.value = false
        console.log(layananAll.value)
    }, 1000);
}

const pullLayanan = async(index : any) => {
    loading.value = true
    setTimeout(async () => {
        await layananAll.value.splice(index, 1)
        nama_layanan.value = ''
        loading.value = false
        console.log(layananAll.value)
    }, 1000);
}

</script>

<style scoped>

</style>