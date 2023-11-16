export const useGlobalDataStore = defineStore('globalDataStore', {
    state: () => ({
        loading : false,
        facilities : [
            {
                'id' : 1,
                'name' : 'One Gate System',
                'icon' : 'lucide:construction',
                'mode' : false
            },
            {
                'id' : 2,
                'name' : 'Modern Minimalist Home',
                'icon' : 'lucide:home',
                'mode' : true
            },
            {
                'id' : 3,
                'name' : 'Harga Terjangkau',
                'icon' : 'lucide:tags',
                'mode' : false
            },
            {
                'id' : 4,
                'name' : 'Lokasi Strategis',
                'icon' : 'lucide:map-pin',
                'mode' : true
            },
            {
                'id' : 5,
                'name' : 'Fasilitas Penunjang',
                'icon' : 'lucide:smile',
                'mode' : false
            },
            {
                'id' : 6,
                'name' : 'Grande Living Room',
                'icon' : 'lucide:bed-double',
                'mode' : true
            }
        ],

        locations : [
            {
                'id' : 1,
                'name' : 'dari Alun-alun Jombang',
                'distance' : '15 menit',
                'mode' : false
            },
            {
                'id' : 2,
                'name' : 'dari Stasiun terdekat',
                'distance' : '8 menit',
                'mode' : false
            },
            {
                'id' : 3,
                'name' : 'dari Rumah Sakit terdekat',
                'distance' : '9 menit',
                'mode' : false
            },
            {
                'id' : 4,
                'name' : 'dari Pasar Taman Mojoagung',
                'distance' : '9 menit',
                'mode' : false
            },
            {
                'id' : 5,
                'name' : 'dari Puskesmas terdekat',
                'distance' : '5 menit',
                'mode' : false
            },
            {
                'id' : 6,
                'name' : 'dari Fasilitas Pendidikan terdekat',
                'distance' : '5 menit',
                'mode' : false
            },
        ],

        mini_maps : [
            {
                'id' : 1,
                'name' : 'Alun-alun Jombang',
                'distance' : '15 menit',
                'icon' : 'lucide:tree-pine',
            },
            {
                'id' : 2,
                'name' : 'Stasiun terdekat',
                'distance' : '8 menit',
                'icon' : 'lucide:train-front',
            },
            {
                'id' : 3,
                'name' : 'Rumah Sakit terdekat',
                'distance' : '9 menit',
                'icon' : 'lucide:activity-square',
            },
            {
                'id' : 4,
                'name' : 'Fas. Pendidikan terdekat',
                'distance' : '5 menit',
                'icon' : 'lucide:school',
            },
        ],

        contacts : [
            {
                'id' : 1,
                'description' : 'Ds. Sambirejo, Kec. Jogoroto, Jombang',
                'icon' : 'lucide:home',
                'mode' : false
            },
            {
                'id' : 2,
                'description' : '0812-5222-2877 / 0822-3137-2191',
                'icon' : 'lucide:phone-call',
                'mode' : false
            },
            {
                'id' : 3,
                'description' : 'griyasambirejoindah@gmail.com',
                'icon' : 'lucide:mail',
                'mode' : false
            },
            {
                'id' : 4,
                'description' : 'www.griyasambirejoindah.com',
                'icon' : 'lucide:globe',
                'mode' : false
            },
            {
                'id' : 1,
                'description' : '@griya_sambirejo',
                'icon' : 'lucide:instagram',
                'mode' : false
            },
        ],

        type_40 : [
            {
                'id' : 1,
                'name' : 'Living Room Luas',
                'icon' : 'lucide:armchair',
                'mode' : false
            },
            {
                'id' : 2,
                'name' : '2 Kamar Tidur',
                'icon' : 'lucide:bed-double',
                'mode' : true
            },
            {
                'id' : 3,
                'name' : 'Kamar Mandi',
                'icon' : 'lucide:bath',
                'mode' : false
            },
            {
                'id' : 4,
                'name' : 'Area Carport',
                'icon' : 'lucide:car-front',
                'mode' : true
            },
            {
                'id' : 5,
                'name' : 'Area Taman Terbuka',
                'icon' : 'lucide:trees',
                'mode' : false
            },
            {
                'id' : 6,
                'name' : 'Area Dapur',
                'icon' : 'lucide:cookie',
                'mode' : true
            }
        ],

        specifications : [
            {
                'id' : 1,
                'name' : 'Struktur Bangunan',
                'goods' : 'Beton Bertulang',
                'mode' : false
            },
            {
                'id' : 2,
                'name' : 'Pondasi',
                'goods' : 'Batu Kumbung',
                'mode' : false
            },
            {
                'id' : 3,
                'name' : 'Dinding',
                'goods' : 'Bata Ringan Finishing Cat',
                'mode' : false
            },
            {
                'id' : 4,
                'name' : 'Lantai',
                'goods' : 'Keramik 50 x 50',
                'mode' : false
            },
            {
                'id' : 5,
                'name' : 'Atap',
                'goods' : 'Rangka Galvalum, Genteng',
                'mode' : false
            },
            {
                'id' : 6,
                'name' : 'Plafon',
                'goods' : 'Gypsum Board',
                'mode' : false
            },
            {
                'id' : 7,
                'name' : 'Carport',
                'goods' : 'Plester Rabat Pola',
                'mode' : false
            },
            {
                'id' : 8,
                'name' : 'Kusen Jendela & Pintu',
                'goods' : 'Alumunium',
                'mode' : false
            },
            {
                'id' : 9,
                'name' : 'Pintu Utama',
                'goods' : 'Kombinasi ACP & Kaca',
                'mode' : false
            },
            {
                'id' : 10,
                'name' : 'Pintu Dalam',
                'goods' : 'Double Teakwood',
                'mode' : false
            },
            {
                'id' : 11,
                'name' : 'Sanitasi Air',
                'goods' : 'Kloset Duduk',
                'mode' : false
            },
            {
                'id' : 12,
                'name' : 'Instalasi Air Bersih',
                'goods' : 'Sumur Bor',
                'mode' : false
            },
            {
                'id' : 13,
                'name' : 'Listrik',
                'goods' : 'PLN 1300 Watt / 220 volt',
                'mode' : false
            },
            
        ],

        hpois : [
            {
                'id' : 1,
                'no_anggota' : 111222,
                'nama_provider' : 'Tos Adventure',
                'dpc' : 'Surabaya, Jawa Timur',
                'nama_pic' : 'Lukas Edi P',
                'hero_text' : 'Feel The Nature, Enjoy The Flow',
                'profile_one' : 'Tos Adventure Pacet adalah provider wisata yang berada di kawasan Wana Wisata Air Panas Padusan Pacet Mojokerto Jawa Timur, bergerak di bidang wisata adventure, rafting pacet, outbound pacet, paintball pacet, travel partner, event organizer dan program edukasi dengan produk andalan kami TOS RAFTING PACET. Berpengalaman selama lebih dari 10 tahun semenjak berdiri tahun 2008, TOS Adventure Pacet siap memberi pelayanan terbaik untuk anda',
                'profile_two' : 'Tos Adventure Pacet sudah bekerjasama dan melayani berbagai klien dari seluruh Indonesia baik mulai dari Perusahaan, instansi Pemerintah, sekolah, universitas, organisasi, club, komunitas keluarga, maupun umum. Intip sekilas bagaimana perjalanan dan kegiatan para klien kami',
                'services' : [
                    'Rafting / Arung Jeram',
                    'Camping Ground',
                    'Fun Outbound',
                    'Paintball War',
                    'Event Organizer',
                    'Training Camp'
                ],
                'alamat' : 'Desa Padusan Kec Pacet Mojokerto',
                'telepon' : '0899878127',
                'email' : 'tosadventure@gmail.com',
                'instagram' : '@tos_adventure',
                'facebook' : 'tos adventure',
                'youtube' : 'tos channel',
                'website' : 'tosadventure.com',
                'logo_img' : '/img/logotos.png',
                'hero_img' : '/img/heroraft.jpg',
                'gallery_one' : '/img/galeri01.jpg',
                'gallery_two' : '/img/galeri02.jpg',
                'gallery_three' : '/img/galeri03.jpg',
                'gallery_four' : '/img/galeri04.jpg',
                'featured' : true,

            },
            {
                'id' : 2,
                'no_anggota' : 222333,
                'nama_provider' : 'Enter Provider',
                'dpc' : 'Mojokerto, Jawa Timur',
                'nama_pic' : 'Dwi P',
                'hero_text' : 'Feel The Nature, Enjoy The Flow',
                'profile_one' : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam distinctio veniam placeat enim facere, molestiae accusamus voluptate blanditiis ipsa!',
                'profile_two' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam doloremque sapiente similique vitae aut quibusdam consequatur, nihil magni! Optio nesciunt provident dolorem dolorum ratione, numquam odit harum tempore facilis nobis!',
                'services' : [
                    'Rafting / Arung Jeram',
                    'Camping Ground',
                    'Fun Outbound',
                    'Paintball War',
                    'Event Organizer',
                    'Training Camp'
                ],
                'alamat' : 'Desa Padusan Kec Pacet Mojokerto',
                'telepon' : '0899878127',
                'email' : 'tosadventure@gmail.com',
                'instagram' : '@tos_adventure',
                'facebook' : 'tos adventure',
                'youtube' : 'tos channel',
                'website' : 'tosadventure.com',
                'logo_img' : '/img/logoenter.png',
                'hero_img' : '/img/heroout.jpg',
                'gallery_one' : '/img/galeri01.jpg',
                'gallery_two' : '/img/galeri02.jpg',
                'gallery_three' : '/img/galeri03.jpg',
                'gallery_four' : '/img/galeri04.jpg',
                'featured' : true,

                
            },
            {
                'id' : 3,
                'no_anggota' : 333444,
                'nama_provider' : 'Cartenz HRD',
                'dpc' : 'Sidoarjo, Jawa Timur',
                'nama_pic' : 'Dody S',
                'hero_text' : 'Feel The Nature, Enjoy The Flow',
                'profile_one' : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam distinctio veniam placeat enim facere, molestiae accusamus voluptate blanditiis ipsa!',
                'profile_two' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam doloremque sapiente similique vitae aut quibusdam consequatur, nihil magni! Optio nesciunt provident dolorem dolorum ratione, numquam odit harum tempore facilis nobis!',
                'services' : [
                    'Rafting / Arung Jeram',
                    'Camping Ground',
                    'Fun Outbound',
                    'Paintball War',
                    'Event Organizer',
                    'Training Camp'
                ],
                'alamat' : 'Jalan Gubeng Kertajaya VC No 54 Surabaya.',
                'telepon' : '0899878127',
                'email' : 'tosadventure@gmail.com',
                'instagram' : '@tos_adventure',
                'facebook' : 'tos adventure',
                'youtube' : 'tos channel',
                'website' : 'tosadventure.com',
                'logo_img' : '/img/logocartenz.png',
                'hero_img' : '/img/herocamp.jpg',
                'gallery_one' : '/img/galeri01.jpg',
                'gallery_two' : '/img/galeri02.jpg',
                'gallery_three' : '/img/galeri03.jpg',
                'gallery_four' : '/img/galeri04.jpg',
                'featured' : true,

                
            },
            {
                'id' : 4,
                'no_anggota' : 444555,
                'nama_provider' : 'Wa Hyang Tarumajaya Outbound',
                'dpc' : 'Mojokerto, Jawa Timur',
                'nama_pic' : 'Dwi P',
                'hero_text' : 'Feel The Nature, Enjoy The Flow',
                'profile_one' : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam distinctio veniam placeat enim facere, molestiae accusamus voluptate blanditiis ipsa!',
                'profile_two' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam doloremque sapiente similique vitae aut quibusdam consequatur, nihil magni! Optio nesciunt provident dolorem dolorum ratione, numquam odit harum tempore facilis nobis!',
                'services' : [
                    'Rafting / Arung Jeram',
                    'Camping Ground',
                    'Fun Outbound',
                    'Paintball War',
                    'Event Organizer',
                    'Training Camp'
                ],
                'alamat' : 'Wana Wisata Air Panas Desa Padusan Kec Pacet Mojokerto',
                'telepon' : '0899878127',
                'email' : 'tosadventure@gmail.com',
                'instagram' : '@tos_adventure',
                'facebook' : 'tos adventure',
                'youtube' : 'tos channel',
                'website' : 'tosadventure.com',
                'logo_img' : '/img/logoenter.png',
                'hero_img' : '/img/heroout.jpg',
                'gallery_one' : '/img/galeri01.jpg',
                'gallery_two' : '/img/galeri02.jpg',
                'gallery_three' : '/img/galeri03.jpg',
                'gallery_four' : '/img/galeri04.jpg',
                'featured' : false,

                
            },
            {
                'id' : 5,
                'no_anggota' : 555666,
                'nama_provider' : 'Cartenz HRD',
                'dpc' : 'Sidoarjo, Jawa Timur',
                'nama_pic' : 'Dody S',
                'hero_text' : 'Feel The Nature, Enjoy The Flow',
                'profile_one' : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam distinctio veniam placeat enim facere, molestiae accusamus voluptate blanditiis ipsa!',
                'profile_two' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam doloremque sapiente similique vitae aut quibusdam consequatur, nihil magni! Optio nesciunt provident dolorem dolorum ratione, numquam odit harum tempore facilis nobis!',
                'services' : [
                    'Rafting / Arung Jeram',
                    'Camping Ground',
                    'Fun Outbound',
                    'Paintball War',
                    'Event Organizer',
                    'Training Camp'
                ],
                'alamat' : 'Desa Padusan Kec Pacet Mojokerto',
                'telepon' : '0899878127',
                'email' : 'tosadventure@gmail.com',
                'instagram' : '@tos_adventure',
                'facebook' : 'tos adventure',
                'youtube' : 'tos channel',
                'website' : 'tosadventure.com',
                'logo_img' : '/img/logocartenz.png',
                'hero_img' : '/img/herocamp.jpg',
                'gallery_one' : '/img/galeri01.jpg',
                'gallery_two' : '/img/galeri02.jpg',
                'gallery_three' : '/img/galeri03.jpg',
                'gallery_four' : '/img/galeri04.jpg',
                'featured' : false,

                
            },
        ],

    }),
})
