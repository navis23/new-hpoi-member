<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <!-- hero section -->
        <div class="relative min-h-screen bg-gray-800 px-4 lg:px-32 pt-32 overflow-hidden">
            <div class="flex flex-col items-center gap-4 justify-center h-full">
                <div v-motion-fade class="text-center space-y-3 z-10">
                    <div>
                        <h1 class="font-oswald text-6xl lg:text-9xl text-hpoi-main tracking-tighter">HPOI Member Area</h1>
                    </div>
                    <h3 class="font-oswald text-lg lg:text-3xl text-gsi-smokewhite">Dapatkan semua informasi terkait member dari HPOI</h3>
                </div>
                <button v-motion-fade class="mt-3 p-2 rounded-full flex items-center border-2 border-hpoi-main text-hpoi-main w-12 h-12 justify-center hover:scale-105 transition-all duration-300 hover:bg-hpoi-main hover:text-gsi-smokewhite">
                    <Icon name="lucide:arrow-down" class="text-4xl " />
                </button>
                <div v-motion-fade class="w-full mt-8">
                    <h3 class="font-oswald text-gsi-smokewhite text-xl lg:text-3xl"><span class="text-hpoi-main font-semibold underline underline-offset-8">Featured Member</span> of the Week</h3>
                </div>
                <div v-motion-slide-bottom :delay="500" class="relative w-full rounded-t-lg z-20 px-4 pt-4 bg-gsi-smokewhite">
                    <!-- <h3 class="font-oswald text-xl lg:text-3xl pb-4"><span class="text-hpoi-main font-semibold underline underline-offset-8 ">Featured Member</span> of the Week</h3> -->
                    
                    <!-- member featured cards -->
                    <div class="grid grid-cols-12 gap-4">
                        <div v-for="(item, index) in anggotaFeat" :key="index" class="relative col-span-12 lg:col-span-4 w-full border border-slate-800 bg-gray-800 text-gsi-smokewhite transition-all duration-300 rounded-xl group p-3">
                            <div class="relative">
                                <nuxt-img :src="item.hpoi_anggota.hero_img" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
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
                                        <Icon name="lucide:phone" class="text-lg" />
                                        <p class="font-oswald">
                                            {{ item.hpoi_anggota.telepon }}
                                        </p>
                                    </div>
                                    <div class="flex items-center gap-2 leading-snug line-clamp-2 text-sm pb-2">
                                        <Icon name="lucide:map-pin" class="text-lg" />
                                        <p class="font-oswald">
                                            {{ item.hpoi_dpc.nama_dpc }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-auto flex items-center gap-2">
                                <div class="relative inline-flex shrink-0 items-center justify-center rounded-full outline-none bg-slate-100">
                                    <Avatar class="overflow-hidden">
                                        <nuxt-img :src="item.hpoi_anggota.logo_img" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center" />
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
                                            <Icon name="lucide:clipboard-list" class="text-2xl" />
                                            <span>
                                                Detail Member
                                            </span>
                                        </ButtonBaseSmall>
                                    </nuxt-link>
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
            <p class="absolute py-10 -right-56 opacity-20 md:opacity-50 top-20">
                <Icon name="PatternThree" class="text-[28rem]"/>
            </p>
            <p class="absolute py-10 -left-56 opacity-20 md:opacity-50 bottom-10">
                <Icon name="PatternThree" class="text-[28rem]"/>
            </p>
        </div>
        
        <div v-motion-slide-visible-once-top :delay="500" class="relative w-full flex items-center justify-center px-4 lg:px-32 mt-20">
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
            <div class="mb-6 flex w-full flex-col items-end justify-between gap-4 sm:flex-row">
                <div class="flex w-full items-center sm:w-auto">
                    <div class="relative w-full sm:w-auto shadow">
                        <FormKit
                            type="search"
                            placeholder="Cari Member...."
                            prefix-icon="search"
                            outer-class="!mb-0"
                            inner-class="!mb-0"
                            v-model="search"
                            @keydown.enter="searchData"
                            @keydown.tab="searchData"
                        />
                    </div>
                </div>
                <ButtonBaseExpanded @click="reloadData()" :class="loading == true ? 'muted' : 'hpoi '" class="flex items-center justify-center gap-x-1 shadow-sm" :disabled="loading == true">
                    <Icon name="lucide:refresh-cw" class="text-2xl"/>
                    Refresh Data
                </ButtonBaseExpanded>
            </div>
            <!-- member featured cards -->
            <div v-if="loading == true" class="w-full flex justify-center items-center">
                <LoadingMini />
            </div>
            <div v-if="loading == false" class="grid grid-cols-12 gap-4">
                <div v-for="(item, index) in anggotaAll" :key="index" class="relative col-span-12 lg:col-span-4 w-full bg-white shadow transition-all duration-300 rounded-xl group p-3">
                    <div class="relative">
                        <nuxt-img :src="item.hpoi_anggota.hero_img" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
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
                                <Icon name="lucide:phone" class="text-lg" />
                                <p class="font-oswald">
                                    {{ item.hpoi_anggota.telepon }}
                                </p>
                            </div>
                            <div class="flex items-center gap-2 leading-snug line-clamp-2 text-sm pb-2">
                                <Icon name="lucide:map-pin" class="text-lg" />
                                <p class="font-oswald">
                                    {{ item.hpoi_dpc.nama_dpc }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-auto flex items-center gap-2">
                        <div class="relative inline-flex shrink-0 items-center justify-center outline-none rounded-full border">
                            <!-- <div class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="max-h-full max-w-full object-cover object-center shadow-sm h-8 w-8" />
                            </div> -->
                            <Avatar class="overflow-hidden bg-white">
                                <nuxt-img :src="item.hpoi_anggota.logo_img" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center" />
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
                                <ButtonBaseSmall class="dark">
                                    <Icon name="lucide:clipboard-list" class="text-2xl" />
                                    <span>
                                        Detail Member
                                    </span>
                                </ButtonBaseSmall>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="anggotaAll.length == 0 && !loading" class="w-full flex justify-center gap-x-2 items-center">
                <Icon name="lucide:file-warning" class="text-3xl text-red-600"/>
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
    loading
} = storeToRefs(storeGlobalData)

const anggotaAll = ref()
const anggotaFeat = ref()
const search = ref('')

// feth data from api
const { data: anggota } = await useAsyncData('anggota', async () => client
    .from('hpoi_detail_anggota')
    .select(`
        featured,
        hpoi_anggota(nama_provider, telepon, no_anggota, logo_img, hero_img),
        hpoi_dpc( nama_dpc )
    `)
    , { transform: (result : any) => result.data }
)
anggotaAll.value = await anggota.value
anggotaFeat.value = await anggota.value

// filtered featured member
const featuredMembers = computed(() =>
anggotaFeat.value.filter(
        (p : any) => p.featured == true
    ) || []
)

// shuffle all data
const shuffleAnggota = computed(() => 
    anggotaAll.value.sort(() => Math.random() - 0.5)
)

// all process fetching final data
const fetchShuffle = async () => {
    loading.value = true
    setTimeout(async () => {
        loading.value = false
        anggotaAll.value = await shuffleAnggota.value
    }, 1000);
}

const fetchFeatured = async () => {
    anggotaFeat.value = await featuredMembers.value
}

const reloadData = async () => {
    loading.value = true
    anggotaAll.value = await anggota.value
    const reshuffleAnggota = computed(() => 
        anggotaAll.value.sort(() => Math.random() - 0.5)
    )
    search.value = ''

    setTimeout(async () => {
        loading.value = false
        anggotaAll.value = await reshuffleAnggota.value
    }, 1000);
}

const searchData = async () => {
    loading.value = true
    const { data: search_anggota } = await useAsyncData('search_anggota', async () => client
        .from('hpoi_detail_anggota')
        .select(`
            featured,
            hpoi_anggota!inner(nama_provider, telepon, no_anggota, logo_img, hero_img),
            hpoi_dpc( nama_dpc )
        `)
        .ilike('hpoi_anggota.nama_provider', `%${search.value}%`)
        , { transform: (result : any) => result.data }
    )
    setTimeout(async () => {
        anggotaAll.value = await search_anggota.value
        loading.value = false
    }, 1000);
}

onMounted(async () => {
    await fetchFeatured()
    await fetchShuffle()
})



</script>

<style scoped>

</style>