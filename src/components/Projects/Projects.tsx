import * as React from "react"
import {Box, Button, Grid, GridItem, HStack, Image, Text, VStack} from "@chakra-ui/react"

import {Project} from "../../App/App"

interface Props {
  projects: Project[]
}

const Projects: React.FC<Props> = ({projects}) => {
  return (
    <Grid gap={1} templateColumns={"repeat(1, 1fr)"}>
      <GridItem>
        <Text color="#4F4F4F" fontSize="18px" fontWeight="500" lineHeight="22px">
          Projects ({projects.length})
        </Text>
      </GridItem>
      {projects.map((project) => (
        <GridItem key={project.name}>
          <HStack>
            <Box
              borderRadius="12px"
              h="270px"
              style={{backgroundImage: `url(${project.url})`, backgroundSize: "cover"}}
              w="300px"
            />
            <VStack>
              <HStack>
                {project.technologies.map((tech) => (
                  <Text
                    key={tech}
                    color="#4F4F4F"
                    fontSize="16px"
                    fontWeight="500"
                    lineHeight="20px"
                  >
                    #{tech}
                  </Text>
                ))}
              </HStack>
              <Text color="#333333" fontSize="24px" fontWeight="500" lineHeight="29px">
                {project.name}
              </Text>
              <Text color="#828282" fontSize="16px" fontWeight="500" lineHeight="20px">
                {project.description}
              </Text>
              <HStack>
                <Button>Demo</Button>
                <Button>Code</Button>
              </HStack>
            </VStack>
          </HStack>
        </GridItem>
      ))}
    </Grid>
  )
}

export default Projects
