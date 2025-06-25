export function convertTime(time: number){
    const hours = Math.floor(time/60);
    const minutes = time % 60;
    return `${hours} hour${hours > 1 ? 's' : ''}, ${minutes} min${minutes > 1 ? 's' : ''}`;
}