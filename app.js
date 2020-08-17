const url = ("https://data.ny.gov/resource/7bg2-3faq.json");

const fetchRoutes = async (routes) => {
  try {
    let response = await axios.get(url)
    const routeData = response.data
    console.log(routeData)
      
    listRoutes(routeData);

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchRoutes();

const listRoutes = (routeData) => {
  routeData.forEach((route) => {
    const routeSection = document.querySelector(".results-section")

    const resultCard = document.createElement("div")
    resultCard.classList.add(".result-card")
    routeSection.append(resultCard)

    const routeTitle = document.createElement("h4")
    const routeTitleName = route.trail_name
    routeTitle.textContent = `${routeTitleName}`
    resultCard.append(routeTitle)

    const routeDistance = document.createElement("p")
    const routeDistanceName = route.trail_length
    routeDistance.textContent = `${routeDistanceName}`
    resultCard.append(routeDistance)

    const routeSurface = document.createElement("p")
    const routeSurfaceName = route.trail_name
    routeSurface.textContent = `${routeSurfaceName}`
    resultCard.append(routeSurface)

    const routeDescription = document.createElement("p")
    const routeDescriptionName = route.trail_description
    routeDescription.textContent = `${routeDescriptionName}`
    resultCard.append(routeDescription)
  })
}