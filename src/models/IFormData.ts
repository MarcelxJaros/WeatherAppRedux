import { Dayjs } from 'dayjs';

export default interface IFormData {
  city: string | undefined;
  date: Dayjs | null | undefined;
  slider: number[] | undefined;
}
