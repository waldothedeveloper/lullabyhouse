import PropTypes from 'prop-types'

type Extrasparams = {
  date: {
    extras: Array<{ id: string; price: number; extra: string }>
  }
}

export const Extras = ({ date }: Extrasparams) => {
  return (
    date?.extras.length > 0 && (
      <div>
        <span className="block">Extras:</span>
        {date.extras.map((elem) => (
          <dl key={elem.id} className="flex items-center justify-between">
            <dt className="text-sm">{elem?.extra}</dt>
            <dd>${elem?.price}</dd>
          </dl>
        ))}
      </div>
    )
  )
}
Extras.propTypes = {
  date: PropTypes.object,
}
