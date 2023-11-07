<template>
    <div class="px-4 lg:px-32 py-10">
        <nav class="bg-gray-800 text-white h-30 flex flex-col md:flex-row gap-4 justify-between items-center w-full p-4 mb-5 rounded-md">
            <div class="font-bold flex items-center gap-x-2 text-sky-500 uppercase font-oswald">
                <Icon name="lucide:gallery-vertical" class="text-3xl md:text-4xl" />
                <h1 class="text-2xl md:text-3xl">Card Version for EB UI</h1>
            </div>
            <div class="flex justify-between flex-wrap items-center gap-4 ">
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

        <!-- begin card ver 1 -->
        <div class="pb-10">
            <h2 class="text-3xl font-oswald font-bold mb-3">Card Ver. 1</h2>

            <!-- card container -->
            <div class="grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-4">

                <!-- begin card -->
                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl group p-3">
                    <div class="relative">
                        <nuxt-img src="/img/card101.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                        <!-- <span class="inline-block px-3 font-sans py-1 text-xs rounded-full bg-sky-100 text-sky-500 border-sky-100 border absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            Uyesss
                        </span> -->
                        <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            standard badge
                        </Badge>
                    </div>
                    <div class="mb-6 mt-3">
                        <p class="leading-snug line-clamp-2">
                           Percobaan car version 1 EB UI gaes lets go
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-2">
                        <div class="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full bg-slate-500">
                            <!-- <div class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="max-h-full max-w-full object-cover object-center shadow-sm h-8 w-8" />
                            </div> -->
                            <Avatar class="xs">
                                <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                            </Avatar>
                        </div>
                        <div class="leading-none">
                            <h4 class="text-xs font-medium leading-tight">
                                Navis Mbing
                            </h4>
                            <p class="text-xs text-gray-400">15 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <ButtonBaseSmall class="mono">
                                <Icon name="lucide:moon" class="text-2xl" />
                                <span>
                                    Switch
                                </span>
                            </ButtonBaseSmall>
                        </div>
                    </div>
                </div>

                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl group p-3">
                    <div class="relative">
                        <nuxt-img src="/img/card102.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                        <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            standard badge
                        </Badge>
                    </div>
                    <div class="mb-6 mt-3">
                        <p class="leading-snug line-clamp-2">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur nulla sint?
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-2">
                        <div class="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full bg-slate-500">
                            <div class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="max-h-full max-w-full object-cover object-center shadow-sm h-8 w-8" />
                            </div>
                        </div>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Razer Eb
                            </h4>
                            <p class="text-xs text-gray-400">10 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <ButtonBaseSmall class="mono">
                                <Icon name="lucide:moon" class="text-2xl" />
                                <span>
                                    Edit
                                </span>
                            </ButtonBaseSmall>
                        </div>
                    </div>
                </div>

                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl group p-3">
                    <div class="relative">
                        <nuxt-img src="/img/card103.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                        <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            standard badge
                        </Badge>
                    </div>
                    <div class="mb-6 mt-3">
                        <p class="leading-snug line-clamp-2">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, totam.
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-2">
                        <div class="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full bg-slate-500">
                            <div class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="max-h-full max-w-full object-cover object-center shadow-sm h-8 w-8" />
                            </div>
                        </div>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Ryuma E.
                            </h4>
                            <p class="text-xs text-gray-400">44 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <ButtonBaseSmall class="mono">
                                <Icon name="lucide:moon" class="text-2xl" />
                                <span>
                                    Switch
                                </span>
                            </ButtonBaseSmall>
                        </div>
                    </div>
                </div>

                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl group p-3">
                    <div class="relative">
                        <nuxt-img src="/img/card104.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                        <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            standard badge
                        </Badge>
                    </div>
                    <div class="mb-6 mt-3">
                        <p class="leading-snug line-clamp-2">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-2">
                        <div class="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full bg-slate-500">
                            <div class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="max-h-full max-w-full object-cover object-center shadow-sm h-8 w-8" />
                            </div>
                        </div>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Hyuga Misa
                            </h4>
                            <p class="text-xs text-gray-400">1 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <ButtonBaseSmall class="mono">
                                <Icon name="lucide:moon" class="text-2xl" />
                                <span>
                                    Switch
                                </span>
                            </ButtonBaseSmall>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- begin card ver 2 -->
        <div class="pb-10">
            <h2 class="text-3xl font-oswald font-bold mb-3">Card Ver. 2</h2>
            <!-- card container -->
            <div class="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl p-4">
                    <div class="mb-3 flex items-center gap-3">
                        <Avatar class="xs">
                            <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                        </Avatar>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Navis Mbing
                            </h4>
                            <p class="text-xs text-gray-400">15 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <HeadlessPopover class="relative">
                                <HeadlessPopoverButton class="transition-all duration-300 ui-open:rotate-90 ui-open:transform">
                                    <ButtonIcon class="mono sm">
                                        <Icon name="lucide:more-horizontal" />
                                    </ButtonIcon>
                                </HeadlessPopoverButton>
                                <HeadlessPopoverPanel class="absolute z-10 bg-white rounded-md end-0 origin-top-right p-2 mt-2 w-56 border">
                                    <div class="flex flex-col items-center w-full gap-2">
                                        <nuxt-link to="/">
                                            <ButtonBase class="dark">
                                                Home
                                            </ButtonBase>
                                        </nuxt-link>
                                        <nuxt-link to="/list-component">
                                            <ButtonBase class="dark">
                                                Components
                                            </ButtonBase>
                                        </nuxt-link>
                                        <nuxt-link to="/list-component/cards">
                                            <ButtonBase class="dark">
                                                Cards
                                            </ButtonBase>
                                        </nuxt-link>
                                        <nuxt-link to="/">
                                            <ButtonBase class="dark">
                                                Table
                                            </ButtonBase>
                                        </nuxt-link>
                                    </div>
                                </HeadlessPopoverPanel>
                            </HeadlessPopover>
                        </div>
                    </div>
                    <div>
                        <nuxt-img src="/img/card101.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover h-64 w-full object-center rounded-lg"/>
                    </div>
                    <div class="my-4">
                        <p class="leading-snug line-clamp-2">
                            Percobaan car version 2 EB UI gaes lets go Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <ButtonBase class="mono w-full">
                            Mono Button
                        </ButtonBase>
                        <ButtonBase class="dark w-full">
                            Dark Button
                        </ButtonBase>
                    </div>
                </div>
                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl p-4">
                    <div class="mb-3 flex items-center gap-3">
                        <Avatar class="xs">
                            <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                        </Avatar>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Navis Mbing
                            </h4>
                            <p class="text-xs text-gray-400">15 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <ButtonIcon class="mono sm">
                                <Icon name="lucide:more-horizontal" />
                            </ButtonIcon>
                        </div>
                    </div>
                    <div>
                        <nuxt-img src="/img/bg01.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover h-64 w-full object-center rounded-lg"/>
                    </div>
                    <div class="my-4">
                        <p class="leading-snug line-clamp-2">
                            Percobaan car version 2 EB UI gaes lets go Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <ButtonBase class="w-full">
                            Full Button
                        </ButtonBase>
                    </div>
                </div>
                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl p-4">
                    <div class="mb-3 flex items-center gap-3">
                        <Avatar class="xs">
                            <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                        </Avatar>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Navis Mbing
                            </h4>
                            <p class="text-xs text-gray-400">15 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <ButtonIcon class="mono sm">
                                <Icon name="lucide:more-horizontal" />
                            </ButtonIcon>
                        </div>
                    </div>
                    <div>
                        <nuxt-img src="/img/card102.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover h-64 w-full object-center rounded-lg"/>
                    </div>
                    <div class="my-4">
                        <p class="leading-snug line-clamp-2">
                            Percobaan car version 2 EB UI gaes lets go Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <ButtonBase class="mono w-full">
                            Mono Button
                        </ButtonBase>
                        <ButtonBase class="dark w-full">
                            Dark Button
                        </ButtonBase>
                    </div>
                </div>
                
                
            </div>
        </div>

        <!-- begin card ver 3 -->
        <div class="pb-10">
            <h2 class="text-3xl font-oswald font-bold mb-3">Card Ver. 3</h2>
            <!-- card container -->
            <div class="grid w-full gap-4 lg:grid-cols-2">

                <!-- begin card v3 -->
                <div class="relative w-full border bg-white transition-all duration-300 rounded-md">
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
                            <ButtonBaseExpanded class="mono">
                                View Profile
                            </ButtonBaseExpanded>
                        </div>
                    </div>
                </div>

                <!-- begin card v3 -->
                <div class="relative w-full border bg-white transition-all duration-300 rounded-md">
                    <!-- top card v3 -->
                    <div class="flex flex-col items-center border-b p-6 sm:flex-row">
                        <div class="flex flex-col items-center gap-3 sm:flex-row">
                            <Avatar class="lg">
                                <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-20 w-20 rounded-full" />
                            </Avatar>
                            <div class="text-center sm:text-left">
                                <h4 class="font-medium leading-tight">
                                    Ryoma Echizen
                                </h4>
                                <p class="text-sm text-gray-400">
                                    UI/UX Designer
                                </p>
                            </div>
                        </div>
                        <div class="mt-4 flex items-center gap-3 sm:ms-auto sm:mt-0">
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
                                    67%
                                </p>
                            </div>
                            <div role="progressbar" aria-valuenow="67" aria-valuemax="100" class="relative w-full overflow-hidden h-1 rounded-full bg-gray-400">
                                <div class="absolute start-0 top-0 h-full transition-all duration-300 bg-sky-500 rounded-full" style="width: 67%;"></div>
                            </div>
                        </div>
                        <div class="mt-4 w-full sm:mt-0 sm:w-auto">
                            <ButtonBaseExpanded class="mono">
                                View Profile
                            </ButtonBaseExpanded>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- begin card ver 4 -->
        <div class="pb-10">
            <h2 class="text-3xl font-oswald font-bold mb-3">Card Ver. 4</h2>
            <!-- card container -->
            <div class="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <!-- begin card v4 -->
                <div class="relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-xl p-6">
                    <div class="mb-3 flex w-full items-center justify-center">
                        <Avatar class="lg square">
                            <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-20 w-20 rounded-md" />
                        </Avatar>
                    </div>
                    <div class="text-center">
                        <h3 class="font-heading font-medium leading-tight">
                            Mbingkamp Pisz
                        </h3>
                        <p class="text-xs leading-normal text-gray-400">
                            Software Engineer
                        </p>
                    </div>
                    <div class="mb-6 mt-4 flex items-center justify-center gap-3">
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                    </div>
                    <div class="flex items-center gap-2">
                        <ButtonBase class="mono">
                            Mono Button
                        </ButtonBase>
                        <ButtonBase class="mono">
                            Mono Button
                        </ButtonBase>
                    </div>
                </div>

                <!-- begin card v4 -->
                <div class="relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-xl p-6">
                    <div class="mb-3 flex w-full items-center justify-center">
                        <Avatar class="lg square">
                            <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-20 w-20 rounded-md" />
                        </Avatar>
                    </div>
                    <div class="text-center">
                        <h3 class="font-heading font-medium leading-tight">
                            Mbingkamp Pisz
                        </h3>
                        <p class="text-xs leading-normal text-gray-400">
                            Software Engineer
                        </p>
                    </div>
                    <div class="mb-6 mt-4 flex items-center justify-center gap-3">
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                    </div>
                    <div class="flex items-center gap-2">
                        <ButtonBase class="mono">
                            Mono Button
                        </ButtonBase>
                        <ButtonBase class="mono">
                            Mono Button
                        </ButtonBase>
                    </div>
                </div>

                <!-- begin card v4 -->
                <div class="relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-xl p-6">
                    <div class="mb-3 flex w-full items-center justify-center">
                        <Avatar class="lg square">
                            <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-20 w-20 rounded-md" />
                        </Avatar>
                    </div>
                    <div class="text-center">
                        <h3 class="font-heading font-medium leading-tight">
                            Mbingkamp Pisz
                        </h3>
                        <p class="text-xs leading-normal text-gray-400">
                            Software Engineer
                        </p>
                    </div>
                    <div class="mb-6 mt-4 flex items-center justify-center gap-3">
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                    </div>
                    <div class="flex items-center gap-2">
                        <ButtonBase class="mono">
                            Mono Button
                        </ButtonBase>
                        <ButtonBase class="mono">
                            Mono Button
                        </ButtonBase>
                    </div>
                </div>

                <!-- begin card v4 -->
                <div class="relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-xl p-6">
                    <div class="mb-3 flex w-full items-center justify-center">
                        <Avatar class="lg square">
                            <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-20 w-20 rounded-md" />
                        </Avatar>
                    </div>
                    <div class="text-center">
                        <h3 class="font-heading font-medium leading-tight">
                            Mbingkamp Pisz
                        </h3>
                        <p class="text-xs leading-normal text-gray-400">
                            Software Engineer
                        </p>
                    </div>
                    <div class="mb-6 mt-4 flex items-center justify-center gap-3">
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                        <Avatar class="xs square">
                            <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                        </Avatar>
                    </div>
                    <div class="flex items-center gap-2">
                        <ButtonBase class="mono">
                            Mono Button
                        </ButtonBase>
                        <ButtonBase class="mono">
                            Mono Button
                        </ButtonBase>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>