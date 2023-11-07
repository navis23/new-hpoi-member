<template>
    <div class="px-4 lg:px-32 py-10">
        <nav class="bg-gray-800 text-white h-30 flex flex-col md:flex-row gap-4 justify-between items-center w-full p-4 mb-5 rounded-md">
            <div class="font-bold flex items-center gap-x-2 text-sky-500 uppercase font-oswald">
                <Icon name="lucide:component" class="text-3xl md:text-4xl" />
                <h1 class="text-2xl md:text-3xl">List Components for EB UI</h1>
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

        <!-- group of button -->
        <div class="pb-10">
            <h2 class="text-sky-600 text-3xl font-oswald font-bold mb-3">Button</h2>
            <div class="border p-4 rounded-xl bg-white">
                <!-- begin standard button -->
                <p class="mt-3">#Default standard Button, write component ButtonBase </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <ButtonBase>
                        Primary Button
                    </ButtonBase>
    
                    <ButtonBase class="warning">
                        Warning Button
                    </ButtonBase>
    
                    <ButtonBase class="danger">
                        Danger Button
                    </ButtonBase>
    
                    <ButtonBase class="muted">
                        Muted Button
                    </ButtonBase>

                    <ButtonBase class="mono">
                        Mono Button
                    </ButtonBase>

                    <ButtonBase class="dark">
                        Dark Button
                    </ButtonBase>
                </div>

                <!-- begin expanded button -->
                <p class="mt-3">#Expanded Button to full with when viewport mobile, write component ButtonBaseExpanded </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <ButtonBaseExpanded>
                        Primary Button
                    </ButtonBaseExpanded>
    
                    <ButtonBaseExpanded class="warning">
                        Warning Button
                    </ButtonBaseExpanded>
    
                    <ButtonBaseExpanded class="danger">
                        Danger Button
                    </ButtonBaseExpanded>
    
                    <ButtonBaseExpanded class="muted">
                        Muted Button
                    </ButtonBaseExpanded>

                    <ButtonBaseExpanded class="mono">
                        Mono Button
                    </ButtonBaseExpanded>

                    <ButtonBaseExpanded class="dark">
                        Dark Button
                    </ButtonBaseExpanded>
                </div>

                <!-- begin small button with icon -->
                <p class="mt-3">#Small Button with one sentence combine with icon, write component ButtonBaseSmall </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <ButtonBaseSmall>
                        <Icon name="lucide:eye" class="text-2xl" />
                        <span>
                            View
                        </span>
                    </ButtonBaseSmall>
    
                    <ButtonBaseSmall class="warning">
                        <Icon name="lucide:edit-3" class="text-2xl" />
                        <span>
                            Edit
                        </span>
                    </ButtonBaseSmall>
    
                    <ButtonBaseSmall class="danger">
                        <Icon name="lucide:trash" class="text-2xl" />
                        <span>
                            Delete
                        </span>
                    </ButtonBaseSmall>
    
                    <ButtonBaseSmall class="muted">
                        <Icon name="lucide:x" class="text-2xl" />
                        <span>
                            Close
                        </span>
                    </ButtonBaseSmall>

                    <ButtonBaseSmall class="mono">
                        <Icon name="lucide:moon" class="text-2xl" />
                        <span>
                            Switch
                        </span>
                    </ButtonBaseSmall>

                    <ButtonBaseSmall class="dark">
                        <Icon name="lucide:sun" class="text-2xl" />
                        <span>
                            Bright
                        </span>
                    </ButtonBaseSmall>
                </div>

                <!-- begin icon button -->
                <p class="mt-3">#Icon circle & square Button combine with various icon in nuxt icon, write component ButtonIcon </p>
                <!-- standard icon button -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle icon button -->
                    <ButtonIcon>
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>

                    <!-- square icon button -->
                    <ButtonIcon class="square">
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning square">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger square">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted square">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono square">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark square">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>
                </div>

                <!-- small icon button -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle small icon button -->
                    <ButtonIcon class="sm">
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning sm">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger sm">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted sm">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono sm">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark sm">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>

                    <!-- square small icon button -->
                    <ButtonIcon class="square sm">
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning square sm">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger square sm">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted square sm">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono square sm">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark square sm">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>
                </div>

                <!-- mini xs icon button -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle mini xs icon button -->
                    <ButtonIcon class="xs">
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning xs">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger xs">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted xs">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono xs">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark xs">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>

                    <!-- square mini xs icon button -->
                    <ButtonIcon class="square xs">
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning square xs">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger square xs">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted square xs">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono square xs">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark square xs">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>
                </div>

                <!-- icon button with tooltips -->
                <p class="mt-3">#Icon Button combine with sticky tooltips, write component ButtonIconTooltip </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle icon tooltips button -->
                    <ButtonIconTooltip>
                        <Icon name="lucide:eye" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Lihat Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="warning">
                        <Icon name="lucide:edit-3" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Edit Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="danger">
                        <Icon name="lucide:trash" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Hapus Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="muted">
                        <Icon name="lucide:x" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Keluar</span>
                    </ButtonIconTooltip>

                    <ButtonIconTooltip class="mono">
                        <Icon name="lucide:moon" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Darkness</span>
                    </ButtonIconTooltip>

                    <ButtonIconTooltip class="dark">
                        <Icon name="lucide:sun" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Brightness</span>
                    </ButtonIconTooltip>

                    <!-- square icon tooltips button -->
                    <ButtonIconTooltip class="square">
                        <Icon name="lucide:eye" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Lihat Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="warning square">
                        <Icon name="lucide:edit-3" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Edit Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="danger square">
                        <Icon name="lucide:trash" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Hapus Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="muted square">
                        <Icon name="lucide:x" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Keluar</span>
                    </ButtonIconTooltip>

                    <ButtonIconTooltip class="mono square">
                        <Icon name="lucide:moon" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Darkness</span>
                    </ButtonIconTooltip>

                    <ButtonIconTooltip class="dark square">
                        <Icon name="lucide:sun" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Brightness</span>
                    </ButtonIconTooltip>
                </div>
            </div>
        </div>

        <!-- group of badge & avatar -->
        <div class="pb-10">
            <h2 class="text-sky-600 text-3xl font-oswald font-bold mb-3">Badge & Avatar</h2>
            <div class="border p-4 rounded-xl bg-white">
                <!-- begin badge -->
                <p class="mt-3">#Default standard Badge, write component Badge </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <Badge>
                        standard badge
                    </Badge>
                    <Badge class="warning">
                        warning badge
                    </Badge>
                    <Badge class="danger">
                        danger badge
                    </Badge>
                    <Badge class="muted">
                        muted badge
                    </Badge>
                    <Badge class="mono">
                        mono badge
                    </Badge>
                    <Badge class="dark">
                        dark badge
                    </Badge>
                </div>

                <!-- begin avatar -->
                <p class="mt-3">#Standard & small Avatar with circle & square design and indicator, write component Avatar </p>
                <!-- standard avatar -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle avatar -->
                    <Avatar>
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar>
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar>
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar>
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    
                    <!-- square avatar -->
                    <Avatar class="square">
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square">
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square">
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square">
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                </div>

                <!-- standard avatar with indicator -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle avatar indicator -->
                    <Avatar class="relative">
                        <span class="absolute w-3 h-3 top-0 right-1 ring-1 ring-offset-1 rounded-full bg-emerald-500"></span>
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar class="relative">
                        <span class="absolute w-3 h-3 top-0 right-1 ring-1 ring-offset-1 rounded-full bg-red-500"></span>
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar class="relative">
                        <span class="absolute w-3 h-3 top-0 right-1 ring-1 ring-offset-1 rounded-full bg-sky-500"></span>
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar class="relative">
                        <span class="absolute w-3 h-3 top-0 right-1 ring-1 ring-offset-1 rounded-full bg-yellow-500"></span>
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    
                    <!-- square avatar indicator -->
                    <Avatar class="square relative">
                        <span class="absolute w-3 h-3 -top-1 -right-1 ring-1 ring-offset-1 rounded-full bg-emerald-500"></span>
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square relative">
                        <span class="absolute w-3 h-3 -top-1 -right-1 ring-1 ring-offset-1 rounded-full bg-red-500"></span>
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square relative">
                        <span class="absolute w-3 h-3 -top-1 -right-1 ring-1 ring-offset-1 rounded-full bg-sky-500"></span>
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square relative">
                        <span class="absolute w-3 h-3 -top-1 -right-1 ring-1 ring-offset-1 rounded-full bg-yellow-500"></span>
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                </div>

                <!-- small avatar -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle sm avatar -->
                    <Avatar class="sm">
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-full" />
                    </Avatar>
                    <Avatar class="sm">
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-full" />
                    </Avatar>
                    <Avatar class="sm">
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-full" />
                    </Avatar>
                    <Avatar class="sm">
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-full" />
                    </Avatar>
                    <!-- square sm avatar -->
                    <Avatar class="sm square">
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-md" />
                    </Avatar>
                    <Avatar class="sm square">
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-md" />
                    </Avatar>
                    <Avatar class="sm square">
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-md" />
                    </Avatar>
                    <Avatar class="sm square">
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-md" />
                    </Avatar>
                </div>

                <!-- mini avatar -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle mini xs avatar -->
                    <Avatar class="xs">
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                    </Avatar>
                    <Avatar class="xs">
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                    </Avatar>
                    <Avatar class="xs">
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                    </Avatar>
                    <Avatar class="xs">
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                    </Avatar>
                    <!-- square mini xs avatar -->
                    <Avatar class="xs square">
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                    </Avatar>
                    <Avatar class="xs square">
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                    </Avatar>
                    <Avatar class="xs square">
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                    </Avatar>
                    <Avatar class="xs square">
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                    </Avatar>
                </div>
            </div>
        </div>

        <!-- group of headless function -->
        <div  class="pb-10">
            <h2 class="text-sky-600 text-3xl font-oswald font-bold mb-3">Modal</h2>
            <div class="border p-4 rounded-xl bg-white">
                <!-- begin modal -->
                <p class="mt-3">#Various example of modal style</p>
                <div class="py-4 flex flex-wrap gap-4">
                    <ButtonBaseExpanded @click="openModalOne()">
                        Open Modal V1
                    </ButtonBaseExpanded>
                    <ButtonBaseExpanded class="dark" @click="openModalTwo()">
                        Open Modal V2
                    </ButtonBaseExpanded>
                    <ButtonBaseExpanded class="mono" @click="openModalThree()">
                        Open Modal V3
                    </ButtonBaseExpanded>
                    <ButtonBaseExpanded class="warning" @click="openModalFour()">
                        Open Modal V4
                    </ButtonBaseExpanded>
                    <ButtonBaseExpanded class="danger" @click="openModalFive()">
                        Open Modal V5
                    </ButtonBaseExpanded>
                </div>

                <!-- begin switch & popover -->
                <p class="mt-3">#Various example switch & popover</p>
                <div class="py-4 flex flex-wrap items-center gap-4 ">
                    <!-- switch example v1 -->
                    <div class="flex gap-x-2 items-center">
                        <HeadlessSwitch
                            v-model="enabled"
                            :class="enabled ? 'bg-sky-500' : 'bg-gray-200'"
                            class="relative inline-flex h-6 w-11 items-center rounded-full"
                        >
                            <span class="sr-only">Enable notifications</span>
                            <span
                            :class="enabled ? 'translate-x-6' : 'translate-x-1'"
                            class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                            />
                        </HeadlessSwitch>
                        <span >
                            <Icon :name=" enabled ? 'lucide:sun' : 'lucide:moon'" :class="enabled ? 'text-amber-500' : 'text-indigo-500'" class="text-5xl font-bold transition-all ease-in-out duration-400" />
                        </span>
                    </div>

                    <!-- switch example v2 -->
                    <div class="flex flex-col gap-2 items-start justify-start">
                        <div class="flex gap-x-2">
                            <HeadlessSwitch
                                v-model="enabledTwo"
                                :class="enabledTwo ? 'bg-emerald-500' : 'bg-gray-200'"
                                class="relative inline-flex h-6 w-11 items-center rounded-full"
                            >
                                <span class="sr-only">Enable notifications</span>
                                <span
                                :class="enabledTwo ? 'translate-x-6' : 'translate-x-1'"
                                class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                                />
                            </HeadlessSwitch>
                            <p v-show="!enabledTwo" class="transition-all duration-400 text-gray-400 ">
                                Look more content
                            </p>
                            <p v-show="enabledTwo" class="transitio-all  duration-400 text-emerald-500 ">
                                You got that right??
                            </p>
                        </div>
                        <ClientOnly>
                            <HeadlessTransitionRoot
                                :show="enabledTwo"
                                enter="transition-opacity duration-400"
                                enter-from="opacity-0"
                                enter-to="opacity-100"
                                leave="transition-opacity duration-400"
                                leave-from="opacity-100"
                                leave-to="opacity-0"
                            >
                                <div class="mt-2">
                                    <FormKit
                                        type="text"
                                        prefix-icon="avatarMan"
                                        label="Username"
                                        placeholder="you nameeeeee"
                                        help="Pick a username people will remember!"
                                    />
                                    <FormKit
                                        type="range"
                                        label="Volume"
                                        min="0"
                                        max="11"
                                        help="Select your volume level."
                                    />
                                    <FormKit
                                        type="time"
                                        label="Time"
                                        value="23:15"
                                        help="jam piro muleh kowe le?"
                                    />
                                    <FormKit
                                        type="password"
                                        label="Password"
                                        value="mySecretPassword!"
                                        prefix-icon="password"
                                        suffix-icon="eyeClosed"
                                        @suffix-icon-click="visiblePassword"
                                        help="Enter a new password"
                                    />
                                </div>
                            </HeadlessTransitionRoot>
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </div>

        <!-- group of modal -->

        <!-- modal example v1 -->
        <ClientOnly>  
            <HeadlessDialog :open="isOpenAdd" class="relative z-50">
                <!-- The backdrop, rendered as a fixed sibling to the panel container -->
                <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

                <!-- Full-screen container to center the panel -->
                <div class="fixed inset-0 flex items-center justify-center p-4">

                <!-- The actual dialog panel -->
                <HeadlessDialogPanel class="w-full max-w-md px-12 py-8 rounded-lg bg-white text-gray-700">
                    <HeadlessDialogTitle class="pb-3">
                        <h3 class="text-xl font-semibold font-oswald text-sky-500 border-b-2 pb-4">
                            Tes Modal Bruhh
                        </h3>
                    </HeadlessDialogTitle>
                        <p>testing for base modal</p>
                        
                        <div class="flex items-center gap-2 mt-4">
                            <ButtonBase @click="closeModalOne()" class="mono w-full">
                                Close
                            </ButtonBase>
                            <ButtonBase @click="closeModalOne()" class="dark w-full">
                                Exit
                            </ButtonBase>
                        </div>
                        
                    <!-- ... -->
                </HeadlessDialogPanel>
                </div>
            </HeadlessDialog>
        </ClientOnly>

        <!-- modal example v2 -->
        <ClientOnly>
            <HeadlessTransitionRoot appear :show="isOpenAddTwo" as="template">
                <HeadlessDialog as="div" class="relative z-10">
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
                                <HeadlessDialogPanel class="w-full max-w-xl transform overflow-hidden rounded-xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                                    
                                    <!-- top card v3 -->
                                    <div class="flex flex-col items-center border-b p-6 sm:flex-row">
                                        <div class="flex flex-col items-center gap-3 sm:flex-row">
                                            <Avatar class="lg">
                                                <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-20 w-20 rounded-full" />
                                            </Avatar>
                                            <div class="text-center sm:text-left">
                                                <h4 class="font-medium leading-tight">
                                                    Mbingkamp Syy
                                                </h4>
                                                <p class="text-sm text-gray-400">
                                                    Software Engineer
                                                </p>
                                            </div>
                                        </div>
                                        <div class="mt-4 flex items-center gap-3 sm:mt-0 sm:ms-auto">
                                            <ButtonIcon class="mono xs shadow-md">
                                                <Icon name="lucide:instagram" />
                                            </ButtonIcon>
                                            <ButtonIcon class="mono xs shadow-md">
                                                <Icon name="lucide:twitter" />
                                            </ButtonIcon>
                                            <ButtonIcon class="mono xs shadow-md">
                                                <Icon name="lucide:facebook" />
                                            </ButtonIcon>
                                            <ButtonIcon class="mono xs shadow-md">
                                                <Icon name="lucide:linkedin" />
                                            </ButtonIcon>
                                        </div>
                                    </div>
                                    
                                    <!-- bottom card v3 -->
                                    <div class="flex flex-col items-center justify-between px-6 py-4 sm:flex-row">
                                        <div class="w-full grow space-y-1 sm:w-auto sm:max-w-[260px]">
                                            <div class="flex items-center justify-between">
                                                <h4 class="text-sm">
                                                    Progress
                                                </h4>
                                                <p class="text-gray-400 text-sm">
                                                    12%
                                                </p>
                                            </div>
                                            <div role="progressbar" aria-valuenow="12" aria-valuemax="100" class="relative w-full overflow-hidden h-1 rounded-full bg-gray-400">
                                                <div class="absolute start-0 top-0 h-full transition-all duration-300 bg-sky-500 rounded-full" style="width: 12%;"></div>
                                            </div>
                                        </div>
                                        <div class="mt-4 w-full sm:mt-0 sm:w-auto">
                                            <ButtonBaseExpanded @click="closeModalTwo()" class="mono">
                                                Close Profile
                                            </ButtonBaseExpanded>
                                        </div>
                                    </div>
                                </HeadlessDialogPanel>
                            </HeadlessTransitionChild>
                        </div>
                    </div>
                </HeadlessDialog>
            </HeadlessTransitionRoot>
        </ClientOnly>

        <!-- modal example v3 -->
        <ClientOnly>
            <HeadlessTransitionRoot appear :show="isOpenAddThree" as="template">
                <HeadlessDialog as="div" class="relative z-10">
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
                                <HeadlessDialogPanel class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <HeadlessDialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                        Payment successful
                                    </HeadlessDialogTitle>
                                    
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                        Your payment has been successfully submitted. We sent you
                                        an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <div class="mt-4">
                                        <ButtonBase @click="closeModalThree()">
                                            Ok, Thanks
                                        </ButtonBase>
                                    </div>
                                </HeadlessDialogPanel>
                            </HeadlessTransitionChild>
                        </div>
                    </div>
                </HeadlessDialog>
            </HeadlessTransitionRoot>
        </ClientOnly>

        <!-- modal example v4 -->
        <ClientOnly>
            <HeadlessTransitionRoot appear :show="isOpenAddFour" as="template">
                <HeadlessDialog as="div" class="relative z-10">
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
                                <HeadlessDialogPanel class="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <HeadlessDialogTitle as="h3" class="text-xl font-semibold uppercase font-oswald text-sky-500 border-b-2 pb-2">
                                            Modal with Form
                                    </HeadlessDialogTitle>
                                    
                                    <div class="mt-4 mb-5">
                                        <FormKit
                                            type="text"
                                            prefix-icon="avatarMan"
                                            label="Username"
                                            placeholder="you nameeeeee"
                                            help="Pick a username people will remember!"
                                        />
                                        <FormKit
                                            type="range"
                                            label="Volume"
                                            min="0"
                                            max="11"
                                            help="Select your volume level."
                                        />
                                        <FormKit
                                            type="time"
                                            label="Time"
                                            value="23:15"
                                            help="jam piro muleh kowe le?"
                                        />
                                        <FormKit
                                            type="password"
                                            label="Password"
                                            value="mySecretPassword!"
                                            prefix-icon="password"
                                            suffix-icon="eyeClosed"
                                            @suffix-icon-click="visiblePassword"
                                            help="Enter a new password"
                                        />
                                    </div>

                                    <div class="border-t-2 pt-4">
                                        <ButtonBase @click="closeModalFour()">
                                            Ok, Thanks
                                        </ButtonBase>
                                    </div>
                                </HeadlessDialogPanel>
                            </HeadlessTransitionChild>
                        </div>
                    </div>
                </HeadlessDialog>
            </HeadlessTransitionRoot>
        </ClientOnly>
        
        <!-- modal example v5 -->
        <ClientOnly>
            <HeadlessTransitionRoot appear :show="isOpenAddFive" as="template">
                <HeadlessDialog as="div" class="relative z-10">
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
                                <HeadlessDialogPanel class="w-full max-w-4xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <HeadlessDialogTitle as="div" class="flex justify-between items-center border-b-2 pb-3">
                                            <h3 class="text-2xl font-semibold uppercase font-oswald text-sky-500 ">
                                                Modal with Table
                                            </h3>
                                            <p>
                                                <ButtonIcon @click="closeModalFive()" class="sm muted">
                                                    <Icon name="lucide:x" />
                                                </ButtonIcon>
                                            </p>
                                    </HeadlessDialogTitle>
                                    
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
                                                                    <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-3 py-3">
                                                                        Id
                                                                    </th>
                                                                    <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-3 py-3">
                                                                        Task
                                                                    </th>
                                                                    <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-3 py-3">
                                                                        Status
                                                                    </th>
                                                                    <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-3 py-3">
                                                                        Progress
                                                                    </th>
                                                                    <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-3 py-3">
                                                                        action
                                                                    </th>
                                                                </thead>
                                                                <tbody class="divide-gray-20 divide-y bg-white">
                                                                    <tr v-for="task of (tasks as any[])" :key="task.id" class="hover:bg-gray-50 transition-[height] duration-1000">
                                                                        <td class="whitespace-nowrap text-xs py-2 px-3">
                                                                            {{ task.id }}
                                                                        </td>
                                                                        <td class="whitespace-nowrap text-xs py-2 px-3">
                                                                            {{ task.title }}
                                                                        </td>
                                                                        <td class="whitespace-nowrap text-xs py-2 px-3">
                                                                            <Badge v-if="task.completed == true">
                                                                                Finished
                                                                            </Badge>
                                                                            <Badge v-if="task.completed == false" class="warning">
                                                                                On Progress
                                                                            </Badge>
                                                                        </td>
                                                                        <td class="whitespace-nowrap text-xs py-2 px-3">
                                                                            <div class="flex items-center">
                                                                                <div class="relative">
                                                                                    <svg role="progressbar" :aria-valuenow="task.title.length" aria-valuemax="100" class="block text-sky-500 -rotate-90" viewBox="0 0 45 45" width="50" height="50">
                                                                                        <circle class="text-gray-200 stroke-current" stroke-width="2" fill="none" cx="50%" cy="50%" r="15.91549431"></circle>
                                                                                        <circle class="transition-all duration-500 stroke-current" stroke-width="2" :stroke-dasharray="task.title.length +`,100`" stroke-linecap="round" fill="none" cx="50%" cy="50%" r="15.91549431"></circle>
                                                                                    </svg>
                                                                                    <span class="absolute start-1/2 top-1/2 z-10 ms-0.5 -translate-x-1/2 -translate-y-1/2 text-[0.65rem] font-semibold font-oswald tracking-tight leading-none">
                                                                                        {{ task.title.length }}%
                                                                                    </span>
                                                                                </div>
                                                                                <span class="text-gray-400 text-xs">Completed</span>
                                                                            </div>
                                                                        </td>
                                                                        <td class="whitespace-nowrap text-sm py-2 px-3">
                                                                            <ButtonBaseSmall class="warning">
                                                                                <Icon name="lucide:edit-3" class="text-2xl" />
                                                                                <span>
                                                                                    Edit
                                                                                </span>
                                                                            </ButtonBaseSmall>
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

                                    <div class="border-t-2 pt-4">
                                        <ButtonBase @click="closeModalFive()">
                                            Ok, Thanks
                                        </ButtonBase>
                                    </div>
                                </HeadlessDialogPanel>
                            </HeadlessTransitionChild>
                        </div>
                    </div>
                </HeadlessDialog>
            </HeadlessTransitionRoot>
        </ClientOnly>

    </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const isOpenAdd = ref(false)
const isOpenAddTwo = ref(false)
const isOpenAddThree = ref(false)
const isOpenAddFour = ref(false)
const isOpenAddFive = ref(false)
const tasks = ref()
const enabled = ref(false)
const enabledTwo = ref(false)

onMounted( async () => {
    await fetchTask()
    // await fetchProduct()
})

const fetchTask = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/todos?limit=10', {
        headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*"
        }
    })
    .then(res => {
        tasks.value = res.data
    })
}

const openModalOne = () => {
    isOpenAdd.value = true
}

const closeModalOne = () => {
    isOpenAdd.value = false
}

const openModalTwo = () => {
    isOpenAddTwo.value = true
}

const closeModalTwo = () => {
    isOpenAddTwo.value = false
}

const openModalThree = () => {
    isOpenAddThree.value = true
}

const closeModalThree = () => {
    isOpenAddThree.value = false
}

const openModalFour = () => {
    isOpenAddFour.value = true
}

const closeModalFour = () => {
    isOpenAddFour.value = false
}

const openModalFive = () => {
    isOpenAddFive.value = true
}

const closeModalFive = () => {
    isOpenAddFive.value = false
}

const visiblePassword = (node : any, e : any) => {
    node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
}


</script>

<style scoped>

</style>