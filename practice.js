let num = [23 , 34 ,43 ,56 ,3 ,2443 ,54 ,4]
num.forEach((val)=>{
    console.log(val)
})
 let arr=["sangam" , "sachin" , "saurabh", "satyam"]
let newArr=arr.map((number)=>{
    return number.toUpperCase()
})
console.log(newArr)


let newArry = num.filter ((val)=>{
    return val<530
})
console.log(newArry)

 let sum = num.reduce((res , cur)=>{
    return res+cur;
})  
console.log(sum)

let marks = [30 ,12,15, 45, 43 ,34 ,24 , 91, 93]
 let topper = marks.filter((val)=>{

    return val>=90
}) 
console.log(topper)


let n = prompt("enter the number ");
console.log(n)

arr=[]
for(let i =1 ; i<=n ; i++){
    arr[i-1]=i;
} console.log(arr)

 let add =arr.reduce ((res , cur)=>{
    return res +cur
})
 console.log(add)


 let myfunc =((a,b)=>{
    return(a+b)
}) ;

let val = myfunc(23,43);
console.log(val)