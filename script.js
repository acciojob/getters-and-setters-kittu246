//complete this code
class Person {
	constructor(name,age){
         this._name= name;
         this._age = age;
         
      }
      get name(){
         return this._name;
      }
      

      
      set age(value){
         this._age=value;
      }
}

class Student extends Person {
   
      
      study(){
         console.log(`${this.name} is studying`);
      }
   }

   let std1 = new Student("shu",26);
   std1.study();

   

  
   
   class Teacher extends Person {
     
      

      teach(){
         console.log(`${this.name} is teaching`);
      }
   }

   let tech1 = new Teacher("Kritika",30);
   tech1.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
