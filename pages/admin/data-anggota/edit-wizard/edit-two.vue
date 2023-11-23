<template>
    <div class="relative overflow-hidden">
        <div class="relative min-h-screen px-4 lg:px-32 my-20 overflow-hidden">
            <div class="relative z-40 flex flex-col gap-4 w-full min-h-screen items-center justify-center">
                <div class="space-y-2 text-center">
                    <p class="font-oswald text-3xl text-hpoi-main uppercase">
                        _Step 02
                    </p>
                    <h3 class="font-oswald text-4xl">
                        Data Kontak Anggota
                    </h3>
                    <p class="text-gray-500 font-oswald">
                        Masukkan data lengkap kontak anda
                    </p>
                </div>
                <div class="relative overflow-hidden z-40 bg-gray-50 w-96 shadow rounded-xl px-4 lg:px-8 py-6">
                    <div class="mt-4 mb-5">
                        <FormKit
                            type="text"
                            prefix-icon="flag"
                            label="Alamat Kantor"
                            v-model="alamat"
                            placeholder="Ketikkan alamat lengkap Anda"
                            help="Masukkan alamat anda yang sesuai"
                        />
                        <FormKit
                            type="text"
                            prefix-icon="whatsapp"
                            label="Nomor Telepon"
                            v-model="telepon"
                            placeholder="Ketikkan no telepon Anda"
                            help="Masukkan no telepon/WA yang sesuai"
                        />
                        <FormKit
                            type="text"
                            prefix-icon="cardano"
                            label="Nama Website (Optional)*"
                            v-model="website"
                            placeholder="Ketikkan Nama Website Anda"
                            help="Masukkan nama website yang sesuai"
                        />
                        <FormKit
                            v-if="website != ''"
                            type="text"
                            prefix-icon="uploadCloud"
                            label="URL Website"
                            v-model="website_url"
                            placeholder="Ketikkan URL Website Anda"
                            help="Masukkan url web contoh: https://hpoi.org/"
                        />
                        
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
} = storeToRefs(storeAnggota)

const {
    loading,
    progress,
    is_open_dpc,
    pass_step_one,
} = storeToRefs(storeGlobalData)

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
    alamat.value = await detail_anggota.value.hpoi_anggota.alamat
    telepon.value = await detail_anggota.value.hpoi_anggota.telepon
    website.value = await detail_anggota.value.hpoi_anggota.website
    website_url.value = await detail_anggota.value.hpoi_anggota.website_url
}


// function method utilities

const saveUpdate = async () => {
    const allData = {
        alamat: alamat.value,
        telepon: telepon.value,
        website: website.value,
        website_url: website_url.value
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

</script>