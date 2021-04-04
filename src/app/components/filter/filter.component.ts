import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CitizenNode } from 'src/app/Interfaces/CitizenNode';
import { DoctorListServiceService } from 'src/app/services/doctor-list-service.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() onFindEvent: EventEmitter<CitizenNode> = new EventEmitter<CitizenNode>();

  constructor(private doctorService : DoctorListServiceService) { }

  public citizen : CitizenNode = {} as CitizenNode;

  ngOnInit(): void {
  }

  onClick() {
    this.onFindEvent.emit(this.citizen);
  }

}
