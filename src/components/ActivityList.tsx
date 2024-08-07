import { Dropdown, DropdownItem } from "flowbite-react";

export function ActivityList() {
    return (
        <div className="flex items-center gap-4 ">
            <Dropdown className="bg-black" label="Activity" size="lg" placement="bottom">
                <Dropdown className="bg-black" label="Fields" size="lg" placement="bottom">
                    <Dropdown className="bg-black" label="Kingston" size="lg" placement="bottom">
                        <DropdownItem>Mission 1</DropdownItem>
                        <DropdownItem>Mission 2</DropdownItem>
                        <DropdownItem>Mission 3</DropdownItem>
                        <DropdownItem>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Vespers" size="lg" placement="bottom">
                        <DropdownItem>Mission 1</DropdownItem>
                        <DropdownItem>Mission 2</DropdownItem>
                        <DropdownItem>Mission 3</DropdownItem>
                        <DropdownItem>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Echo Swamp" size="lg" placement="bottom">
                        <DropdownItem>Mission 1</DropdownItem>
                        <DropdownItem>Mission 2</DropdownItem>
                        <DropdownItem>Mission 3</DropdownItem>
                        <DropdownItem>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Sterile Lands" size="lg" placement="bottom">
                        <DropdownItem>Mission 1</DropdownItem>
                        <DropdownItem>Mission 2</DropdownItem>
                        <DropdownItem>Mission 3</DropdownItem>
                        <DropdownItem>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Agna Desert" size="lg" placement="bottom">
                        <DropdownItem>Mission 1</DropdownItem>
                        <DropdownItem>Mission 2</DropdownItem>
                        <DropdownItem>Mission 3</DropdownItem>
                        <DropdownItem>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="White-Knight Gulch" size="lg" placement="bottom">
                        <DropdownItem>Mission 1</DropdownItem>
                        <DropdownItem>Mission 2</DropdownItem>
                        <DropdownItem>Mission 3</DropdownItem>
                        <DropdownItem>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Hagios" size="lg" placement="bottom">
                        <DropdownItem>Mission 1</DropdownItem>
                        <DropdownItem>Mission 2</DropdownItem>
                        <DropdownItem>Mission 3</DropdownItem>
                        <DropdownItem>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Fortress" size="lg" placement="bottom">
                        <DropdownItem>Mission 1</DropdownItem>
                        <DropdownItem>Mission 2</DropdownItem>
                        <DropdownItem>Mission 3</DropdownItem>
                        <DropdownItem>Mission 4</DropdownItem>
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
                        <DropdownItem>Gravewalker</DropdownItem>
                        <DropdownItem>Stunning Beauty</DropdownItem>
                        <DropdownItem>Mission 3</DropdownItem>
                        <DropdownItem>Mission 4</DropdownItem>                        <DropdownItem>Mission 1</DropdownItem>
                        <DropdownItem>Mission 2</DropdownItem>
                        <DropdownItem>Mission 3</DropdownItem>
                        <DropdownItem>Mission 4</DropdownItem>
                    </Dropdown>
                    <Dropdown className="bg-black" label="Hard" size="lg" placement="bottom">

                    </Dropdown>
                </Dropdown>
            </Dropdown>
        </div>
    );
}