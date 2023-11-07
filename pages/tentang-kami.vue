<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <div class="relative mt-24 lg:mt-32  px-4 lg:px-32 py-10">
            <div class="relative z-40 grid grid-cols-6 rounded-xl items-start gap-6 ">
                <div v-motion-slide-left class="relative flex gap-4 justify-between items-center col-span-6 lg:col-span-3 rounded-xl">
                    <video class="rounded-3xl shadow-md" autoplay loop muted playsinline>
                        <source src="/bumper.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="col-span-6 lg:col-span-3 flex flex-col gap-3 lg:gap-4 lg:pl-6">
                    <h3 v-motion-fade class="font-oswald text-3xl lg:text-4xl 2xl:text-5xl tracking-tight text-gsi-darkblue"><span class="text-gsi-gold">Tentang</span> Griya Sambirejo Indah</h3>
                    <p v-motion-slide-right class="indent-8 text-sm lg:text-base text-justify">Griya Sambirejo Indah adalah kawasan perumahan yang dikembangkan oleh PT. Berkah Karya Agung dengan mengusung konsep hunian modern minimalis yang terjangkau. Berlokasi strategis di Desa Sambirejo, Kec. Jogoroto, Kab. Jombang, dekat dengan berbagai fasilitas umum & Jalan utama Nasional serta kurang dari 15 menit dari pusat Jombang.</p>
                    <p v-motion-slide-right class="indent-8 text-sm lg:text-base text-justify">
                        Griya Sambirejo Indah menjadi pilihan tepat bagi anda yang menginginkan hunian dengan suasana nyaman, jauh dari kebisingan, namun dekat dengan berbagai fasilitas publik penunjang kebutuhan anda. Segera dapatkan hunian impian anda bersama kami Griya Sambirejo Indah.
                    </p>
                </div>
            </div>
            <p class="absolute py-10 -right-56 opacity-20 md:opacity-50 top-10">
                <Icon name="PatternThree" class="text-[28rem] rotate-180"/>
                <!-- <nuxt-img src="/img/circle01.svg" loading="lazy" sizes="sm:50vw" class="object-cover  object-center h-96 w-full"/> -->
            </p>
            <p class="absolute py-10 -left-56 opacity-20 md:opacity-50 bottom-0">
                <Icon name="PatternThree" class="text-[28rem] rotate-180"/>
                <!-- <nuxt-img src="/img/circle01.svg" loading="lazy" sizes="sm:50vw" class="object-cover  object-center h-96 w-full"/> -->
            </p>
        </div>
        <div class="relative grid grid-cols-12 items-start gap-4 px-4 lg:px-32 pt-10 py-10" >
            <div v-motion-slide-bottom :delay="400" v-for="(item, index) in mini_maps" :key="index" class="relative z-40 col-span-6 lg:col-span-3 space-y-1 flex flex-col justify-center items-center px-2 py-4 rounded-xl shadow-md bg-gsi-darkblue text-gsi-smokewhite">
                <Icon :name="item.icon" class="text-6xl text-gsi-gold"/>
                <p class="font-oswald text-2xl font-semibold">{{ item.distance }}</p>
                <p class="font-oswald text-sm lg:text-lg">{{ item.name }}</p>
            </div>
            <p class="absolute lg:left-96 -top-20 opacity-20 md:opacity-50">
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
    mini_maps
} = storeToRefs(storeGlobalData)
</script>

<style scoped>

</style>