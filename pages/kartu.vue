<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <div class="relative min-h-screen px-4 lg:px-32 pt-32 overflow-hidden">
            <!-- <div id="testingxx" class="flex flex-col items-center bg-white w-[40rem]">
                <div class="grid grid-cols-6 w-full">
                    <div class="col-span-2 flex items-center relative overflow-hidden justify-center px-3 w-full">
                        <div>
                            <nuxt-img src="/img/logotos.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-contain object-center h-28 rounded-lg"/>
                        </div>
                        <p class="absolute -left-5 opacity-20 -top-8">
                            <Icon name="PatternThree" class="text-[26rem]"/>
                        </p>
                    </div>
                    <div class="col-span-4 relative over w-full">
                        <div class="relative bg-hpoi-main text-center pt-1 py-5 rounded-bl-3xl">
                            <p class="font-oswald font-bold uppercase text-3xl text-gray-800">
                                E-Kartu Tanda Anggota
                            </p>
                            <p class="text-gray-800 uppercase font-bold tracking-tight">
                                himpunan provider outbound indonesia
                            </p>
                            <p class="font-oswald font-bold uppercase text-3xl text-gray-800 leading-none">
                                hpoi
                            </p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-6 w-full gap-x-3 p-3">
                    <div class="col-span-2 overflow-hidden">
                        <div class="flex flex-col items-center justify-center gap-y-3 w-full">
                            <div>
                                <qrcode-vue :value="value" :level="level" :render-as="renderAs" :foreground="foreground" :size="200" />
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4 w-full relative overflow-hidden">
                            <p class="relative font-oswald text-2xl text-hpoi-red font-bold uppercase border--2 border-hpoi-main mt-1 py-1">
                                TOS Adventure Pacet 
                            </p>
                            <table class="relative w-full space-y-2">
                                <tr class="text-left">
                                    <th class="w-40 text-sm text-gray-600 pb-2 font-normal ">
                                        No.Reg
                                    </th>
                                    <td class="pb-2 text-sm font-semibold">
                                        17087
                                    </td>
                                </tr>
                                <tr class="text-left">
                                    <th class="w-40 text-sm text-gray-600 pb-2 font-normal ">
                                        Penanggung Jawab
                                    </th>
                                    <td class="pb-2 text-sm font-semibold">
                                        Lukas Edi Purwosunu
                                    </td>
                                </tr>
                                <tr class="text-left">
                                    <th class="w-40 text-sm text-gray-600 pb-2 font-normal ">
                                        Kota/Kab. (DPC)
                                    </th>
                                    <td class="pb-2 text-sm font-semibold">
                                        Mojkerto
                                    </td>
                                </tr>
                                <tr class="text-left">
                                    <th class="w-40 text-sm text-gray-600 pb-2 font-normal ">
                                        Provinsi (DPD)
                                    </th>
                                    <td class="pb-2 text-sm font-semibold">
                                        Jawa Timur
                                    </td>
                                </tr>
                            </table>
                            <div class="relative border-t-2 border-hpoi-main mt-1 py-1">
                                <p class="text-sm">
                                    Berlaku sampai : 31 Desember 2025
                                </p>
                            </div>
                            <p class="absolute -right-20 opacity-20 -top-6">
                                <Icon name="PatternThree" class="text-[26rem]"/>
                            </p>
                    </div>
                </div>
            </div> -->

            <div id="testing" class="relative bg-white w-[60rem]">
                <div class="relative w-full">
                    <img src="/img/membercard.png" class="object-contain object-center">
                </div>
                <div :class="nameProviderMargin ? 'top-[8.25rem]' : 'top-[9.25rem]'" class="absolute left-[23rem]">
                    <p class="font-semibold text-4xl text-white">
                        176009
                    </p>
                </div>
                <div :class="nameProviderMargin ? 'top-[16.5rem]' : 'top-[17.5rem]'" class="absolute left-[3.25rem]">
                    <p class="text-4xl font-oswald uppercase">
                        lukas edi purwosunu
                    </p>
                </div>
                <div :class="nameProviderMargin ? 'top-[22rem]' : 'top-[23rem]'" class="absolute left-[3.25rem]">
                    <p class="text-4xl font-oswald uppercase">
                        Mojokerto
                    </p>
                </div>
                <div :class="nameProviderMargin ? 'top-[27.5rem]' : 'top-[28.5rem]'" class="absolute left-[3.25rem]">
                    <p class="text-4xl font-oswald uppercase">
                        jawa timur
                    </p>
                </div>
                <div class="absolute bottom-16 right-20 flex flex-col items-center justify-center">
                    <div class="flex items-center justify-center overflow-hidden">
                        <img src="/img/logotos.png" class="h-[6rem] rounded-lg" alt="">
                    </div>
                    <div :class="nameProviderMargin ? 'mt-0 mb-5' : 'mt-2 mb-2'" class="w-56 h-[5.8rem] flex items-center justify-center text-center p-0">
                        <h3 class="font-oswald font-semibold text-3xl tracking-tight leading-none uppercase">
                            tos adventure pacet
                        </h3>
                    </div>
                    <div class="">
                        <qrcode-vue :value="value" :level="level" :render-as="renderAs" :size="125" />
                    </div>
                </div>
            </div>

            <div class="w-[60rem] flex items-center justify-center mb-20">
                <button class="mt-10 px-3 py-2 text-center bg-hpoi-main font-oswald rounded-lg" @click="startDl">
                    Unduh Kartu Anggota
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import html2canvas from 'html2canvas'
import QrcodeVue, { type Level, type RenderAs } from 'qrcode.vue'

const route = useRoute()
const value = ref('https://new-hpoi-member.vercel.app/anggota/17087')
const level = ref<Level>('Q')
const renderAs = ref<RenderAs>('svg')
const nameProviderMargin = ref(false)

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



const testCard = async () => {
    
    const ssTarget = document.getElementById('testing')
    await html2canvas(ssTarget as HTMLElement , {
      allowTaint: true,
      useCORS: true,
      scale: 5,
    }).then(async (canvas: any) => {
        const base64image = await canvas.toDataURL("image/png")
        
        const anchor =  document.createElement('a')
        anchor.setAttribute('href', base64image)
        anchor.setAttribute('download', 'testing.png')
        anchor.click()
        anchor.remove()
        nameProviderMargin.value = false
    })
}

const startDl = async () => {
    nameProviderMargin.value = true
    if(nameProviderMargin.value == true) {
        console.log(nameProviderMargin.value)
        await nextTick().then(async () => {
            await testCard()
            console.log('gass ' + nameProviderMargin.value)
        })
    }
}

</script>

<style scoped>

</style>