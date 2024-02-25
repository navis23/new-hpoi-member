<template>
    <div class="relative overflow-hidden">
      <!-- top navbar -->
      <nav class="absolute px-4 md:px-8 lg:px-16 xl:px-32 w-full h-16 flex items-center justify-between z-[99]">
        <div class="flex items-center justify-start w-44">
            <nuxt-link to="/">
                <nuxt-img src="/img/hpoi.png" format="webp" loading="lazy" sizes="sm:25vw" class="object-cover object-center h-10"/>
            </nuxt-link>
        </div>
        <div class="flex items-center gap-x-2 justify-end">
                <ButtonBaseSmall @click="toProfil()" class="hpoi">
                    <Icon name="lucide:user" class="text-xl" />
                    <span>To Edit Profil</span>
                </ButtonBaseSmall>
                <ButtonBaseSmall @click="logout()" class="dark">
                    <Icon name="lucide:log-out" class="text-xl" />
                    <span>Logout</span>
                </ButtonBaseSmall>
        </div>
      </nav>
      <div class="bg-gray-50 rounded-xl shadow p-4 overflow-hidden flex items-center justify-center gap-4 mt-20 mx-4 md:mx-8 lg:mx-16 xl:mx-32">
        <nuxt-link to="/admin-hpoi">
            <ButtonBaseSmall class="dark">
                <Icon name="lucide:pie-chart" class="text-xl" />
                <span>Dashboard</span>
            </ButtonBaseSmall>
        </nuxt-link>
        <nuxt-link to="/admin-hpoi/data-anggota">
            <ButtonBaseSmall class="dark">
                <Icon name="lucide:users" class="text-xl" />
                <span>Data Anggota</span>
            </ButtonBaseSmall>
        </nuxt-link>
        <nuxt-link to="/admin-hpoi/data-dpc">
            <ButtonBaseSmall class="dark">
                <Icon name="lucide:map-pin" class="text-xl" />
                <span>Data DPC</span>
            </ButtonBaseSmall>
        </nuxt-link>
      </div>

      <!-- data is completed -->
      <div class="relative min-h-screen my-12 px-4 md:px-8 lg:px-16 xl:px-32 overflow-hidden">
            <div class="font-oswald w-full text-center mb-5 lg:mb-10 text-gsi-darkblue">
                <h1 class="text-2xl lg:text-4xl">
                    Dashboard Admin HPOI 
                </h1>
            </div>
            <div class="relative z-40 grid grid-cols-12 pb-10 gap-6">
                <!-- all anggota view -->
                <div class="col-span-12 lg:col-span-4 bg-gray-50 rounded-xl shadow p-6 overflow-hidden">
                    <div class="flex items-center justify-center border-b-2 pb-2 mb-2">
                        <p class="font-oswald text-xl text-gsi-darkblue">
                            Data Seluruh Anggota
                        </p>
                    </div>
                    <div class="space-y-3 font-oswald">
                        <div class="text-gsi-darkblue text-center">
                            <p class="text-9xl">{{ anggota.length }}</p>
                            <p class="text-lg">anggota terdaftar</p>
                        </div>
                    </div>
                </div>
                <!-- all anggota view -->
                <div class="col-span-12 lg:col-span-4 bg-gray-50 rounded-xl shadow p-6 overflow-hidden">
                    <div class="flex items-center justify-center border-b-2 pb-2 mb-2">
                        <p class="font-oswald text-xl text-hpoi-main">
                            Data Anggota Terverifikasi
                        </p>
                    </div>
                    <div class="space-y-3 font-oswald">
                        <div class="text-hpoi-main text-center">
                            <p class="text-9xl">{{ verifiedMember.length }}</p>
                            <p class="text-lg">anggota terverifikasi</p>
                        </div>
                    </div>
                </div>
                <!-- all anggota view -->
                <div class="col-span-12 lg:col-span-4 bg-gray-50 rounded-xl shadow p-6 overflow-hidden">
                    <div class="flex items-center justify-center border-b-2 pb-2 mb-2">
                        <p class="font-oswald text-xl text-rose-500">
                            Data Anggota belum terverifikasi
                        </p>
                    </div>
                    <div class="space-y-3 font-oswald">
                        <div class="text-rose-500 text-center">
                            <p class="text-9xl">{{ nonVerifiedMember.length }}</p>
                            <p class="text-lg">anggota belum terverifikasi</p>
                        </div>
                    </div>
                </div>

            </div>
            <!-- pattern background -->
            <p class="absolute py-10 -right-56 opacity-20 md:opacity-50 -top-10">
                <Icon name="PatternThree" class="text-[26rem] lg:text-[36rem]"/>
            </p>
            <p class="absolute py-10 -left-56 opacity-20 md:opacity-50 -bottom-10">
                <Icon name="PatternThree" class="text-[26rem] lg:text-[36rem]"/>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth-admin"]
  // or middleware: 'auth'
})

const storeGlobalData = useGlobalDataStore()
const storeAnggota = useAnggotaStore()
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
        featured, activated,
        hpoi_anggota(nama_provider, telepon, no_anggota, logo_img, hero_img),
        hpoi_dpc( nama_dpc )
    `)
    , { transform: (result : any) => result.data }
)
anggotaAll.value = await anggota.value
anggotaFeat.value = await anggota.value

// filtered featured member
const verifiedMember = computed(() =>
anggotaAll.value.filter(
        (p : any) => p.activated == true
    ) || []
)
// filtered featured member
const nonVerifiedMember = computed(() =>
anggotaAll.value.filter(
        (p : any) => p.activated == false
    ) || []
)

const toProfil = () => {
  navigateTo('/admin/data-anggota')
}
// logout 
const logout = async () => {
    loading.value = true
    storeAnggota.$reset()
    try {
        let { error } = await client.auth.signOut()
        if(error) throw error;
        setTimeout(async () => {
            loading.value = false
            navigateTo('/secret/login')
            console.log('berhasil log out')
        }, 2000);

    } catch (error) {
        console.log(error)
    }
    
}

</script>

<style scoped>

</style>