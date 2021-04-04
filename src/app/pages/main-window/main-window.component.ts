import { Component, OnInit } from '@angular/core';
import { CitizenNode } from 'src/app/Interfaces/CitizenNode';
import { DoctorListServiceService } from 'src/app/services/doctor-list-service.service';

import { DoctorListNode } from '../../Interfaces/DoctorListNode';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {

  doctors : DoctorListNode[] = [];

  constructor(private doctorListService : DoctorListServiceService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorListService.getDoctors().subscribe(doctors => this.doctors = doctors);
  }

  onClick(doctor : DoctorListNode): void {
    localStorage.setItem("currentDoctor", JSON.stringify(doctor));
  }

  onFind(citizen : CitizenNode) {
    this.doctorListService.findDoctorByFIO(citizen).subscribe(doctors => this.doctors = doctors);
}
}
