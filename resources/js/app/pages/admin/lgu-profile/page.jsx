import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import LguInformationSection from './sections/lgu-information-section'
import store from '@/app/store/store'
import { get_lgu_profile_by_id_thunk } from '@/app/redux/lgu-profile-thunk'

export default function LguProfilePage({auth}) {

  useEffect(()=>{
    store.dispatch(get_lgu_profile_by_id_thunk(auth.user.id))
  },[])
  
  return (
    <AdminLayout>
      <LguInformationSection id={auth.user.id}/>
    </AdminLayout>
  )
}
