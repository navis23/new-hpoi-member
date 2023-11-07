<template>
    <div class="px-4 lg:px-32 py-10">
        <nav class="bg-gray-800 text-white h-30 flex flex-col md:flex-row gap-4 justify-between items-center w-full p-4 mb-5 rounded-md">
            <div class="font-bold flex items-center gap-x-2 text-sky-500 uppercase font-oswald">
                <Icon name="lucide:table" class="text-3xl md:text-4xl" />
                <h1 class="text-2xl md:text-3xl ">Table Version 2 for EB UI</h1>
            </div>
            <div class="flex justify-between items-center gap-4 flex-wrap">
                <nuxt-link to="/">
                    <Badge class="mono">
                        Home
                    </Badge>
                </nuxt-link>
                <nuxt-link to="/list-component">
                    <Badge class="mono">
                        component
                    </Badge>
                </nuxt-link>
                <nuxt-link to="/list-component/cards">
                    <Badge class="mono">
                        card
                    </Badge>
                </nuxt-link>
                <nuxt-link to="/list-component/table-1">
                    <Badge class="mono">
                        table
                    </Badge>
                </nuxt-link>
            </div>
        </nav>
        <div class="bg-gray-700 text-white flex flex-col justify-center items-center w-full p-3 mb-5 rounded-md">
            <h1 class="font-oswald font-semibold pb-4 text-xl leading-none">Choose Table Version</h1>
            <div class="flex justify-between items-center gap-4 flex-wrap">
                <nuxt-link to="/list-component/table-1">
                    <Badge class="mono">
                        Table Version 1
                    </Badge>
                </nuxt-link>
                <nuxt-link to="/list-component/table-2">
                    <Badge class="mono">
                        Table Version 2
                    </Badge>
                </nuxt-link>
            </div>
        </div>

        <!-- start table v2 -->
        <div class="pb-10">
            <h2 class="text-3xl font-oswald font-bold mb-3">Table Ver. 2</h2>
            <!-- table set container -->
            <div class="mt-6">
                <!-- search & action -->
                <div class="mb-6 flex w-full flex-col items-end justify-between gap-4 sm:flex-row">
                    <div class="flex w-full items-center sm:w-auto">
                        <div class="relative w-full sm:w-auto">
                            <FormKit
                                type="search"
                                placeholder="Search User..."
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
                                        <table class="divide-gray-200 min-w-full table-fixed divide-y">
                                            <thead>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    User
                                                </th>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    Location
                                                </th>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    Status
                                                </th>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    code
                                                </th>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    Progress
                                                </th>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    action
                                                </th>
                                            </thead>
                                            <tbody class="divide-gray-20 divide-y bg-white">
                                                <tr v-for="user of (users as any[])" :key="user.id" class="hover:bg-gray-50 transition-[height] duration-1000">
                                                    <td class="whitespace-nowrap text-sm p-4">
                                                        <div class="flex items-center">
                                                            <Avatar class="sm">
                                                                <nuxt-img :src="`https://i.pravatar.cc/150?img=`+user.id" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center w-12 h-12 rounded-full" />
                                                            </Avatar>
                                                            <div class="ms-3 leading-tight">
                                                                <h4 class="text-sm font-medium leading-tight">
                                                                    {{ user.name.firstname }} {{ user.name.lastname }}
                                                                </h4>
                                                                <p class="text-xs text-gray-400">{{ user.email }}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="whitespace-nowrap text-xs p-4 capitalize">
                                                        {{ user.address.street }}, <span class="uppercase">{{ user.address.city }}</span>
                                                    </td>
                                                    <td class="whitespace-nowrap text-xs p-4">
                                                        <Badge class="warning">
                                                            New
                                                        </Badge>
                                                    </td>
                                                    <td class="whitespace-nowrap text-xs p-4">
                                                        {{ user.password }}
                                                    </td>
                                                    <td class="whitespace-nowrap text-xs p-4">
                                                        <div class="flex items-center">
                                                            <div class="relative">
                                                                <svg role="progressbar" :aria-valuenow="user.address.number.toString().slice(0, 2)" aria-valuemax="100" class="block text-sky-500 -rotate-90" viewBox="0 0 45 45" width="50" height="50">
                                                                    <circle class="text-gray-200 stroke-current" stroke-width="2" fill="none" cx="50%" cy="50%" r="15.91549431"></circle>
                                                                    <circle class="transition-all duration-500 stroke-current" stroke-width="2" :stroke-dasharray="user.address.number.toString().slice(0, 2) +`,100`" stroke-linecap="round" fill="none" cx="50%" cy="50%" r="15.91549431"></circle>
                                                                </svg>
                                                                <span class="absolute start-1/2 top-1/2 z-10 ms-0.5 -translate-x-1/2 -translate-y-1/2 text-[0.65rem] font-semibold font-oswald tracking-tight leading-none">
                                                                    {{ user.address.number.toString().slice(0, 2) }}%
                                                                </span>
                                                            </div>
                                                            <span class="text-gray-400 text-xs">Completed</span>
                                                        </div>
                                                    </td>
                                                    <td class="whitespace-nowrap text-sm p-4 relative ">
                                                        <HeadlessPopover class="static">
                                                            <HeadlessPopoverButton class="outline-none">
                                                                <ButtonBase class="dark">
                                                                    <div class="flex gap-x-1 items-center justify-center leading-none">
                                                                        <p>Manage Data</p>
                                                                        <Icon name="lucide:chevron-down" class="text-xl font-bold transition-all duration-300 ui-open:rotate-180 ui-open:transform"/>
                                                                    </div>
                                                                </ButtonBase>
                                                                <!-- <ButtonIcon class="mono sm">
                                                                    <Icon name="lucide:more-horizontal" />
                                                                </ButtonIcon> -->
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

    </div>
</template>

<script setup lang="ts">

const { data: users, pending, error, refresh } = await useLazyFetch(() => 'https://fakestoreapi.com/users?limit=10')

const numb = ref(0)

onMounted( () => {
    fsco()
    // await fetchProduct()
})


const fsco = () => {

    numb.value = Math.floor(Math.random() * 101);
}

</script>

<style scoped>

</style>