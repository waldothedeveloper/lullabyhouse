export const SavingsToolTip = ({ list }) => {
  return (
    <div className="absolute inset-x-0 top-0 z-10 translate-y-px transform">
      <div className="flex w-full -translate-y-8 translate-x-16 transform justify-center">
        <span className={list?.color}>{list?.savingsTip}</span>
      </div>
    </div>
  )
}
