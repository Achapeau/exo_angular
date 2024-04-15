import { TaskEnum } from "../task-enum"

export interface DoneTask {
    id: number
    title: string
    description: string
    status: TaskEnum.DONE
}