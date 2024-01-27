'use client'
import { Card, CardBody, Image } from '@nextui-org/react'
import axios, { type AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { type Country, type Curiosity } from '../types/types'

export default function Examples(): JSX.Element {
  const [curiosities, setCuriosities] = useState<Curiosity[]>([])
  const [countries, setCountries] = useState<Country[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchCuriosities = async (): Promise<void> => {
      try {
        const curiositiesResponse: AxiosResponse = await axios.get(
          'http://localhost:8080/api/v1/country/mexico/curiosities/',
        )
        const curiositiesData: Curiosity[] = curiositiesResponse.data
        setCuriosities(curiositiesData)

        const countriesResponse: AxiosResponse = await axios.get(
          'http://localhost:8080/api/v1/countries?page=0&size=3',
        )
        const countriesData: Country[] = countriesResponse.data
        setCountries(countriesData)
      } catch (error) {
        setError('Error fetching data')
      }
    }

    void fetchCuriosities()
  }, [])

  return (
    <section className="flex flex-col gap-4 px-6 keppel-light dark:keppel-dark">
      <h2>Examples</h2>
      <Card className="break-all p-2 font-bold">
        <CardBody>
          [GET] http://localhost:8080/api/v1/country/mexico/curiosities/
        </CardBody>
      </Card>
      <div className="grid gap-5 md:grid-cols-auto-fill-20">
        {curiosities.map((curiosity: Curiosity, index: number) => (
          <Card key={index} className="break-all p-2 font-bold">
            <CardBody className="flex flex-col gap-2">
              <Image
                src={curiosity.url}
                alt="curiosity"
                width={450}
                height={200}
              />
              <p className="text-pretty font-bold">{curiosity.description}</p>
            </CardBody>
          </Card>
        ))}
        {error && (
          <p className="text-pretty font-bold text-rose-600">{error}</p>
        )}
      </div>
      <Card className="break-all p-2 font-bold">
        <CardBody>
          [GET] http://localhost:8080/api/v1/countries?page=0&size=3
        </CardBody>
      </Card>
      <div className="grid gap-5 md:grid-cols-auto-fill-20">
        {countries.map((country: Country, index: number) => (
          <Card key={index} className="break-all p-2 font-bold">
            <CardBody className="flex flex-col gap-2">
              <Image
                src={country.url}
                alt="curiosity"
                width={450}
                height={200}
              />
              <span className="font-bold">{country.name}</span>
              <span className="font-bold">{country.capital}</span>
              <span className="font-bold">{country.population}</span>
            </CardBody>
          </Card>
        ))}
        {error && (
          <p className="text-pretty font-bold text-rose-600">{error}</p>
        )}
      </div>
    </section>
  )
}
