import { TaskEnum } from "../task-enum"

export interface TodoTask {
    id: number
    title: string
    description: string
    status: TaskEnum.TO_DO
}