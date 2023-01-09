

import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CareerGoal } from 'src/app/model/career';
import { CareerService } from 'src/app/service/career.service';
import '../../../globals/globals';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-career-inputs',
  templateUrl: './career-inputs.component.html',
  styleUrls: ['./career-inputs.component.css']
})

export class CareerInputsComponent {
  constructor(private _careerService:CareerService){}

  @Input()
  required: boolean;
  
  careerGoals:CareerGoal[];
  goal= new CareerGoal();
  editIcon = faPenToSquare;
  deleteIcon = faTrash;
  isUpdate = false;

  fg = new FormGroup({
    goalId : new FormControl(''),
    goalName : new FormControl(''),
    goalDescription : new FormControl(''),
    targetDate: new FormControl(''),
    accomplishedDate: new FormControl(''),
    isCompleted: new FormControl(),
  });

  

  id = '';
  name ='';
  description = '';
  targetDate = '';
  dateAccomplished='';
  isAccomplished = false;

  ngOnInit():void{
    this.getAllData();
  }
  

  getAllData(){
    this._careerService.getAllData().subscribe(res =>{
      this.careerGoals = [];
      this.careerGoals=res;
      console.log(this.careerGoals);
    });
  }

  deleteData(id:any){
    this._careerService.deleteData(id).subscribe(response =>{

      if(response.status == 200){
        let index = this.careerGoals.findIndex((i:any)=>i.id == id);
      if(index !== -1) this.careerGoals.splice(index,1);
      console.log(response.status);
      }
    });
  }

  updateData(id:any){
    console.log(this.isUpdate);
    console.log('id 2: '+this.id);
    this._careerService.updateData(id,this.goal).subscribe(response => {
      if(response.status == 200){
      this.getAllData();
      this.isUpdate = false;
      this.clearFields();
      }
    })
  }

  getData(id:any){
    this.isUpdate = true;
    this.id = id;
    this._careerService.getData(id).subscribe(response =>{
      console.log(response.status);
      console.log(response.body);
      this.fg.get('goalId')?.setValue(response.body.id);
      this.fg.get('goalName')?.setValue(response.body.name);
        this.fg.get('goalDescription')?.setValue(response.body.description);
        this.fg.get('targetDate')?.setValue(response.body.targetDate);
        this.fg.get('accomplishedDate')?.setValue(response.body.completedDate);
    });
    
  }

  saveData(){
    this._careerService.addData(this.goal).subscribe(response=>{
      console.log(response.status);
      if(response.status == 201) {
        
        this.getAllData();
        this.clearFields();
      }
    });
    
  }

  clearFields(){
    
    this.fg.get('goalId')?.setValue('');
    this.fg.get('goalName')?.setValue('');
    this.fg.get('goalDescription')?.setValue('');
    this.fg.get('targetDate')?.setValue('');
    this.fg.get('accomplishedDate')?.setValue('');
  }

  clickedRDbtn(clickedVal:boolean){
    clickedVal ? this.isAccomplished =true : this.isAccomplished = false;
    if(clickedVal == true){
      this.isAccomplished =true;
      this.goal.isCompleted = true;
    } else {
      this.isAccomplished =false;
      this.goal.isCompleted = false;
      this.goal.completedDate ='';
    }
    console.log(this.isAccomplished);
    }

   
}

