import { useState, useEffect } from 'react';

export function useDebounse(value: string, delay: number = 300): string {
    const [debounsed, setDebounsed] = useState(value)

    useEffect( () => {
       const handler = setTimeout( () => setDebounsed(value), delay)
       return () => clearTimeout(handler)
    },[value, delay])

    return debounsed
}