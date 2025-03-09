import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import AssistanceTableSection from './sections/assistance-table-section'

export default function AssistancePage() {

  return (
    <AdminLayout>
      <AssistanceTableSection/>
    </AdminLayout>
  )
}
