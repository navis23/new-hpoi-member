<template>
    <div class="relative overflow-hidden">
        <div class="relative min-h-screen px-4 lg:px-32 my-20 overflow-hidden">
            <div class="relative z-40 flex flex-col gap-4 w-full min-h-screen items-center justify-center">
                <div class="space-y-2 text-center">
                    <p class="font-oswald text-3xl text-hpoi-main uppercase">
                        _Step 05
                    </p>
                    <h3 class="font-oswald text-4xl">
                        Data Gambar & Logo Anggota
                    </h3>
                    <p class="text-gray-500 font-oswald">
                        Masukkan data gambar & Logo profil anda
                    </p>
                </div>
                <div class="flex gap-4 flex-wrap w-full justify-center items-start py-4">
                    <div class="relative overflow-hidden z-40 bg-gray-50 w-96 shadow rounded-xl px-4 lg:px-8 py-6">
                        <div class="mt-4 mb-5 divide-y-2">
                            <div>
                                <!-- logo -->
                                <FormKit
                                    v-if="logo_img_temp == null && logoIndicator == ''"
                                    type="file"
                                    label="Gambar Logo"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar logo anda yang sesuai."
                                    multiple="false"
                                    @change="uploadLogo"
                                    :disabled="logo_img_temp != null  || uploading == true"
                                />

                                <div v-if="uploading == true && logoIndicator == 'upload'" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Logo</p>
                                    <p class="flex gap-x-1 text-xl justify-center items-center text-gsi-darkblue py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                        <Icon name="svg-spinners:bars-scale" class="text-3xl" />
                                        <span>
                                            Uploading Process...
                                        </span>
                                    </p>
                                </div>

                                <div v-if="logo_img_temp != null && logoIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Logo</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Logo sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar logo anda</p>
                                </div>
                                
                                <!-- hero -->
                                <FormKit
                                    v-if="hero_img_temp == null && heroIndicator == ''"
                                    type="file"
                                    label="Gambar Hero Utama"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar utama anda sebagai preview terdepan."
                                    multiple="false"
                                    @change="uploadHero"
                                    :disabled="hero_img_temp != null  || uploading == true"
                                />

                                <div v-if="uploading == true && heroIndicator == 'upload'" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Hero Utama</p>
                                    <p class="flex gap-x-1 text-xl justify-center items-center text-gsi-darkblue py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                        <Icon name="svg-spinners:bars-scale" class="text-3xl" />
                                        <span>
                                            Uploading Process...
                                        </span>
                                    </p>
                                </div>

                                <div v-if="hero_img_temp != null && heroIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Hero Utama</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Hero utama sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar hero utama anda</p>
                                </div>
                            </div>
    
                            <div class="pt-4">
                                <!-- gallery one -->
                                <FormKit
                                    v-if="gallery_one_temp == null && imgOneIndicator == ''"
                                    type="file"
                                    label="Gambar Galeri 1"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar pendukung galeri anda."
                                    multiple="false"
                                    @change="uploadImgOne"
                                    :disabled="gallery_one_temp != null || uploading == true"
                                />

                                <div v-if="uploading == true && imgOneIndicator == 'upload'" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 1</p>
                                    <p class="flex gap-x-1 text-xl justify-center items-center text-gsi-darkblue py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                        <Icon name="svg-spinners:bars-scale" class="text-3xl" />
                                        <span>
                                            Uploading Process...
                                        </span>
                                    </p>
                                </div>

                                <div v-if="gallery_one_temp != null && imgOneIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 1</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Galeri 1 sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar Galeri 1 anda</p>
                                </div>

                                <!-- gallery two -->
                                <FormKit
                                    v-if="gallery_two_temp == null && imgTwoIndicator == ''"
                                    type="file"
                                    label="Gambar Galeri 2"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar pendukung galeri anda."
                                    multiple="false"
                                    @change="uploadImgTwo"
                                    :disabled="gallery_two_temp != null || uploading == true"
                                />

                                <div v-if="uploading == true && imgTwoIndicator == 'upload'" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 2</p>
                                    <p class="flex gap-x-1 text-xl justify-center items-center text-gsi-darkblue py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                        <Icon name="svg-spinners:bars-scale" class="text-3xl" />
                                        <span>
                                            Uploading Process...
                                        </span>
                                    </p>
                                </div>

                                <div v-if="gallery_two_temp != null && imgTwoIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 2</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Galeri 2 sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar Galeri 2 anda</p>
                                </div>

                                <!-- gallery three -->
                                <FormKit
                                    v-if="gallery_three_temp == null && imgThreeIndicator == ''"
                                    type="file"
                                    label="Gambar Galeri 3"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar pendukung galeri anda."
                                    multiple="false"
                                    @change="uploadImgThree"
                                    :disabled="gallery_three_temp != null || uploading == true"
                                />

                                <div v-if="uploading == true && imgThreeIndicator == 'upload'" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 3</p>
                                    <p class="flex gap-x-1 text-xl justify-center items-center text-gsi-darkblue py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                        <Icon name="svg-spinners:bars-scale" class="text-3xl" />
                                        <span>
                                            Uploading Process...
                                        </span>
                                    </p>
                                </div>

                                <div v-if="gallery_three_temp != null && imgThreeIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 3</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Galeri 3 sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar Galeri 3 anda</p>
                                </div>

                                <!-- gallery four -->
                                <FormKit
                                    v-if="gallery_four_temp == null && imgFourIndicator == ''"
                                    type="file"
                                    label="Gambar Galeri 4"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar pendukung galeri anda."
                                    multiple="false"
                                    @change="uploadImgFour"
                                    :disabled="gallery_four_temp != null || uploading == true"
                                />

                                <div v-if="uploading == true && imgFourIndicator == 'upload'" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 4</p>
                                    <p class="flex gap-x-1 text-xl justify-center items-center text-gsi-darkblue py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                        <Icon name="svg-spinners:bars-scale" class="text-3xl" />
                                        <span>
                                            Uploading Process...
                                        </span>
                                    </p>
                                </div>

                                <div v-if="gallery_four_temp != null && imgFourIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 4</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Galeri 4 sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar Galeri 4 anda</p>
                                </div>

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

                    <!-- preview images section -->
                    <div class="relative overflow-hidden z-40 bg-gray-50 w-96 shadow rounded-xl px-4 lg:px-8 py-6">
                        <div class="font-oswald text-sm overflow-hidden pb-4">
                            <div class="flex gap-x-2 items-center justify-start pb-2">
                                <p>Preview Logo </p>
                                <button v-if="logo_img_temp != null && deleting == false" @click="deleteImageLogo()">
                                    <Badge class="danger flex gap-x-1 items-center">
                                        <Icon name="lucide:x-circle" class="text-sm text-red-500" />
                                        <p>
                                            Ganti file
                                        </p>
                                    </Badge>
                                </button>
                            </div>
                            <p v-if="deleting == true && logoIndicator == 'delete'" class="flex gap-x-1 text-xl justify-center items-center text-red-600 py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                <Icon name="svg-spinners:blocks-wave" class="text-3xl" />
                                <span>
                                    Deleting Process...
                                </span>
                            </p>
                            <nuxt-img v-if="logo_img_temp && logoIndicator == ''" :src="logo_img_temp" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center h-16 rounded"/>
                        </div>

                        <div class="font-oswald text-sm overflow-hidden pb-4">
                            <div class="flex gap-x-2 items-center justify-start pb-2">
                                <p>Preview Hero Utama </p>
                                <button v-if="hero_img_temp != null && deleting == false" @click="deleteImageHero()">
                                    <Badge class="danger flex gap-x-1 items-center">
                                        <Icon name="lucide:x-circle" class="text-sm text-red-500" />
                                        <p>
                                            Ganti file
                                        </p>
                                    </Badge>
                                </button>
                            </div>
                            <p v-if="deleting == true && heroIndicator  == 'delete'" class="flex gap-x-1 text-xl justify-center items-center text-red-600 py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                <Icon name="svg-spinners:blocks-wave" class="text-3xl" />
                                <span>
                                    Deleting Process...
                                </span>
                            </p>
                            <nuxt-img v-if="hero_img_temp && heroIndicator == ''" :src="hero_img_temp" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-30 rounded"/>
                        </div>

                        <div class="grid grid-cols-2 border-t-2 pt-3 gap-2">
                            <div class="font-oswald text-sm overflow-hidden">
                                <div class="flex gap-x-2 items-center justify-start pb-2">
                                    <p>Preview Galeri 1 </p>
                                    <button v-if="gallery_one_temp != null && deleting == false" @click="deleteImageImgOne()">
                                        <Badge class="danger flex gap-x-1 items-center">
                                            <Icon name="lucide:x-circle" class="text-sm text-red-500" />
                                            <p>
                                                Ganti
                                            </p>
                                        </Badge>
                                    </button>
                                </div>
                                <p v-if="deleting == true && imgOneIndicator  == 'delete'" class="flex gap-x-1 text-xl justify-center items-center text-red-600 py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                    <Icon name="svg-spinners:blocks-wave" class="text-3xl" />
                                    <span>
                                        Deleting Process...
                                    </span>
                                </p>
                                <nuxt-img v-if="gallery_one_temp && imgOneIndicator == ''" :src="gallery_one_temp" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center h-30 rounded"/>
                            </div>

                            <div class="font-oswald text-sm overflow-hidden">
                                <div class="flex gap-x-2 items-center justify-start pb-2">
                                    <p>Preview Galeri 2 </p>
                                    <button v-if="gallery_two_temp != null && deleting == false" @click="deleteImageImgTwo()">
                                        <Badge class="danger flex gap-x-1 items-center">
                                            <Icon name="lucide:x-circle" class="text-sm text-red-500" />
                                            <p>
                                                Ganti
                                            </p>
                                        </Badge>
                                    </button>
                                </div>
                                <p v-if="deleting == true && imgTwoIndicator  == 'delete'" class="flex gap-x-1 text-xl justify-center items-center text-red-600 py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                    <Icon name="svg-spinners:blocks-wave" class="text-3xl" />
                                    <span>
                                        Deleting Process...
                                    </span>
                                </p>
                                <nuxt-img v-if="gallery_two_temp && imgTwoIndicator == ''" :src="gallery_two_temp" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center h-30 rounded"/>
                            </div>

                            <div class="font-oswald text-sm overflow-hidden">
                                <div class="flex gap-x-2 items-center justify-start pb-2">
                                    <p>Preview Galeri 3 </p>
                                    <button v-if="gallery_three_temp != null && deleting == false" @click="deleteImageImgThree()">
                                        <Badge class="danger flex gap-x-1 items-center">
                                            <Icon name="lucide:x-circle" class="text-sm text-red-500" />
                                            <p>
                                                Ganti
                                            </p>
                                        </Badge>
                                    </button>
                                </div>
                                <p v-if="deleting == true && imgThreeIndicator  == 'delete'" class="flex gap-x-1 text-xl justify-center items-center text-red-600 py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                    <Icon name="svg-spinners:blocks-wave" class="text-3xl" />
                                    <span>
                                        Deleting Process...
                                    </span>
                                </p>
                                <nuxt-img v-if="gallery_three_temp && imgThreeIndicator == ''" :src="gallery_three_temp" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center h-30 rounded"/>
                            </div>

                            <div class="font-oswald text-sm overflow-hidden">
                                <div class="flex gap-x-2 items-center justify-start pb-2">
                                    <p>Preview Galeri 4 </p>
                                    <button v-if="gallery_four_temp != null && deleting == false" @click="deleteImageImgFour()">
                                        <Badge class="danger flex gap-x-1 items-center">
                                            <Icon name="lucide:x-circle" class="text-sm text-red-500" />
                                            <p>
                                                Ganti
                                            </p>
                                        </Badge>
                                    </button>
                                </div>
                                <p v-if="deleting == true && imgFourIndicator  == 'delete'" class="flex gap-x-1 text-xl justify-center items-center text-red-600 py-2 pl-2 pr-3 rounded-md transition ease-in-out duration-300 font-oswald tracking-wide">
                                    <Icon name="svg-spinners:blocks-wave" class="text-3xl" />
                                    <span>
                                        Deleting Process...
                                    </span>
                                </p>
                                <nuxt-img v-if="gallery_four_temp && imgFourIndicator == ''" :src="gallery_four_temp" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center h-30 rounded"/>
                            </div>

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
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'register-layout'
})


const storeGlobalData = useGlobalDataStore()
const storeAnggota = useAnggotaStore()
const client = useSupabaseClient<any>()
const user = useSupabaseUser()

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
    layananAll,
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
    imagesAll_temp
} = storeToRefs(storeAnggota)

const {
    loading,
    progress,
    url_bucket_img,
    uploading,
    deleting
} = storeToRefs(storeGlobalData)

onMounted(async () => {
    progress.value = 80
    await fetchImageTemp()
})

const logoUrl = ref()
const heroUrl = ref()
const imgOneUrl = ref()
const imgTwoUrl = ref()
const imgThreeUrl = ref()
const imgFourUrl = ref()
const logoName = ref()
const heroName = ref()
const imgOneName = ref()
const imgTwoName = ref()
const imgThreeName = ref()
const imgFourName = ref()
const logoIndicator = ref('')
const heroIndicator = ref('')
const imgOneIndicator = ref('')
const imgTwoIndicator = ref('')
const imgThreeIndicator = ref('')
const imgFourIndicator = ref('')

// fetching first data image temp
const { data: gambar_temp, error } = await useAsyncData('gambar_temp', async () => client
    .from('hpoi_gambartemp')
    .select(`*`)
    .eq('user_id', user.value?.id)
    , { transform: (result : any) => result.data }
)

const fetchImageTemp = async () => {
    imagesAll_temp.value = await gambar_temp.value
    if(gambar_temp.value.length != 0) {
        await getNameLogo()
        await getNameHero()
        logo_img_temp.value = await gambar_temp.value[0].logo_img_temp
        hero_img_temp.value = await gambar_temp.value[0].hero_img_temp
        gallery_one_temp.value = await gambar_temp.value[0].gallery_one_temp
        gallery_two_temp.value = await gambar_temp.value[0].gallery_two_temp
        gallery_three_temp.value = await gambar_temp.value[0].gallery_three_temp
        gallery_four_temp.value = await gambar_temp.value[0].gallery_four_temp

    }
    
}

const reFetchData = async () => {
    const { data: gambar_temp, error } = await useAsyncData('gambar_temp', async () => client
        .from('hpoi_gambartemp')
        .select(`*`)
        .eq('user_id', user.value?.id)
        , { transform: (result : any) => result.data }
    )

    await fetchImageTemp()
}

// process insert/update images temp
const setDataLogo = async () => {
    if(imagesAll_temp.value == null || imagesAll_temp.value.length == 0) {
        console.log('data tidak ditemukan insert aja')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .upsert({user_id: user.value?.id, logo_img_temp: logoUrl.value })
        .select()

        await reFetchData()
    } else {
        console.log('data ditemukan gas update')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ logo_img_temp: logoUrl.value })
        .eq('user_id', user.value?.id)
        .select()

        await reFetchData()
    }
    setTimeout(async () => {
        uploading.value = false
        logoIndicator.value = ''
    }, 1000);

}

const setDataHero = async () => {
    if(imagesAll_temp.value == null || imagesAll_temp.value.length == 0) {
        console.log('data tidak ditemukan insert aja')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .upsert({user_id: user.value?.id, hero_img_temp: heroUrl.value })
        .select()

        await reFetchData()
    } else {
        console.log('data ditemukan gas update')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ hero_img_temp: heroUrl.value })
        .eq('user_id', user.value?.id)
        .select()

        await reFetchData()
    }
    setTimeout(async () => {
        uploading.value = false
        heroIndicator.value = ''
    }, 1000);

}

const setDataImgOne = async () => {
    if(imagesAll_temp.value == null || imagesAll_temp.value.length == 0) {
        console.log('data tidak ditemukan insert aja')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .upsert({user_id: user.value?.id, gallery_one_temp: imgOneUrl.value })
        .select()

        await reFetchData()
    } else {
        console.log('data ditemukan gas update')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ gallery_one_temp: imgOneUrl.value })
        .eq('user_id', user.value?.id)
        .select()

        await reFetchData()
    }
    setTimeout(async () => {
        uploading.value = false
        imgOneIndicator.value = ''
    }, 1000);

}

const setDataImgTwo = async () => {
    if(imagesAll_temp.value == null || imagesAll_temp.value.length == 0) {
        console.log('data tidak ditemukan insert aja')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .upsert({user_id: user.value?.id, gallery_two_temp: imgTwoUrl.value })
        .select()

        await reFetchData()
    } else {
        console.log('data ditemukan gas update')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ gallery_two_temp: imgTwoUrl.value })
        .eq('user_id', user.value?.id)
        .select()

        await reFetchData()
    }
    setTimeout(async () => {
        uploading.value = false
        imgTwoIndicator.value = ''
    }, 1000);

}

const setDataImgThree = async () => {
    if(imagesAll_temp.value == null || imagesAll_temp.value.length == 0) {
        console.log('data tidak ditemukan insert aja')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .upsert({user_id: user.value?.id, gallery_three_temp: imgThreeUrl.value })
        .select()

        await reFetchData()
    } else {
        console.log('data ditemukan gas update')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ gallery_three_temp: imgThreeUrl.value })
        .eq('user_id', user.value?.id)
        .select()

        await reFetchData()
    }
    setTimeout(async () => {
        uploading.value = false
        imgThreeIndicator.value = ''
    }, 1000);

}

const setDataImgFour = async () => {
    if(imagesAll_temp.value == null || imagesAll_temp.value.length == 0) {
        console.log('data tidak ditemukan insert aja')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .upsert({user_id: user.value?.id, gallery_four_temp: imgFourUrl.value })
        .select()

        await reFetchData()
    } else {
        console.log('data ditemukan gas update')
        const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ gallery_four_temp: imgFourUrl.value })
        .eq('user_id', user.value?.id)
        .select()

        await reFetchData()
    }
    setTimeout(async () => {
        uploading.value = false
        imgFourIndicator.value = ''
    }, 1000);

}

// process updates images temp table after delete img
const updateUrlLogo = async () => {
    const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ logo_img_temp: null })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
    
    await reFetchData()
}

const updateUrlHero = async () => {
    const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ hero_img_temp: null })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
    
    await reFetchData()
}

const updateUrlImgOne = async () => {
    const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ gallery_one_temp: null })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
    
    await reFetchData()
}

const updateUrlImgTwo = async () => {
    const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ gallery_two_temp: null })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
    
    await reFetchData()
}

const updateUrlImgThree = async () => {
    const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ gallery_three_temp: null })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
    
    await reFetchData()
}

const updateUrlImgFour = async () => {
    const { data, error } = await client
        .from('hpoi_gambartemp')
        .update({ gallery_four_temp: null })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
    
    await reFetchData()
}

// process delete images file
const deleteImageLogo = async () => {
    deleting.value = true
    logoIndicator.value = 'delete'
    await updateUrlLogo()

    const { error } = await client
        .storage
        .from('hpoi_images')
        .remove([user.value?.id +"/"+ logoName.value])
    
        console.log('error ta ' +error)
    
    setTimeout(async () => {
        deleting.value = false
        logoIndicator.value = ''
    }, 1000);

}

const deleteImageHero = async () => {
    deleting.value = true
    heroIndicator.value = 'delete'
    await updateUrlHero()

    const { error } = await client
        .storage
        .from('hpoi_images')
        .remove([user.value?.id +"/"+ heroName.value])
    
        console.log('error ta ' +error)
    
    setTimeout(async () => {
        deleting.value = false
        heroIndicator.value = ''
    }, 1000);

}

const deleteImageImgOne = async () => {
    deleting.value = true
    imgOneIndicator.value = 'delete'
    await updateUrlImgOne()

    const { error } = await client
        .storage
        .from('hpoi_images')
        .remove([user.value?.id +"/"+ imgOneName.value])
    
        console.log('error ta ' +error)
    
    setTimeout(async () => {
        deleting.value = false
        imgOneIndicator.value = ''
    }, 1000);

}

const deleteImageImgTwo = async () => {
    deleting.value = true
    imgTwoIndicator.value = 'delete'
    await updateUrlImgTwo()

    const { error } = await client
        .storage
        .from('hpoi_images')
        .remove([user.value?.id +"/"+ imgTwoName.value])
    
        console.log('error ta ' +error)
    
    setTimeout(async () => {
        deleting.value = false
        imgTwoIndicator.value = ''
    }, 1000);

}

const deleteImageImgThree = async () => {
    deleting.value = true
    imgThreeIndicator.value = 'delete'
    await updateUrlImgThree()

    const { error } = await client
        .storage
        .from('hpoi_images')
        .remove([user.value?.id +"/"+ imgThreeName.value])
    
        console.log('error ta ' +error)
    
    setTimeout(async () => {
        deleting.value = false
        imgThreeIndicator.value = ''
    }, 1000);

}

const deleteImageImgFour = async () => {
    deleting.value = true
    imgFourIndicator.value = 'delete'
    await updateUrlImgFour()

    const { error } = await client
        .storage
        .from('hpoi_images')
        .remove([user.value?.id +"/"+ imgFourName.value])
    
        console.log('error ta ' +error)
    
    setTimeout(async () => {
        deleting.value = false
        imgFourIndicator.value = ''
    }, 1000);

}

// get image data name
const getNameLogo  = async () => {
    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .list(user.value?.id + '/',{
            limit : 10,
            offset : 0,
            sortBy : {
                column: "name",
                order: "asc"
            },
            search: 'logo_img_'
        })

        if (data?.length == 0) return

        if(data != null ) {
            logoName.value = data[0].name
            logoUrl.value = `${url_bucket_img.value}${user.value?.id}/${logoName.value}`
        } else {
            console.log('no data can set')
        }

}

const getNameHero  = async () => {
    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .list(user.value?.id + '/',{
            limit : 10,
            offset : 0,
            sortBy : {
                column: "name",
                order: "asc"
            },
            search: 'hero_img_'
        })

        if (data?.length == 0) return

        if(data != null ) {
            heroName.value = data[0].name
            heroUrl.value = `${url_bucket_img.value}${user.value?.id}/${heroName.value}`
        } else {
            console.log('no data can set')
        }
}

const getNameImgOne  = async () => {
    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .list(user.value?.id + '/',{
            limit : 10,
            offset : 0,
            sortBy : {
                column: "name",
                order: "asc"
            },
            search: 'one_img_'
        })

        if (data?.length == 0) return

        if(data != null ) {
            imgOneName.value = data[0].name
            imgOneUrl.value = `${url_bucket_img.value}${user.value?.id}/${imgOneName.value}`
        } else {
            console.log('no data can set')
        }
}

const getNameImgTwo  = async () => {
    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .list(user.value?.id + '/',{
            limit : 10,
            offset : 0,
            sortBy : {
                column: "name",
                order: "asc"
            },
            search: 'two_img_'
        })

        if (data?.length == 0) return

        if(data != null ) {
            imgTwoName.value = data[0].name
            imgTwoUrl.value = `${url_bucket_img.value}${user.value?.id}/${imgTwoName.value}`
        } else {
            console.log('no data can set')
        }
}

const getNameImgThree  = async () => {
    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .list(user.value?.id + '/',{
            limit : 10,
            offset : 0,
            sortBy : {
                column: "name",
                order: "asc"
            },
            search: 'three_img_'
        })

        if (data?.length == 0) return

        if(data != null ) {
            imgThreeName.value = data[0].name
            imgThreeUrl.value = `${url_bucket_img.value}${user.value?.id}/${imgThreeName.value}`
        } else {
            console.log('no data can set')
        }
}

const getNameImgFour  = async () => {
    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .list(user.value?.id + '/',{
            limit : 10,
            offset : 0,
            sortBy : {
                column: "name",
                order: "asc"
            },
            search: 'four_img_'
        })

        if (data?.length == 0) return

        if(data != null ) {
            imgFourName.value = data[0].name
            imgFourUrl.value = `${url_bucket_img.value}${user.value?.id}/${imgFourName.value}`
        } else {
            console.log('no data can set')
        }
}

// method upload file function
const uploadLogo = async (event: any) => {
    uploading.value = true
    logoIndicator.value = 'upload'
    const file = event.target.files[0]
    if(!file) return
    const fileExt = file.name.split('.').pop()
    const fileName = `${user.value?.id}/logo_img_${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .upload(filePath, file)

    if(data) {
        await getNameLogo()
        await setDataLogo()
    } else {
        console.log(error)
    }

    // imageUrl.value = URL.createObjectURL(file)
}

const uploadHero = async (event: any) => {
    uploading.value = true
    heroIndicator.value = 'upload'
    const file = event.target.files[0]
    if(!file) return
    const fileExt = file.name.split('.').pop()
    const fileName = `${user.value?.id}/hero_img_${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .upload(filePath, file)

    if(data) {
        await getNameHero()
        await setDataHero()
    } else {
        console.log(error)
    }

    // imageUrl.value = URL.createObjectURL(file)
}

const uploadImgOne = async (event: any) => {
    uploading.value = true
    imgOneIndicator.value = 'upload'
    const file = event.target.files[0]
    if(!file) return
    const fileExt = file.name.split('.').pop()
    const fileName = `${user.value?.id}/one_img_${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .upload(filePath, file)

    if(data) {
        await getNameImgOne()
        await setDataImgOne()
    } else {
        console.log(error)
    }

    // imageUrl.value = URL.createObjectURL(file)
}

const uploadImgTwo = async (event: any) => {
    uploading.value = true
    imgTwoIndicator.value = 'upload'
    const file = event.target.files[0]
    if(!file) return
    const fileExt = file.name.split('.').pop()
    const fileName = `${user.value?.id}/two_img_${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .upload(filePath, file)

    if(data) {
        await getNameImgTwo()
        await setDataImgTwo()
    } else {
        console.log(error)
    }

    // imageUrl.value = URL.createObjectURL(file)
}

const uploadImgThree = async (event: any) => {
    uploading.value = true
    imgThreeIndicator.value = 'upload'
    const file = event.target.files[0]
    if(!file) return
    const fileExt = file.name.split('.').pop()
    const fileName = `${user.value?.id}/three_img_${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .upload(filePath, file)

    if(data) {
        await getNameImgThree()
        await setDataImgThree()
    } else {
        console.log(error)
    }

    // imageUrl.value = URL.createObjectURL(file)
}

const uploadImgFour = async (event: any) => {
    uploading.value = true
    imgFourIndicator.value = 'upload'
    const file = event.target.files[0]
    if(!file) return
    const fileExt = file.name.split('.').pop()
    const fileName = `${user.value?.id}/four_img_${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await client
        .storage
        .from('hpoi_images')
        .upload(filePath, file)

    if(data) {
        await getNameImgFour()
        await setDataImgFour()
    } else {
        console.log(error)
    }

    // imageUrl.value = URL.createObjectURL(file)
}

// next/back step 
const nextStep = async () => {
    progress.value = 100
    navigateTo("/admin/data-anggota/register-wizard/step-final")
}

const backStep = async () => {
    progress.value = 60
    navigateTo("/admin/data-anggota/register-wizard/step-four")
}


</script>

<style scoped>

</style>