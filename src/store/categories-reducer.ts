import {CategoryType} from '../components/app/App';

const initialState: CategoriesType[] = []

export const categoriesReducer = (state: CategoriesType[] = initialState, action: ActionsType): CategoriesType[] => {
    switch (action.type) {
        case 'SET-CATEGORIES':
            return action.categories.map(c => {
                return {...c}
            })
        default:
            return state
    }
}

export const setCategoriesAC = (categories: CategoriesType[]) => {
    return {type: 'SET-CATEGORIES', categories} as const
}

type ActionsType = ReturnType<typeof setCategoriesAC>

export type CategoriesType = {
    name: CategoryType
}
