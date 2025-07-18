import { Staffs } from '../../../shared/definitions/media';

export function mapAniListStaffs(anilistStaff: any): Staffs[] {
    return anilistStaff.edges.map((edge: any) => ({
        role: edge.role,
        staff: {
            name: edge.node.name,
            image: edge.node.image,
        },
    }));
}
