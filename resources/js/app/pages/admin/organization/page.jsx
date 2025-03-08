import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import OrganizationTableSection from './sections/organization-table-section'
import store from '@/app/store/store'
import { get_organization_thunk } from '@/app/redux/organization-thunk'

export default function OrganizationPage() {

  useEffect(()=>{
    store.dispatch(get_organization_thunk())
  },[])
  return (
    <AdminLayout>
      <OrganizationTableSection/>
    </AdminLayout>
  )
}
