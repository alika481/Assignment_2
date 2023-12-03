import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students:Student[] =[]
  updatedstudents:Student[]=[]
  message:string=''
  colorClass:string=''

  constructor(){

    let s1= new Student(1,"Alika",2,80,["Java","Python","C++"])
    let s2= new Student(2,"Amisha",1,87,["Java","Python","C++"])
    let s3= new Student(3,"Aman",3,85,["Java","Python","PHP"])
    let s4= new Student(4,"Swapnil",2,70,["Java","C++",])
    let s5= new Student(5,"Simran",4,90,["Java","Python",])
    this.students.push(s1)
    this.students.push(s2)
    this.students.push(s3)
    this.students.push(s4)
    this.students.push(s5)
  }
  // showStudents(){
   
  // }
  deleteStudent(rollNo:number){
    const result =confirm("Want to delete student with roll number "+rollNo)
    if(result){
      this.students=this.students.filter(s => s.rollNo != rollNo)
      this.message='Record deleted'
      this.colorClass='success'
     
    } 
    else{
      this.message='Delete cancelled '
      this.colorClass='error'
    }       

  }
  updateStudent(s:Student){
    // console.log("Student details are:")
    // console.log(s)
    let st = new Student(s.rollNo,s.name,s.noOfAttempts,s.percentage,s.subjectsLearning)
    this.updatedstudents.push(st);
   


  }

}
