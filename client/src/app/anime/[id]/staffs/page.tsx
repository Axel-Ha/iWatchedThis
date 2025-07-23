import Staffs from '../../components/Staffs';
import { getStaffsByMediaId } from "@/services/mediaService";

export default async function StaffsPage({ params }: { params: { id: string } }) {
  const mediaId = params.id;
  const staffs = await getStaffsByMediaId(mediaId);
  return (
    <div className="pl-20 max-w-[1320px] mx-auto">
      <Staffs staffsMedia={staffs} animeId={mediaId} />
    </div>
  );
}