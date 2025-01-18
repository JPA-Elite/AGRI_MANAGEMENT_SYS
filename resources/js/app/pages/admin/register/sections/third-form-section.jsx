import React from 'react'
import OwnershipDocumentComponent from '../components/ownership-document-component'
import FarmLandComponent from '../components/farm-land-component'

export default function ThirdFormSection() {
    return (
        <div>
            <FarmLandComponent/>
            <OwnershipDocumentComponent/>
        </div>
    )
}
