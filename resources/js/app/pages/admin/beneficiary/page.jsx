import React from 'react'
import AdminLayout from '../layout'
import ActiveBeneficiarySection from './sections/active-beneficiary-section'

export default function BeneficiaryPage() {
  return (
    <AdminLayout>
      <ActiveBeneficiarySection/>
    </AdminLayout>
  )
}
