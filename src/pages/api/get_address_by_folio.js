export default async function handler(req, res) {
  try {
    const query = req.query
    const { folioNumber } = query

    const result = await fetch(
      `https://www.miamidade.gov/Apps/PA/PApublicServiceProxy/PaServicesProxy.ashx?Operation=GetPropertySearchByFolio&clientAppName=PropertySearch&folioNumber=${folioNumber}`
    ).then((data) => data.json())

    const { PropertyInfo } = result

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
      BuildingBaseArea,
      BuildingActualArea,
      BuildingHeatedArea,
      BuildingEffectiveArea,
      FloorCount: floors,
      YearBuilt: year_built,
      SubdivisionDescription: neighborhood,
    } = PropertyInfo

    const evaluateValue = (value) =>
      value !== null && typeof value === 'number' && value > 0

    const getPropertySqFeet = () => {
      if (evaluateValue(BuildingHeatedArea)) {
        return BuildingHeatedArea
      }
      if (evaluateValue(BuildingEffectiveArea)) {
        return BuildingEffectiveArea
      }
      if (evaluateValue(BuildingBaseArea)) {
        return BuildingBaseArea
      }
      if (evaluateValue(BuildingActualArea)) {
        return BuildingActualArea
      }

      return null
    }

    return res.status(200).json({
      beds,
      halfBath,
      bath,
      livableArea: getPropertySqFeet(),
      floors,
      year_built,
      status: 200,
      neighborhood,
    })
  } catch (error) {
    return res.status(500).json({
      message: `Our system has detected an unexpected error.`,
      status: error.status,
      code: error.code,
    })
  }
}
