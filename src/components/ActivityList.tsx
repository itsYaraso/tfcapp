import { Dropdown, DropdownItem } from "flowbite-react";
import { LfgChoices } from "@/types/lfgtypes";
import GroupSettings from "@/app/lib/activity";


let chosenMission

function selectedactivity(ChosenActivity: GroupSettings["activitychoice"]) {

    chosenMission = ChosenActivity
    GroupSettings.activitychoice = chosenMission

}

export function ActivityList() {
    return (
        <div className="flex items-center gap-4 ">
            <Dropdown className="bg-black" label="Activity" size="lg" placement="bottom">
                <Dropdown className="bg-black" label="Fields" size="lg" placement="bottom">
                    <Dropdown className="bg-black" label="Kingston" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedactivity("Kingston - mission 1")}>Mission 1</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Kingston - mission 2")}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Kingston - mission 3")}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Kingston - mission 4")}>Mission 4</DropdownItem>
                    </Dropdown>


                    <Dropdown className="bg-black" label="Vespers" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedactivity("Vespers - mission 1")}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedactivity("Vespers - mission 2")}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Vespers - mission 3")}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Vespers - mission 4")}>Mission 4</DropdownItem>
                    </Dropdown>

                    <Dropdown className="bg-black" label="Echo Swamp" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedactivity("Echo Swamp - mission 1")}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedactivity("Echo Swamp - mission 2")}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Echo Swamp - mission 3")}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Echo Swamp - mission 4")}>Mission 4</DropdownItem>
                    </Dropdown>
                    
                    <Dropdown className="bg-black" label="Sterile Lands" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedactivity("Sterile Lands - mission 1")}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedactivity("Sterile Lands - mission 2")}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Sterile Lands - mission 3")}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Sterile Lands - mission 4")}>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Agna Desert" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedactivity("Agna Desert - mission 1")}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedactivity("Agna Desert - mission 2")}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Agna Desert - mission 3")}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Agna Desert - mission 4")}>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="White-Knight Gulch" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedactivity("White-Knight Gulch - mission 1")}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedactivity("White-Knight Gulch - mission 2")}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("White-Knight Gulch - mission 3")}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("White-Knight Gulch - mission 4")}>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Hagios" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedactivity("Hagios - mission 1")}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedactivity("Hagios - mission 2")}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Hagios - mission 3")}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Hagios - mission 4")}>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Fortress" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedactivity("Fortress - mission 1")}>Mission 1</DropdownItem>                            
                        <DropdownItem onClick={() => selectedactivity("Fortress - mission 2")}>Mission 2</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Fortress - mission 3")}>Mission 3</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Fortress - mission 4")}>Mission 4</DropdownItem>
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
                        <DropdownItem onClick={() => selectedactivity("Void Intercept - Gravewalker")}>Gravewalker</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept - Stunning Beauty")}>Stunning Beauty</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept - Executioner")}>Executioner</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept - Dead Bride")}>Dead Bride</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept - Devourer")}>Devourer</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept - Pyromanic")}>Pyromanic</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept - Swamp Walker")}>Swamp Walker</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept - Hanged Man")}>Hanged Man</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Hard" size="lg" placement="bottom">
                        <DropdownItem onClick={() => selectedactivity("Void Intercept Hard - Executioner")}>Executioner</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept Hard - Dead Bride")}>Dead Bride</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept Hard - Devourer")}>Devourer</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept Hard - Pyromanic")}>Pyromanic</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept Hard - Dead Bride")}>Dead Bride</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept Hard - Swamp Walker")}>Swamp Walker</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept Hard - Obstructer")}>Obstructer</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept Hard - Frost Walker")}>Frost Walker</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept Hard - Molten Fortress")}>Molten Fortress</DropdownItem>
                        <DropdownItem onClick={() => selectedactivity("Void Intercept Hard - Gluttony")}>Gluttony</DropdownItem>
                    </Dropdown>
                </Dropdown>
            </Dropdown>
        </div>
    );
}