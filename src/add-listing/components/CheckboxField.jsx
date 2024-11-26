import React from 'react'
import { Checkbox } from "../../components/ui/checkbox"

function CheckboxField({ name, label}) {
    return (
        <Checkbox 
            id={name}
            name={name}
            aria-label={label}
        />
    )
}

export default CheckboxField