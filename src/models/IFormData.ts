import { Dayjs } from 'dayjs';

export default interface IFormData {
  city?: string;
  date?: Dayjs | null | undefined;
  slider?: number[] | undefined;
}