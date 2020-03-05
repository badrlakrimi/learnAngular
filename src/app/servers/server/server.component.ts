import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
  providers: [ServersService]
})
export class ServerComponent implements OnInit {
  OneServer : {name:string, port:string, statue:string};
  id : number;

  constructor(private serversServer : ServersService,
              private route : ActivatedRoute,
              private router : Router
              ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.OneServer = this.serversServer.servers[this.id];
  }
  onUpdate(serverName: string, serverPort: string, serverStatue: string){
    //this.id = this.route.snapshot.params['id'];
    //this.serversServer.updateServer(0,"dsdsq","sdsdqsdsq","qsdqsdqsd");
    console.log(this.serversServer.servers.length);
    this.serversServer.addServer("dsqd","sqdqsd","qsdsd");
    console.log(this.serversServer.servers.length);

    
   // this.router.navigate(['/servers']);

  }
  

}{}
