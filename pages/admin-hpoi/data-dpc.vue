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
                    Data All Anggota HPOI 
                </h1>
            </div>
            <!-- start table v1 -->
            <div class="relative z-40 pb-10">
                <div class="mt-6">
                    <!-- search & action -->
                    <div class="mb-6 flex w-full flex-col items-end justify-between gap-4 sm:flex-row">
                        <div class="flex w-full items-center sm:w-auto">
                            <div class="relative w-full sm:w-auto">
                                <FormKit
                                    type="search"
                                    placeholder="Search DPC..."
                                    prefix-icon="search"
                                    outer-class="!mb-0"
                                    inner-class="!mb-0"
                                />
                            </div>
                        </div>
                        <ButtonBaseExpanded class="flex items-center justify-center gap-x-1">
                            <Icon name="lucide:copy-plus" class="text-2xl"/>
                            New Data
                        </ButtonBaseExpanded>
                    </div>

                    <!-- table & pagination -->
                    <div class="mt-2">
                        <!-- table start -->
                        <div class="w-full">
                            <div class="flex flex-col">
                                <div class="overflow-x-auto border rounded-md">
                                    <div class="inline-block min-w-full align-middle">
                                        <div class="overflow-hidden">
                                            <client-only>
                                                <table class="divide-gray-200 min-w-full table-fixed divide-y">
                                                    <thead>
                                                        <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-gray-100 px-4 py-5">
                                                            Nomor
                                                        </th>
                                                        <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-gray-100 px-4 py-5">
                                                            Nama DPC
                                                        </th>
                                                        <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-gray-100 px-4 py-5">
                                                            action
                                                        </th>
                                                    </thead>
                                                    <tbody class="divide-gray-20 divide-y bg-white">
                                                        <tr v-for="item of (dpcAll as any[])" :key="item.id" class="hover:bg-gray-50 transition-[height] duration-1000">
                                                            <td class="whitespace-nowrap text-xs p-4">
                                                                {{ item.id }}
                                                            </td>
                                                            <td class="whitespace-nowrap text-xs p-4">
                                                                <span class="font-bold">
                                                                    {{ item.nama_dpc }}
                                                                </span>
                                                            </td>
                                                            <!-- aaction button -->
                                                            <td class="whitespace-nowrap text-sm p-4 w-36 relative ">
                                                                <HeadlessPopover class="static">
                                                                    <HeadlessPopoverButton class="outline-none">
                                                                        <ButtonBase class="dark">
                                                                            <div class="flex gap-x-1 items-center justify-center leading-none">
                                                                                <p>Manage Data</p>
                                                                                <Icon name="lucide:chevron-down" class="text-xl font-bold transition-all duration-300 ui-open:rotate-180 ui-open:transform"/>
                                                                            </div>
                                                                        </ButtonBase>
                                                                    </HeadlessPopoverButton>
                                                                    <transition
                                                                        enter-active-class="transition duration-300 ease-out"
                                                                        enter-from-class="transform scale-95 opacity-0"
                                                                        enter-to-class="transform scale-100 opacity-100"
                                                                        leave-active-class="transition duration-200 ease-out"
                                                                        leave-from-class="transform scale-100 opacity-100"
                                                                        leave-to-class="transform scale-95 opacity-0"
                                                                    >
                                                                        <HeadlessPopoverPanel class="sticky z-10 bg-gray-700 rounded-md end-0 origin-top-right px-2 py-4 mt-2 w-full border">
                                                                            <div class="flex flex-col items-center w-full gap-3">
                                                                                <ButtonBaseSmall class=" w-full">
                                                                                    <Icon name="lucide:eye" class="text-2xl" />
                                                                                    <span>
                                                                                        Detail Data
                                                                                    </span>
                                                                                </ButtonBaseSmall>
                                                                
                                                                                <ButtonBaseSmall class="warning w-full">
                                                                                    <Icon name="lucide:edit-3" class="text-2xl" />
                                                                                    <span>
                                                                                        Edit Data
                                                                                    </span>
                                                                                </ButtonBaseSmall>
                                                                
                                                                                <ButtonBaseSmall class="danger w-full">
                                                                                    <Icon name="lucide:trash" class="text-2xl" />
                                                                                    <span>
                                                                                        Delete Data
                                                                                    </span>
                                                                                </ButtonBaseSmall>
                                                                            </div>
                                                                        </HeadlessPopoverPanel>
                                                                    </transition>
                                                                </HeadlessPopover>
                                                
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </client-only>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- pagination start -->
                        <div class="mt-6">
                            <div class="inline-flex w-full flex-col md:flex-row md:justify-between">
                                <ul class="mb-4 inline-flex flex-wrap justify-center gap-2 border p-1 md:mb-0 md:gap-1 rounded-xl">
                                    <li>
                                        <a href="#" class="router-link-active router-link-exact-active flex h-10 w-10 items-center justify-center text-sm transition-all duration-300 border border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-gray-700 bg-white rounded-xl">
                                            <Icon name="lucide:chevron-left" class="text-xl"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="router-link-active router-link-exact-active flex h-10 w-10 items-center justify-center border text-sm transition-all duration-300 bg-sky-500 border-sky-500 shadow-sky-500/50 text-white shadow-sm rounded-xl">1</a>
                                    </li>
                                    <li>
                                        <a href="#" class="router-link-active router-link-exact-active flex h-10 w-10 items-center justify-center text-sm transition-all duration-300 border border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-gray-700 bg-white rounded-xl">2</a>
                                    </li>
                                    <li>
                                        <a href="#" class="router-link-active router-link-exact-active flex h-10 w-10 items-center justify-center text-sm transition-all duration-300 border border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-gray-700 bg-white rounded-xl">3</a>
                                    </li>
                                    <li>
                                        <a href="#" class="router-link-active router-link-exact-active flex h-10 w-10 items-center justify-center text-sm transition-all duration-300 border border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-gray-700 bg-white rounded-xl">4</a>
                                    </li>
                                    <li>
                                        <a href="#" class="router-link-active router-link-exact-active flex h-10 w-10 items-center justify-center text-sm transition-all duration-300 border border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-gray-700 bg-white rounded-xl">5</a>
                                    </li>
                                    <li>
                                        <a href="#" class="router-link-active router-link-exact-active flex h-10 w-10 items-center justify-center text-sm transition-all duration-300 border border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-gray-700 bg-white rounded-xl">
                                            <Icon name="lucide:chevron-right" class="text-xl"/>
                                        </a>
                                    </li>
                                </ul>
                                <div class="flex items-center justify-end gap-1 p-1 rounded-xl">
                                    <FormKit
                                        type="select"
                                        name="count_data"
                                        :options="[
                                            10,
                                            25,
                                            50,
                                            100
                                        ]"
                                        outer-class="!mb-0"
                                        inner-class="!mb-0"
                                    />
                                </div>
                            </div>
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
const client = useSupabaseClient<any>()

const {
    loading
} = storeToRefs(storeGlobalData)

const dpcAll = ref()
const search = ref('')

// feth data from api
const { data: dpcs } = await useAsyncData('anggota', async () => client
    .from('hpoi_dpc')
    .select(`*`)
    .order('created_at')
    , { transform: (result : any) => result.data }
)
dpcAll.value = await dpcs.value

const toProfil = () => {
  navigateTo('/admin/data-anggota')
}
// logout 
const logout = async () => {
    loading.value = true
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