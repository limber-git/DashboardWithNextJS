import { Montserrat, Lusitana } from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin']
})

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
})

// lo que se esta haciendo es descargar,
// optimizar y servirla desde el servidor