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
                    <div v-if="errorMsg" class="flex w-full gap-x-1 items-center justify-start my-2">
                        <Icon name="lucide:x-circle" class="text-hpoi-red text-xl" />
                        <p class="text-hpoi-red text-sm">
                            Email atau password anda salah.
                        </p>
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
                <div class="relative z-40 flex justify-between w-full">
                    <div>
                        <h3 class="font-oswald text-gsi-smokewhite">
                            belum punya akun ? 
                        </h3>
                        <div>
                            <nuxt-link to="/secret/daftar"><span class="font-oswald text-hpoi-main underline underline-offset-4">Daftar Disini</span></nuxt-link>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-oswald text-gsi-smokewhite">
                            Lupa password anda ?
                        </h3>
                        <div>
                            <nuxt-link to="/secret/reset-password"><span class="font-oswald text-hpoi-main underline underline-offset-4">Reset Disini</span></nuxt-link> 
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
const errorMsg = ref(false)



const signIn = async () => {
    loading.value = true
    let { data, error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })

    console.log(data)

    if(error){
        errorMsg.value = true
        console.log(error.message)
        setTimeout(async () => {
            loading.value = false
        }, 1000);
        setTimeout(async () => {
            errorMsg.value = false
        }, 3000);
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