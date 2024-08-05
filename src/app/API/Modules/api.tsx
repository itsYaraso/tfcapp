import { requiredkey } from "@/types/globaltypes";


export type module_stat = {
    level: number;
    module_capacity: number;
    value: string;
};

export type moduleInfo = {
    module_name: string;
    module_id: string;
    image_url: string;
    module_type: string;
    module_tier: string;
    module_socket_type: string;
    module_class: string
    module_stat: Array<module_stat>;
};

export async function getModules(): Promise<moduleInfo[]> {

    

    const API_KEY = requiredkey
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/module.json";

    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    })

    const data = await response.json()
    return data as moduleInfo[]
}


