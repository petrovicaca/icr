import { Injectable } from '@angular/core';
import Pusher from '../../../node_modules/pusher-js';


@Injectable()

export class PusherService {
  private Pusher: any;

  constructor() {
    this.Pusher = new Pusher('ee25ade1ae9b8e21ee76', {
      cluster: 'eu'
    });
  }

  getPusher(){
    return this.Pusher;
  }
}
