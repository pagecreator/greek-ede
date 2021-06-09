import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface IAnnouncement {
  date: string;
  link: string;
  title: string;
  list: IIncident[]
}

interface IIncident {
  name: string;
  investigationStartDate: string;
  sinigoros: boolean;
  stage: string;
  ETA: string;
  tags: string[]
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  incidentAnnouncement: any[]

  ngOnInit() {
    this.http.get('assets/data/updates.json').subscribe((data: IAnnouncement[]) => {
      this.incidentAnnouncement = data.sort((a, b) => b.date.localeCompare(a.date));
    })
  }

}
