import { TaskEnum } from "../task-enum"

export interface OnProgressTask {
    id: number
    title: string
    description: string
    status: TaskEnum.IN_PROGRESS
}