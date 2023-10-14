difference between let var const

for var
    var x=1;    console.log(x); //print 1
    var x=3;    console.log(x); //print 3
    x=5;        console.log(x); //print 5


for let
    let x=1;    console.log(x); //print 1
    let x=3;    console.log(x); //error
    x=5;        console.log(x); //print 5


for const
    const x=1;    console.log(x); //print 1
    const x=3;    console.log(x); //error
    x=5;        console.log(x); //error