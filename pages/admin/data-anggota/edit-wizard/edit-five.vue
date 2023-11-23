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
                                    v-if="logo_img_temp == '' && logoIndicator == ''"
                                    type="file"
                                    label="Gambar Logo"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar logo anda yang sesuai."
                                    multiple="false"
                                    @change="uploadLogo"
                                    :disabled="logo_img_temp != ''  || uploading == true"
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

                                <div v-if="logo_img_temp != '' && logoIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Logo</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Logo sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar logo anda</p>
                                </div>
                                
                                <!-- hero -->
                                <FormKit
                                    v-if="hero_img_temp == '' && heroIndicator == ''"
                                    type="file"
                                    label="Gambar Hero Utama"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar utama anda sebagai preview terdepan."
                                    multiple="false"
                                    @change="uploadHero"
                                    :disabled="hero_img_temp != ''  || uploading == true"
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

                                <div v-if="hero_img_temp != '' && heroIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Hero Utama</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Hero utama sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar hero utama anda</p>
                                </div>
                            </div>
    
                            <div class="pt-4">
                                <!-- gallery one -->
                                <FormKit
                                    v-if="gallery_one_temp == '' && imgOneIndicator == ''"
                                    type="file"
                                    label="Gambar Galeri 1"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar pendukung galeri anda."
                                    multiple="false"
                                    @change="uploadImgOne"
                                    :disabled="gallery_one_temp != '' || uploading == true"
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

                                <div v-if="gallery_one_temp != '' && imgOneIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 1</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Galeri 1 sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar Galeri 1 anda</p>
                                </div>

                                <!-- gallery two -->
                                <FormKit
                                    v-if="gallery_two_temp == '' && imgTwoIndicator == ''"
                                    type="file"
                                    label="Gambar Galeri 2"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar pendukung galeri anda."
                                    multiple="false"
                                    @change="uploadImgTwo"
                                    :disabled="gallery_two_temp != '' || uploading == true"
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

                                <div v-if="gallery_two_temp != '' && imgTwoIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 2</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Galeri 2 sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar Galeri 2 anda</p>
                                </div>

                                <!-- gallery three -->
                                <FormKit
                                    v-if="gallery_three_temp == '' && imgThreeIndicator == ''"
                                    type="file"
                                    label="Gambar Galeri 3"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar pendukung galeri anda."
                                    multiple="false"
                                    @change="uploadImgThree"
                                    :disabled="gallery_three_temp != '' || uploading == true"
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

                                <div v-if="gallery_three_temp != '' && imgThreeIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 3</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Galeri 3 sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar Galeri 3 anda</p>
                                </div>

                                <!-- gallery four -->
                                <FormKit
                                    v-if="gallery_four_temp == '' && imgFourIndicator == ''"
                                    type="file"
                                    label="Gambar Galeri 4"
                                    accept=".png, .jpg, .jpeg, .svg"
                                    help="Masukkan gambar pendukung galeri anda."
                                    multiple="false"
                                    @change="uploadImgFour"
                                    :disabled="gallery_four_temp != '' || uploading == true"
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

                                <div v-if="gallery_four_temp != '' && imgFourIndicator == ''" class="w-full pb-4">
                                    <p class="font-oswald text-sm font-semibold pb-2">Gambar Galeri 4</p>
                                    <p class="font-oswald text-xs text-gray-500">Gambar Galeri 4 sudah dipilih, silahkan klik tombol Ganti File untuk merubah file gambar Galeri 4 anda</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- preview images section -->
                    <div class="relative overflow-hidden z-40 bg-gray-50 w-96 shadow rounded-xl px-4 lg:px-8 py-6">
                        <div class="font-oswald text-sm overflow-hidden pb-4">
                            <div class="flex gap-x-2 items-center justify-start pb-2">
                                <p>Preview Logo </p>
                                <button v-if="logo_img_temp != '' && deleting == false" @click="deleteImageLogo()">
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
                                <button v-if="hero_img_temp != '' && deleting == false" @click="deleteImageHero()">
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
                            <div class="font-oswald text-xs overflow-hidden">
                                <div class="flex gap-x-2 items-center justify-start pb-2">
                                    <p>Preview Galeri 1 </p>
                                    <button v-if="gallery_one_temp != '' && deleting == false" @click="deleteImageImgOne()">
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

                            <div class="font-oswald text-xs overflow-hidden">
                                <div class="flex gap-x-2 items-center justify-start pb-2">
                                    <p>Preview Galeri 2 </p>
                                    <button v-if="gallery_two_temp != '' && deleting == false" @click="deleteImageImgTwo()">
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

                            <div class="font-oswald text-xs overflow-hidden">
                                <div class="flex gap-x-2 items-center justify-start pb-2">
                                    <p>Preview Galeri 3 </p>
                                    <button v-if="gallery_three_temp != '' && deleting == false" @click="deleteImageImgThree()">
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

                            <div class="font-oswald text-xs overflow-hidden">
                                <div class="flex gap-x-2 items-center justify-start pb-2">
                                    <p>Preview Galeri 4 </p>
                                    <button v-if="gallery_four_temp != '' && deleting == false" @click="deleteImageImgFour()">
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
    layananAll,
    imagesAll_temp
} = storeToRefs(storeAnggota)

const {
    loading,
    progress,
    url_bucket_img,
    uploading,
    deleting
} = storeToRefs(storeGlobalData)

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

onMounted(async () => {
    progress.value = 100
    await fetchImageTemp()
})


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

// fetch data

const fetchImageTemp = async () => {
    await getNameLogo()
    await getNameHero()
    await getNameImgOne()
    await getNameImgTwo()
    await getNameImgThree()
    await getNameImgFour()
    logo_img_temp.value = await detail_anggota.value.hpoi_anggota.logo_img
    hero_img_temp.value = await detail_anggota.value.hpoi_anggota.hero_img
    gallery_one_temp.value = await detail_anggota.value.hpoi_anggota.gallery_one
    gallery_two_temp.value = await detail_anggota.value.hpoi_anggota.gallery_two
    gallery_three_temp.value = await detail_anggota.value.hpoi_anggota.gallery_three
    gallery_four_temp.value = await detail_anggota.value.hpoi_anggota.gallery_four
    
    console.log(logo_img_temp.value)
    console.log(hero_img_temp.value)
    console.log(gallery_one_temp.value)
    console.log(gallery_two_temp.value)
    console.log(gallery_three_temp.value)
    console.log(gallery_four_temp.value)
}
    


// setting images

const reFetchData = async () => {
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
    await fetchImageTemp()
}

// process insert/update images temp
const setDataLogo = async () => {
    console.log('data ditemukan gas update')
    const { data, error } = await client
    .from('hpoi_anggota')
    .update({ logo_img: logoUrl.value })
    .eq('user_id', user.value?.id)
    .select()

    await reFetchData()
    setTimeout(async () => {
        uploading.value = false
        logoIndicator.value = ''
    }, 1000);

}

const setDataHero = async () => {
    console.log('data ditemukan gas update')
    const { data, error } = await client
    .from('hpoi_anggota')
    .update({ hero_img: heroUrl.value })
    .eq('user_id', user.value?.id)
    .select()

    await reFetchData()
    setTimeout(async () => {
        uploading.value = false
        heroIndicator.value = ''
    }, 1000);

}

const setDataImgOne = async () => {
    console.log('data ditemukan gas update')
    const { data, error } = await client
    .from('hpoi_anggota')
    .update({ gallery_one: imgOneUrl.value })
    .eq('user_id', user.value?.id)
    .select()

    await reFetchData()
    setTimeout(async () => {
        uploading.value = false
        imgOneIndicator.value = ''
    }, 1000);

}

const setDataImgTwo = async () => {
    console.log('data ditemukan gas update')
    const { data, error } = await client
    .from('hpoi_anggota')
    .update({ gallery_two: imgTwoUrl.value })
    .eq('user_id', user.value?.id)
    .select()

    await reFetchData()
    setTimeout(async () => {
        uploading.value = false
        imgTwoIndicator.value = ''
    }, 1000);

}

const setDataImgThree = async () => {
    console.log('data ditemukan gas update')
    const { data, error } = await client
    .from('hpoi_anggota')
    .update({ gallery_three: imgThreeUrl.value })
    .eq('user_id', user.value?.id)
    .select()

    await reFetchData()
    setTimeout(async () => {
        uploading.value = false
        imgThreeIndicator.value = ''
    }, 1000);

}

const setDataImgFour = async () => {
    console.log('data ditemukan gas update')
    const { data, error } = await client
    .from('hpoi_anggota')
    .update({ gallery_four: imgFourUrl.value })
    .eq('user_id', user.value?.id)
    .select()

    await reFetchData()
    setTimeout(async () => {
        uploading.value = false
        imgFourIndicator.value = ''
    }, 1000);

}

// process updates images temp table after delete img
const updateUrlLogo = async () => {
    const { data, error } = await client
        .from('hpoi_anggota')
        .update({ logo_img: '' })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
    
    await reFetchData()
}

const updateUrlHero = async () => {
    const { data, error } = await client
        .from('hpoi_anggota')
        .update({ hero_img: '' })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
    
    await reFetchData()
}

const updateUrlImgOne = async () => {
    const { data, error } = await client
        .from('hpoi_anggota')
        .update({ gallery_one: '' })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
    
    await reFetchData()
}

const updateUrlImgTwo = async () => {
    const { data, error } = await client
        .from('hpoi_anggota')
        .update({ gallery_two: '' })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
    
    await reFetchData()
}

const updateUrlImgThree = async () => {
    const { data, error } = await client
        .from('hpoi_anggota')
        .update({ gallery_three: '' })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
    
    await reFetchData()
}

const updateUrlImgFour = async () => {
    const { data, error } = await client
        .from('hpoi_anggota')
        .update({ gallery_four: '' })
        .eq('user_id', user.value?.id)
        .select()
        
        console.log('update process after delete image')
        console.log(data)
    
    await reFetchData()
}

// process delete images file
const deleteImageLogo = async () => {
    deleting.value = true
    logoIndicator.value = 'delete'
    
    const { error } = await client
    .storage
    .from('hpoi_images')
    .remove([user.value?.id +"/"+ logoName.value])
    
    console.log('error ta ' +error)
    await updateUrlLogo()
    
    setTimeout(async () => {
        deleting.value = false
        logoIndicator.value = ''
    }, 1000);

}

const deleteImageHero = async () => {
    deleting.value = true
    heroIndicator.value = 'delete'
    
    const { error } = await client
    .storage
    .from('hpoi_images')
    .remove([user.value?.id +"/"+ heroName.value])
    
    console.log('error ta ' +error)
    await updateUrlHero()
    
    setTimeout(async () => {
        deleting.value = false
        heroIndicator.value = ''
    }, 1000);

}

const deleteImageImgOne = async () => {
    deleting.value = true
    imgOneIndicator.value = 'delete'
    
    const { error } = await client
    .storage
    .from('hpoi_images')
    .remove([user.value?.id +"/"+ imgOneName.value])
    
    console.log('error ta ' +error)
    await updateUrlImgOne()
    
    setTimeout(async () => {
        deleting.value = false
        imgOneIndicator.value = ''
    }, 1000);

}

const deleteImageImgTwo = async () => {
    deleting.value = true
    imgTwoIndicator.value = 'delete'
    
    const { error } = await client
    .storage
    .from('hpoi_images')
    .remove([user.value?.id +"/"+ imgTwoName.value])
    
    console.log('error ta ' +error)
    await updateUrlImgTwo()
    
    setTimeout(async () => {
        deleting.value = false
        imgTwoIndicator.value = ''
    }, 1000);

}

const deleteImageImgThree = async () => {
    deleting.value = true
    imgThreeIndicator.value = 'delete'
    
    const { error } = await client
    .storage
    .from('hpoi_images')
    .remove([user.value?.id +"/"+ imgThreeName.value])
    
    console.log('error ta ' +error)
    await updateUrlImgThree()
    
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
    
        if(error == null) {
            setTimeout(async () => {
                deleting.value = false
                imgFourIndicator.value = ''
            }, 1000);
        }

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

        if (data?.length == 0) return error

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

</script>

<style scoped>

</style>