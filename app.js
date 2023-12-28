let mul = (a,b)=>{
    return a*b
}

let info = mul (23,5);
console.log(info)

let num= ["sangam" , "saurabh","sacin", "satyam"]

  num.map ((nums)=>{
    console.log(nums)
})

let number = [23 , 40 ,5 , 2 ,44 ,54 ,234 ,65 ,34 ]

let numbs = number.filter ((val)=>{
    return val%2===0;
}) 
console.log(numbs);


let reduce = number.reduce((res , cur)=>{
    return res >cur ? res : cur  
})
console.log(reduce)

let marks = [91 , 95 , 56 , 93 , 89 , 90 ,23 ,2]

let mark = marks.filter((val)=>{
    return val>=90
}) 
console.log(mark)

let n = prompt("guess the number")
console.log(n)
let arr =[]
for(let i=1 ; i<=n ; i++){
    arr[i-1]=i;
} 
console.log(arr)

let add=arr.reduce((res , cur)=>{
    return res*cur
}) 
console.log(add);