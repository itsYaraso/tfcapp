import { requiredkey } from "@/types/globaltypes";

export type Ecomponentinfo = {
    external_component_id : string
    external_component_name : string
    image_url : string
    external_component_equipment_type : string
    external_component_tier : string
    base_stat: Array<base_stat>
}

export type base_stat = {
    level: number
    stat_id: string
    stat_value: number
}

export async function getEComponent(): Promise<Ecomponentinfo[]> {

    const API_KEY = requiredkey
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/external_component.json";

    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    })

    const data = await response.json()
    return data as Ecomponentinfo[]
}