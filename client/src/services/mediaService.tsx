import { Staffs } from "../../../shared/definitions/media";

const BASE_URL = 'http://localhost:5000/api/animes'


export async function getStaffsByMediaId(mediaId: string): Promise<Staffs[]> {
    try {
        const response = await fetch(`${BASE_URL}/${mediaId}/staffs`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to load staffs by media id', error);
        return [];
    }
}



