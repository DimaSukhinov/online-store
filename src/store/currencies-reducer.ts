const initialState: currenciesType[] = []

export const currenciesReducer = (state: currenciesType[] = initialState, action: ActionsType): currenciesType[] => {
    switch (action.type) {

        default:
            return state
    }
}

export const setUsersAC = (user: currenciesType[]) => {
    return {type: 'SET-USERS', user} as const
}

type ActionsType = ReturnType<typeof setUsersAC>

export type currenciesType = {

}
