export default defineNuxtRouteMiddleware( async (to, from) => {
  const user = useSupabaseUser()
  const client = useSupabaseClient<any>()

    const { data: detail_anggota } = await client
      .from('hpoi_detail_anggota')
      .select(`
          *,
          hpoi_anggota!inner(*),
          hpoi_dpc(*)
      `)
      .eq('hpoi_anggota.email',`${user.value?.email}`)
      .single()

      if(user.value && detail_anggota) {

        if (to.path === "/secret/login" && detail_anggota.role == true ) {
    
          return navigateTo('/admin-hpoi')
    
        }
        
        if (detail_anggota.role == false) {
    
          return navigateTo('/secret/login')
    
        }
      }
      else if(!detail_anggota && to.path !== '/secret/login'){
        return navigateTo('/secret/login')
      }

})