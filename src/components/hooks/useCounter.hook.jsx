import {useContext} from "react";
import { CounterContext } from "../contexts/counter.context";
const useCounter=()=>{
    return useContext(CounterContext);
};
export default useCounter;