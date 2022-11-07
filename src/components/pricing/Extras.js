import PropTypes from 'prop-types'

export const Extras = ({ date }) => {
  return (
    date?.extras.length > 0 && (
      <div>
        <span className="block">Extras:</span>
        {date.extras.map((elem) => (
          <div key={elem.id} className="flex items-center justify-between">
            <dt className="text-sm">{elem?.extra}</dt>
            <dd>${elem?.price}</dd>
          </div>
        ))}
      </div>
    )
  )
}
Extras.propTypes = {
  date: PropTypes.object,
}
