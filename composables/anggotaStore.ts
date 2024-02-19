export const useAnggotaStore = defineStore('anggotaStore', {
    state: () => ({
        anggotaAll : [] as any,
        dpcAll : [] as any,
        no_anggota: '',
        nama_provider: '',
        alamat: '',
        telepon: '',
        email: '',
        instagram: '',
        facebook: '',
        youtube: '',
        website: '',
        nama_pic: '',
        profile_one: '',
        profile_two: '',
        layanan: '',
        layananAll: [] as any,
        logo_img: '',
        hero_img: '',
        gallery_one: '',
        gallery_two: '',
        gallery_three: '',
        gallery_four: '',
        id_dpc: 0,
        nama_dpc: '',
        imagesAll_temp: [] as any,
        logo_img_temp: '',
        hero_img_temp: '',
        gallery_one_temp: '',
        gallery_two_temp: '',
        gallery_three_temp: '',
        gallery_four_temp: '',
        instagram_url: '',
        facebook_url: '',
        youtube_url: '',
        website_url: '',
        activated: 0,
        

    }),
    persist: true,
    getters: {

    },
    actions: {
        
    }
})
