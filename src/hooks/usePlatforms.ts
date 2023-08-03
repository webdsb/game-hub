import useData from "./useData";
import platforms from '../data/platforms';

interface Platform{
    id:number;
    name:string;
    slug:string;
}

const usePlatforms = ()=>({data:platforms, isLoading:null, isError:null});//useData<Platform>('/platforms/lists/parents');

export default usePlatforms;