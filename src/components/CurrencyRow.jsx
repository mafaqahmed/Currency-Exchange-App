import React from 'react'

const CurrencyRow = ({title, id, value, setCurrency, currencyOptions}) => {
  return (
    <div className="w-full">
        <p className="mb-2">{title}</p>
          <select
            className="mb-2 block w-full rounded-md"
            name={id}
            id={id}
            value={value}
            onChange={(e) => {
                setCurrency(e.target.value)
            }}
          >
            <option value="nill">select</option>
            {currencyOptions.map((option, ind) => (
              <option key={ind} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
  )
}

export default CurrencyRow
