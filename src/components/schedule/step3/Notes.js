import PropTypes from 'prop-types'

export const Notes = ({ handleNotes, notes }) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-slate-200 sm:pt-5">
      <label
        htmlFor="about"
        className="block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2"
      >
        Are there any other details we need to know about your cleaning needs?
      </label>
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <textarea
          value={notes}
          onChange={handleNotes}
          id="cleaning_details"
          name="cleaning_details"
          maxLength={500}
          rows={3}
          className="block w-full max-w-lg rounded-md border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
        />
      </div>
    </div>
  )
}

Notes.propTypes = {
  notes: PropTypes.string,
  handleNotes: PropTypes.func,
}
