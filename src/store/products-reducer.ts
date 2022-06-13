const initialState: ProductsType[] = []

export const productsReducer = (state: ProductsType[] = initialState, action: ActionsType): ProductsType[] => {
    switch (action.type) {
        case 'SET-PRODUCTS':
            return action.products.map(c => {
                return {...c, inCart: false}
            })
        case 'ADD-IN-CART':
            return state.map(c => c.id === action.id ? {...c, inCart: true} : c)
        default:
            return state
    }
}

export const setProductsAC = (products: ProductsType[]) => {
    return {type: 'SET-PRODUCTS', products} as const
}
export const addInCartAC = (id: string) => {
    return {type: 'ADD-IN-CART', id} as const
}

type ActionsType = ReturnType<typeof setProductsAC> | ReturnType<typeof addInCartAC>

export type ProductsType = {
    id: string
    name: string
    gallery: string
    inStock: boolean
    prices: PricesType[]
    inCart: boolean
}

type PricesType = {
    currency: {
        label: string
        symbol: string
    }
    amount: number
}
