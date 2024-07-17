export type DescendantInfo = Array<{
    descendant_id: string;
    descendant_name: string;
    descendant_image_url: string;
    descendant_stat: Array<{
        level: number;
        stat_detail: Array<{
            stat_type: string;
            stat_value: number;
        }>;
    }>;
    descendant_skill: Array<{
        skill_type: "active" | "passive";
        skill_name: string;
        element_type: string;
        arche_type: string;
        skill_image_url: string;
        skill_description: string;
    }>;
}>;


export async function getDescendant(): Promise<DescendantInfo> {

    const API_KEY = "test_af2c8cd311b142ddbd0fcfddbbc4ffb85265dd258f57181f7ced2adb6edb1fe6efe8d04e6d233bd35cf2fabdeb93fb0d";
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/descendant.json";

    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    })

    const data = await response.json()
    return data as DescendantInfo
}