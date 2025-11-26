import { apiClient } from "@/lib/apiClient";

export const AdminApi = {

    getAllApplications: () =>
        apiClient.get<any>("/"),

    getTargetedApplication: () =>
        apiClient.get<any>("/"),

    UpdateApplicationStatus: (adminFormData:{id:string, status:"approved" | "rejected", reasons?:string}) =>
        apiClient.post<any>("/")

}