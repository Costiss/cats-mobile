/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Box, Card, Heading, Stack, Text, Image, AspectRatio, useTheme, Pressable } from "native-base"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../../../App"


type PropType = {
  breedId: string;
  breedName: string;
  imageUrl: string;
  description: string;
}


export const BreedCard = ({ imageUrl, breedName, description, breedId }: PropType) => {
  const { colors } = useTheme()

  const nav = useNavigation<NavigationProp<RootStackParamList>>()




  function navigateToBreed() {
    nav.navigate('Breed', { breedId, breedName })
  }


  return (
    <Pressable onPress={navigateToBreed}>
      <Card >
        <Box alignItems="center">
          <Box minH='400' w='300' rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" backgroundColor={colors.pallet.lightGray}>
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image source={{
                  uri: imageUrl, cache: 'reload'
                }} alt={breedName} />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {breedName}
                </Heading>
                <Text fontSize="xs" color={colors.pallet.primary} fontWeight="500" ml="-0.5" mt="-1">
                  {description}
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Card>
    </Pressable >
  )
}