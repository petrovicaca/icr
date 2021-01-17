import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PusherService } from './pusher.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  korisnik: {prikaziIme: string, email: string};

  private EndPoint = 'http:///localhost:9000';
  private Channel: any;

  constructor(private pusherService: PusherService, private Http: HttpClient) {
    this.Channel = this.pusherService.getPusher().subscribe('chat-group'); // cet grupa trigeruje sve listenere

  }

  join(param): Observable <any>{
    return this.Http.post(`${this.EndPoint}/join`, param)
    .pipe(tap(data=> {
      this.korisnik = param; // ocekuje api parametere
    }));
  }

  sendMessage(message: String): Observable<any>{
    const param = {
      message,
      type: 'covek',
      ...this.korisnik
    };
    return this.Http.post(`${this.EndPoint}/message`, param);
  }

  getChannel(){
    return this.Channel;
  }

}
