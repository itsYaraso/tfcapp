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

    const API_KEY = "test_af2c8cd311b142ddbd0fcfddbbc4ffb85265dd258f57181f7ced2adb6edb1fe6efe8d04e6d233bd35cf2fabdeb93fb0d";
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/module.json";

    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    })

    const data = await response.json()
    return data as moduleInfo[]
}


