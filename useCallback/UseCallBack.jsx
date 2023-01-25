import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const UseCallBack = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(()=>{
        setAge(age+1)
    },[age]);

    const incrementSalary = useCallback(()=>{
        setSalary(salary+5000)
    },[salary]);

    return ( 
        <>
            <Title/>
            <Count text={'Age'} count={age} />
            <Button name={'IncrementAge'} action={incrementAge} />
            <hr />
            <Count text={'Salary'} count={salary} />
            <Button name={'IncrementSalary'} action={incrementSalary} />
        </>
     );
}
 
export default UseCallBack;