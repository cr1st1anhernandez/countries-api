"use client"
import { Card, CardBody, Image } from '@nextui-org/react'
import axios, { type AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { type Country, type Curiosity } from '../types/interfaces'

export default function Examples(): JSX.Element {
  const [curiosities, setCuriosities] = useState<Curiosity[]>([])
  const [countries, setCountries] = useState<Country[]>([])

useEffect(() => {
  const fetchCuriosities = async (): Promise<void> => {
    try {
      const curiositiesResponse: AxiosResponse = await axios.get('http://localhost:8080/country/mexico/curiosities/');
      const curiositiesData: Curiosity[] = curiositiesResponse.data;
      setCuriosities(curiositiesData);

      const countriesResponse: AxiosResponse = await axios.get('http://localhost:8080/all/countries/');
      const countriesData: Country[] = countriesResponse.data;
      setCountries(countriesData);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  void fetchCuriosities();
}, []);

  return (
    <section className="flex flex-col px-6 gap-4 keppel-light dark:keppel-dark">
      <h2>Examples</h2>
      <Card className="break-all p-2 font-bold">
        <CardBody>[GET] https://api/country/mexico/curiosities/</CardBody>
      </Card>
      <div className="md:grid-cols-auto-fill-20 grid gap-5">
        {curiosities.map((curiosity: Curiosity, index: number) => (
          <Card key={index} className="break-all p-2 font-bold">
            <CardBody className="flex flex-col gap-2">
              <Image
                src={curiosity.url}
                alt="curiosity"
                width={450}
                height={200}
              />
              <p className="font-bold">{curiosity.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
      <Card className="break-all p-2 font-bold">
        <CardBody>[GET] https://api/all/countries/</CardBody>
      </Card>
      <div className="md:grid-cols-auto-fill-20 grid gap-5">
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
      </div>
    </section>
  )
}
