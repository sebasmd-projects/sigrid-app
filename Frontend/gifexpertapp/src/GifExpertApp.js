import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory func={setCategories} />

            <hr></hr>

            <ul>
                {
                    categories.map(categories => (
                        <GifGrid
                            key={categories}
                            category={categories}
                        />
                    )
                    )
                }
            </ul>

        </div>
    )
}
