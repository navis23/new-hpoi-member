<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <!-- hero start -->
        <div class="relative px-4 lg:px-32 pt-24 overflow-hidden">
            <div class="flex flex-col items-start gap-4 justify-center h-full">
                <div v-motion-fade class="space-y-1 z-10">
                    <p class="font-oswald text-lg lg:text-xl font-semibold text-hpoi-main">__{{ detail_anggota?.no_anggota }}</p>
                    <h1 class="font-oswald text-4xl lg:text-7xl font-semibold">{{ detail_anggota?.nama_provider }}</h1>
                </div>
                <div v-motion-slide-left :delay="300" class="w-full md:h-[22rem] rounded-xl overflow-hidden flex items-center justify-center ">
                    <nuxt-img v-if="detail_anggota?.hero_img" :src="detail_anggota?.hero_img" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center w-full rounded-lg"/>
                </div>
                <div v-motion-slide-right :delay="300"  class="grid grid-cols-12 w-full gap-y-3">
                    <div class="lg:col-span-2 col-span-6 h-28 w-28 overflow-hidden flex items-center shadow rounded-xl">
                        <nuxt-img v-if="detail_anggota?.logo_img" :src="detail_anggota?.logo_img" format="webp" loading="lazy" sizes="sm:50vw" class=" object-fill object-center w-full rounded-lg"/>
                    </div>
                    
                    <div class="flex flex-col justify-end lg:col-span-2 col-span-6">
                        <h3 class="text-6xl lg:text-7xl font-oswald">
                            {{ detail_anggota?.layanan.length }}+
                        </h3>
                        <p class="text-lg lg:text-xl font-oswald">
                            Jenis Layanan
                        </p>
                    </div>
                    <div class="col-span-12 lg:col-span-8 ">
                        <h3 class="text-sm lg:text-base mb-4">
                            Selamat datang di <span class="text-hpoi-main underline underline-offset-2 tracking-wide font-semibold font-oswald">{{ detail_anggota?.nama_provider }} </span> member area, dapatkan berbagai informasi tentang <span class="text-hpoi-main underline underline-offset-2 tracking-wide font-semibold font-oswald">{{ detail_anggota?.nama_provider }} </span> secara lengkap disini. Jelajahi profil lengkapnya dibawah & segera jadwalkan kegiatan anda.
                        </h3>
                        <ButtonBase class="dark">
                            <Icon name="lucide:arrow-down" class="text-2xl" />
                            <span>
                                Explore Sekarang
                            </span>
                        </ButtonBase>
                    </div>
                </div>
            </div>
        </div>
        <!-- about start -->
        <div v-motion-slide-bottom :delay="300" class="relative px-4 lg:px-64 overflow-hidden bg-gray-800 my-20">
            <div class="relative flex flex-col gap-y-3 z-20 w-full bg-gsi-smokewhite px-4 lg:px-16">
                <h3 class="font-oswald text-3xl lg:text-5xl text-gsi-darkblue mb-4 text-center">
                    <span class="text-hpoi-main">Sekilas</span> Tentang Kami
                </h3>
                <p class="text-sm indent-8 text-justify lg:text-base">
                    {{ detail_anggota?.profile_one }}
                </p>
                <p class="text-sm indent-8 text-justify lg:text-base">
                    {{ detail_anggota?.profile_two }}
                </p>
                <div class="absolute bg-gsi-smokewhite top-0 -right-4 w-4 h-4 ">
                    <div class=" w-4 h-4 rounded-tl-xl bg-gray-800 ">
                    </div>
                </div>
                <div class="absolute bg-gsi-smokewhite top-0 -left-4 w-4 h-4 ">
                    <div class=" w-4 h-4 rounded-tr-xl bg-gray-800 ">
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
            <p class="absolute py-10 right-0 opacity-20 md:opacity-50 -top-16">
                <Icon name="PatternThree" class="text-[20rem]"/>
            </p>
            <p class="absolute py-10 left-0 opacity-20 md:opacity-50 -bottom-16">
                <Icon name="PatternThree" class="text-[20rem]"/>
            </p>
        </div>
        <!-- services start -->
        <div class="relative pb-10 px-4 lg:px-32">
            <div class="relative z-40 grid grid-cols-12 rounded-xl items-center gap-6 ">
                <div v-motion-slide-visible-once-left :delay="400" class="relative flex gap-4 justify-between items-center col-span-12 lg:col-span-4 rounded-xl">
                    <nuxt-img src="https://rxabauhlxtkghurnabvr.supabase.co/storage/v1/object/public/hpoi_images/outhpoi.webp" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full rounded-lg"/>
                </div>
                <div v-motion-slide-visible-once-right :delay="500" class="col-span-12 lg:col-span-8 flex flex-col gap-3 lg:gap-4 lg:pl-6">
                    <h3 class="font-oswald text-3xl lg:text-4xl 2xl:text-5xl tracking-tight text-gsi-darkblue"><span class="text-hpoi-main">Layanan</span> Kami</h3>
                    <p class="text-sm lg:text-base"><span class="font-semibold">{{ detail_anggota?.nama_provider }}</span> menyediakan berbagai layanan yaitu :</p>
                    <div class="flex flex-wrap gap-6">
                        <div v-for="(item, index) in detail_anggota?.layanan" :key="index" class="flex gap-x-2 items-center justify-center px-4 py-3 rounded-xl bg-gsi-darkblue text-gsi-darkblue bg-opacity-10"> 
                            <Icon name="lucide:wind" class="text-xl lg:text-3xl rotate-180" />
                            <p class="text-base lg:text-2xl font-oswald">{{ item }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- contact start -->
        <div class="relative px-4 lg:px-64 overflow-hidden bg-gray-800 mt-20">
            <div class="relative flex flex-col gap-y-3 z-20 w-full bg-gsi-smokewhite px-4 pb-4 lg:pb-16 rounded-b-xl lg:px-16">
                <div v-motion-slide-visible-once-bottom class="relative overflow-hidden z-40 bg-gray-50 col-span-6 lg:col-span-3 flex items-center gap-4 lg:gap-8 text-gsi-darkblue shadow rounded-xl px-4 lg:px-8 py-6">
                    <div class="flex flex-col gap-y-3 lg:gap-y-5 border-r pr-4 lg:pr-8 border-slate-300 font-oswald font-semibold text-lg lg:text-2xl">
                        <p>C</p>
                        <p>O</p>
                        <p>N</p>
                        <p>T</p>
                        <p>A</p>
                        <p>C</p>
                        <p>T</p>
                    </div>
                    <div class="relative z-40 flex flex-col gap-3 lg:gap-4 text-gsi-darkblue">
                        <div class="flex gap-x-3 items-center justify-start">
                            <Icon name="lucide:user" class="text-2xl lg:text-3xl" />
                            <p class="font-oswald text-base lg:text-xl">{{ detail_anggota?.nama_pic }}</p>
                        </div>
                        <div class="flex gap-x-3 items-center justify-start">
                            <Icon name="lucide:home" class="text-2xl lg:text-3xl" />
                            <p class="font-oswald text-base lg:text-xl">{{ detail_anggota?.alamat }}</p>
                        </div>
                        <div class="flex gap-x-3 items-center justify-start">
                            <Icon name="lucide:phone" class="text-2xl lg:text-3xl" />
                            <p class="font-oswald text-base lg:text-xl">{{ detail_anggota?.telepon }}</p>
                        </div>
                        <div v-if="detail_anggota?.email != ''" class="flex gap-x-3 items-center justify-start">
                            <Icon name="lucide:mail" class="text-2xl lg:text-3xl" />
                            <p class="font-oswald text-base lg:text-xl">{{ detail_anggota?.email }}</p>
                        </div>
                        <div v-if="detail_anggota?.instagram != ''" class="flex gap-x-3 items-center justify-start">
                            <Icon name="lucide:instagram" class="text-2xl lg:text-3xl" />
                            <p class="font-oswald text-base lg:text-xl">{{ detail_anggota?.instagram }}</p>
                        </div>
                        <div v-if="detail_anggota?.youtube != ''" class="flex gap-x-3 items-center justify-start">
                            <Icon name="lucide:youtube" class="text-2xl lg:text-3xl" />
                            <p class="font-oswald text-base lg:text-xl">{{ detail_anggota?.youtube }}</p>
                        </div>
                        <div v-if="detail_anggota?.facebook != ''" class="flex gap-x-3 items-center justify-start">
                            <Icon name="lucide:facebook" class="text-2xl lg:text-3xl" />
                            <p class="font-oswald text-base lg:text-xl">{{ detail_anggota?.facebook }}</p>
                        </div>
                        <div v-if="detail_anggota?.website != ''" class="flex gap-x-3 items-center justify-start">
                            <Icon name="lucide:globe" class="text-2xl lg:text-3xl" />
                            <p class="font-oswald text-base lg:text-xl">{{ detail_anggota?.website }}</p>
                        </div>
                    </div>
                    <div class="absolute -right-12 opacity-50 md:opacity-80 bottom-3 -rotate-90">
                        <Icon name="PatternThree" class="text-[15rem] lg:text-[16.5rem]"/>
                    </div>
                </div>
                <div class="absolute bg-gsi-smokewhite top-0 -right-4 w-4 h-4 ">
                    <div class=" w-4 h-4 rounded-tl-xl bg-gray-800 ">
                    </div>
                </div>
                <div class="absolute bg-gsi-smokewhite top-0 -left-4 w-4 h-4 ">
                    <div class=" w-4 h-4 rounded-tr-xl bg-gray-800 ">
                    </div>
                </div>
            </div>
            <p class="absolute py-10 right-0 opacity-20 md:opacity-50 -top-16">
                <Icon name="PatternThree" class="text-[20rem]"/>
                <!-- <nuxt-img src="/img/circle01.svg" loading="lazy" sizes="sm:50vw" class="object-cover  object-center h-96 w-full"/> -->
            </p>
            <p class="absolute py-10 left-0 opacity-20 md:opacity-50 bottom-0">
                <Icon name="PatternThree" class="text-[20rem]"/>
                <!-- <nuxt-img src="/img/circle01.svg" loading="lazy" sizes="sm:50vw" class="object-cover  object-center h-96 w-full"/> -->
            </p>
        </div>
        <!-- gallery start -->
        <div class="relative min-h-screen bg-gray-800 px-4 lg:px-64 py-20 overflow-hidden">
            <h3 class="font-oswald relative z-20 text-center text-3xl lg:text-4xl 2xl:text-5xl tracking-tight text-gsi-smokewhite"><span class="text-hpoi-main">Mini</span> Galeri</h3>
            <div v-motion-fade-visible-once class="relative z-20 grid grid-cols-6 flex-wrap gap-6 py-10">
                <nuxt-img v-if="detail_anggota?.gallery_one" :src="detail_anggota?.gallery_one" format="webp" loading="lazy" sizes="sm:50vw" class="col-span-6 lg:col-span-3 object-cover object-center w-full rounded-xl shadow-lg"/>
                <nuxt-img v-if="detail_anggota?.gallery_two" :src="detail_anggota?.gallery_two" format="webp" loading="lazy" sizes="sm:50vw" class="col-span-6 lg:col-span-3 object-cover object-center w-full rounded-xl shadow-lg"/>
                <nuxt-img v-if="detail_anggota?.gallery_three" :src="detail_anggota?.gallery_three" format="webp" loading="lazy" sizes="sm:50vw" class="col-span-6 lg:col-span-3 object-cover object-center w-full rounded-xl shadow-lg"/>
                <nuxt-img v-if="detail_anggota?.gallery_four" :src="detail_anggota?.gallery_four" format="webp" loading="lazy" sizes="sm:50vw" class="col-span-6 lg:col-span-3 object-cover object-center w-full rounded-xl shadow-lg"/>
            </div>
            <p class="absolute py-10 right-0 opacity-20 md:opacity-50 top-32">
                <Icon name="PatternThree" class="text-[20rem] rotate-90 "/>
            </p>
            <p class="absolute py-10 -left-10 opacity-20 md:opacity-50 bottom-32">
                <Icon name="PatternThree" class="text-[20rem] "/>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

// const storeGlobalData = useGlobalDataStore()

// const {
//     hpois
// } = storeToRefs(storeGlobalData)

// const selected = computed(() =>
// hpois.value.find(
//         (p) => p.no_anggota.toString() == route.params.id
//     )
// )

const client = useSupabaseClient()

const { data: detail_anggota } = await useAsyncData('detail_anggota', async () => client
    .from('hpoi_anggota')
    .select(`*`)
    .eq('no_anggota',`${ route.params.id}`)
    .single()
    , { transform: (result : any) => result.data }
)

</script>

<style scoped>

</style>