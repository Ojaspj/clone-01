import { Heading, VStack } from '@chakra-ui/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Content from './components/Content'

function App() {

  return (
    <VStack>
      <Header/>
      <Content/>
    </VStack>
  )
}

export default App
