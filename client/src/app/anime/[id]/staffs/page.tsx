'use client'

import Staffs from '../../components/Staffs';
import { getAnimeById } from '@/services/animesService';

export default async function StaffsPage({ params }: { params: { id: string } }) {
  const anime = await getAnimeById(params.id);
  return (
    <div>
      <Staffs staffs={anime.staffs} animeId={params.id} />
    </div>
  );
}