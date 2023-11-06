import axios from "axios";

const fetchData = async (keyword: string) => {
    const url = `https://www.omdbapi.com/?s=${keyword}&apikey=${process.env.REACT_APP_API_KEY}`
    console.log(url)
    try {
        const response = await axios.get(url)
        return response.data.Search
    } catch (e) {
        throw e
    }
}

export default fetchData