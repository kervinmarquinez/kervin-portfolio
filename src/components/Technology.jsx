
export const Technology = ({value}) => {
  return (
    <>
        {
            value.map(item => (
                <span
                key={item}
                className="text-sm border px-2"
                >
                    {item}
                </span>
            ))
        }
    </>
  )
}
