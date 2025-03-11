import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import AssistanceTableSection from './sections/assistance-table-section'
import store from '@/app/store/store'
import { get_cash_assistance_thunk } from '@/app/redux/cash-assistance-thunk'

export default function AssistancePage({auth}) {

  useEffect(()=>{
    store.dispatch(get_cash_assistance_thunk())
  },[])
  return (
    <AdminLayout>
      <AssistanceTableSection/>
    </AdminLayout>
  )
}
