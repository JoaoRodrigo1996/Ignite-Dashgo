import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rodrigo Mesquita</Text>
          <Text color="gray.300" fontSize="small">
            rodrigo.mesquita96@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Rodrigo Mesquita"
        src="https://github.com/JoaoRodrigo1996.png"
      />
    </Flex>
  )
}
