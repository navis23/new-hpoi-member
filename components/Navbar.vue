<template>
    <!-- top navbar -->
    <nav class="absolute px-4 lg:px-32 w-full h-20 flex items-center justify-between z-[99]">
        <div class="flex items-center justify-start w-44">
            <nuxt-link to="/">
                <nuxt-img preload :src="route.fullPath == '/' ? '/img/hpoi.png' : '/img/hpoi.png'" alt="logo hpoi" format="webp" sizes="sm:25vw" class="object-cover object-center h-10"/>
            </nuxt-link>
        </div>
        <!-- <div class="hidden lg:block">
            <ul :class="route.fullPath == '/' ? 'text-gsi-gold' : ''" class="flex gap-x-8 font-oswald tracking-wide">
                <li v-for="(item, index) in menu" :key="index">
                    <nuxt-link :to="item.link">
                        {{ item.name }}
                    </nuxt-link>
                </li>
            </ul>
        </div> -->
        <div class="hidden lg:flex lg:items-center lg:gap-3 lg:justify-end">
            <div class="border-r-2 pr-3 border-gsi-gold ">
                <nuxt-link :to="route.fullPath == '/' ? 'https://hpoi.org' : '/'">
                    <ButtonBaseSmall class="hpoi">
                        <Icon :name="route.fullPath == '/' ? 'lucide:home' : 'lucide:users'" class="text-xl" />
                        <span v-if="route.fullPath == '/'" >Halaman Utama HPOI</span>
                        <span v-if="route.fullPath != '/'" >Halaman List Anggota</span>
                    </ButtonBaseSmall>
                </nuxt-link>
            </div>
            <nuxt-link to="/secret/daftar">
                <ButtonBaseSmall class="dark">
                    <Icon name="lucide:user-plus" class="text-xl" />
                    <span >Pendaftaran Anggota</span>
                </ButtonBaseSmall>
            </nuxt-link>
            <nuxt-link to="/secret/login">
                <ButtonBaseSmall class="dark">
                    <Icon name="lucide:log-in" class="text-xl" />
                    <span >Login Anggota</span>
                </ButtonBaseSmall>
            </nuxt-link>
        </div>
        <div class="absolute lg:hidden lg:scale-0 right-0 md:right-[1em] z-[99] transition-all duration-300 transform h-12 w-12 rounded-full">
            <div class="after:bg-hpoi-main fixed right-[1em] top-[0em] z-[90] transition-transform duration-300 after:absolute after:right-0 after:-top-0 after:block after:h-12 after:w-12 after:shadow-lg after:transition-all after:duration-300 after:content-[''] after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)]" :class="smallTopMenuFixedExpanded ? 'after:scale-[10] after:rounded-sm' : 'after:rounded-md hover:after:scale-0'">
                <ButtonIconSolid id="menudown" aria-label="Menu Down" @click="toogleSmallTopFixed()" class="relative block z-40" :class="smallTopMenuFixedExpanded ? 'dark' : ''">
                    <Icon :name="smallTopMenuFixedExpanded ? 'lucide:x' : 'lucide:gantt-chart'" />
                </ButtonIconSolid>
                
                <div :class="smallTopMenuFixedExpanded ? 'translate-x-[-5em] translate-y-[0em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em] ">
                    <!-- <nuxt-link to="/">
                        <ButtonBase class="darkblue w-40 flex items-center justify-center gap-x-2">
                            <Icon name="lucide:wallpaper" class="text-xl lg:text-2xl" />
                            <span>
                                Halaman Utama
                            </span>
                        </ButtonBase>
                    </nuxt-link> -->
                    <nuxt-link :to="route.fullPath == '/' ? 'https://hpoi.org/' : '/'">
                        <ButtonBase class="darkblue w-40 flex items-center justify-center gap-x-2">
                            <Icon :name="route.fullPath == '/' ? 'lucide:home' : 'lucide:users'" class="text-xl" />
                            <span v-if="route.fullPath == '/'" >Halaman Utama HPOI</span>
                            <span v-if="route.fullPath != '/'" >Halaman List Anggota</span>
                        </ButtonBase>
                    </nuxt-link>
                </div>
                <div :class="smallTopMenuFixedExpanded ? 'translate-x-[-5em] translate-y-[5em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em] ">
                <nuxt-link to="/secret/daftar">
                    <ButtonBase class="dark w-40 flex items-start justify-center gap-x-2 text-left">
                        <p>
                            <Icon name="lucide:user-plus" class="text-2xl" />
                        </p>
                        <span>
                            Pendaftaran Anggota
                        </span>
                    </ButtonBase>
                </nuxt-link>
            </div>
            <div :class="smallTopMenuFixedExpanded ? 'translate-x-[-5em] translate-y-[10em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em] ">
                <nuxt-link to="/secret/login">
                    <ButtonBase class="dark w-40 flex items-start justify-center gap-x-2 text-left">
                        <p>
                            <Icon name="lucide:log-in" class="text-2xl" />
                        </p>
                        <span>
                            Login Anggota
                        </span>
                    </ButtonBase>
                </nuxt-link>
            </div>
                <!-- <div :class="smallTopMenuFixedExpanded ? 'translate-x-[-5em] translate-y-[8em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em] ">
                    <nuxt-link to="/hunian-kami">
                        <ButtonBase class="darkblue w-40 flex items-center justify-center gap-x-2">
                            <Icon name="lucide:home" class="text-xl lg:text-2xl" />
                            <span>
                                Hunian Kami
                            </span>
                        </ButtonBase>
                    </nuxt-link>
                </div>
                <div :class="smallTopMenuFixedExpanded ? 'translate-x-[-5em] translate-y-[12em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em] ">
                    <nuxt-link to="/kontak-kami">
                        <ButtonBase class="darkblue w-40 flex items-center justify-center gap-x-2">
                            <Icon name="lucide:phone-call" class="text-xl lg:text-2xl" />
                            <span>
                                Kontak Kami
                            </span>
                        </ButtonBase>
                    </nuxt-link>
                </div> -->

                <div :class="smallTopMenuFixedExpanded ? 'translate-x-[-1.1em] translate-y-[4em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em]">
                <div class="flex flex-col gap-y-2 text-center text-gsi-darkblue font-oswald font-bold text-xl">
                    <p>M</p>
                    <p>E</p>
                    <p>N</p>
                    <p>U</p>
                </div>
            </div>
            </div>
            
        </div>
    </nav>
    <!-- float top menu button -->
    <div :class="smallTopMenu ? 'translate-y-0 top-[0.6em]' : '-translate-y-full -top-5'" class="fixed right-0 md:right-[1em] z-[99] transition-all duration-300 transform h-12 w-12 rounded-full">
        <div class="after:bg-hpoi-main fixed right-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:right-0 after:-top-0 after:block after:h-12 after:w-12 after:shadow-lg after:transition-all after:duration-300 after:content-[''] after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)]" :class="smallTopMenuExpanded ? 'after:scale-[10] after:rounded-sm' : 'after:rounded-md hover:after:scale-0'">
            <ButtonIconSolid id="arrowdownsticky" aria-label="Sticky Down" @click="toogleSmallTop()" class="relative block z-40" :class="smallTopMenuExpanded ? 'dark' : ''">
                <Icon :name="smallTopMenuExpanded ? 'lucide:x' : 'lucide:gantt-chart'" />
            </ButtonIconSolid>
            
            <div :class="smallTopMenuExpanded ? 'translate-x-[-5em] translate-y-[0em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em] ">
                <nuxt-link :to="route.fullPath == '/' ? 'https://hpoi.org/' : '/'">
                    <ButtonBase class="darkblue w-40 flex items-start justify-center gap-x-2 text-left">
                        <p>
                            <Icon :name="route.fullPath == '/' ? 'lucide:home' : 'lucide:users'" class="text-2xl" />
                        </p>
                        <span v-if="route.fullPath == '/'" >Halaman Utama HPOI</span>
                        <span v-if="route.fullPath != '/'" >Halaman List Anggota</span>
                    </ButtonBase>
                </nuxt-link>
            </div>
            <div :class="smallTopMenuExpanded ? 'translate-x-[-5em] translate-y-[5em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em] ">
                <nuxt-link to="/secret/daftar">
                    <ButtonBase class="dark w-40 flex items-start justify-center gap-x-2 text-left">
                        <p>
                            <Icon name="lucide:user-plus" class="text-2xl" />
                        </p>
                        <span>
                            Pendaftaran Anggota
                        </span>
                    </ButtonBase>
                </nuxt-link>
            </div>
            <div :class="smallTopMenuExpanded ? 'translate-x-[-5em] translate-y-[10em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em] ">
                <nuxt-link to="/secret/login">
                    <ButtonBase class="dark w-40 flex items-start justify-center gap-x-2 text-left">
                        <p>
                            <Icon name="lucide:log-in" class="text-2xl" />
                        </p>
                        <span>
                            Login Anggota
                        </span>
                    </ButtonBase>
                </nuxt-link>
            </div>
            <!-- <div :class="smallTopMenuExpanded ? 'translate-x-[-5em] translate-y-[8em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em] ">
                <nuxt-link to="/hunian-kami">
                    <ButtonBase class="darkblue w-40 flex items-center justify-center gap-x-2">
                        <Icon name="lucide:home" class="text-xl lg:text-2xl" />
                        <span>
                            Hunian Kami
                        </span>
                    </ButtonBase>
                </nuxt-link>
            </div>
            <div :class="smallTopMenuExpanded ? 'translate-x-[-5em] translate-y-[12em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em] ">
                <nuxt-link to="/kontak-kami">
                    <ButtonBase class="darkblue w-40 flex items-center justify-center gap-x-2">
                        <Icon name="lucide:phone-call" class="text-xl lg:text-2xl" />
                        <span>
                            Kontak Kami
                        </span>
                    </ButtonBase>
                </nuxt-link>
            </div> -->

            <div :class="smallTopMenuExpanded ? 'translate-x-[-1.1em] translate-y-[4em] scale-1' : 'scale-0'" class="absolute transform z-20 transition-all duration-200 right-[0em] top-[0.25em]">
                <div class="flex flex-col gap-y-2 text-center text-gsi-darkblue font-oswald font-bold text-xl">
                    <p>M</p>
                    <p>E</p>
                    <p>N</p>
                    <p>U</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const storeMenu = useMenuStore()

const {
    menu
} = storeToRefs(storeMenu)

const smallTopMenu = ref(false)
const smallTopMenuExpanded = ref(false)
const smallTopMenuFixedExpanded = ref(false)

onMounted(() => {
    document.addEventListener('scroll', function() {
        let bodyTopPosition = document.body.getBoundingClientRect().top;

        if( bodyTopPosition < -50 ){
            smallTopMenu.value = true
            smallTopMenuFixedExpanded.value = false
        } else {
            smallTopMenu.value = false
            smallTopMenuExpanded.value = false
        }
    })
})

const toogleSmallTop = () => {
    smallTopMenuExpanded.value = !smallTopMenuExpanded.value
}
const toogleSmallTopFixed = () => {
    smallTopMenuFixedExpanded.value = !smallTopMenuFixedExpanded.value
}

</script>

<style scoped>

</style>