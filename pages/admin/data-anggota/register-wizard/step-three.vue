<template>
    <div class="relative overflow-hidden">
        <div class="relative min-h-screen px-4 lg:px-32 my-20 overflow-hidden">
            <div class="relative z-40 flex flex-col gap-4 w-full min-h-screen items-center justify-center">
                <div class="space-y-2 text-center">
                    <p class="font-oswald text-3xl text-hpoi-main uppercase">
                        _Step 03
                    </p>
                    <h3 class="font-oswald text-4xl">
                        Data Sosial Media Anggota
                    </h3>
                    <p class="text-gray-500 font-oswald">
                        Masukkan data lengkap sosial media anda
                    </p>
                </div>
                <div class="relative overflow-hidden z-40 bg-gray-50 w-96 shadow rounded-xl px-4 lg:px-8 py-6">
                    <div class="mt-4 mb-5 divide-y-2">
                        <div>
                            <FormKit
                                type="text"
                                prefix-icon="instagram"
                                label="Alamat Instagram (optional)*"
                                v-model="instagram"
                                placeholder="Ketikkan nama instagram Anda"
                                help="Masukkan nama akun instagram anda yang sesuai"
                            />
                            <FormKit
                                v-if="instagram != ''"
                                type="text"
                                prefix-icon="uploadCloud"
                                label="URL Instagram"
                                v-model="instagram_url"
                                placeholder="Ketikkan URL Instagram Anda"
                                help="Masukkan url IG contoh: https://www.instagram.com/hpoi_org/"
                            />
                        </div>
                        <div class="pt-4">
                            <FormKit
                                type="text"
                                prefix-icon="facebook"
                                label="Alamat Facebook (optional)*"
                                v-model="facebook"
                                placeholder="Ketikkan nama Facebook Anda"
                                help="Masukkan nama akun Facebook anda yang sesuai"
                            />
                            <FormKit
                                v-if="facebook != ''"
                                type="text"
                                prefix-icon="uploadCloud"
                                label="URL Facebook"
                                v-model="facebook_url"
                                placeholder="Ketikkan URL Facebook Anda"
                                help="Masukkan url FB contoh: https://www.facebook.com/hpoi.org"
                            />
                        </div>
                        <div class="pt-4">
                            <FormKit
                                type="text"
                                prefix-icon="youtube"
                                label="Alamat Youtube (optional)*"
                                v-model="youtube"
                                placeholder="Ketikkan nama Youtube Anda"
                                help="Masukkan nama akun Youtube anda yang sesuai"
                            />
                            <FormKit
                                v-if="youtube != ''"
                                type="text"
                                prefix-icon="uploadCloud"
                                label="URL Youtube"
                                v-model="youtube_url"
                                placeholder="Ketikkan URL Youtube Anda"
                                help="Masukkan url Youtube contoh: https://www.youtube.com/@hpoi_org"
                            />
                        </div>
                        
                    </div>
                    <div class="border-t-2 flex gap-x-2 pt-4">
                        <ButtonBaseSmall v-if="loading == false" @click="backStep()" class="muted flex items-center justify-center gap-x-1">
                            <Icon name="lucide:arrow-left-square" class="text-xl" />
                            <span>
                                Kembali
                            </span>
                        </ButtonBaseSmall>
                        <ButtonBaseSmall v-if="loading == false" @click="nextStep()" class="flex items-center justify-center gap-x-1">
                            <Icon name="lucide:arrow-right-square" class="text-xl" />
                            <span>
                                Lanjutkan
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
const client = useSupabaseClient()
const user = useSupabaseUser()
const storeAnggota = useAnggotaStore()

const {
    dpcAll,
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
    progress
} = storeToRefs(storeGlobalData)

onMounted(async () => {
    progress.value = 40
})


const nextStep = async () => {
    progress.value = 60
    navigateTo("/admin/data-anggota/register-wizard/step-four")
}
const backStep = async () => {
    progress.value = 20
    navigateTo("/admin/data-anggota/register-wizard/step-two")
}


</script>

<style scoped>

</style>