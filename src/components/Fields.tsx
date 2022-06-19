import { useCallback } from 'react'
import type { ChangeEvent } from 'react'
import { useStore } from '../store'
import type { PostalAddressType } from 'i18n-postal-address'

type FieldProps = {
  field: PostalAddressType.AddressParts
}

const Field = ({ field }: FieldProps) => {
  const { state, dispatch } = useStore()

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        field,
        type: 'fields',
        payload: e.target.value,
      })
    },
    [dispatch, field],
  )

  return (
    <div className="main-fiels-field">
      <label>{field}</label>
      <input type="text" value={state.fields[field]} onChange={handleChange} />
    </div>
  )
}

const Fields = () => {
  const { allowedFields } = useStore()

  return (
    <div className="main-fields">
      {allowedFields.map((field) => (
        <Field key={field} field={field} />
      ))}
    </div>
  )
}

export default Fields
