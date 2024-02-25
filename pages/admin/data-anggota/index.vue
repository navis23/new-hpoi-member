<template>
    <div class="relative overflow-hidden">
        
        <!-- top navbar -->
        <nav class="absolute px-4 md:px-8 lg:px-16 xl:px-32 w-full h-16 flex items-center justify-between z-[99]">
            <div class="flex items-center justify-start w-44">
                <nuxt-link to="/">
                    <nuxt-img src="/img/hpoi.png" format="webp" loading="lazy" sizes="sm:25vw" class="object-cover object-center h-10"/>
                </nuxt-link>
            </div>
            <div class="flex gap-x-2 items-center justify-end" :class="detail_anggota != null && detail_anggota.role == true ? '' : 'w-44'">
                    <ButtonBaseSmall v-if="detail_anggota != null && detail_anggota.role == true" @click="toAdminHpoi()" class="hpoi">
                        <Icon name="lucide:pie-chart" class="text-xl" />
                        <span>To Admin HPOI</span>
                    </ButtonBaseSmall>
                    <ButtonBaseSmall @click="logout()" class="dark">
                        <Icon name="lucide:log-out" class="text-xl" />
                        <span>Logout</span>
                    </ButtonBaseSmall>
            </div>
        </nav>
        <nav v-if="detail_anggota != null" class="hidden lg:block">
            <div class="absolute px-4 top-16 md:px-8 lg:px-16 xl:px-32 w-full h-20 flex bg-gray-800 items-center justify-center z-[99]">
                <div class="flex gap-x-6 justify-between ">
                    <ButtonBaseSmall @click="goEditProfil()" class="mono shadow flex justify-center items-center gap-x-1">
                        <Icon name="lucide:contact" class="text-xl" />
                        <span>Edit Profil</span>
                    </ButtonBaseSmall>
                    <ButtonBaseSmall @click="goEditContact()" class="mono shadow flex justify-center items-center gap-x-1">
                        <Icon name="lucide:home" class="text-xl" />
                        <span>Edit Kontak</span>
                    </ButtonBaseSmall>
                    <ButtonBaseSmall @click="goEditSosmed()" class="mono shadow flex justify-center items-center gap-x-1">
                        <Icon name="lucide:tablet-smartphone" class="text-xl" />
                        <span>Edit Sosial Media</span>
                    </ButtonBaseSmall>
                    <ButtonBaseSmall @click="goEditLayanan()" class="mono shadow flex justify-center items-center gap-x-1">
                        <Icon name="lucide:scroll-text" class="text-xl" />
                        <span>Edit Layanan & Deskripsi</span>
                    </ButtonBaseSmall>
                    <ButtonBaseSmall @click="goEditGambar()" class="mono shadow flex justify-center items-center gap-x-1">
                        <Icon name="lucide:image-down" class="text-xl" />
                        <span>Edit Logo & Gambar</span>
                    </ButtonBaseSmall>
                    <ButtonBaseSmall @click="goUnduhCard()" class="shadow flex justify-center items-center gap-x-1">
                        <Icon name="lucide:credit-card" class="text-xl" />
                        <span>Unduh Membercard</span>
                    </ButtonBaseSmall>
                </div>
            </div>
        </nav>
        
        <!-- start section -->
        <div v-if="detail_anggota == null" class="relative min-h-screen bg-gray-800 px-4 md:px-8 lg:px-16 xl:px-32 overflow-hidden">
            <div class="relative z-40 flex flex-col gap-3 w-full min-h-screen items-center justify-center">
                <h3 class="font-oswald text-gsi-smokewhite text-4xl text-center">
                    <span class="text-gsi-gold">{{ user?.email }} </span>
                </h3>
                <h3 class="font-oswald text-gsi-smokewhite text-2xl text-center mb-4">
                    Akun anda belum memiliki data, segera lengkapi data anda dengan menekan tombol dibawah 
                </h3>
                <ButtonBase @click="goWizard()" class="hpoi flex items-center justify-center gap-x-1 shadow-sm">
                    <Icon name="lucide:clipboard-edit" class="text-xl" />
                    <span>Lengkapi Data</span>
                </ButtonBase>
            </div>
            <p class="absolute py-10 -right-56 opacity-20 md:opacity-50 top-20">
                <Icon name="PatternThree" class="text-[28rem]"/>
            </p>
            <p class="absolute py-10 -left-56 opacity-20 md:opacity-50 bottom-10">
                <Icon name="PatternThree" class="text-[28rem]"/>
            </p>
        </div>

        <!-- data is completed -->
        <div v-if="detail_anggota != null" class="relative min-h-screen my-20 lg:mt-44 px-4 md:px-8 lg:px-16 xl:px-32 overflow-hidden">
            <div class="font-oswald w-full text-center mb-5 lg:mb-10 text-gsi-darkblue">
                <h1 class="text-2xl lg:text-4xl">
                    Hai {{ detail_anggota?.hpoi_anggota.nama_provider }}, 
                </h1>
                <h3 class="text-lg lg:text-xl">
                    Selamat Datang di Dashboard Member Area
                </h3>
                <p v-if="detail_anggota.role == true">
                    
                    Anda berstatus <span class="text-hpoi-main uppercase"> Admin Humas</span>, akses halaman Admin HPOI lewat tombol diatas
                </p>
            </div>
            <div class="relative z-40 grid grid-cols-12 pb-10 gap-6">
                <div class="lg:hidden col-span-12 bg-gray-50 rounded-xl shadow p-6 overflow-hidden">
                    <div class="flex items-center justify-between">
                        <p class="font-oswald text-xl font-bold text-hpoi-main">
                            Unduh Kartu Anggota
                        </p>
                        <ButtonBaseSmall @click="goUnduhCard()" class="hpoi">
                            <Icon name="lucide:download" class="text-lg" />
                            <span>Unduh Kartu</span>
                        </ButtonBaseSmall>
                    </div>
                </div>
                <!-- profil view -->
                <div class="col-span-12 lg:col-span-4 bg-gray-50 rounded-xl shadow p-6 overflow-hidden">
                    <div class="flex items-center justify-between border-b-2 pb-2 mb-2">
                        <p class="font-oswald text-xl font-bold text-hpoi-main">
                            Data Profil
                        </p>
                        <ButtonBaseSmall @click="goEditProfil()" class="">
                            <Icon name="lucide:edit" class="text-lg" />
                            <span>Edit Data</span>
                        </ButtonBaseSmall>
                    </div>
                    <div class="space-y-3 font-oswald">
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">Nomor Anggota</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:book-user" class="text-2xl text-hpoi-main" />
                                <p class="text-lg">
                                    {{ detail_anggota?.hpoi_anggota.no_anggota }}
                                </p>
                            </div>
                        </div>
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">Nama Provider</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:flag" class="text-2xl text-hpoi-main" />
                                <p class="text-lg">
                                    {{ detail_anggota?.hpoi_anggota.nama_provider }}
                                </p>
                            </div>
                        </div>
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">Nama PIC</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:user-circle-2" class="text-2xl text-hpoi-main" />
                                <p class="text-lg">
                                    {{ detail_anggota?.hpoi_anggota.nama_pic }}
                                </p>
                            </div>
                        </div>
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">DPC Terdaftar</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:landmark" class="text-2xl text-hpoi-main" />
                                <p class="text-lg">
                                    {{ detail_anggota?.hpoi_dpc.nama_dpc }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- decoration image -->
                <div class="hidden lg:block lg:col-span-4 overflow-hidden ">
                    <div class="w-full flex justify-center h-80">
                        <nuxt-img src="https://rxabauhlxtkghurnabvr.supabase.co/storage/v1/object/public/hpoi_images/outhpoi.webp" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-[20.75rem]"/>
                    </div>
                </div>
                <!-- contact view -->
                <div class="col-span-12 lg:col-span-4 bg-gray-50 rounded-xl shadow p-6 overflow-hidden">
                    <div class="flex items-center justify-between border-b-2 pb-2 mb-2">
                        <p class="font-oswald text-xl font-bold text-hpoi-main">
                            Data Kontak
                        </p>
                        <ButtonBaseSmall @click="goEditContact()" class="">
                            <Icon name="lucide:edit" class="text-lg" />
                            <span>Edit Data</span>
                        </ButtonBaseSmall>
                    </div>
                    <div class="space-y-3 font-oswald">
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">Alamat Kantor</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:map-pin" class="text-2xl text-hpoi-main" />
                                <p class="text-lg">
                                    {{ detail_anggota?.hpoi_anggota.alamat }}
                                </p>
                            </div>
                        </div>
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">No Telepon / WA</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:tablet-smartphone" class="text-2xl text-hpoi-main" />
                                <p class="text-lg">
                                    {{ detail_anggota?.hpoi_anggota.telepon }}
                                </p>
                            </div>
                        </div>
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">Nama Website</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:globe" class="text-2xl text-hpoi-main" />
                                <p class="text-lg">
                                    {{ detail_anggota?.hpoi_anggota.website }}
                                </p>
                            </div>
                        </div>
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">URL Website</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:terminal-square" class="text-2xl text-hpoi-main" />
                                <p class="text-lg">
                                    {{ detail_anggota?.hpoi_anggota.website_url }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- sosmed view -->
                <div class="col-span-12 lg:col-span-3 bg-gray-50 rounded-xl shadow p-6 overflow-hidden">
                    <div class="flex items-center justify-between border-b-2 pb-2 mb-2">
                        <p class="font-oswald text-xl font-bold text-hpoi-main">
                            Data Sosmed
                        </p>
                        <ButtonBaseSmall @click="goEditSosmed()" class="">
                            <Icon name="lucide:edit" class="text-lg" />
                            <span>Edit Data</span>
                        </ButtonBaseSmall>
                    </div>
                    <div class="space-y-3 font-oswald">
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">Nama Instagram</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:instagram" class="text-2xl text-hpoi-main" />
                                <p class="text-lg">
                                    {{ detail_anggota?.hpoi_anggota.instagram }}
                                </p>
                            </div>
                        </div>
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">URL Instagram</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:terminal-square" class="text-lg text-hpoi-main" />
                                <p class="text-xs">
                                    {{ detail_anggota?.hpoi_anggota.instagram_url }}
                                </p>
                            </div>
                        </div>
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">Nama  Facebook</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:facebook" class="text-2xl text-hpoi-main" />
                                <p class="text-lg">
                                    {{ detail_anggota?.hpoi_anggota.facebook }}
                                </p>
                            </div>
                        </div>
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">URL Facebook</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:terminal-square" class="text-lg text-hpoi-main" />
                                <p class="text-xs">
                                    {{ detail_anggota?.hpoi_anggota.facebook_url }}
                                </p>
                            </div>
                        </div>
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">Nama Youtube</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:youtube" class="text-2xl text-hpoi-main" />
                                <p class="text-base">
                                    {{ detail_anggota?.hpoi_anggota.youtube }}
                                </p>
                            </div>
                        </div>
                        <div class="text-gsi-darkblue">
                            <p class="text-sm">URL Youtube</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <Icon name="lucide:terminal-square" class="text-lg text-hpoi-main" />
                                <p class="text-xs">
                                    {{ detail_anggota?.hpoi_anggota.youtube_url }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            
                <!-- Layanan & Deskripsi view -->
                <div class="col-span-12 lg:col-span-9 bg-gray-50 rounded-xl shadow p-6 overflow-hidden">
                    <div class="flex items-center justify-between border-b-2 pb-2 mb-2">
                        <p class="font-oswald text-xl font-bold text-hpoi-main">
                            Data layanan & Deskripsi
                        </p>
                        <ButtonBaseSmall @click="goEditLayanan()" class="">
                            <Icon name="lucide:edit" class="text-lg" />
                            <span>Edit Data</span>
                        </ButtonBaseSmall>
                    </div>
                    <div class="grid grid-cols-12 gap-3">
                        <div class="col-span-12 lg:col-span-4 text-gsi-darkblue">
                            <p class="font-oswald text-base pb-3">Deskripsi 1</p>
                            <div class="border rounded p-2">
                                <p class="text-sm">

                                    {{ detail_anggota?.hpoi_anggota.profile_one }}
                                </p>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-4 text-gsi-darkblue">
                            <p class="font-oswald text-base pb-3">Deskripsi 2</p>
                            <div class="border rounded p-2">
                                <p class="text-sm">

                                    {{ detail_anggota?.hpoi_anggota.profile_two }}
                                </p>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-4 text-gsi-darkblue">
                            <p class="font-oswald text-base pb-3">Layanan</p>
                            <div class="flex items-center justify-start gap-x-1">
                                <div class="flex flex-wrap gap-2">
                                    <div v-for="(item, index) in detail_anggota?.hpoi_anggota.layanan" :key="index" class="flex gap-x-2 items-center justify-center px-3 py-2 rounded-xl bg-gsi-darkblue text-gsi-darkblue bg-opacity-10"> 
                                        <p class="text-sm font-oswald">{{ item }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <!-- Gambar view -->
                <div class="col-span-12 bg-gray-50 rounded-xl shadow p-6 overflow-hidden">
                    <div class="flex items-center justify-between border-b-2 pb-2 mb-2">
                        <p class="font-oswald text-xl font-bold text-hpoi-main">
                            Data Gambar & Logo
                        </p>
                        <ButtonBaseSmall @click="goEditGambar()" class="">
                            <Icon name="lucide:edit" class="text-lg" />
                            <span>Edit Data</span>
                        </ButtonBaseSmall>
                    </div>
                    <div class="grid grid-cols-12 gap-5 font-oswald">
                        <div class="col-span-12 lg:col-span-2 text-gsi-darkblue">
                            <p class="text-base pb-3">Gambar Logo</p>
                            <nuxt-img v-if="detail_anggota?.hpoi_anggota.logo_img"  :src="detail_anggota?.hpoi_anggota.logo_img" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center h-16 rounded"/>
                        </div>
                        <div class="col-span-12 lg:col-span-5 text-gsi-darkblue">
                            <p class="text-base pb-3">Gambar Hero Utama</p>
                            <nuxt-img v-if="detail_anggota?.hpoi_anggota.hero_img"  :src="detail_anggota?.hpoi_anggota.hero_img" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center rounded"/>
                        </div>
                        <div class="col-span-12 lg:col-span-5 text-gsi-darkblue">
                            <p class="text-base pb-3">Gambar Galeri</p>
                            <div class="grid grid-cols-2 gap-2">
                                <nuxt-img v-if="detail_anggota?.hpoi_anggota.gallery_one"  :src="detail_anggota?.hpoi_anggota.gallery_one" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center rounded"/>
                                <nuxt-img v-if="detail_anggota?.hpoi_anggota.gallery_two"  :src="detail_anggota?.hpoi_anggota.gallery_two" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center rounded"/>
                                <nuxt-img v-if="detail_anggota?.hpoi_anggota.gallery_three"  :src="detail_anggota?.hpoi_anggota.gallery_three" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center rounded"/>
                                <nuxt-img v-if="detail_anggota?.hpoi_anggota.gallery_four"  :src="detail_anggota?.hpoi_anggota.gallery_four" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center rounded"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- pattern background -->
            <p class="absolute py-10 -right-56 opacity-20 md:opacity-50 -top-10">
                <Icon name="PatternThree" class="text-[26rem] lg:text-[36rem]"/>
            </p>
            <p class="absolute py-10 -left-56 opacity-20 md:opacity-50 -bottom-10">
                <Icon name="PatternThree" class="text-[26rem] lg:text-[36rem]"/>
            </p>
            <p class="absolute py-10 -left-56 opacity-20 md:opacity-50 top-10">
                <Icon name="PatternThree" class="text-[26rem] lg:text-[36rem]"/>
            </p>
            <p class="absolute py-10 -right-56 opacity-20 md:opacity-50 bottom-10">
                <Icon name="PatternThree" class="text-[26rem] lg:text-[36rem]"/>
            </p>
        </div>

        <ClientOnly>
            <HeadlessTransitionRoot appear :show="loading" as="template">
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
                                    <div class="my-8">
                                        <div v-if="loading" class="w-full flex justify-center">
                                            <p class="flex gap-x-2 text-2xl justify-center items-center text-gsi-darkblue py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                                <Icon name="svg-spinners:blocks-wave" class="text-4xl text-red-600" />
                                                <span class="text-red-500">
                                                    Dalam Proses Logout...
                                                </span>
                                            </p>
                                        </div>
                                        <p class="text-gsi-darkblue">Sampai bertemu dilain kesempatan</p>
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
const storeGlobalData = useGlobalDataStore()
const storeAnggota = useAnggotaStore()
const client = useSupabaseClient()
const user = useSupabaseUser()

console.log(user.value?.email)

const {
    loading
} = storeToRefs(storeGlobalData)

// first fetch check available data
// const { data: detail_anggota, error } = await useAsyncData('detail_anggota', async () => client
//     .from('hpoi_anggota')
//     .select(`*`)
//     .ilike('email',`%${user.value?.email}%`)
//     .single()
//     , { transform: (result : any) => result.data }
// )

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
// anggotaAll.value = await anggota.value

// logout 
const toAdminHpoi = () => {
    navigateTo("/admin-hpoi")
}
const logout = async () => {
    loading.value = true
    storeAnggota.$reset()
    try {
        let { error } = await client.auth.signOut()
        if(error) throw error;
        setTimeout(async () => {
            loading.value = false
            navigateTo('/secret/login')
            console.log('berhasil log out')
        }, 2000);

    } catch (error) {
        console.log(error)
    }
    
}

// flying to another page
const goWizard = async () => {
    navigateTo("/admin/data-anggota/register-wizard")
}

const goEditProfil = async () => {
    navigateTo("/admin/data-anggota/edit-wizard")
}
const goEditContact = async () => {
    navigateTo("/admin/data-anggota/edit-wizard/edit-two")
}
const goEditSosmed = async () => {
    navigateTo("/admin/data-anggota/edit-wizard/edit-three")
}
const goEditLayanan = async () => {
    navigateTo("/admin/data-anggota/edit-wizard/edit-four")
}
const goEditGambar = async () => {
    navigateTo("/admin/data-anggota/edit-wizard/edit-five")
}
const goUnduhCard = async () => {
    navigateTo("/admin/data-anggota/edit-wizard/get-card")
}
</script>

<style scoped>

</style>