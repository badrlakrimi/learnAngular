import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  providers: [ServersService]
})
export class ServersComponent implements OnInit {
  servers : {name:string, port:string, statue:string}[] = [];

  constructor(private serversServer : ServersService ) { }

  ngOnInit(): void {
    console.log(this.serversServer.servers.length);
    this.servers = this.serversServer.servers
  }

  onCreateServer(serverName: string, serverPort: string, serverStatue: string) {
    this.serversServer.addServer(serverName,serverPort,serverStatue);
    
  }
  onDelete(id:number){
    this.serversServer.servers.splice(id,1)
  }

}
