export class ServersService{
    servers = [
        {
            name : 'Google',
            port : '192.168.1.88',
            statue : 'Active'
        },
        {
            name : 'Github',
            port : '192.168.1.66',
            statue : 'Desactiver'
        },{
            name : 'Daily Mail',
            port : '192.168.1.32',
            statue : 'Active'
        },{
            name : 'Youtube',
            port : '192.168.1.53',
            statue : 'Desactiver'
        },{
            name : 'Stack Over Flow',
            port : '192.168.1.1',
            statue : 'Active'
        },{
            name : 'World Wide',
            port : '192.168.1.10',
            statue : 'Active'
        },{
            name : 'Gmail',
            port : '192.168.1.10',
            statue : 'Desactiver'
        },{
            name : 'Bing',
            port : '192.168.1.10',
            statue : 'Active'
        },{
            name : 'Hotmail',
            port : '192.168.2.10',
            statue : 'Desactiver'
        }
    ];

    addServer(name : string , port : string , statue : string){
        this.servers.push({name:name,port:port,statue:statue})
    }
    updateServer(id : number,name : string ,port : string,statue : string){
        this.servers[id].name = name;
        this.servers[id].port = port;
        this.servers[id].statue = statue;
    }
}
