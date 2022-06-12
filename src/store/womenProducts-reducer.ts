import img from '../assets/Green Arrow.jpg';

const initialState: ProductsType[] = [
    {title: 'First', price: '$50', img: img},
    {title: 'Second', price: '$70', img: img},
    {title: 'Third', price: '$20', img: img},
    {title: 'Fourth', price: '$25', img: img},
    {title: 'Fifth', price: '$1234', img: img},
]

export const womenProductsReducer = (state: ProductsType[] = initialState, action: ActionsType): ProductsType[] => {
    switch (action.type) {

        default:
            return state
    }
}

export const setUsersAC = (user: ProductsType[]) => {
    return {type: 'SET-USERS', user} as const
}

type ActionsType = ReturnType<typeof setUsersAC>

export type ProductsType = {
    title: string
    price: string
    img: any
}
