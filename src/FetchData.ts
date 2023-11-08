import axios from "axios";

const fetchData = async (keyword: string) => {
    const url = `https://www.omdbapi.com/?s=${keyword}&apikey=${process.env.REACT_APP_API_KEY}`
    console.log(url)
    try {
        const response = await axios.get(url)
        if (response.data.Search === undefined) {
            response.data.Search = []
            response.data.Message = response.data.Error
        } else {
            response.data.Message = `Search result of "${keyword}"`
        }
        return response.data
    } catch (e) {
        throw e
    }
}

export default fetchData