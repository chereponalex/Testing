import { get } from "..";
import { config } from "../../config";
// import { GetReviewsResponse } from "@/client/network/types";

export const getEntities = (query: any) =>
  get<any, void>(`${config.BACKEND_URL}/api/v1/crm/employee`, query);

export const getUser = (id: string) =>
    get<any, void>(`${config.BACKEND_URL}/api/v1/crm/employee/6263bffc-5705-1a7a-b29a-08bdd83074b8-8`);