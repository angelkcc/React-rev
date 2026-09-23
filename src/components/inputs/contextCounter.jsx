import { useContext} from "react";
import { Button } from "../buttons/button";
import { CounterContext } from "../contexts/counter.context";

const ContextCounter = () => {
    //custom hook
    //const {count,resetCount,updateCount}= useCounter();
    const {count,resetCount,updateCount}= useContext(CounterContext);
    return(
        <div>
            <h1>Context Counter</h1>
            <Button 
            label="+"
            onClick={()=>{
                updateCount(count+1);
            }}
            />
            <Button 
            label="-"
            onClick={()=>{
                updateCount(count-1);
            }}
            />
            <Button label="reset" onClick={()=>{
                resetCount();
            }}/>
        </div>

    )
}