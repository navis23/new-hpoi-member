export const useMenuStore = defineStore('menuStore', {
    state: () => ({
        menu: [
                { name : 'Halaman Utama', icon : 'lucide:dashboard', link : '/' },
                { name : 'Tentang Kami', icon : 'lucide:product', link : 'tentang-kami'},
                { name : 'Hunian Kami', icon : 'lucide:category', link : 'hunian-kami'},
                // { name : 'Galeri', icon : 'lucide:delivery-add', link : 'galeri'},
        ]

    }),
    getters: {

    },
    actions: {
        
    }
})
