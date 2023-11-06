import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./Navbar"
import MovieList from "./MovieList";

function App() {
    return (
        <ChakraProvider>
            <Navbar title='FinPro8'/>
            <MovieList/>
        </ChakraProvider>
    );
}

export default App;
