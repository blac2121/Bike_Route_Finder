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
  })
}