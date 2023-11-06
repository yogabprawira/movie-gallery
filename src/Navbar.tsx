import {Box, Button, Heading, Input} from "@chakra-ui/react";
import {useState} from "react";
import {searchKeyword} from "./SearchData";
import {useAppDispatch} from "./Store";

interface HeaderBarParam {
    title : string
}

const HeaderBar = (param : HeaderBarParam) => {
    return (
        <Heading w='70%' as='h1' size='lg' noOfLines={1} alignItems='left'>
            {param.title}
        </Heading>
    )
}

const SearchBox = () => {
    const dispatch = useAppDispatch()
    const [keyword, setKeyword] = useState<string>('man')
    return (
       <>
           <Input onChange={
               e => setKeyword(e.target.value)
           } borderRadius='0px' w='30%' minW='200px' alignItems='right' placeholder='Search film...' size='md'
                  backgroundColor='white' color='black' />
           <Button onClick={() => {
               dispatch(searchKeyword(keyword))
           }} borderRadius='0px' minW='100px' backgroundColor='black' color='white' size='md' type='submit'>Search</Button>
       </>
    )
}

interface NavbarParam {
    title : string
}

const Navbar = (param : NavbarParam) => {
    return (
        <Box display='flex' bg='tomato' w='100%' p={4} color='white' paddingLeft='30px' paddingRight='30px'>
            <HeaderBar title={param.title}/>
            <SearchBox/>
        </Box>
    )
}

export default Navbar