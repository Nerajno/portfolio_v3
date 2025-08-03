// utils/dates.ts
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      // day: 'numeric' // Disabled to display only year and month
    }).format(date);
  }
