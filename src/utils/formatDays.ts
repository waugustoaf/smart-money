export const formatDays = (days: number) => {
    return days === 0
      ? 'Todo o período'
      : days === 1
      ? 'Ontem e hoje'
      : days === -1
      ? 'Futuros'
      : `Últimos ${days} dias`;
};
