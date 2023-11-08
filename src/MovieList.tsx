import {Box, Image, Wrap, WrapItem, VStack, Text} from '@chakra-ui/react'
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

interface MovieResponse {
    Message : string
    Error : string
    Search : MovieParam[]
}

const Movie = (param : MovieParam) => {
    return (
        <Box w='200px' h='250px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <VStack>
                <Image boxSize='200px' objectFit='cover' src={param.Poster}/>
                <Box alignContent='center' display='flex' alignItems='baseline' mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                    {param.Title}
                </Box>
            </VStack>
        </Box>
    )
}

const MovieList = () => {
    const search = useAppSelector((state) => state.search)

    const [movies, setMovies] = useState<MovieResponse>({Search: [], Error: '', Message: ''})

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
        <VStack width='100vw' height='30px' paddingLeft='20px'>
            <Box w='100vw'>
                <Text as='h4' fontSize='2xl' paddingLeft='30px' paddingRight='20px' paddingTop='20px'>{movies.Message}</Text>
            </Box>
            <Wrap>
                {
                    movies.Search.map((data, index) => {
                        return (
                            <WrapItem key={index} margin='30px'>
                                <Movie Title={data.Title} Year={data.Year} imdbID={data.imdbID}
                                       Type={data.Type} Poster={data.Poster}/>
                            </WrapItem>
                        )
                    })
                }
            </Wrap>
        </VStack>
    )
}

export default MovieList;