import { createContext, useContext, useMemo, useReducer } from 'react'
import type { Dispatch, FC, PropsWithChildren } from 'react'
import defaultState from './data/default-state'
import type { PostalAddressType } from 'i18n-postal-address'

const allowedFields = Object.keys(
  defaultState,
) as PostalAddressType.AddressParts[]

type StateOptions = {
  country: string
  output: 'array' | 'object' | 'string'
  type: PostalAddressType.FormatTypes
  useTransforms: boolean
}

type State = {
  fields: PostalAddressType.AddressObject
  options: StateOptions
}

type ReducerAction = {
  field?: PostalAddressType.AddressParts
  option?: keyof StateOptions
  payload: unknown
  type: 'options' | 'fields'
}

const reducer = (state: State, action: ReducerAction) => {
  switch (action.type) {
    case 'options':
      return {
        ...state,
        options: {
          ...state.options,
          [action.option!]: action.payload as StateOptions[keyof StateOptions],
        },
      }
    case 'fields':
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.field!]: action.payload as string,
        },
      }
    default:
      return state
  }
}

type StoreContextType = {
  allowedFields: PostalAddressType.AddressParts[]
  dispatch: Dispatch<ReducerAction>
  state: State
}

const startstate = {
  fields: defaultState,
  options: {
    country: 'US',
    output: 'string' as const,
    type: 'default' as const,
    useTransforms: true,
  },
}

const StoreContext = createContext<StoreContextType>({
  allowedFields,
  dispatch: () => null,
  state: startstate,
})
StoreContext.displayName = 'StoreContext'

interface StoreProviderProps {
  initialState?: State
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = ({
  children,
  initialState = startstate,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(
    () => ({ allowedFields, dispatch, state }),
    [dispatch, state],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within a StoreProvider')
  }

  return context
}
