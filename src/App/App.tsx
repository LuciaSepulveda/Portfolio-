import {Box, Grid, GridItem, HStack, Skeleton, Stack, Text, VStack} from "@chakra-ui/react"
import {Parallax, Background} from "react-parallax"
import {Override, motionValue, useTransform} from "framer"
import * as React from "react"
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons"

import Profile from "../components/Profile/Profile"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"

const contentOffsetY = motionValue(0)

export function TrackScroll(): Override {
  return {
    contentOffsetY: contentOffsetY,
  }
}

export function ParallaxLayer(): Override {
  const y: any = useTransform(contentOffsetY, [0, -100], [0, 50], {
    clamp: false,
  })

  return {
    y: y,
  }
}

export interface Skill {
  name: string
  percertage: number
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  demo: string
  code: string
  url: string
}

const App: React.FC = () => {
  const image =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"

  const front: Skill[] = [
    {name: "react", percertage: 70},
    {name: "Javascript", percertage: 80},
    {name: "CSS", percertage: 90},
  ]

  const full: Skill[] = [
    {name: "java", percertage: 30},
    {name: "OPP", percertage: 90},
  ]

  const projects: Project[] = [
    {
      name: "Aerolab Challenge",
      description: "Tienda viertual con tokens",
      code: "",
      demo: "",
      technologies: ["html", "react"],
      url: "",
    },
  ]

  return (
    <>
      <Box h="100vh" w="100%">
        <Grid
          gap={4}
          m="auto"
          mt="5%"
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", null, "repeat(3, 1fr)"]}
          templateRows={["repeat(6, 1fr)"]}
          w="90%"
        >
          <GridItem colSpan={[1, 2, null, 1]} rowSpan={[1, null, 2]}>
            <Profile />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Skills name="front end" skills={front} />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Skills name="full stack" skills={full} />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Projects projects={projects} />
          </GridItem>
        </Grid>
      </Box>
      <Box h="1000px" />
      <Box w="80vw">
        <Parallax
          bgImage={image}
          renderLayer={(percertage) => (
            <Box
              style={{
                position: "absolute",
                background: `rgba(255,125,0,${percertage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                width: percertage * 500,
                height: percertage * 500,
              }}
            />
          )}
          strength={200}
        >
          <Box h="500px">
            <Text color="white">Hola</Text>
          </Box>
        </Parallax>
      </Box>
      <Box h="1000px">hola</Box>
    </>
  )
}

export default App
