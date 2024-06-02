import { Delete } from "..";
import { config } from "../../config";

export const deleteEntity = (id: string) => {
  return Delete<void, any>(
    `${config.BACKEND_URL}/api/v1/crm/employee/soft/${id}`
  );
};
