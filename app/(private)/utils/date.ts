// utils/date.ts
export function formatDbDate(dbDate: string) {
  if (!dbDate) return '-';

  // 1. Turn "YYYY-MM-DD HH:MM:SS" → "YYYY-MM-DDTHH:MM:SS"
  const isoLike = dbDate.replace(' ', 'T');

  // 2. Parse it (assumes local time; add 'Z' if your API sends UTC)
  const d = new Date(isoLike);

  // 3. Guard against bad dates
  if (isNaN(d.getTime())) return dbDate;

  // 4. Pretty print → "15 July 2025"
  return d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
     hour: '2-digit',
    minute: '2-digit', 
  });
}
