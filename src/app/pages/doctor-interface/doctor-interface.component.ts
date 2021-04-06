import { Component, EventEmitter, Input, OnInit } from '@angular/core';

import { DoctorListNode } from 'src/app/Interfaces/DoctorListNode';
import { DoctorPatientListServiceService } from 'src/app/services/doctor-patient-list-service.service';
import { interval } from 'rxjs';
import { DoctorClientListNode } from 'src/app/Interfaces/DoctorClientListNode';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { RoomNode } from 'src/app/Interfaces/RoomNode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-interface',
  templateUrl: './doctor-interface.component.html',
  styleUrls: ['./doctor-interface.component.css']
})
export class DoctorInterfaceComponent implements OnInit {
  
  constructor(private doctorPatientListService : DoctorPatientListServiceService,
    private roomService : RoomServiceService,
    private router: Router) { }

  doctorPatientList : DoctorClientListNode[] = [];
  public doctor : DoctorListNode = {} as DoctorListNode;
  public fio : string = "";
  public disableButtons = true;

  ngOnInit(): void {
    var buffer = localStorage.getItem("currentDoctor") || "";
    if (buffer === "")
    {
        this.router.navigate(['/']);
    }
    
    this.doctor = JSON.parse(buffer);    
    this.fio = 'Врач: ' + this.doctor.citizen_name_1 + " " + this.doctor.citizen_name_2 + " " + this.doctor.citizen_name_3 + " (" + this.doctor.specialization_name + ")";
    
    this.getDoctorPatientList();
    interval(5000).subscribe(X => this.getDoctorPatientList());
  }

  getDoctorPatientList(): void {
    this.doctorPatientListService.getDoctorPatientList(this.doctor.personal_specialization_id || 0).subscribe(doctorPatientList => {
      this.doctorPatientList = doctorPatientList;
    });
  }

  onCallNextPatient() : void {
    this.doctorPatientListService.postCallNextPatient(this.doctor.personal_specialization_id).subscribe(X => {
      if (X.hasOwnProperty('error_string'))
        console.log(X.error_string);      
      this.getDoctorPatientList();
    })
  }

  onEndCurrentPatiend() : void {
    this.doctorPatientListService.putEndCurrentPatient(this.doctor.personal_specialization_id).subscribe(X => {
      if (X.hasOwnProperty('error_string'))
        console.log(X.error_string);
      this.getDoctorPatientList();
    })
  }  
  
  onRoomEnter() :void {
    var room : RoomNode = {} as RoomNode;
    room.room_number = this.doctor.room_number;
    room.personal_specialization_id = this.doctor.personal_specialization_id;

    this.roomService.postRoom(room).subscribe(X => {
      if (X.hasOwnProperty('error_string'))
        console.log(X.error_string);
      else this.disableButtons = false;      
    });    
  }
}
