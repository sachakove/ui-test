import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ServiceService } from '../../services/service.service';
import { Task } from '../../models/Task';
import { Message } from '../../models/Message';
import { Activity } from '../../models/Activity';
import { User } from '../../models/User';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  person: User;
  tasks: Task[];
  messages: Message[];
  activities: Activity[];
  done: number = 0;
  undone: number = 0;
  seenCount: number = 0;


// #################################################################################################
// ############################ CHARTS DATA (canvas not responsive) ################################
// #################################################################################################

  // public doughnutChartOptions:any = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   legend: {position: 'right'}
  // };
  // public doughnutChartLabels: string[] = ['Adwords', 'Websites', 'Logo', 'Social Media', 'E-Commerce'];
  // public doughnutChartData: number[] = [28, 25, 22, 12.5, 12.5];
  // public doughnutChartLegend:boolean = true;
  // public doughnutChartColors: Array<any> = 
  //    [ { backgroundColor: ['#3755A4', '#25396E', '#5584FF', '#4B74E0', '#4164C2'] } ];
  // public doughnutChartType: string = 'doughnut';
  // public lineChartData:Array<any> = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  //   {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  // ];
  // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions:any = {
  //   responsive: true
  // };
  // public lineChartLegend:boolean = true;
  // public lineChartType:string = 'line';

// #################################################################################################


  @Output() toggle = new EventEmitter<boolean>();

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getData();
  }

  toggleBar(e) {
    this.toggle.emit(e);
  }

  getData() {
    this.person = this.service.getPerson();
    this.tasks = this.service.getTasks();
    this.tasks.forEach(task => task.done ? this.done++ : this.undone++);
    this.messages = this.service.getMessages();
    this.messages.forEach(m => m.seen ? this.seenCount++ : 'none');
    this.activities = this.service.getActivities();
  }

}
