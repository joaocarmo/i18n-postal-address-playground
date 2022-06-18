import { useMemo } from 'react'
import PostalAddress from 'i18n-postal-address'
import { useStore } from '../store'

const Results = () => {
  const {
    state: { options, fields },
  } = useStore()

  const results = useMemo(() => {
    const { country, type, output, useTransforms } = options

    const postalAddress = new PostalAddress(fields)
    postalAddress.setFormat({ country, type, useTransforms })

    if (output === 'array') {
      return JSON.stringify(postalAddress.toArray(), null, 2)
    }

    if (output === 'object') {
      return JSON.stringify(postalAddress.toObject(), null, 2)
    }

    if (output === 'string') {
      return postalAddress.toString()
    }

    return JSON.stringify(fields, null, 2)
  }, [options, fields])

  return <textarea className="main-results-textarea" readOnly value={results} />
}

export default Results
