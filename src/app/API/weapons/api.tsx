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

type base_stat = {
    stat_id: string
    stat_value: number
}

type stat_detail = {
    level: number
    firearm: Array<firearm>
}

type firearm = {
    fire_atk_type: string
    fire_atk_value: number
}

export async function getWeapons(): Promise<weaponInfo[]> {
    const API_KEY = "test_af2c8cd311b142ddbd0fcfddbbc4ffb85265dd258f57181f7ced2adb6edb1fe6efe8d04e6d233bd35cf2fabdeb93fb0d"
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/weapon.json"
    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    });

    const data = await response.json()
    return data as weaponInfo[]
}
