<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <div class="relative min-h-screen bg-gray-800 px-4 lg:px-32 overflow-hidden">
            <div class="flex flex-col gap-6 w-full min-h-screen items-center justify-center">
                <h3 class="font-oswald text-gsi-smokewhite text-4xl text-center mb-4"><span class="text-hpoi-main underline underline-offset-4">Masukkan Password Baru Akun</span> Anggota anda</h3>
                <div class="relative overflow-hidden z-40 bg-gsi-smokewhite w-96  shadow-xl rounded-xl px-4 lg:px-8 py-6">
                    <div class="mt-4 mb-5">
                        <FormKit
                            type="password"
                            prefix-icon="password"
                            label="Password Baru Anda"
                            v-model="password"
                            suffix-icon="eyeClosed"
                            @suffix-icon-click="handleIconClick"
                            placeholder="Ketikkan Password baru Anda"
                            help="Masukkan password baru anda"
                        />
                        <FormKit
                            type="password"
                            prefix-icon="password"
                            label="Konfirmasi Password Baru Anda"
                            v-model="repassword"
                            suffix-icon="eyeClosed"
                            @suffix-icon-click="handleIconClick2"
                            placeholder="Ketikkan Password baru Anda Kembali"
                            help="Masukkan password baru anda kembali"
                        />
                        
                    </div>
                    <div v-if="errorExist" class="flex w-full gap-x-1 items-center justify-start my-2">
                        <Icon name="lucide:x-circle" class="text-hpoi-red text-3xl" />
                        <p class="text-hpoi-red text-sm">
                            Password yang dimasukkan tidak sesuai dengan konfirmasi password, masukkan kembali password anda dengan benar.
                        </p>
                    </div>
                    <div v-if="errorSupa" class="flex w-full gap-x-1 items-center justify-start my-2">
                        <Icon name="lucide:x-circle" class="text-hpoi-red text-3xl" />
                        <p class="text-hpoi-red text-sm">
                            Server Error, silahkan coba lain kali.
                        </p>
                    </div>
                    <div class="border-t-2 pt-4">
                        <ButtonBase v-if="loading == false" @click="newPassword()" class="flex items-center justify-center gap-x-1 ">
                            <Icon name="lucide:clipboard-check" class="text-2xl" />
                            <span>
                                Simpan Password Sekarang
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

const storeGlobalData = useGlobalDataStore()
const client = useSupabaseClient()
const storeAnggota = useAnggotaStore()

const {
    loading,
    errorMsg
} = storeToRefs(storeGlobalData)

const email = ref('')
const password = ref('')
const repassword = ref('')
const errorExist = ref(false)
const errorSupa = ref(false)


const newPassword = async () => {
    loading.value = true

    
    if(password.value == repassword.value){
        const { data, error } = await client.auth.updateUser({
            password: password.value
        })
        
    
        // console.log(data.user?.email)
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
                try {
                    let { error } = await client.auth.signOut()
                    if(error) throw error;

                    storeAnggota.$reset()
                    setTimeout(async () => {
                        loading.value = false
                        password.value = ''
                        repassword.value = ''
                        navigateTo('/secret/confirm-password')
                        console.log('berhasil log out')
                    }, 2000);
                } catch (error) {
                    console.log(error)
                }
            } else {
                console.log(error)
                setTimeout(async () => {
                    loading.value = false
                }, 1000);
            }
        }
    
    } else{
        console.log('password and validation password is not same')
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
const handleIconClick2 = (node : any, e : any) => {
    node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

</script>

<style scoped>

</style>