<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <div class="relative min-h-screen bg-gray-800 px-4 lg:px-32 overflow-hidden">
            <div class="flex flex-col gap-6 w-full min-h-screen items-center justify-center">
                <h3 class="font-oswald text-gsi-smokewhite text-4xl text-center mb-4"><span class="text-hpoi-main underline underline-offset-4">Login akun</span> Anggota anda</h3>
                <div class="relative overflow-hidden z-40 bg-gsi-smokewhite w-96  shadow-xl rounded-xl px-4 lg:px-8 py-6">
                    <div class="mt-4 mb-5">
                        <FormKit
                            type="text"
                            prefix-icon="email"
                            label="Email Anda"
                            v-model="email"
                            placeholder="Ketikkan email Anda"
                            help="Masukkan email anda yang sesuai"
                        />
                        <FormKit
                            type="password"
                            prefix-icon="password"
                            label="Password Anda"
                            v-model="password"
                            suffix-icon="eyeClosed"
                            @suffix-icon-click="handleIconClick"
                            placeholder="Ketikkan Password Anda"
                            help="Masukkan password rahasia anda"
                        />
                        
                    </div>
                    <div class="border-t-2 pt-4">
                        <ButtonBase v-if="loading == false" class="hpoi flex items-center justify-center gap-x-1" @click="signIn()">
                            <Icon name="lucide:log-in" class="text-2xl" />
                            <span>
                                Login Sekarang
                            </span>
                        </ButtonBase>
                        <ButtonBase v-if="loading == true" class="muted flex items-center justify-center gap-x-1" :disabled="loading == true">
                            <Icon name="svg-spinners:blocks-shuffle-3" class="text-2xl" />
                            <span>
                                Proses simpan
                            </span>
                        </ButtonBase>
                    </div>
                </div>
                <h3 class="font-oswald text-gsi-smokewhite">
                    belum punya akun ? <nuxt-link to="/secret/daftar"><span class="text-hpoi-main underline underline-offset-4">Daftar Disini</span></nuxt-link> 
                </h3>
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
  middleware: ["auth"]
  // or middleware: 'auth'
})
const storeGlobalData = useGlobalDataStore()
const client = useSupabaseClient()

const {
    loading
} = storeToRefs(storeGlobalData)

const email = ref('')
const password = ref('')



const signIn = async () => {
    loading.value = true
    let { data, error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })

    console.log(data)

    if(error){
        console.log(error.message)
        setTimeout(async () => {
            loading.value = false
        }, 1000);
    } else {
        setTimeout(async () => {
            loading.value = false
            navigateTo('/admin/data-anggota')
        }, 1000);
    }
    
}

const handleIconClick = (node : any, e : any) => {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}


</script>

<style scoped>

</style>