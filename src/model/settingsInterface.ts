export interface IUser {
    id: string
    name: string
    accessRights: number[]
}
export interface IWebPage {
    id: number
    name: string
    description: string
    hostname: string
}
export interface ISettings {
    users: IUser[]
    webpages: IWebPage[]
}
