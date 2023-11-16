<template>
    <div>
        <Navbar />
        login woeee

        <div v-for="(item, index) in anggota" :key="index">
            <p>{{ item.nama_pic }}</p>
            <p v-for="(i, index) in item.layanan" :key="index">
                {{ index+1 }} - {{ i }}
            </p>
            <div>
                <nuxt-img :src="item.hero_img" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// const supabase = useSupabaseClient()

// // const { data : anggota } = await useAsyncData('anggota', async () => {
// //     const {data} = await client.from('hpoi_anggota').select('*')
// //     return data
// // })

// // console.log(anggota.value)
// const testing = ref()
// async function test() {
//     let { data: hpoi_anggota, error } = await supabase
//     .from('hpoi_dpc')
//     .select('*')
//     testing.value = hpoi_anggota
//     console.log(testing.value)
// }
const client = useSupabaseClient()
const { data: anggota } = await useAsyncData('anggota', async () => client
    .from('hpoi_anggota')
    .select('*')
    , { transform: (result : any) => result.data }
)



// onMounted(() => {
//     test()
// })
</script>

<style scoped>

</style>