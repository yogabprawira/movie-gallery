import {Box, Image, Wrap, WrapItem, Center, VStack} from '@chakra-ui/react'
import {useEffect, useState} from "react";
import fetchData from "./FetchData";
import {useAppSelector} from "./Store";

interface MovieParam {
    Title : string
    Year : string
    imdbID : string
    Type : string
    Poster : string
}

const Movie = (param : MovieParam) => {
    return (
        <Box maxW='200px' maxH='250px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <VStack>
                <Image maxW='200px' maxH='200px' src={param.Poster}/>
                <Box alignContent='center' display='flex' alignItems='baseline' mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                    {param.Title}
                </Box>
            </VStack>
        </Box>
    )
}

const MovieList = () => {
    const search = useAppSelector((state) => state.search)

    const [movies, setMovies] = useState<MovieParam[]>([])

    useEffect(() => {
        (async ()=> {
            try {
                const moviesData = await fetchData(search.search)
                setMovies(moviesData)
            } catch (error) {
                console.error("Error: ", error);
            }
        })()
    }, [search])

    return (
        <Box display='flex' width='100%' padding='20px'>
            <Wrap>
                {
                    movies.map((data, index) => {
                        return (
                            <WrapItem margin='30px'>
                                <Center w='200px' h='200px'>
                                    <Movie key={index} Title={data.Title} Year={data.Year} imdbID={data.imdbID}
                                           Type={data.Type} Poster={data.Poster}/>
                                </Center>
                            </WrapItem>
                        )
                    })
                }
            </Wrap>
        </Box>
    )
}

export default MovieList;