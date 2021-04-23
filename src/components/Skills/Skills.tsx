import {Grid, GridItem, Progress, Stack, Text} from "@chakra-ui/react"
import * as React from "react"

import {Skill} from "../../App/App"

interface Props {
  name: string
  skills: Skill[]
}

const Skills: React.FC<Props> = ({name, skills}) => {
  return (
    <Stack bg="#FFFFFF" borderRadius="12px" boxShadow="md" orientation="vertical" p={2} w="80%">
      <Text
        color="#4F4F4F"
        fontSize="18px"
        fontWeight="bold"
        lineHeight="22px"
        textTransform="uppercase"
      >
        Front end
      </Text>
      <Grid templateColumns={"repeat(3, 1fr)"} gap={1}>
        {skills.map((skill) => {
          return (
            <>
              <GridItem key={skill.name} colSpan={1}>
                <Text color="#4F4F4F" fontSize="16px" fontWeight="500" lineHeight="20px">
                  {skill.name}
                </Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Progress value={skill.percertage} />
              </GridItem>
            </>
          )
        })}
      </Grid>
    </Stack>
  )
}

export default Skills
