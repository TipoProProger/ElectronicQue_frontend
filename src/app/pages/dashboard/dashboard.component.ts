import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

import { PatientQueNode } from 'src/app/Interfaces/PatientQueNode';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public patients : PatientQueNode[] = [];
  constructor(private dashboardService : DashboardServiceService) { }  
  public newData : boolean = true;

  private sound = new Audio();
  ngOnInit(): void {
    this.getPatients()
    this.loadNotificationSound();
    interval(5000).subscribe(X => this.getPatients());
  }

  private exists(patient : PatientQueNode) : boolean {
    var existFlag = false;
    for(var j = 0; j < this.patients.length; j++)
    {
      if (this.patients[j].citizen_id == patient.citizen_id && this.patients[j].citizen_name_1 == patient.citizen_name_1
        && this.patients[j].citizen_name_2 == patient.citizen_name_2 && this.patients[j].citizen_name_3 == patient.citizen_name_3
        && this.patients[j].room_number == patient.room_number)
      {
        existFlag = true;
        break;
      }
    }

    return existFlag;
  }

  getPatients(): void {
    this.dashboardService.getPatients().subscribe(patientsRecieved => {
      this.newData = false;
      var patientsNew : PatientQueNode[] = patientsRecieved;
      for (var i = 0; i < patientsNew.length; i++)
      {
        if (!this.exists(patientsNew[i]))
        {
            this.newData = true;                  
        }
      }
      
      this.patients = patientsRecieved;
      if (this.newData)
      {
        this.sound.play();
      }
    });
  }

  loadNotificationSound() {
    this.sound = new Audio();
    this.sound.src = 'assets/sound/sound.mp3';
    this.sound.load();
  }
}
