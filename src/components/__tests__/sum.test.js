import { sub, sum } from "../sum";

test("sum function should calculate the sum of two numbers", ()=>{
    const result = sum(3 ,4);
    //Assertion
    expect(result).toBe(7) 
})

test("sub function sholud calculate the subtraction of two numbers", ()=>{
    const result = sub(4, 2);
    expect(result).toBe(2);
})