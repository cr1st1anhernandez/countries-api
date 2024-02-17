export interface Curiosity {
  id: number
  countryId: number
  description: string
  imageUrl: string
}

export interface Country {
  id: number
  name: string
  capital: string
  population: number
  imageUrl: string
}
