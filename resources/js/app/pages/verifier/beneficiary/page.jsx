import React, { useEffect } from 'react'
import ActiveBeneficiarySection from './sections/active-beneficiary-section'
import store from '@/app/store/store'
import { get_personal_information_thunk } from '@/app/redux/personal-information-thunk'
import VerifierLayout from '../layout'

export default function BeneficiaryPage() {

  useEffect(()=>{
    store.dispatch(get_personal_information_thunk())
  },[])
  return (
    <VerifierLayout>
      <ActiveBeneficiarySection/>
    </VerifierLayout>
  )
}
