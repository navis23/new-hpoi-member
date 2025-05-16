<template>
    <div class="relative overflow-hidden">
        <Navbar />
        <div class="relative min-h-screen bg-gray-800 px-4 lg:px-32 overflow-hidden">
            <div class="flex flex-col gap-3 w-full min-h-screen items-center justify-center">
                <h3 class="font-oswald text-gsi-smokewhite text-3xl text-center">Anda sudah melakukan request untuk reset password akun anggota HPOI anda.</h3>
                <h3 class="font-oswald text-gsi-smokewhite text-3xl text-center mb-4">silahkan <span class="underline text-hpoi-main">cek email anda</span> untuk konfirmasi reset password baru anda.</h3>
                
                <ButtonBaseSmall class="flex items-center justify-center gap-x-1" @click="backHome()">
                    <Icon name="lucide:home" class="text-lg" />
                    <span>
                        Kembali ke halaman utama
                    </span>
                </ButtonBaseSmall>
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

const backHome = () => {
    reloadNuxtApp({
        path: "/",
        ttl: 10000, // default 10000
    });
}
</script>

<style scoped>

</style>