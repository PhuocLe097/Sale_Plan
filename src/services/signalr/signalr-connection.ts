import * as signalR from "@microsoft/signalr";
import AppConsts from "../../lib/appconst";

var URL: string = AppConsts.hubAddress||''; //or whatever your backend port is
declare var abp: any;
const encryptedAuthToken = abp.utils.getCookieValue(AppConsts.authorization.encrptedAuthTokenName);


class Connector 
{
    private connection: signalR.HubConnection;
    public events: (onMessageReceived: (username: string, message: string) => void) => void;
    static instance: Connector;

    constructor() {
        URL += (URL.indexOf('?') == -1 ? '?' : '&') + AppConsts.authorization.encrptedAuthTokenName + '=' + encodeURIComponent(encryptedAuthToken)
        // this.URL += (URL.indexOf('?') == -1 ? '?' : '&') + abp.signalr.qs;

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(URL)
            .withAutomaticReconnect()
            .build();
        this.connection.start().catch(err => document.write(err));


        // this.connection.on("getMessage", (username, message) => {
        //     console.log("message received");

        // });
        this.events = (onMessageReceived) => {
            this.connection.on("getMessage", (username, message) => {
                onMessageReceived(username, message);
            });
        };
    }

    public newMessage = (messages: string) => {
        this.connection.send("newMessage", "foo", messages).then(x => console.log("sent"))
    }

    public static getInstance(): Connector {
        if (!Connector.instance)
            Connector.instance = new Connector();
        return Connector.instance;
    }
}

export default Connector.getInstance;