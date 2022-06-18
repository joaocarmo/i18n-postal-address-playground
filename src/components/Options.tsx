import { useCallback } from 'react'
import type { ChangeEvent } from 'react'
import { useStore } from '../store'
import untypedCountries from '../data/countries.json'

const countries: Record<string, string> = untypedCountries

const countryOptions = Object.entries(countries).map(([label, value]) => ({
  key: value,
  label,
  value,
}))

const typeOptions = [
  { key: 'business', label: 'Business', value: 'business' },
  { key: 'default', label: 'Default', value: 'default' },
  { key: 'english', label: 'English', value: 'english' },
  { key: 'french', label: 'French', value: 'french' },
  { key: 'personal', label: 'Personal', value: 'personal' },
]

const outputOptions = [
  {
    key: 'array',
    label: 'Array',
    value: 'array',
  },
  {
    key: 'object',
    label: 'Object',
    value: 'object',
  },
  {
    key: 'string',
    label: 'String',
    value: 'string',
  },
]

const Options = () => {
  const {
    dispatch,
    state: {
      options: { country, type, output, useTransforms },
    },
  } = useStore()

  const handleCountryChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) =>
      dispatch({
        type: 'options',
        option: 'country',
        payload: e.target.value,
      }),
    [dispatch],
  )

  const handleTypeChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) =>
      dispatch({
        type: 'options',
        option: 'type',
        payload: e.target.value,
      }),
    [dispatch],
  )

  const handleOutputChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) =>
      dispatch({ type: 'options', option: 'output', payload: e.target.value }),
    [dispatch],
  )

  const handleUseTransformChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: 'options',
        option: 'useTransforms',
        payload: e.target.checked,
      }),
    [dispatch],
  )

  return (
    <div className="main-options">
      <div className="options-country">
        <label htmlFor="options-country">Country</label>
        <select
          id="options-country"
          value={country}
          onChange={handleCountryChange}
        >
          {countryOptions.map(({ key, label, value }) => (
            <option key={key} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="options-type">
        <label htmlFor="options-type">Type</label>
        <select id="options-type" value={type} onChange={handleTypeChange}>
          {typeOptions.map((option) => (
            <option key={option.key} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="options-output">
        <label htmlFor="options-output">Output</label>
        <select
          id="options-output"
          name="options-output"
          value={output}
          onChange={handleOutputChange}
        >
          {outputOptions.map(({ key, label, value }) => (
            <option key={key} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="options-use-transforms">
        <label htmlFor="options-use-transforms">Use transforms</label>
        <input
          id="options-use-transforms"
          type="checkbox"
          checked={useTransforms}
          onChange={handleUseTransformChange}
        />
      </div>
    </div>
  )
}

export default Options
