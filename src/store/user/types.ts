export interface UserState {
    name: string,
    isAdmin: boolean,
    age: number
}

export interface UserAction {
    user?: UserState
}
