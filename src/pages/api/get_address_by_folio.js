export default async function handler(req, res) {
  try {
    const query = req.query
    const { folioNumber } = query
    console.log('folioNumber: ', folioNumber)

    const result = await fetch(
      `https://www.miamidade.gov/Apps/PA/PApublicServiceProxy/PaServicesProxy.ashx?Operation=GetPropertySearchByFolio&clientAppName=PropertySearch&folioNumber=${folioNumber}`
    ).then((data) => data.json())

    const { PropertyInfo } = result
    console.log('PropertyInfo: ', PropertyInfo)

    if (!PropertyInfo.DORDescription.includes('RESIDENTIAL')) {
      return res.status(400).json({
        message: `The address listed is not a residential address. At the moment we only serve residential customers`,
        status: 400,
        code: 400,
      })
    }

    const {
      BedroomCount: beds,
      HalfBathroomCount: halfBath,
      BathroomCount: bath,
      BuildingHeatedArea: livableArea,
      FloorCount: floors,
      YearBuilt: year_built,
      SubdivisionDescription: neighborhood,
    } = PropertyInfo
    return res.status(200).json({
      beds,
      halfBath,
      bath,
      livableArea,
      floors,
      year_built,
      status: 200,
      neighborhood,
    })
  } catch (error) {
    console.log('error: ', error)
    return res.status(500).json({
      message: `Our system has detected an unexpected error.`,
      status: error.status,
      code: error.code,
    })
  }
}
