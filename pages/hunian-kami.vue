<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <div class="relative mt-24 lg:mt-32  px-4 lg:px-32 py-10">
            <h3 v-motion-fade class="font-oswald text-3xl lg:text-5xl tracking-tight text-gsi-darkblue mb-4 text-center"><span class="text-gsi-gold">Tipe</span> Hunian Kami</h3>
            <p v-motion-fade class="mb-6 text-left lg:text-center text-sm lg:text-base">Pilih tipe hunian kami yang paling sesuai dengan keinginan anda sekarang.</p>
            <div v-motion-slide-bottom  class="relative z-30 grid grid-cols-12 rounded-xl items-start gap-6">
                <div class="col-span-12 lg:col-span-6 bg-gsi-darkblue rounded-xl overflow-hidden grid grid-cols-6 gap-2 lg:gap-4">
                    <div class=" col-span-3">
                        <nuxt-img src="/img/denah40.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full h-full"/>
                    </div>
                    <div class="col-span-3 py-4" >
                        <h3 class="text-gsi-gold font-oswald text-3xl 2xl:text-4xl font-semibold mb-3">Type 40/60</h3>
                        <div v-for="(item, index) in type_40" :key="index" class="flex gap-2 items-center py-1">
                            <Icon :name="item.icon" class="text-2xl lg:text-3xl 2xl:text-4xl text-gsi-gold"/>
                            <p class="font-oswald text-gsi-smokewhite text-sm lg:text-base 2xl:text-xl">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 bg-gsi-darkblue rounded-xl overflow-hidden grid grid-cols-6 gap-2 lg:gap-4">
                    <div class=" col-span-3">
                        <nuxt-img src="/img/denah40.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full h-full"/>
                    </div>
                    <div class="col-span-3 py-4" >
                        <h3 class="text-gsi-gold font-oswald text-3xl 2xl:text-4xl font-semibold mb-3">Type 40/60</h3>
                        <div v-for="(item, index) in type_40" :key="index" class="flex gap-2 items-center py-1">
                            <Icon :name="item.icon" class="text-2xl lg:text-3xl 2xl:text-4xl text-gsi-gold"/>
                            <p class="font-oswald text-gsi-smokewhite text-sm lg:text-base 2xl:text-xl">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="absolute py-10 -right-56 opacity-20 md:opacity-50 top-20">
                <Icon name="PatternThree" class="text-[28rem] rotate-180"/>
                <!-- <nuxt-img src="/img/circle01.svg" loading="lazy" sizes="sm:50vw" class="object-cover  object-center h-96 w-full"/> -->
            </p>
            <p class="absolute py-10 -left-56 opacity-20 md:opacity-50 bottom-20">
                <Icon name="PatternThree" class="text-[28rem] rotate-180"/>
                <!-- <nuxt-img src="/img/circle01.svg" loading="lazy" sizes="sm:50vw" class="object-cover  object-center h-96 w-full"/> -->
            </p>
        </div>
        <div v-motion-slide-bottom :delay="400" class="relative mt-10 px-4 lg:px-32 py-10">
            <div class="relative z-30 grid grid-cols-12 rounded-xl items-start gap-6">
                <div class="relative col-span-12 lg:col-span-5">
                    <div class="grid grid-cols-2 gap-2 p-2">
                        <div class="rounded-xl overflow-hidden">
                            <nuxt-img src="/img/gsi01.jpeg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                        </div>
                        <div class="rounded-xl overflow-hidden">
                            <nuxt-img src="/img/gsi02.jpeg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                        </div>
                        <div class="col-span-2 rounded-xl overflow-hidden">
                            <nuxt-img src="/img/siteplan01.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                        </div>
                        <div class="rounded-xl overflow-hidden">
                            <nuxt-img src="/img/gate 1.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                        </div>
                        <div class="rounded-xl overflow-hidden">
                            <nuxt-img src="/img/gsi03.jpeg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-7 flex flex-col gap-3 lg:gap-4 lg:pl-6">
                    <h3 class="font-oswald text-3xl lg:text-5xl tracking-tight text-gsi-darkblue mb-4"><span class="text-gsi-gold">Spesifikasi</span> Bangunan Hunian</h3>
                    <div class="grid grid-cols-2 gap-2 lg:gap-3">
                        <div v-for="(item, index) in specifications" :key="index" class="flex flex-col items-center px-2 text-gsi-smokewhite bg-gsi-darkblue lg:px-4 py-2 justify-center rounded-xl shadow-md hover:scale-105 transition-all duration-300">
                            <p class="text-sm lg:text-lg font-oswald uppercase text-gsi-gold">{{item.name}}</p>
                            <p class="text-xs lg:text-lg font-oswald">{{item.goods}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="absolute py-10 -right-56 opacity-20 md:opacity-50 top-10">
                <Icon name="PatternThree" class="text-[28rem] rotate-180"/>
                <!-- <nuxt-img src="/img/circle01.svg" loading="lazy" sizes="sm:50vw" class="object-cover  object-center h-96 w-full"/> -->
            </p>
            <p class="absolute py-10 -left-56 opacity-20 md:opacity-50 bottom-40">
                <Icon name="PatternThree" class="text-[28rem] rotate-180"/>
                <!-- <nuxt-img src="/img/circle01.svg" loading="lazy" sizes="sm:50vw" class="object-cover  object-center h-96 w-full"/> -->
            </p>
        </div>
        <ContactSection/>
    </div>
</template>

<script setup lang="ts">
const storeGlobalData = useGlobalDataStore()

const {
    specifications,
    type_40
} = storeToRefs(storeGlobalData)
</script>

<style scoped>

</style>