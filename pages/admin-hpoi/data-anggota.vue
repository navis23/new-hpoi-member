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
                                    placeholder="Search Anggota..."
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
                                                            No Anggota
                                                        </th>
                                                        <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-gray-100 px-4 py-5">
                                                            Nama Provider
                                                        </th>
                                                        <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-gray-100 px-4 py-5">
                                                            Nama PIC
                                                        </th>
                                                        <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-gray-100 px-4 py-5">
                                                            Telepon
                                                        </th>
                                                        <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-gray-100 px-4 py-5">
                                                            DPC
                                                        </th>
                                                        <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-gray-100 px-4 py-5">
                                                            Status
                                                        </th>
                                                        <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-gray-100 px-4 py-5">
                                                            Verifikasi Akun
                                                        </th>
                                                        <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-gray-100 px-4 py-5">
                                                            E-Card
                                                        </th>
                                                        <!-- <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                            action
                                                        </th> -->
                                                    </thead>
                                                    <tbody class="divide-gray-20 divide-y bg-white">
                                                        <tr v-for="item of (anggotaAll as any[])" :key="item.id" class="hover:bg-gray-50 transition-[height] duration-1000">
                                                            <td class="whitespace-nowrap text-xs p-4">
                                                                {{ item.hpoi_anggota.no_anggota }}
                                                            </td>
                                                            <td class="whitespace-nowrap text-xs p-4">
                                                                <span class="font-bold">
                                                                    {{ item.hpoi_anggota.nama_provider }}
                                                                </span>
                                                            </td>
                                                            <td class="whitespace-nowrap text-xs p-4">
                                                                {{ item.hpoi_anggota.nama_pic }}
                                                            </td>
                                                            <td class="whitespace-nowrap text-xs p-4">
                                                                {{ item.hpoi_anggota.telepon }}
                                                            </td>
                                                            <td class="whitespace-nowrap text-xs p-4 capitalize">
                                                                {{ item.hpoi_anggota.dpc.toLowerCase() }}, {{ item.hpoi_anggota.dpd.toLowerCase() }}
                                                            </td>
                                                            <td class="whitespace-nowrap text-xs p-4">
                                                                <div v-if="loading && item.id_anggota == id_anggota_temp" class="flex gap-x-2">
                                                                    <p>
                                                                        <Icon name="svg-spinners:gooey-balls-2" class="text-lg text-hpoi-main" />
                                                                    </p>
                                                                    <p class="font-oswald text-hpoi-main font-bold">Verified Loading..</p>
                                                                </div>
                                                                <p v-if="!item.activated" class="text-rose-500">
                                                                    Belum Terverifikasi
                                                                </p>
                                                                
                                                                <p v-if="item.activated" class="text-sky-500">
                                                                    Terverifikasi (AKTIF)
                                                                </p>
                                                                
                                                            </td>
                                                            <td class="whitespace-nowrap text-xs p-4">
                                                                <div class="w-full flex items-center justify-center">
                                                                    <HeadlessSwitch
                                                                        @click="openModalConfirm(item)"
                                                                        :class="item.activated ? 'bg-sky-500' : 'bg-gray-200'"
                                                                        class="relative inline-flex h-6 w-11 items-center rounded-full"
                                                                    >
                                                                        <span class="sr-only">Enable notifications</span>
                                                                        <span
                                                                        :class="item.activated ? 'translate-x-6' : 'translate-x-1'"
                                                                        class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-500"
                                                                        />
                                                                    </HeadlessSwitch>
                                                                </div>
                                                                <!-- switch example v1 -->
                                                            </td>
                                                            <td class="whitespace-nowrap text-xs p-4">
                                                                <ButtonBaseSmall @click="openModalCard(item)" class="dark">
                                                                    <div class="flex gap-x-1 items-center justify-center leading-none">
                                                                        <Icon name="lucide:eye" class="text-lg font-bold transition-all duration-300"/>
                                                                        <p>View</p>
                                                                    </div>
                                                                </ButtonBaseSmall>
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
        <!-- modal to choose dpc -->
        <ClientOnly>
            <HeadlessTransitionRoot appear :show="is_open_card" as="template">
                <HeadlessDialog as="div" class="relative z-[999]">
                    <HeadlessTransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <div class="fixed inset-0 bg-black bg-opacity-50" />
                    </HeadlessTransitionChild>

                    <div class="fixed inset-0 overflow-y-auto">
                        <div class="flex min-h-full items-center justify-center p-4 text-center">
                            <HeadlessTransitionChild
                                as="template"
                                enter="duration-300 ease-out"
                                enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100"
                                leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100"
                                leave-to="opacity-0 scale-95"
                            >
                                <HeadlessDialogPanel class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-gsi-smokewhite p-6 text-left align-middle shadow-xl transition-all">
                                    <HeadlessDialogTitle as="h3" class="text-2xl flex items-center justify-between font-oswald font-semibold leading-6 text-gsi-darkblue">
                                        <h3>Kartu Anggota</h3>
                                        <button @click="CloseModal()">
                                            <Icon name="lucide:x" class="text-3xl" />
                                        </button>
                                    </HeadlessDialogTitle>
                                    
                                    <div class="mt-4 relative w-full">
                                        <div class="w-full flex justify-center">
                                            <ButtonBaseSmall
                                                @click="startDl()" 
                                                class="flex items-center justify-center gap-x-1 mt-3">
                                                    <Icon name="lucide:download" class="text-xl" />
                                                    <span>
                                                        Unduh Kartu Anggota
                                                    </span>
                                            </ButtonBaseSmall>
                                        </div>
                                        <div id="testing" class="col-span-2 lg:col-span-1 relative bg-white w-[60rem] -translate-x-[19.5rem] -translate-y-[10rem] scale-[.35] lg:-translate-x-[13.5rem] lg:-translate-y-[7.5rem] lg:scale-50">
                                            <div class="relative w-full">
                                                <img src="/img/membercard.png" class="object-contain object-center">
                                            </div>
                                            <div :class="nameProviderMargin ? 'top-[8.25rem]' : 'top-[9.25rem]'" class="absolute left-[23rem]">
                                                <p class="font-semibold text-4xl text-white">
                                                    {{ no_anggota_temp }}
                                                </p>
                                            </div>
                                            <div :class="nameProviderMargin ? 'top-[16.5rem]' : 'top-[17.5rem]'" class="absolute left-[3.25rem]">
                                                <p class="text-4xl font-oswald uppercase">
                                                    {{ nama_pic_temp }}
                                                </p>
                                            </div>
                                            <div :class="nameProviderMargin ? 'top-[22rem]' : 'top-[23rem]'" class="absolute left-[3.25rem]">
                                                <p class="text-4xl font-oswald uppercase">
                                                    {{ dpc_temp }}
                                                </p>
                                            </div>
                                            <div :class="nameProviderMargin ? 'top-[27.5rem]' : 'top-[28.5rem]'" class="absolute left-[3.25rem]">
                                                <p class="text-4xl font-oswald uppercase">
                                                    {{ dpd_temp }}
                                                </p>
                                            </div>
                                            <div class="absolute bottom-16 right-20 flex flex-col items-center justify-center">
                                                <div class="flex items-center justify-center overflow-hidden">
                                                    <img :src="nama_logo_temp" class="h-[6rem] rounded-lg" alt="">
                                                </div>
                                                <div :class="nameProviderMargin ? 'mt-0 mb-5' : 'mt-2 mb-2'" class="w-56 h-[5.8rem] flex items-center justify-center text-center p-0">
                                                    <h3 class="font-oswald font-semibold text-3xl tracking-tight leading-none uppercase">
                                                        {{ nama_provider_temp }}
                                                    </h3>
                                                </div>
                                                <div class="">
                                                    <qrcode-vue :value="linkQr" :level="level" :render-as="renderAs" :size="125" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </HeadlessDialogPanel>
                            </HeadlessTransitionChild>
                        </div>
                    </div>
                </HeadlessDialog>
            </HeadlessTransitionRoot>
        </ClientOnly>

        <ClientOnly>
            <HeadlessTransitionRoot appear :show="is_open_confirm" as="template">
                <HeadlessDialog as="div" class="relative z-[999]">
                    <HeadlessTransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <div class="fixed inset-0 bg-black bg-opacity-50" />
                    </HeadlessTransitionChild>

                    <div class="fixed inset-0 overflow-y-auto">
                        <div class="flex min-h-full items-center justify-center p-4 text-center">
                            <HeadlessTransitionChild
                                as="template"
                                enter="duration-300 ease-out"
                                enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100"
                                leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100"
                                leave-to="opacity-0 scale-95"
                            >
                                <HeadlessDialogPanel class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-gsi-smokewhite p-6 text-left align-middle shadow-xl transition-all">
                                    <HeadlessDialogTitle as="h3" class="text-2xl flex items-center justify-between font-oswald font-semibold leading-6 text-gsi-darkblue">
                                        <h3>Verifikasi Status Anggota</h3>
                                    </HeadlessDialogTitle>
                                    
                                    <div class="mt-4 flex flex-col gap-3 relative w-full border-y-2 py-2">
                                        <table class="relative w-full space-y-2">
                                            <tr class="text-left">
                                                <th class="w-40 text-sm text-gray-600 pb-2 font-normal ">
                                                    Provider
                                                </th>
                                                <td class="pb-2 text-sm font-semibold">
                                                    {{ nama_provider_temp }}
                                                </td>
                                            </tr>
                                            <tr class="text-left">
                                                <th class="w-40 text-sm text-gray-600 pb-2 font-normal ">
                                                    No. Reg
                                                </th>
                                                <td class="pb-2 text-sm font-semibold">
                                                    {{ no_anggota_temp }}
                                                </td>
                                            </tr>
                                            <tr class="text-left">
                                                <th class="w-40 text-sm text-gray-600 pb-2 font-normal ">
                                                    Penanggung Jawab
                                                </th>
                                                <td class="pb-2 text-sm font-semibold">
                                                    {{ nama_pic_temp }}
                                                </td>
                                            </tr>
                                            <tr class="text-left">
                                                <th class="w-40 text-sm text-gray-600 pb-2 font-normal ">
                                                    Kota/Kab. (DPC)
                                                </th>
                                                <td class="pb-2 text-sm font-semibold">
                                                    {{ dpc_temp }}
                                                </td>
                                            </tr>
                                            <tr class="text-left">
                                                <th class="w-40 text-sm text-gray-600 pb-2 font-normal ">
                                                    Provinsi (DPD)
                                                </th>
                                                <td class="pb-2 text-sm font-semibold">
                                                    {{ dpd_temp }}
                                                </td>
                                            </tr>
                                            <tr class="text-left">
                                                <th class="w-40 text-sm text-gray-600 pb-2 font-normal ">
                                                    Status
                                                </th>
                                                <td class="pb-2 text-sm font-semibold">
                                                    <p v-if="!activated_temp && is_open_confirm" class="uppercase text-hpoi-red">
                                                        Tidak Aktif
                                                    </p> 
                                                    <p v-if="activated_temp && is_open_confirm" class="uppercase text-sky-700">
                                                        AKtif
                                                    </p> 
                                                </td>
                                            </tr>
                                        </table>
                                        <div>
                                            <p v-if="activated_temp && is_open_confirm">
                                                Apakah anggota aktif diatas akan dirubah statusnya menjadi anggota terdaftar <span class="uppercase text-hpoi-red font-bold">tidak aktif</span> pada keanggotaan HPOI ?
                                            </p>
                                            <p v-if="!activated_temp && is_open_confirm">
                                                Apakah anggota diatas akan diverifikasi statusnya sebagai anggota terdaftar <span class="uppercase text-sky-700 font-bold">aktif</span> pada keanggotaan HPOI ?
                                            </p>
                                        </div>
                                    </div>
                                    <div v-if="activated_temp && is_open_confirm" class="flex gap-3 pt-4 pb-2">
                                        <ButtonBaseSmall class="muted flex items-center justify-center gap-x-1" @click="cancelVerification()">
                                            <Icon name="lucide:x-circle" class="text-lg" />
                                            <span>
                                                Batalkan
                                            </span>
                                        </ButtonBaseSmall>
                                        <ButtonBaseSmall class="danger flex items-center justify-center gap-x-1" @click="switchData()">
                                            <Icon name="lucide:save" class="text-lg" />
                                            <span>
                                                Ya, Non Aktifkan Sekarang
                                            </span>
                                        </ButtonBaseSmall>
                                    </div>
                                    <div v-if="!activated_temp && is_open_confirm" class="flex gap-3 pt-4 pb-2">
                                        <ButtonBaseSmall class="muted flex items-center justify-center gap-x-1" @click="cancelVerification()">
                                            <Icon name="lucide:x-circle" class="text-lg" />
                                            <span>
                                                Batalkan
                                            </span>
                                        </ButtonBaseSmall>
                                        <ButtonBaseSmall class="flex items-center justify-center gap-x-1" @click="switchData()">
                                            <Icon name="lucide:save" class="text-lg" />
                                            <span>
                                                Ya, Aktivasi Sekarang
                                            </span>
                                        </ButtonBaseSmall>
                                    </div>
                                </HeadlessDialogPanel>
                            </HeadlessTransitionChild>
                        </div>
                    </div>
                </HeadlessDialog>
            </HeadlessTransitionRoot>
        </ClientOnly>

        <div v-if="miniToast" class="fixed z-[999] bottom-4 right-4 bg-gray-700 text-gsi-smokewhite rounded">
            <div class="relative p-3">
                <div class="flex gap-x-1 items-end justify-start mb-2 border-b border-hpoi-main pb-2">
                    <p>
                        <Icon v-if="deactivated" name="lucide:user-x" class="text-xl text-hpoi-red" />
                        <Icon v-if="!deactivated" name="lucide:user-check" class="text-xl text-hpoi-main" />
                    </p>
                    <h3 v-if="deactivated" class="text-sm text-hpoi-red leading-0 font-bold">Anggota terverifikasi TIDAK AKTIF</h3>
                    <h3 v-if="!deactivated" class="text-sm leading-0">Anggota terverifikasi AKTIF</h3>
                </div>
                <p v-if="deactivated" class="text-xs pb-2">Status anggota akan menjadi TIDAK AKTIF / Belum Terverifikasi</p>
                <p v-if="!deactivated" class="text-xs pb-2">Notifikasi ke anggota telah dikirimkan via Email</p>
                <div class="absolute w-full bottom-0 left-0">
                    <div role="progressbar" :aria-valuenow="progressToast" aria-valuemax="100" class="relative w-full overflow-hidden h-1 rounded-full bg-gray-600">
                        <div class="absolute start-0 top-0 h-full transition-[width] bg-hpoi-main rounded-full" :style="`width: ${progressToast}%;`"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import html2canvas from 'html2canvas'
import QrcodeVue, { type Level, type RenderAs } from 'qrcode.vue'

definePageMeta({
  middleware: ["auth-admin"]
  // or middleware: 'auth'
})

const storeGlobalData = useGlobalDataStore()
const storeAnggota = useAnggotaStore()
const client = useSupabaseClient<any>()

const {
    loading
} = storeToRefs(storeGlobalData)

const anggotaAll = ref()
const anggotaFeat = ref()
const search = ref('')
const is_open_card = ref(false)
const is_open_confirm = ref(false)
const id_anggota_temp = ref('')
const no_anggota_temp = ref('')
const nama_provider_temp = ref('')
const email_temp = ref('')
const dpc_temp = ref('')
const dpd_temp = ref('')
const nama_pic_temp = ref('')
const nama_dpc_temp = ref('')
const nama_logo_temp = ref('')
const activated_temp = ref(false)


const linkQr = ref('')
const level = ref<Level>('Q')
const renderAs = ref<RenderAs>('svg')
const nameProviderMargin = ref(false)
const splitNamaDpc = ref('')
const splitNamaDpd = ref('')

const enabled = ref(false)
const deactivated = ref(false)
const miniToast = ref(false)
const progressToast = ref(0)

// feth data from api
const { data: anggota } = await useAsyncData('anggota', async () => client
    .from('hpoi_detail_anggota')
    .select(`
        featured, activated, id_anggota,
        hpoi_anggota(nama_provider, telepon, email, no_anggota, nama_pic, logo_img, dpc, dpd, user_id),
        hpoi_dpc( nama_dpc )
    `)
    .order('created_at')
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

const reFetchData = async() => {
    const { data: anggota, error } = await client
        .from('hpoi_detail_anggota')
        .select(`
            featured, activated, id_anggota,
            hpoi_anggota(nama_provider, telepon, email, no_anggota, nama_pic, logo_img, dpc, dpd, user_id),
            hpoi_dpc( nama_dpc )
        `)
        .order('created_at')
    
    if(error) return console.log(error)
    anggotaAll.value = anggota
}

// switching status active
const switchData = async () => {
    console.log(activated_temp.value)
    activated_temp.value = !activated_temp.value
    enabled.value = true
    is_open_confirm.value = false
    loading.value = true
    if(enabled.value == true) {
        setTimeout(async () => {
            const { data, error } = await client
                .from('hpoi_detail_anggota')
                .update({ activated: activated_temp.value })
                .eq('id_anggota', id_anggota_temp.value)
                .select()
                
                if(error) return console.log(error)
                await reFetchData()
                console.log('change verifivation status for member')
                console.log(data)
                console.log(activated_temp.value)
                loading.value = false
                progressToast.value = 1
                let randData = Math.floor(Date.now() * Math.random()) + no_anggota_temp.value
                console.log('thisisisis : ' +randData)

                if(activated_temp.value){
                    const sending = await $fetch('/api/send', {
                        method: 'POST',
                        body: {
                            email_anggota: email_temp.value,
                            url: `https://anggota.hpoi.org/get-card/card-${randData}/${no_anggota_temp.value}`,
                            nama_provider: nama_provider_temp.value,
                            no_anggota: no_anggota_temp.value
                        },
                        header: {
                            'Access-Control-Allow-Origin': 'Same-Origin',
                            'crossOriginResourcePolicy': 'same-origin',
                            'crossOriginOpenerPolicy': 'same-origin',
                            'crossOriginEmbedderPolicy': 'require-corp',
                            'contentSecurityPolicy': "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                            'X-XSS-Protection': 1
                        }
                    })
                    console.log(sending)
                    console.log('sending email process for activated member ')
                }



                if(!loading.value) {
                    if(!activated_temp.value) {
                        deactivated.value = true
                        console.log('start deactivated members now')
                    }

                    miniToast.value = true
                    console.log('mini toast gass')
                    let intervalId = setInterval(() => {
                        if(progressToast.value === 110){
                            clearInterval(intervalId)
                            miniToast.value = false
                            progressToast.value = 0
                            deactivated.value = false
                            console.log('end loading toast')
                        } else {
                            progressToast.value++
                            console.log('start loading toast')
                        }
                    }, 50)
                }
        }, 1000)


    }
}

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

// modal setting for e-card
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
        anchor.setAttribute('download', `E-Card_${no_anggota_temp.value}_Front.png`)
        anchor.click()
        anchor.remove()
        nameProviderMargin.value = false
        await CloseModal()
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

// modal processing

const openModalCard = async (item:any) => {
    is_open_card.value = true
    no_anggota_temp.value = item.hpoi_anggota.no_anggota
    nama_provider_temp.value = item.hpoi_anggota.nama_provider
    nama_pic_temp.value = item.hpoi_anggota.nama_pic
    dpc_temp.value = item.hpoi_anggota.dpc
    dpd_temp.value = item.hpoi_anggota.dpd
    nama_dpc_temp.value = item.hpoi_dpc.nama_dpc
    nama_logo_temp.value = item.hpoi_anggota.logo_img

    await nextTick().then(() => {
        let result = nama_dpc_temp.value.indexOf(",");
        splitNamaDpc.value = nama_dpc_temp.value.slice(0, result);
        splitNamaDpd.value = nama_dpc_temp.value.slice(result+2);
        linkQr.value = `https://anggota.hpoi.org/anggota/${no_anggota_temp.value}`
        console.log( splitNamaDpc.value + ', ' + splitNamaDpd.value)
    })
}

const openModalConfirm = async (item:any) => {
    is_open_confirm.value = true
    id_anggota_temp.value = item.id_anggota
    no_anggota_temp.value = item.hpoi_anggota.no_anggota
    nama_provider_temp.value = item.hpoi_anggota.nama_provider
    email_temp.value = item.hpoi_anggota.email
    nama_pic_temp.value = item.hpoi_anggota.nama_pic
    dpc_temp.value = item.hpoi_anggota.dpc
    dpd_temp.value = item.hpoi_anggota.dpd
    nama_dpc_temp.value = item.hpoi_dpc.nama_dpc
    nama_logo_temp.value = item.hpoi_anggota.logo_img
    activated_temp.value = item.activated

    await nextTick().then(() => {
        let result = nama_dpc_temp.value.indexOf(",");
        splitNamaDpc.value = nama_dpc_temp.value.slice(0, result);
        splitNamaDpd.value = nama_dpc_temp.value.slice(result+2);
        linkQr.value = `https://anggota.hpoi.org/anggota/${no_anggota_temp.value}`
        console.log( splitNamaDpc.value + ', ' + splitNamaDpd.value)
    })
}

const CloseModal = () => {
    is_open_card.value = false
    id_anggota_temp.value = ''
    no_anggota_temp.value = ''
    nama_provider_temp.value = ''
    nama_pic_temp.value = ''
    dpc_temp.value =  ''
    dpd_temp.value =  ''
    nama_dpc_temp.value =  ''
    nama_logo_temp.value = ''
    splitNamaDpc.value = ''
    splitNamaDpd.value = ''
}

const cancelVerification = () => {
    is_open_confirm.value = false
    id_anggota_temp.value = ''
    no_anggota_temp.value = ''
    nama_provider_temp.value = ''
    nama_pic_temp.value = ''
    dpc_temp.value =  ''
    dpd_temp.value =  ''
    nama_dpc_temp.value =  ''
    nama_logo_temp.value = ''
    splitNamaDpc.value = ''
    splitNamaDpd.value = ''
    activated_temp.value = false
    deactivated.value = false
}

</script>

<style scoped>

</style>