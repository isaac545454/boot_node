import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Home from './src/Home'
import { ThemeProvider } from 'styled-components'

const cores = {
  bg: 'black'
}

export default function App() {
  return (
    <ThemeProvider theme={cores}>
            <Home />

    </ThemeProvider>     

  );
}


