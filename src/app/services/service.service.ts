import { Injectable } from '@angular/core';

import { User } from '../models/User';
import { Task } from '../models/Task';
import { Message } from '../models/Message';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  person: User = {
    fullName: 'Jhon',
      pic: 'https://picsum.photos/28/28?random'
  }

  users: User[] = [
    {
      fullName: 'Nina Jones',
      pic: 'https://picsum.photos/28/28?random'
    },
    {
      fullName: 'James Smith',
      pic: 'https://picsum.photos/28/28?random'
    },
    {
      fullName: 'Alex Clooney',
      pic: 'https://picsum.photos/28/28?random'
    },
    {
      fullName: 'Alexandra Spears',
      pic: 'https://picsum.photos/28/28?random'
    }
  ];

  tasks: Task[] = [
    {
      task: 'New website for Symu.co',
      done: false
    },
    {
      task: 'Free business PSD template',
      done: false
    },
    {
      task: 'New logo for JCD.pl',
      done: true
    },
    {
      task: 'Free Icons set vol.3',
      done: true
    }
  ];

  messages: Message[] = [
    {
      user: this.users[0],
      messageContent: 'Hey you! its me again :) I attached new (...)',
      seen: false
    },
    {
      user: this.users[0],
      messageContent: 'Hey! I attached some new PSD files for (...)',
      seen: false
    },
    {
      user: this.users[1],
      messageContent: 'Good morning, you are friend!',
      seen: true
    },
    {
      user: this.users[0],
      messageContent: 'Hello! Could You bring me coffee please?',
      seen: true
    }
  ];

activities: Activity[] = [
  {
    user: this.users[0],
    activity: 'added a new project',
    des: 'Free UI kit'
  },
  {
    user: this.users[1],
    activity: 'commented project',
    des: 'PSD Template'
  },
  {
    user: this.users[2],
    activity: 'completed task',
    des: 'Symu website'
  },
  {
    user: this.users[3],
    activity: 'added a new project',
    des: 'Free PSD (...)'
  }
];

  constructor() { }

  getTasks() {
    return this.tasks;
  }

  getMessages() {
    return this.messages;
  }

  getActivities() {
    return this.activities;
  }

  getPerson() {
    return this.person;
  }
}
