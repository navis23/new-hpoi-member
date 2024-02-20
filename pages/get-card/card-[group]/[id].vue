<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <div class="relative min-h-screen px-4 lg:px-32 my-20 overflow-hidden">
            <div class="relative z-40 flex flex-col gap-3 w-full min-h-screen items-center justify-center">
                <div class="flex flex-col justify-center gap-y-2 text-center">
                    <p class="font-oswald text-3xl text-hpoi-main uppercase">
                        _UNDUH KARTU
                    </p>
                    <h3 class="font-oswald text-4xl">
                        Data kartu Anggota
                    </h3>
                    <ButtonBaseSmall
                        @click="startDl()" 
                        class="flex items-center justify-center gap-x-1 mt-3">
                            <Icon name="lucide:download" class="text-xl" />
                            <span>
                                Unduh Kartu Anggota
                            </span>
                    </ButtonBaseSmall>
                </div>
                <div class="relative grid grid-cols-2 gap-6 w-full">
                    <div id="testing" class="col-span-2 lg:col-span-1 relative bg-white w-[60rem] -translate-x-[18.1rem] -translate-y-[10rem] scale-[.39] lg:-translate-x-[7.5rem] lg:-translate-y-[7.5rem] lg:scale-50">
                        <div class="relative w-full">
                            <img src="/img/membercard.png" class="object-contain object-center">
                        </div>
                        <div :class="nameProviderMargin ? 'top-[8.25rem]' : 'top-[9.25rem]'" class="absolute left-[23rem]">
                            <p class="font-semibold text-4xl text-white">
                                {{ no_anggota }}
                            </p>
                        </div>
                        <div :class="nameProviderMargin ? 'top-[16.5rem]' : 'top-[17.5rem]'" class="absolute left-[3.25rem]">
                            <p class="text-4xl font-oswald uppercase">
                                {{ nama_pic }}
                            </p>
                        </div>
                        <div :class="nameProviderMargin ? 'top-[22rem]' : 'top-[23rem]'" class="absolute left-[3.25rem]">
                            <p class="text-4xl font-oswald uppercase">
                                {{ splitNamaDpc }}
                            </p>
                        </div>
                        <div :class="nameProviderMargin ? 'top-[27.5rem]' : 'top-[28.5rem]'" class="absolute left-[3.25rem]">
                            <p class="text-4xl font-oswald uppercase">
                                {{ splitNamaDpd }}
                            </p>
                        </div>
                        <div class="absolute bottom-16 right-20 flex flex-col items-center justify-center">
                            <div class="flex items-center justify-center overflow-hidden">
                                <img :src="logo_img" class="h-[6rem] rounded-lg" alt="">
                            </div>
                            <div :class="nameProviderMargin ? 'mt-0 mb-5' : 'mt-2 mb-2'" class="w-56 h-[5.8rem] flex items-center justify-center text-center p-0">
                                <h3 class="font-oswald font-semibold text-3xl tracking-tight leading-none uppercase">
                                    {{ nama_provider }}
                                </h3>
                            </div>
                            <div class="">
                                <qrcode-vue :value="linkQr" :level="level" :render-as="renderAs" :size="125" />
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 lg:col-span-1 relative bg-white w-[60rem] -translate-x-[18.1rem] -translate-y-[32.5rem] scale-[.39] lg:-translate-x-[13.5rem] lg:-translate-y-[7.5rem] lg:scale-50">
                        <div class="relative w-full">
                            <img src="/img/membercard2.jpg" class="object-contain object-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="loading" class="absolute top-0 min-h-screen w-full bg-gray-800 opacity-70 my-20 z-[99]">
        </div>
        <div v-if="loading" class="absolute flex items-center justify-center -top-10 min-h-screen w-full my-20 z-[999]">
            <div class="flex items-end gap-x-2 text-gsi-smokewhite">
                <p>
                    <Icon name="svg-spinners:bouncing-ball" class="text-6xl" />
                </p>
                <h2 class="text-2xl lg:text-3xl">
                    Download Kartu...
                </h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import html2canvas from 'html2canvas'
import QrcodeVue, { type Level, type RenderAs } from 'qrcode.vue'

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
    await fetchSplitNameDpc()
})

const route = useRoute()
const linkQr = ref('')
const level = ref<Level>('Q')
const renderAs = ref<RenderAs>('svg')
const nameProviderMargin = ref(false)
const splitNamaDpc = ref('')
const splitNamaDpd = ref('')


const { data: detail_anggota } = await useAsyncData('detail_anggota', async () => client
    .from('hpoi_detail_anggota')
    .select(`
        *,
        hpoi_anggota!inner(*),
        hpoi_dpc(*)
    `)
    .eq('hpoi_anggota.no_anggota',`${route.params.id}`)
    .single()
    , { transform: (result : any) => result.data }
)

// fetch data
no_anggota.value = await detail_anggota.value.hpoi_anggota.no_anggota
nama_provider.value = await detail_anggota.value.hpoi_anggota.nama_provider
nama_pic.value = await detail_anggota.value.hpoi_anggota.nama_pic
logo_img.value = await detail_anggota.value.hpoi_anggota.logo_img
nama_dpc.value = await detail_anggota.value.hpoi_dpc.nama_dpc
id_dpc.value = await detail_anggota.value.id_dpc

const fetchSplitNameDpc = async () => {
    linkQr.value = `https://anggota.hpoi.org/anggota/${no_anggota.value}`
    let result = nama_dpc.value.indexOf(",");
    splitNamaDpc.value = nama_dpc.value.slice(0, result);
    splitNamaDpd.value = nama_dpc.value.slice(result+2);

    console.log( splitNamaDpc.value + ', ' + splitNamaDpd.value)
}


// card function

const testCard = async () => {
    
    const ssTarget = document.getElementById('testing')
    await html2canvas(ssTarget as HTMLElement , {
      allowTaint: true,
      useCORS: true,
      scale: 10,
    }).then(async (canvas: any) => {
        const base64image = await canvas.toDataURL("image/png")
        
        const anchor =  document.createElement('a')
        anchor.setAttribute('href', base64image)
        anchor.setAttribute('download', `E-Card_${no_anggota.value}_Front.png`)
        anchor.click()
        anchor.remove()
        nameProviderMargin.value = false
        setTimeout(async () => {
            loading.value = false
        }, 2000);
    })
}

const startDl = async () => {
    nameProviderMargin.value = true
    loading.value = true
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