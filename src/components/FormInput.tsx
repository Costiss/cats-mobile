import React from "react";
import { Box, FormControl, Input, Text, useTheme } from "native-base"

interface PropTypes {
  label: string;
  placeholder: string,
  inputType: 'text' | 'number' | 'password'
  onChangeText: (v: string) => void
}


export const FormInput = ({ label, placeholder, onChangeText, inputType }: PropTypes) => {

  const { colors } = useTheme()

  return (
    <Box alignItems="center" marginY="10px" >
      <FormControl.Label>
        <Text>
          {label}
        </Text>
      </FormControl.Label>
      <Input onChangeText={onChangeText} keyboardType="numeric" type={inputType} size={'lg'} variant="rounded" placeholder={placeholder} w="200px" color={colors.pallet.primary} bgColor="coolGray.800" ></Input>
    </Box >
  )
}