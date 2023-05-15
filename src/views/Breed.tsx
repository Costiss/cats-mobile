import React, { useEffect, useState } from "react"
import { Box, Text, Container, FlatList, Heading, Image, Card } from "native-base"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../App"
import { Cat, getCats } from "../api/cats-api"

type PropTypes = NativeStackScreenProps<RootStackParamList, 'Breed'>


export type BreedNavProps = {
  breedId: string;
  breedName: string
}

export const Breed = ({ route }: PropTypes) => {

  const [cats, setCats] = useState<Cat[]>([])
  const [loadstate, setLoadstate] = useState<boolean>(true)

  async function init() {
    const apiCats = await getCats(route.params.breedId)
    setCats(apiCats)
    setLoadstate(false)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Container flex={1} alignItems='center' paddingTop={'10%'} w={'100%'}>
      <Heading>{route.params.breedName}</Heading>
      <Box mt={'50px'}>
        {
          loadstate ?
            <Text>Loading...</Text> :
            cats.length === 0 ? <Text>No cats found</Text> :
              <Box mt={'50px'}>
                <FlatList
                  numColumns={3}
                  data={cats}
                  renderItem={({ item }) =>
                    <Card key={item.id} borderColor="coolGray.200">
                      <Image source={{ uri: item.url }} alt="cat" width={200} height={200} />
                    </Card>
                  }
                ></FlatList>
              </Box>
        }
      </Box>
    </Container>
  )
}