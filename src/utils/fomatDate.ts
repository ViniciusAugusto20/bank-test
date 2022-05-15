/* eslint-disable import/no-duplicates */
import { format as dateFnsFormat, isToday } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

export const formatDateText = (
  date: string | Date | undefined,
): string | undefined => {
  if (!date) return undefined;

  const newDate = new Date(date);

  return dateFnsFormat(newDate, "dd 'de' MMMM'", { locale: ptBr });
};

export const formatDateTextResume = (
  date: string | Date | undefined,
): string | undefined => {
  if (!date) return undefined;

  const newDate = new Date(date);

  if (isToday(newDate)) {
    return dateFnsFormat(newDate, "'Hoje' - dd MMM yyyy' - 'HH:mm'", {
      locale: ptBr,
    });
  }
  return dateFnsFormat(newDate, "dd MMM yyyy' - 'HH:mm'", { locale: ptBr });
};
