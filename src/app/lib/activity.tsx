
export default class GroupSettings {
    groupname: string;
    activitychoice: string;
    neededplayers: number;
    platformchoice: string;
    micrequired: boolean;
    
    public constructor(groupName: string, activityChoice: string, neededPlayers: number, platformChoice: string, micRequired: boolean) {
        this.groupname = "";
        this.activitychoice = "";
        this.neededplayers = 0;
        this.platformchoice = "";
        this.micrequired = false;
   
    }
}

let groupSettings = new GroupSettings("");