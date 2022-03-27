import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const isDisplayed = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null })


    useEffect(() => {
      return () =>{
        isDisplayed.current = false
      }
    }, [])
    

    useEffect(() => {

        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then(
                resp => resp.json()
            )
            .then(                
                data => {
                    if(isDisplayed.current){
                        setState({ data, loading: false, error: null })
                    } else {
                        console.log('useFetch: data is not displayed')
                    }
                }
            )
    }, [url])

    return state

}
