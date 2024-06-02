import { patch } from "..";
import { config } from "../../config";

export const updateEntity = (id: string, data: any) =>
  patch<void, any>(`${config.BACKEND_URL}/api/v1/crm/employee/${id}`, {
    data,
  });
