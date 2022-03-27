import React, { memo } from 'react'

export const Small = memo(({ value }) => {


    console.log("Valor renderizado")
    return (
        <small>{value}</small>

    )
})
