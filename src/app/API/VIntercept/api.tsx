export type VIntercept = {
    void_battle_id: number
    void_battle_name: string
}

export async function getVIntercept(): Promise<VIntercept[]> {

    const API_KEY = "test_af2c8cd311b142ddbd0fcfddbbc4ffb85265dd258f57181f7ced2adb6edb1fe6efe8d04e6d233bd35cf2fabdeb93fb0d";
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/void-battle.json";
    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    });

    const data = await response.json()
    return data as VIntercept[]
    
}