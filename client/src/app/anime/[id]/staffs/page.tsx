import Staffs from '../../components/Staffs';
import { getStaffsByMediaId } from "@/services/mediaService";

export default async function StaffsPage({ params }: { params: { id: string } }) {
  const mediaId = params.id;
  const staffs = await getStaffsByMediaId(mediaId);
  return (
    <div>
      <p>ID du media : {mediaId}</p>
      <Staffs staffsMedia={staffs} animeId={mediaId} />
    </div>
  );
}