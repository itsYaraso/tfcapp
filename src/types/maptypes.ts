import { requiredkey } from "./globaltypes";

export type mapinfo = {
    map_id: number,
    map_name: string,
    battle_zone : Array<battlezone>;
}

export type battlezone = {
    battle_zone_id: number,
    battle_zone_name: string
    reward : Array<reward>;
}

export type reward = {
    rotation : number,
    reward_type : string,
    reactor_element_type : string,
    weapon_rounds_type : string
    arche_type : string
}

export async function getReward(): Promise<mapinfo[]> {

    const API_KEY = requiredkey
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/reward.json";

    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    })

    const data = await response.json()
    return data as mapinfo[]
}