import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AppServiceService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:8080'
  }

  initializeDB(){
    return this.http.get(`/test/dbinitialize`)
  }

  getTeacherData(){
    return this.http.get(`/test/listTeachers`)
  }

  getStudentData(){
    return this.http.get(`/test/listStudents`)
  }

  getOneStudentData(payload: Object){
    return this.http.post(`/test/getStudentInfo`, payload)
  }

  getOneTeacherData(payload: Object){
    return this.http.post(`/test/getTeacherInfo`, payload)
  }

  addTeacher(payload: Object){
    return this.http.post(`/test/addTeacher`, payload)
  }

  deleteTeacher(payload: Object){
    return this.http.post(`/test/deleteTeacher`, payload)
  }

  editTeacher(payload: Object){
    return this.http.post(`/test/editTeacher`, payload)
  }

  editStudent(payload: Object){
    return this.http.post(`/test/editStudent`, payload)
  }

  addStudent(payload: Object){
    return this.http.post(`/test/addStudent`, payload)
  }

  deleteStudent(payload: Object){
    return this.http.post(`/test/deleteStudent`, payload)
  }
}