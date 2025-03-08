import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import VerifierTableSection from './sections/verifier-table-section'
import store from '@/app/store/store'
import { get_users_thunk } from '@/app/redux/user-thunk'

export default function VerifierPage() {

  useEffect(()=>{
    store.dispatch(get_users_thunk())
  },[])
  return (
    <AdminLayout>
      <VerifierTableSection/>
    </AdminLayout>
  )
}
