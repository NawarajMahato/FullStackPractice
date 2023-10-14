const sum = (n,m) =>{console.log(n)
console.log(m)
return n + m }

sum(3,4) // 3 4
        //when i type sum(3,4) in console then it gives 3 4 and 7


//part2
const result = sum(1,2)
console.log(sum(1,2))
console.log(result)     //1 2 3

//part3
const square = p => p*p;
console.log(square(5));


//part4
const a = [1,2,3]
const b = [3,2,1]

const c = a.map (value => value)
console.log(c)
const d = b.map (value => value)
console.log(d)
let mul
for(i=0; i<3; i++){
    mul = a[i]*b[i]
    console.log(mul)
}

//part 5
const mul2 = (m,n)=>{return m*n}
result1 = mul2(3,3)
console.log(result1)


//part 6
function inside(){
    alert('test')
}

function fun (){
    
    inside()
}