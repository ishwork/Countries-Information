export type Country = {
    name: {
        common: string
        official: string
    }
    languages: {
        [key: string]: string
    }
    flags: any
    region: string
    population: number
    capital: string[]
    borders: string[]
    currencies: {
        name: string
    }
    addFav:  any 
}


