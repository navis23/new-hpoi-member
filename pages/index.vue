<template>
    <div class="relative overflow-hidden">
        
        <Navbar />
        <!-- hero section -->
        <div class="relative min-h-screen bg-gray-800 px-4 lg:px-32 pt-32 overflow-hidden">
            <div class="flex flex-col items-center gap-4 justify-center h-full">
                <div :class="!fadingTextHero ? 'scale-0' : 'scale-100'" class="text-center transition-all duration-300 space-y-3 z-10">
                    <div>
                        <h1 class="font-oswald text-6xl lg:text-9xl text-hpoi-main tracking-tighter">HPOI Member Area</h1>
                    </div>
                    <h2 class="font-oswald text-lg lg:text-3xl text-gsi-smokewhite">Dapatkan semua informasi terkait Anggota dari HPOI</h2>
                </div>
                <button id="arrowdown" aria-label="Arrow Down" :class="!fadingArrowHero ? 'opacity-0' : 'opacity-100'" class="mt-3 p-2 rounded-full flex items-center border-2 border-hpoi-main text-hpoi-main w-12 h-12 justify-center hover:scale-105 transition-all duration-300 hover:bg-hpoi-main hover:text-gsi-smokewhite">
                    <Icon name="lucide:arrow-down" class="text-4xl " />
                </button>
                <div :class="!fadingTextHero ? 'opacity-0' : 'opacity-100'" class="w-full mt-8 transition-all duration-300">
                    <p class="font-oswald text-gsi-smokewhite text-xl lg:text-3xl">
                        <span class="text-hpoi-main font-semibold underline underline-offset-8">Featured ADS</span> of the Month
                    </p>
                </div>
                <div :class="!fadingTextHero ? 'translate-y-80' : 'translate-y-0'" class="relative w-full rounded-t-lg z-20 px-4 pt-4 bg-gsi-smokewhite transition-all duration-200">
                    <!-- <h3 class="font-oswald text-xl lg:text-3xl pb-4"><span class="text-hpoi-main font-semibold underline underline-offset-8 ">Featured Member</span> of the Week</h3> -->
                    
                    <!-- member featured cards -->
                    <div v-if="anggotaFeat.length != 0" :class="!fadingArrowHero ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'" class="grid grid-cols-12 gap-4 transition-all duration-300">
                        <div v-for="(item, index) in anggotaFeat" :key="index" class="relative col-span-12 lg:col-span-4 w-full border border-slate-800 bg-gray-800 text-gsi-smokewhite transition-all duration-300 rounded-xl group p-3">
                            <div class="relative">
                                <nuxt-img v-if="item.hpoi_anggota.hero_img" :src="item.hpoi_anggota.hero_img" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                                <!-- <span class="inline-block px-3 font-sans py-1 text-xs rounded-full bg-sky-100 text-sky-500 border-sky-100 border absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    Uyesss
                                </span> -->
                                <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    {{ item.hpoi_anggota.nama_provider }}
                                </Badge>
                            </div>
                            <div class="mb-6 mt-3">
                                <div class="flex gap-2 leading-snug line-clamp-2 text-sm pb-2">
                                    <p class="font-oswald text-xl md:text-2xl text-hpoi-main ">
                                        {{ item.hpoi_anggota.nama_provider }}
                                    </p>
                                </div>
                                <div class="flex gap-4 justify-start">
                                    <div class="flex items-center gap-2 leading-snug line-clamp-2 text-sm pb-2">
                                        <p>
                                            <Icon name="lucide:phone" class="text-lg" />
                                        </p>
                                        <p class="font-oswald">
                                            {{ item.hpoi_anggota.telepon }}
                                        </p>
                                    </div>
                                    <div class="flex items-center gap-2 leading-snug line-clamp-2 text-sm pb-2">
                                        <p>
                                            <Icon name="lucide:map-pin" class="text-lg" />
                                        </p>
                                        <p class="font-oswald">
                                            {{ item.hpoi_anggota.dpc }}, {{ item.hpoi_anggota.dpd }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-auto flex items-center gap-2">
                                <div class="relative inline-flex shrink-0 items-center justify-center rounded-full outline-none bg-slate-100">
                                    <Avatar class="overflow-hidden">
                                        <nuxt-img v-if="item.hpoi_anggota.logo_img" :src="item.hpoi_anggota.logo_img" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center" />
                                    </Avatar>
                                </div>
                                <div class="leading-none">
                                    <p class="text-xs text-gray-400">ID Member</p>
                                    <h4 class="text-base font-oswald font-medium leading-tight text-hpoi-main">
                                        {{ item.hpoi_anggota.no_anggota }}
                                    </h4>
                                </div>
                                <div class="ms-auto">
                                    <nuxt-link :to="`/anggota/${item.hpoi_anggota.no_anggota}`">
                                        <ButtonBaseSmall class="muted">
                                            <p>
                                                <Icon name="lucide:clipboard-list" class="text-2xl" />
                                            </p>
                                            <span>
                                                Detail Member
                                            </span>
                                        </ButtonBaseSmall>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="anggotaFeat.length == 0" :class="!fadingArrowHero ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'" class="grid grid-cols-12 gap-4 transition-all duration-300">
                        <div class="relative col-span-12 lg:col-span-4 w-full border border-slate-800 bg-gray-800 text-gsi-smokewhite transition-all duration-300 rounded-xl group p-3">
                            <div class="relative">
                                <nuxt-img preload fetchpriority="high" src="https://rxabauhlxtkghurnabvr.supabase.co/storage/v1/object/public/hpoi_images/zerofeature.webp" alt="featured anggota kosong" format="webp" sizes="sm:50vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                                <!-- <span class="inline-block px-3 font-sans py-1 text-xs rounded-full bg-sky-100 text-sky-500 border-sky-100 border absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    Uyesss
                                </span> -->
                                <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    _______________________
                                </Badge>
                            </div>
                            <div class="mb-6 mt-3">
                                <div class="flex gap-2 justify-center leading-snug line-clamp-2 text-sm pb-2">
                                    <p class="font-oswald text-xl md:text-2xl text-hpoi-main ">
                                        Call for featured advertising
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative col-span-12 lg:col-span-4 w-full border border-slate-800 bg-gray-800 text-gsi-smokewhite transition-all duration-300 rounded-xl group p-3">
                            <div class="relative">
                                <nuxt-img preload fetchpriority="high" src="https://rxabauhlxtkghurnabvr.supabase.co/storage/v1/object/public/hpoi_images/zerofeature.webp" alt="featured anggota kosong" format="webp" sizes="sm:50vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                                <!-- <span class="inline-block px-3 font-sans py-1 text-xs rounded-full bg-sky-100 text-sky-500 border-sky-100 border absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    Uyesss
                                </span> -->
                                <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    _______________________
                                </Badge>
                            </div>
                            <div class="mb-6 mt-3">
                                <div class="flex gap-2 justify-center leading-snug line-clamp-2 text-sm pb-2">
                                    <p class="font-oswald text-xl md:text-2xl text-hpoi-main ">
                                        Call for featured advertising
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative col-span-12 lg:col-span-4 w-full border border-slate-800 bg-gray-800 text-gsi-smokewhite transition-all duration-300 rounded-xl group p-3">
                            <div class="relative">
                                <nuxt-img preload fetchpriority="high" src="https://rxabauhlxtkghurnabvr.supabase.co/storage/v1/object/public/hpoi_images/zerofeature.webp" alt="featured anggota kosong" format="webp" sizes="sm:50vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                                <!-- <span class="inline-block px-3 font-sans py-1 text-xs rounded-full bg-sky-100 text-sky-500 border-sky-100 border absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    Uyesss
                                </span> -->
                                <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    _______________________
                                </Badge>
                            </div>
                            <div class="mb-6 mt-3">
                                <div class="flex gap-2 justify-center leading-snug line-clamp-2 text-sm pb-2">
                                    <p class="font-oswald text-xl md:text-2xl text-hpoi-main ">
                                        Call for featured advertising
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bg-gsi-smokewhite bottom-0 -right-4 w-4 h-4 ">
                        <div class=" w-4 h-4 rounded-bl-xl bg-gray-800 ">
                        </div>
                    </div>
                    <div class="absolute bg-gsi-smokewhite bottom-0 -left-4 w-4 h-4 ">
                        <div class=" w-4 h-4 rounded-br-xl bg-gray-800 ">
                        </div>
                    </div>
                </div>
            </div>
            <p class="absolute py-10 -right-56 opacity-20 md:opacity-40 top-20">
                <Icon name="PatternThree" class="text-[28rem]"/>
            </p>
            <p class="absolute py-10 -left-56 opacity-20 md:opacity-40 bottom-10">
                <Icon name="PatternThree" class="text-[28rem]"/>
            </p>
        </div>
        
        <div class="relative w-full flex items-center justify-center px-4 lg:px-32 mt-20">
            <div class="relative bg-gray-800 w-full py-4 rounded-xl overflow-hidden">
                <h3 class="font-oswald text-xl lg:text-5xl text-center text-gsi-smokewhite">
                    <span class="text-hpoi-main font-bold">All Member</span> of HPOI
                </h3>
                <p class="absolute py-10 right-0 opacity-20 md:opacity-50 -top-16">
                    <Icon name="PatternThree" class="text-[15rem]"/>
                </p>
                <p class="absolute py-10 left-0 opacity-20 md:opacity-50 -bottom-16">
                    <Icon name="PatternThree" class="text-[15rem]"/>
                </p>
            </div>
        </div>

        <!-- about section -->
        <div class="relative w-full px-4 lg:px-32 py-10">
            <!-- search & action -->
            <div class="flex flex-col gap-4 mb-6 ">
                <div class="flex w-full flex-col items-end justify-between gap-4 sm:flex-row">
                    <div class="flex w-full items-center">
                        <div class="relative w-full ">
                            <FormKit
                                type="search"
                                placeholder="Masukkan nama member...."
                                prefix-icon="search"
                                outer-class="!mb-0"
                                inner-class="!mb-0"
                                label="Cari Member"
                                v-model="search"
                                @keydown.enter="searchData"
                                @keydown.tab="searchData"
                                @focusout="searchData"
                            />
                        </div>
                    </div>
                    <div class="flex justify-end gap-3 flex-col lg:flex-row w-full">
                        <ButtonBaseExpanded @click="openFilterTab" v-if="!openFilter" class="flex items-center justify-center gap-x-1 shadow-sm">
                            <p>
                                <Icon name="lucide:filter" class="text-base" />
                            </p>
                            <span class="text-sm">
                                Filter by Lokasi
                            </span>
                        </ButtonBaseExpanded>
                        <ButtonBaseExpanded @click="reloadData()" :class="loading == true ? 'muted' : 'hpoi '" class="flex items-center justify-center gap-x-1 shadow-sm" :disabled="loading == true">
                            <Icon name="lucide:refresh-cw" class="text-2xl"/>
                            Refresh Data
                        </ButtonBaseExpanded>
                    </div>
                </div>
                <div v-if="openFilter" class="flex flex-col border rounded-lg px-3 py-2">
                    <div class="flex gap-x-3 items-center pb-2">
                        <p class="font-semibold text-sm">
                            Filter by Lokasi
                        </p>
                        <ButtonBaseSmall @click="closeFilterTab" class="danger">
                            <p>
                                <Icon name="lucide:x" class="text-base" />
                            </p>
                            <span class="text-sm">
                                Tutup Filter
                            </span>
                        </ButtonBaseSmall>
                        
                    </div>
                    <div class="grid grid-cols-6 gap-2 lg:gap-4 w-full ">
                        <div class="col-span-6 lg:col-span-2 w-full">
                            <FormKit
                                v-model="provinsiTemp"
                                @change="openKab()"
                                type="select"
                                label="Pilih Provinsi"
                                name="nama provinsi"
                                help="Pilih Provinsi lokasi anda."
                            >
                                <optgroup>
                                    <option  v-for="(item, index) in provinsiAll" :value="JSON.stringify(item)">{{ item.name }}</option>
                                </optgroup>
                            </FormKit>
                        </div>
                        <div class="col-span-6 lg:col-span-2 w-full">
                            <FormKit
                                v-if="kab_enabled && provinsi_id != ''"
                                v-model="kabupaten_name"
                                @change="filterData()"
                                type="select"
                                label="Pilih Kabupaten"
                                name="nama kabupaten"
                                help="Pilih Kabupaten lokasi anda."
                                >
                                <optgroup>
                                    <option  v-for="(i, index) in kabupatenAll" :value="i?.name">{{ i.name }}</option>
                                </optgroup>
                            </FormKit>
                        </div>
                        <div v-if="kabupaten_name != ''" class="col-span-6 lg:col-span-2 flex flex-col items-center justify-center border p-2 rounded-lg bg-white">
                            <p>
                                Data Filtered by :
                            </p>
                            <p class="font-semibold capitalize text-sm lg:text-base">
                                {{ kabupaten_name.toLowerCase() }}, {{ provinsi_name.toLowerCase() }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- member featured cards -->
            <div v-if="loading == true" class="w-full flex justify-center items-center">
                <LoadingMini />
            </div>
            <div v-if="loading == false" class="grid grid-cols-12 gap-2 lg:gap-4">
                <div v-for="(item, index) in anggotaActive" :key="index" class="relative col-span-6 lg:col-span-4 w-full bg-white shadow transition-all duration-300 rounded-xl group px-1 py-2 lg:p-3">
                    <!-- for desktop layout view -->
                    <div class="hidden lg:block relative">
                        <nuxt-img v-if="item.hpoi_anggota.hero_img" :src="item.hpoi_anggota.hero_img" alt="hero provider" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center h-40 w-full rounded-lg"/>

                        <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            {{ item.hpoi_anggota.nama_provider }}
                        </Badge>
                    </div>
                    <div class="hidden lg:block mb-6 mt-3">
                        <div class="flex gap-2 leading-snug line-clamp-2 text-sm pb-2">
                            <p class="font-oswald text-xl md:text-2xl text-orange-600 ">
                                {{ item.hpoi_anggota.nama_provider }}
                            </p>
                        </div>
                        <div class="flex gap-4 justify-start">
                            <div class="flex items-center gap-1 leading-snug line-clamp-2 text-sm pb-2">
                                <p>
                                    <Icon name="lucide:phone-outgoing" class="text-base" />
                                </p>
                                <p class="font-oswald">
                                    {{ item.hpoi_anggota.telepon }}
                                </p>
                            </div>
                            <div class="flex items-center gap-1 leading-snug line-clamp-2 text-sm pb-2">
                                <p>
                                    <Icon name="lucide:user" class="text-base" />
                                </p>
                                <p class="font-oswald uppercase">
                                    {{ item.hpoi_anggota.nama_pic }}
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-1 leading-snug line-clamp-2 text-sm">
                            <p>
                                <Icon name="lucide:map-pin" class="text-lg" />
                            </p>
                            <p class="text-sm font-oswald capitalize">
                                {{ item.hpoi_anggota.dpc.toLowerCase() }}, {{ item.hpoi_anggota.dpd.toLowerCase() }}
                            </p>
                        </div>
                    </div>
                    <div class="hidden lg:flex mt-auto items-center gap-2">
                        <div class="relative inline-flex shrink-0 items-center justify-center outline-none rounded-full border">
                            <Avatar class="overflow-hidden bg-white">
                                <nuxt-img v-if="item.hpoi_anggota.logo_img" :src="item.hpoi_anggota.logo_img" alt="logo provider" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center" />
                            </Avatar>
                        </div>
                        <div class="leading-none">
                            <p class="text-xs text-gray-700">ID Member</p>
                            <div class="flex gap-x-1 items-center justify-center pt-1">
                                <h4 class="text-base font-oswald leading-tight text-orange-700">
                                    {{ item.hpoi_anggota.no_anggota }} 
                                </h4>
                                <p class="text-xs p-1 rounded bg-opacity-5 uppercase font-semibold" :class="item.status ? 'bg-emerald-600 text-emerald-700' : 'bg-rose-600 text-rose-700'">{{ item.status ? 'aktif' : 'pasif' }}</p>
                            </div>
                        </div>
                        <div class="ms-auto">
                            <nuxt-link :to="`/anggota/${item.hpoi_anggota.no_anggota}`">
                                <ButtonBaseSmall class="dark">
                                    <p>
                                        <Icon name="lucide:clipboard-list" class="text-2xl" />
                                    </p>
                                    <span>
                                        Detail Member
                                    </span>
                                </ButtonBaseSmall>
                            </nuxt-link>
                        </div>
                    </div>

                    <!-- for mobile layout view -->
                    <div class="lg:hidden absolute top-0 left-0 mb-1 w-full">
                        <nuxt-img v-if="item.hpoi_anggota.hero_img" :src="item.hpoi_anggota.hero_img" alt="hero provider" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center h-24 w-full rounded-t-lg"/>
                    </div>
                    <div class="lg:hidden relative flex mt-16 items-center w-full justify-center">
                        <Avatar class="bg-white overflow-hidden p-1">
                            <nuxt-img v-if="item.hpoi_anggota.logo_img" :src="item.hpoi_anggota.logo_img" alt="logo provider" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center rounded-full" />
                        </Avatar>
                    </div>
                    <div class="lg:hidden relative flex flex-col mt-auto items-center w-full justify-center leading-none">
                        <div class="flex gap-x-1 items-center justify-center pt-1">
                            <h4 class="text-xs font-oswald leading-tight text-orange-700">
                                _{{ item.hpoi_anggota.no_anggota }} 
                            </h4>
                            <p class="text-[0.5rem] p-1 rounded bg-opacity-5 uppercase font-semibold" :class="item.status ? 'bg-emerald-600 text-emerald-700' : 'bg-rose-600 text-rose-700'">{{ item.status ? 'aktif' : 'pasif' }}</p>
                        </div>
                    </div>
                    <div class="lg:hidden relative flex flex-col items-center w-full justify-center leading-none overflow-hidden">
                        <p class="font-oswald text-sm text-center md:text-2xl text-orange-600 leading-none pt-1 pb-3 tracking-tight uppercase">
                            {{ item.hpoi_anggota.nama_provider }}
                        </p>
                        <div class="text-xs text-gsi-darkblue space-y-1 text-center border-y py-1 w-full">
                            <p class="font-oswald font-medium capitalize">
                                {{ item.hpoi_anggota.nama_pic.toLowerCase() }}
                            </p>
                            <p class="font-oswald truncate text-emerald-600">
                                {{ item.hpoi_anggota.telepon }}
                            </p>
                            <div>
                                <p class="text-xs font-oswald leading-none capitalize">
                                    {{ item.hpoi_anggota.dpc.toLowerCase() }}
                                </p>
                                <p class="text-xs font-oswald leading-none capitalize">
                                    {{ item.hpoi_anggota.dpd.toLowerCase() }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:hidden flex justify-center relative pt-3 w-full">
                        <nuxt-link :to="`/anggota/${item.hpoi_anggota.no_anggota}`">
                            <ButtonBaseSmall class="dark">
                                <p>
                                    <Icon name="lucide:clipboard-list" class="text-2xl" />
                                </p>
                                <span>
                                    Detail Member
                                </span>
                            </ButtonBaseSmall>
                        </nuxt-link>
                    </div>
                    <!-- <div class="lg:hidden block absolute lg:relative bottom-2">
                        <nuxt-link :to="`/anggota/${item.hpoi_anggota.no_anggota}`">
                            <ButtonBaseSmall class="dark">
                                <p>
                                    <Icon name="lucide:clipboard-list" class="text-2xl" />
                                </p>
                                <span>
                                    Detail Member
                                </span>
                            </ButtonBaseSmall>
                        </nuxt-link>
                    </div> -->
                </div>
                
            </div>
            <div v-if="loadingPaginate == true" class="w-full  py-6 flex justify-center items-center">
                <LoadingMini />
            </div>
            <div v-if="anggotaActive.length >= 1 && to < anggotaStoredCache.length && !loadingPaginate && search == '' && kabupaten_name == ''" class="w-full py-6">
                <button class="w-full bg-hpoi-main py-4 px-2 font-semibold rounded-lg flex items-center justify-center gap-x-2" @click="paginateFetch()">
                    <p>
                        <Icon name="lucide:eye" class="text-2xl"/>
                    </p>
                    <p>
                        Lihat Lebih Banyak Anggota...
                    </p>
                </button>
            </div>
            <div v-if="anggotaActive.length == 0 && !loading" class="w-full flex justify-center gap-x-2 items-center">
                <p>
                    <Icon name="lucide:file-warning" class="text-3xl text-red-600"/>
                </p>
                <p class="font-oswald">
                    Tidak ada data yang ditemukan, silahkan cari kembali atau refresh data
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const storeGlobalData = useGlobalDataStore()
const client = useSupabaseClient()

const {
    anggotaFeat,
    anggotaActive,
    anggotaPaginated,
    anggotaStoredCache,
    loading
} = storeToRefs(storeGlobalData)

const anggotaAll = ref()

const search = ref('')
const loadingPaginate = ref(false)

const page = ref(0)
const from = ref(0)
const to = ref(11)
const itemPage = 12

const openFilter = ref(false)
const provinsi_id = ref('')
const provinsi_name = ref('')
const kabupaten_name = ref('')
const kabupatenAll = ref<any[]>([])
const provinsiAll = ref<any[]>([])
const kabupatenTemp = ref()
const provinsiTemp = ref()
const kab_enabled = ref(false)

const fadingTextHero = ref(false)
const fadingArrowHero = ref(false)

const { data: cachedData } = useNuxtData('anggota_key');
console.log('cache data first iteration')
// console.log(cachedData.value)
console.log('check first data cache is stored or not, 0 mean not stored')
console.log('the number of cache data is : ' + anggotaStoredCache.value.length)

if(cachedData.value){
    anggotaStoredCache.value = cachedData.value
    console.log('cache data is found & not null, get data from cache')

} else {
    console.log('cache data is not found & null, fetch data from API')

    const { data: anggota } = await useAsyncData('anggota_key', async () => client
        .from('hpoi_detail_anggota')
        .select(`
            featured, activated, status,
            hpoi_anggota(nama_provider, telepon, no_anggota, nama_pic, logo_img, hero_img, dpc, dpd),
            hpoi_dpc( nama_dpc )
        `)
        .eq('activated', true)
        , { transform: (result : any) => result.data }
    ) || []
    
    anggotaStoredCache.value = anggota.value

    console.log('get data from fetching API, the number is : ' + anggotaStoredCache.value.length)
}


// filtered featured member
const featuredMembers = computed(() =>
anggotaStoredCache.value.filter(
        (p : any) => p.featured == true
    ) || []
)

//  paginate fetch
const paginateFetch = async () => {
    loadingPaginate.value = true
    page.value += 1

    console.log('plus one ' + page.value)
    console.log('before ' + from.value)
    if(page.value > 0) {
        from.value += 1
    }
    
    console.log('after ' + from.value)
    from.value = page.value * itemPage
    to.value = from.value + itemPage

    console.log(from.value +' | ' + to.value)

    anggotaPaginated.value = anggotaAll.value.slice(from.value, to.value)

    // console.log(anggotaPaginated.value)
    setTimeout(async () => {
        anggotaActive.value = [...anggotaActive.value, ...anggotaPaginated.value]
        loadingPaginate.value = false
    }, 1000);
}

// shuffle all data
const shuffleAnggota = computed(() => 
    anggotaStoredCache.value.sort(() => Math.random() - 0.5) || []
)

// all process fetching final data
const fetchShuffle = async () => {
    loading.value = true
    // console.log(shuffleAnggota.value)
    anggotaAll.value = shuffleAnggota.value
    setTimeout(async () => {
        loading.value = false
        anggotaActive.value = await shuffleAnggota.value.slice(from.value, itemPage)
    }, 1000);
}

const fetchFeatured = async () => {
    if(featuredMembers.value.length != 0){
        console.log('featured member exist')
        anggotaFeat.value = await featuredMembers.value
    } else {
        console.log('featured member not exist / 0')
    }
}

// const fetchActived = async () => {
//     anggotaActive.value = await activeMembers.value
// }

const reloadData = async () => {
    loading.value = true
    anggotaActive.value = await anggotaStoredCache.value
    const reshuffleAnggota = computed(() => 
        anggotaActive.value.sort(() => Math.random() - 0.5).slice(0,12)
    )
    search.value = ''
    from.value = 0
    to.value = 11
    page.value = 0

    setTimeout(async () => {
        loading.value = false
        anggotaActive.value = await reshuffleAnggota.value
        // anggotaActive.value = await activeMembers.value
    }, 1000);
}

const searchData = async () => {
    if(search.value == '') {
        setTimeout(async () => {
            await reloadData()
            console.log('search is empty & get cache data back')
        }, 1000);
    } else {
        loading.value = true
        const { data: search_anggota } = await client
            .from('hpoi_detail_anggota')
            .select(`
                featured, activated, status,
                hpoi_anggota!inner(nama_provider, telepon, no_anggota, nama_pic, logo_img, hero_img, dpc, dpd),
                hpoi_dpc( nama_dpc )
            `)
            .ilike('hpoi_anggota.nama_provider', `%${search.value}%`)
            .eq('activated', true)
        // console.log(search_anggota)
        setTimeout(async () => {
            anggotaActive.value = search_anggota
            loading.value = false
        }, 1000);
    }
    
}

const fetchActivated = async () => {
    fadingTextHero.value = true
    await fetchShuffle()
    setTimeout(async () => {
        fadingArrowHero.value = true
    }, 250)
}

// filtering data
const {data: provinsi } = await useAsyncData(
    'provinsi', 
    () => $fetch('https://api.binderbyte.com/wilayah/provinsi?api_key=1bc6ebeca08d336cece6db2404974520559d8a6d83c85bb97c1112778bb2690b')
    ,{ transform: (result : any) => result.value }
)
provinsiAll.value = await provinsi.value

const openFilterTab = () => {
    openFilter.value = !openFilter.value
    provinsi_id.value = ''
    provinsi_name.value = ''
    kabupaten_name.value = ''
    kabupatenAll.value = []
    
}
const closeFilterTab = async () => {
    openFilter.value = !openFilter.value
    provinsi_id.value = ''
    provinsi_name.value = ''
    kabupaten_name.value = ''
    kabupatenAll.value = []
    await filterData()
}
const openKab = async () => {
    kabupaten_name.value = ''
    const convertObj = await JSON.parse(provinsiTemp.value)
    const {id, name} = await convertObj
    provinsi_id.value = await id
    provinsi_name.value = await name

    console.log(convertObj)
    console.log(provinsi_id.value + ' wkwkwk ' + provinsi_name.value)
    await nextTick().then(async () => {
        // DOM is now updated
        console.log("Continue here")
        const fetchKabupaten: any = await $fetch(`https://api.binderbyte.com/wilayah/kabupaten?api_key=1bc6ebeca08d336cece6db2404974520559d8a6d83c85bb97c1112778bb2690b&id_provinsi=${provinsi_id.value}`)
        kabupatenAll.value = fetchKabupaten.value

        if(kabupatenAll.value.length != 0) {
            kab_enabled.value = true
            console.log(kabupatenAll.value)
        }
    })
}

const filterData = async () => {
    if(kabupaten_name.value == '') {
        loading.value = true
        setTimeout(async () => {
            await reloadData()
            console.log('filter is empty & get cache data back')
        }, 1000);
    } else {
        loading.value = true
        const { data: filter_anggota } = await client
            .from('hpoi_detail_anggota')
            .select(`
                featured, activated, status,
                hpoi_anggota!inner(nama_provider, telepon, no_anggota, nama_pic, logo_img, hero_img, dpc, dpd),
                hpoi_dpc( nama_dpc )
            `)
            .ilike('hpoi_anggota.dpc', `%${kabupaten_name.value}%`)
            .eq('activated', true)
        // console.log(search_anggota)
        setTimeout(async () => {
            anggotaActive.value = filter_anggota
            loading.value = false
        }, 1000);
    }
}

onMounted(async () => {
    await fetchFeatured()
    await fetchActivated()
})



</script>

<style scoped>

</style>