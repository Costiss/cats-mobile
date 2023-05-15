import { Box, Container, Heading, FlatList, Input } from "native-base"
import React, { useEffect, useState } from "react"
import { Text } from "react-native"
import { Breed, getBreeds } from '../api/cats-api';
import { BreedCard } from '../components/home/BreedCard';
import { IMAGE } from "../api/cats-api/paths";


// type PropTypes = NativeStackScreenProps<RootStackParamList, 'Home'>

export const Home = () => {

  const [breeds, setBreeds] = useState<Breed[]>([])

  const [breedSearch, setBreedSearch] = useState('')


  async function init() {
    const catBreeds = await getBreeds();
    setBreeds(catBreeds)
  }


  function BreedsList() {
    return <FlatList
      numColumns={3}
      data={
        breedSearch ?
          breeds.filter(breed => breed.name.toLowerCase().includes(breedSearch.toLowerCase())) :
          breeds} renderItem={({ item: breed }) =>
            <BreedCard
              breedId={breed.id}
              imageUrl={IMAGE + breed.reference_image_id + '.jpg'}
              breedName={breed.name}
              description={breed.description}
              key={breed.id}
            ></BreedCard>
          }>
    </FlatList>
  }

  useEffect(() => {
    init()
  }, [])


  return (
    <Container flex={1} alignItems='center' paddingTop={'100px'} >
      <Box>
        <Heading>Choose a Cat Breed</Heading>
        <Input onChange={(e) => setBreedSearch(e.nativeEvent.text)} size={'sm'} placeholder="Search a Breed" my={'20px'} />
      </Box>
      <Box>
        {
          breeds.length > 0 ? <BreedsList /> : <Text>Loading...</Text>
        }
      </Box>
    </Container>
  )
}