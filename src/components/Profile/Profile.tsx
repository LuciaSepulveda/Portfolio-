import * as React from "react"
import {Stack, Skeleton, VStack, HStack, Text} from "@chakra-ui/react"
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons"

const Profile: React.FC = () => {
  return (
    <Stack
      borderRadius="12px"
      boxShadow="md"
      direction={["column", "row", null, "column"]}
      spacing={4}
    >
      <Skeleton
        h={["130px", "140px", null, "350px"]}
        m="auto"
        w={["130px", "140px", null, "350px"]}
      />
      <VStack alignItems={["center", "start", null, "center"]} justify="space-between" w="100%">
        <VStack alignItems={["center", "start", null, "center"]} w="100%">
          <Text color="#4F4F4F" fontSize={["14px", null, "24px"]} fontWeight="600">
            Nombre y apellido
          </Text>
          <Text color="#828282" fontSize={["12px", null, "18px"]} fontWeight="500">
            Profesion
          </Text>
        </VStack>
        <VStack
          position={["relative", "absolute", null, "relative"]}
          right={["auto", "10%", null, "auto"]}
        >
          <HStack>
            <EmailIcon />
            <Text color="4F4F4F" fontSize={["12px", null, "18px"]} fontWeight="500">
              email@gmail.com
            </Text>
          </HStack>
          <HStack>
            <PhoneIcon />
            <Text color="4F4F4F" fontSize={["12px", null, "18px"]} fontWeight="500">
              (*54) Celular
            </Text>
          </HStack>
        </VStack>
        <Text fontSize={["12px", null, "18px"]} fontWeight="500">
          Aca va la descripcion
        </Text>
      </VStack>
    </Stack>
  )
}

export default Profile
