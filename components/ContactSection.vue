<template>
    <div class="relative grid grid-cols-6 items-start gap-6 px-4 lg:px-32 pt-10 py-20">
        <div v-motion-slide-visible-once-left :delay="300" class="relative z-40 col-span-6 lg:col-span-3 flex flex-col gap-3 lg:gap-4 lg:pl-6  border-l-4 border-gsi-gold px-4 rounded ">
            <h3 class="font-oswald text-4xl lg:text-6xl text-gsi-darkblue tracking-tight">Segera hubungi kami & dapatkan <span class="text-gsi-gold">rumah impian</span> anda sekarang</h3>
        </div>
        <div v-motion-slide-visible-once-right :delay="300" class="relative overflow-hidden z-40 bg-gsi-smokewhite col-span-6 lg:col-span-3 flex items-center gap-4 lg:gap-8 text-gsi-darkblue border border-gray-300 shadow-md rounded-xl px-4 lg:px-8 py-6">
            <div class="flex flex-col gap-y-1 lg:gap-y-2 border-r pr-4 lg:pr-8 border-slate-300 font-oswald font-semibold text-lg lg:text-xl">
                <p>C</p>
                <p>O</p>
                <p>N</p>
                <p>T</p>
                <p>A</p>
                <p>C</p>
                <p>T</p>
            </div>
            <div class="relative z-40 flex flex-col gap-3 lg:gap-4 text-gsi-darkblue">
                <div v-for="(item, index) in contacts" :key="index" class="flex gap-x-3 items-center justify-start">
                    <Icon :name="item.icon" class="text-3xl" />
                    <p class="font-oswald text-base lg:text-xl">{{ item.description }}</p>
                </div>
            </div>
            <div class="absolute -right-12 opacity-50 md:opacity-80 bottom-3 -rotate-90">
                <Icon name="PatternThree" class="text-[15rem] lg:text-[16.5rem]"/>
            </div>
        </div>
        <div class="absolute -left-6 opacity-30 md:opacity-80 top-48 rotate-180">
            <Icon name="PatternThree" class="text-[22rem]"/>
            <!-- <nuxt-img src="/img/circle01.svg" loading="lazy" sizes="sm:50vw" class="object-cover  object-center h-96 w-full"/> -->
        </div>
    </div>
</template>

<script setup lang="ts">
const storeGlobalData = useGlobalDataStore()


const {
    contacts
} = storeToRefs(storeGlobalData)
</script>

<style scoped>

</style>