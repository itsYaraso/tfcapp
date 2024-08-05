import { requiredkey } from "@/types/globaltypes";

export type VIntercept = {
    void_battle_id: number
    void_battle_name: string
}

export async function getVIntercept(): Promise<VIntercept[]> {

    const API_KEY = requiredkey
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/void-battle.json";
    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    });

    const data = await response.json()
    return data as VIntercept[]
    
}