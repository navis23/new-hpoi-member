<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <div class="relative min-h-screen bg-gray-800 px-4 lg:px-32 overflow-hidden">
            <div class="flex flex-col gap-3 w-full min-h-screen items-center justify-center">
                <h3 class="font-oswald text-gsi-smokewhite text-3xl text-center">Selamat akun email Anggota HPOI anda berhasil <span class="underline text-hpoi-main">dikonfirmasi. </span></h3>
                <h3 class="font-oswald text-gsi-smokewhite text-3xl text-center mb-4">Silahkan <span class="underline text-hpoi-main">LOGIN</span> untuk masuk ke Member Editor Area Anda.</h3>
                
                <ButtonBaseSmall class="flex items-center justify-center gap-x-1" @click="backHome()">
                    <Icon name="lucide:log-in" class="text-lg" />
                    <span>
                        Menuju Login Area
                    </span>
                </ButtonBaseSmall>
                <ButtonBaseSmall class="flex items-center justify-center gap-x-1" @click="sendEmail()">
                    <Icon name="lucide:log-in" class="text-lg" />
                    <span>
                        Tes Email
                    </span>
                </ButtonBaseSmall>
            </div>
            <p class="absolute py-10 -right-56 opacity-20 md:opacity-30 top-20">
                <Icon name="PatternThree" class="text-[28rem]"/>
            </p>
            <p class="absolute py-10 -left-56 opacity-20 md:opacity-30 bottom-10">
                <Icon name="PatternThree" class="text-[28rem]"/>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

const backHome = () => {
    reloadNuxtApp({
        path: "/secret/login",
        ttl: 10000, // default 10000
    });
}

const sendEmail = async () => {
    const data = await $fetch('/api/send', {
        method: 'POST',
        body: {
            email_anggota: 'paradosiakoorg@gmail.com',
            url: 'http://localhost:3000/get-card/card-111000/17087',
            nama_provider: 'TOS Adventure',
            no_anggota: '17087'
        }
    })

    console.log(data)
    console.log('berhasil mengirim email')
}

</script>

<style scoped>

</style>