import { lfgGroup, groupsettings } from "@/types/lfgtypes"

export function getgroup(getgroup: lfgGroup) {

    

    return getgroup
}

export function creategroup(creategroup: groupsettings) {

    <div>
        <button>
            <p>{creategroup.activitychoice}</p>
        </button>
        
        <div>
        <button>
            <p>{creategroup.neededplayers}1</p>
        </button>

        <button>
            <p>{creategroup.neededplayers}2</p>
        </button>

        <button>
            <p>{creategroup.neededplayers}3</p>
        </button>

        </div>

        <button>
            <p>{creategroup.platformchoice}</p>
        </button>

        <button>
            <p>{creategroup.micrequired}</p>
        </button>
        
    </div>

}