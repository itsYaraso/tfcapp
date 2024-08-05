import { requiredkey } from "@/types/globaltypes";


export type reactorInfo = {
    reactor_id: string;
    reactor_name: string;
    image_url: string;
    reactor_tier: string;
    reactor_skill_power: Array<reactor_skill_power>;
    enchant_effect: Array<enchant_effect>;
};

export type reactor_skill_power = {
    level: number;
    skill_atk_power: number;
    sub_skill_atk_power: string;
};

export type enchant_effect = {
    enchant_level : number;
    stat_type : string;
    value : number;
}


export async function getReactors(): Promise<reactorInfo[]> {

    const API_KEY = requiredkey
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/reactor.json";

    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    })

    const data = await response.json()
    return data as reactorInfo[]
}


