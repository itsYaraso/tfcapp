import { requiredkey } from "@/types/globaltypes";

export type descendant_skill = {
    skill_type: "active" | "passive";
    skill_name: string;
    element_type: string;
    arche_type: string;
    skill_image_url: string;
    skill_description: string;
};

export type stat_detail = {
    stat_type: string;
    stat_value: number;
};

export type descendant_stat = {
    level: number;
    stat_detail: stat_detail[];
};

export type DescendantInfo = {
    descendant_id: string;
    descendant_name: string;
    descendant_image_url: string;
    descendant_skill: Array<descendant_skill>;
    descendant_stat: Array<descendant_stat>;
};


export async function getDescendant(): Promise<DescendantInfo[]> {

    const API_KEY = requiredkey;
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/descendant.json";

    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    })

    const data = await response.json()
    return data as DescendantInfo[]
}