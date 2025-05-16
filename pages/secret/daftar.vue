<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <div class="relative min-h-screen bg-gray-800 px-4 lg:px-32 overflow-hidden">
            <div class="flex flex-col gap-6 w-full min-h-screen items-center justify-center">
                <h3 class="font-oswald text-gsi-smokewhite text-4xl text-center mb-4"><span class="text-hpoi-main underline underline-offset-4">Registrasi Akun</span> Anggota anda</h3>
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
                    <div v-if="errorExist" class="flex w-full gap-x-1 items-center justify-start my-2">
                        <Icon name="lucide:x-circle" class="text-hpoi-red text-3xl" />
                        <p class="text-hpoi-red text-sm">
                            Email sudah terdaftar, coba login atau gunakan email lain.
                        </p>
                    </div>
                    <div v-if="errorSupa" class="flex w-full gap-x-1 items-center justify-start my-2">
                        <Icon name="lucide:x-circle" class="text-hpoi-red text-3xl" />
                        <p class="text-hpoi-red text-sm">
                            Server Error, silahkan coba lain kali.
                        </p>
                    </div>
                    <div class="border-t-2 pt-4">
                        <ButtonBase v-if="loading == false" @click="signUp()" class="flex items-center justify-center gap-x-1 ">
                            <Icon name="lucide:clipboard-check" class="text-2xl" />
                            <span>
                                Daftar Sekarang
                            </span>
                        </ButtonBase>
                        <ButtonBase v-if="loading == true" class="muted flex items-center justify-center gap-x-1 " :disabled="loading == true">
                            <Icon name="svg-spinners:blocks-shuffle-3" class="text-2xl" />
                            <span>
                                Proses simpan
                            </span>
                        </ButtonBase>
                    </div>
                </div>
                <div class="relative z-40 w-full">
                    <h3 class="font-oswald text-gsi-smokewhite">
                        Sudah punya akun ? <nuxt-link to="/secret/login"><span class="text-hpoi-main underline underline-offset-4">Login Disini</span></nuxt-link> 
                    </h3>
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
    loading,
    errorMsg
} = storeToRefs(storeGlobalData)

const email = ref('')
const password = ref('')
const errorExist = ref(false)
const errorSupa = ref(false)


const signUp = async () => {
    loading.value = true

    const { data: anggota , error: err } = await client
        .from('hpoi_anggota')
        .select(`
            email
        `)
        .eq('email',`${email.value}`)
        .single()
    
    if(anggota == null){
        let { data, error } = await client.auth.signUp({
            email: email.value,
            password: password.value
        })
        
    
        console.log(data.user?.email)
        console.log(error)
        console.log(data)
    
        if(error){
            console.log('supabase problem')
            errorSupa.value = true
            setTimeout(async () => {
                loading.value = false
                email.value = ''
                password.value = ''
            }, 1000);
            
            setTimeout(async () => {
                errorSupa.value = false
            }, 5000);

        } else {
            if(data){
                console.log(data)
                setTimeout(async () => {
                    loading.value = false
                    email.value = ''
                    password.value = ''
                    navigateTo('/secret/confirm')
                }, 1000);
            } else {
                console.log(error)
                setTimeout(async () => {
                    loading.value = false
                }, 1000);
            }
        }
    
    } else{
        console.log('data exist, change to other email')
        console.log(err)
        errorExist.value = true
        setTimeout(async () => {
            loading.value = false
            email.value = ''
            password.value = ''
        }, 1000);

        setTimeout(async () => {
            errorExist.value = false
        }, 5000);
    }
    

    
}

const handleIconClick = (node : any, e : any) => {
    node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

</script>

<style scoped>

</style>