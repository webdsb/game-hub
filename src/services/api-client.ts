import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'c7c90f6ced024ad78f58c753e59d0dd5'
    }
});