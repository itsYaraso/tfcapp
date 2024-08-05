import { requiredkey } from "@/types/globaltypes";

export type weaponInfo = {
    weapon_name: string
    weapon_id: string
    image_url: string
    weapon_type: string
    weapon_tier: string
    weapon_rounds_type: string
    base_stat: Array<base_stat>
    stat_detail: Array<stat_detail>
}

export type base_stat = {
    stat_id: string
    stat_value: number
}

export type stat_detail = {
    level: number
    firearm: Array<firearm>
}

export type firearm = {
    fire_atk_type: string
    fire_atk_value: number
}

export async function getWeapons(): Promise<weaponInfo[]> {
    const API_KEY = requiredkey
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/weapon.json"
    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    });

    const data = await response.json()
    return data as weaponInfo[]
}
