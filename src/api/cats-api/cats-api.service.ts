import { BREEDS, SEARCH } from "./paths"
import { Breed, Cat } from "./cats.dto"
import { Axios } from "axios"

const catsApiKey = 'live_B4k356m6dhaACOFJpAPctB0qxx05gmiQgsZoGh9vGxsV0QxwOm4Dxr49FXZsEXDI'

const axios = new Axios({params: {['api_key']: catsApiKey} })


export async function getBreeds() {
  const response = await axios.get(`${BREEDS}` )
  return JSON.parse(response.data) as Breed[]
}


export async function getCats(breed?: string) {
  const response = await axios.get(`${SEARCH}${breed ? `?breed_ids=${breed}` : ''}&limit=20`)
  return JSON.parse(response.data) as Cat[]
}