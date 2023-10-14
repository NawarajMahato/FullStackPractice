//part1

const student = {
    firstname:"Nawaraj",
    lastname:"Mahato",
    greet: function(){console.log('My name is '+this.firstname+this.lastname)}
}
student.greet();
console.log(student.greet()); //undefined


//part2

const Teacher = {
    name:'Nawaraj Mahato',
    class:'19',
    age:23,
    greet: function(){console.log('Hello,'+this.name)}
}

console.log(Teacher.name)
Teacher.greet();

Teacher.growold = function(){ this.age += 1 }

console.log(Teacher.age)
Teacher.growold()
console.log(Teacher.age)

//part3
const reference1 = Teacher.greet()
console.log(reference1)


//part4
setTimeout(Teacher.greet, 1000)          //hello,
setTimeout(Teacher.greet.bind(Teacher), 1000) 



