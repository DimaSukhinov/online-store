const initialState: CurrenciesType[] = []

export const currenciesReducer = (state: CurrenciesType[] = initialState, action: ActionsType): CurrenciesType[] => {
    switch (action.type) {
        case 'SET-CURRENCIES':
            return action.currencies.map(c => {
                return {...c}
            })
        default:
            return state
    }
}

export const setCurrenciesAC = (currencies: CurrenciesType[]) => {
    return {type: 'SET-CURRENCIES', currencies} as const
}

type ActionsType = ReturnType<typeof setCurrenciesAC>

export type CurrenciesType = {
    label: string
    symbol: string
}
