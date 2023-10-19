//complete this code
class Person {
	constructor(name,age){
         this.name= name;
         this.age = age;
         
      }
      get name(){
         return this._name;
      }
      set name(value){
         this._name=value;
      }

      get age(){
         return this._age;
      }
      set age(value){
         this._age=value;
      }
}

class Student extends Person {
   
      constructor(){
         super("Kritika",28);
         
      }
      study(){
         console.log(`${name} is studying`);
      }
   }

   let a = new Student();

   a.study();

  
   
   class Teacher extends Person {
     
      constructor(){
         super("Kritika",28);
         
      }

      teach(){
         console.log(`${name} is teaching`);
      }
   }

   let b = new Teacher();

   b.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
