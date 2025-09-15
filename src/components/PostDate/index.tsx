import { formatDateTime } from '@/utils/format-datetime';
import { formatDistanceToNow } from 'date-fns';

export default function PostDate({ date }: { date: string }) {
  return (
    <time
      className="text-slate-600 text-sm"
      dateTime={date}
      title={formatDistanceToNow(date)}
    >
      {formatDateTime(date)}
    </time>
  );
}
