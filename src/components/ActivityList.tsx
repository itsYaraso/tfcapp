import { Dropdown, DropdownItem } from "flowbite-react";
import { LfgChoices } from "@/types/lfgtypes";
import GroupSettings from "@/app/lib/activity";


let selectedMission: string

function selectedactivity(Choices: GroupSettings) {

    Choices.activitychoice = selectedMission
}

export function ActivityList() {
    return (
        <div className="flex items-center gap-4 ">
            <Dropdown className="bg-black" label="Activity" size="lg" placement="bottom">
                <Dropdown className="bg-black" label="Fields" size="lg" placement="bottom">
                    <Dropdown className="bg-black" label="Kingston" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedMission = "Kingston - Mission 1"}>Mission 1</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Kingston - Mission 1"}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Kingston - Mission 1"}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Kingston - Mission 1"}>Mission 4</DropdownItem>
                    </Dropdown>

                    <Dropdown className="bg-black" label="Vespers" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedMission = "Vespers - Mission 1"}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedMission = "Vespers - Mission 1"}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Vespers - Mission 1"}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Vespers - Mission 1"}>Mission 4</DropdownItem>
                    </Dropdown>

                    <Dropdown className="bg-black" label="Echo Swamp" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedMission = "Echo Swamp - Mission 1"}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedMission = "Echo Swamp - Mission 1"}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Echo Swamp - Mission 1"}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Echo Swamp - Mission 1"}>Mission 4</DropdownItem>
                    </Dropdown>
                    
                    <Dropdown className="bg-black" label="Sterile Lands" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedMission = "Sterile Lands - Mission 1"}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedMission = "Sterile Lands - Mission 1"}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Sterile Lands - Mission 1"}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Sterile Lands - Mission 1"}>Mission 4</DropdownItem>
                    </Dropdown>
                    
                    <Dropdown className="bg-black" label="Agna Desert" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedMission = "Agna Desert - Mission 1"}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedMission = "Agna Desert - Mission 1"}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Agna Desert - Mission 1"}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Agna Desert - Mission 1"}>Mission 4</DropdownItem>
                    </Dropdown>

                    <Dropdown className="bg-black" label="White-Knight Gulch" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedMission = "White-Knight Gulch - Mission 1"}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedMission = "White-Knight Gulch - Mission 1"}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "White-Knight Gulch - Mission 1"}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "White-Knight Gulch - Mission 1"}>Mission 4</DropdownItem>
                    </Dropdown>

                    <Dropdown className="bg-black" label="Hagios" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedMission = "Hagios - Mission 1"}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedMission = "Hagios - Mission 1"}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Hagios - Mission 1"}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Hagios - Mission 1"}>Mission 4</DropdownItem>
                    </Dropdown>

                    <Dropdown className="bg-black" label="Fortress" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedMission = "Fortress - Mission 1"}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedMission = "Fortress - Mission 1"}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Fortress - Mission 1"}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Fortress - Mission 1"}>Mission 4</DropdownItem>
                    </Dropdown>
                </Dropdown>

                <Dropdown className="bg-black" label="Infiltration Operation" size="lg" placement="bottom">
                    <Dropdown className="bg-black" label="Normal" size="lg" placement="bottom">

                    </Dropdown>

                    <Dropdown className="bg-black" label="Hard" size="lg" placement="bottom">

                    </Dropdown>
                </Dropdown>
                <Dropdown className="bg-black" label="Special Operation" size="lg" placement="bottom">
                </Dropdown>
                <Dropdown className="bg-black" label="Void Intercept Battle" size="lg" placement="bottom">
                    <Dropdown className="bg-black" label="Normal" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedMission = "Void Intercept - Gravewalker"}>Gravewalker</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept - Stunning Beauty"}>Stunning Beauty</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept - Executioner"}>Executioner</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept - Dead Bride"}>Dead Bride</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept - Devourer"}>Devourer</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept - Pyromanic"}>Pyromanic</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept - Swamp Walker"}>Swamp Walker</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept - Hanged Man"}>Hanged Man</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Hard" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedMission = "Void Intercept Hard - Executioner"}>Executioner</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept Hard - Dead Bride"}>Dead Bride</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept Hard - Devourer"}>Devourer</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept Hard - Pyromanic"}>Pyromanic</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept Hard - Dead Bride"}>Dead Bride</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept Hard - Swamp Walker"}>Swamp Walker</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept Hard - Obstructer"}>Obstructer</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept Hard - Frost Walker"}>Frost Walker</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept Hard - Molten Fortress"}>Molten Fortress</DropdownItem>
                        <DropdownItem onClick={() => selectedMission = "Void Intercept Hard - Gluttony"}>Gluttony</DropdownItem>
                    </Dropdown>
                </Dropdown>
            </Dropdown>
        </div>
    );
}