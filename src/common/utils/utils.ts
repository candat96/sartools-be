import * as bcrypt from 'bcrypt';
import { Config } from '../../config/config';
import { UsedByDayRawInterface } from '../../modules/admin/dashboard/dto/response';

export const hash = async (
  plainPassword: string,
  salt: string,
): Promise<string> => {
  return await bcrypt.hash(plainPassword + salt + Config.JWT_SECRET_KEY, 10);
};

export const compare = async (
  plainPassword: string,
  salt: string,
  encryptedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(
    plainPassword + salt + Config.JWT_SECRET_KEY,
    encryptedPassword,
  );
};

export const fillMissingDates = (
  startDate: Date,
  endDate: Date,
  data: UsedByDayRawInterface[],
) => {
  const result = data;
  const dateSet = new Set(
    result.map((item) => new Date(item.date).toISOString()),
  );

  for (
    let currentDate = new Date(startDate);
    currentDate <= new Date(endDate);
    new Date(currentDate.setDate(currentDate.getDate() + 1))
  ) {
    if (!dateSet.has(currentDate.toISOString())) {
      result.push({
        date: currentDate.toISOString(),
        count: 0,
      });
    }
  }

  result.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return result;
};
