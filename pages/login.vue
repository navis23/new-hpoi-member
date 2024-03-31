<template>
    <div class="px-56">
        Testing w woeee

        <!-- <div v-for="(item, index) in provinsi.value" :key="index">
            <p class="mt-3">{{ item.id }}</p>
            <p class="">{{ item.name }}</p>
        </div> -->
        <div class="min-h-screen mt-10 w-full flex items-center">
            <div class="flex flex-col gap-4">
                <div v-for="(item, index) in provinsi"  class="bg-blue-100 rounded p-2 flex justify-between items-center">
                    <p class="text-lg">
                        {{ item.name }}
                    </p>
                    <button @click="">
                        pilih
                    </button>
                </div>
            </div>
        </div>
        <div class="my-10">

            <FormKit
                v-model="provinsiTemp"
                @change="openKab()"
                type="select"
                label="Pilih Provinsi"
                name="nama provinsi"
                help="Pilih Provinsi lokasi anda."
            >
            <optgroup>
                <option  v-for="(item, index) in provinsi" :value="JSON.stringify(item)">{{ item.name }}</option>
            </optgroup>
            </FormKit>
            <pre wrap>{{ provinsi_id }} - {{ provinsi_name }}</pre>
            
            <FormKit
                v-if="kab_enabled && provinsi_id != ''"
                v-model="kabupaten_name"
                type="select"
                label="Pilih Kabupaten"
                name="nama kabupaten"
                help="Pilih Kabupaten lokasi anda."
                >
                <optgroup>
                    <option  v-for="(i, index) in kabupatenAll" :value="i?.name">{{ i.name }}</option>
                </optgroup>
            </FormKit>
            <pre wrap>{{ kabupaten_name }}</pre>
    
        </div>
        </div>
</template>

<script setup lang="ts">
const provinsi_id = ref('')
const provinsi_name = ref('')
const kabupaten_name = ref('')
const kabupatenAll = ref<any[]>([])
const kabupatenTemp = ref()
const provinsiTemp = ref()
const kab_enabled = ref(false)
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
// const client = useSupabaseClient()
// const { data: anggota } = await useAsyncData('anggota', async () => client
//     .from('hpoi_anggota')
//     .select('*')
//     , { transform: (result : any) => result.data }
// )

// const {data: provinsi } = await useFetch('https://api.binderbyte.com/wilayah/provinsi?api_key=1bc6ebeca08d336cece6db2404974520559d8a6d83c85bb97c1112778bb2690b')
const {data: provinsi } = await useAsyncData(
    'provinsi', 
    () => $fetch('https://api.binderbyte.com/wilayah/provinsi?api_key=1bc6ebeca08d336cece6db2404974520559d8a6d83c85bb97c1112778bb2690b')
    ,{ transform: (result : any) => result.value }
)

const openKab = async () => {
    kabupaten_name.value = ''
    const convertObj = await JSON.parse(provinsiTemp.value)
    const {id, name} = await convertObj
    provinsi_id.value = await id
    provinsi_name.value = await name

    console.log(convertObj)
    console.log(provinsi_id.value + ' wkwkwk ' + provinsi_name.value)
    await nextTick().then(async () => {
        // DOM is now updated
        console.log("Continue here")
        const fetchKabupaten: any = await $fetch(`https://api.binderbyte.com/wilayah/kabupaten?api_key=1bc6ebeca08d336cece6db2404974520559d8a6d83c85bb97c1112778bb2690b&id_provinsi=${provinsi_id.value}`)
        kabupatenAll.value = fetchKabupaten.value

        if(kabupatenAll.value.length != 0) {
            kab_enabled.value = true
            console.log(kabupatenAll.value)
        }
    })
}

console.log(provinsi.value)
// onMounted(() => {
//     test()
// })
</script>

<style scoped>

</style>