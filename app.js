const url = ("https://data.ny.gov/resource/7bg2-3faq.json");
// https://data.ny.gov/resource/7bg2-3faq.json?trail_length=188// 
// https://data.ny.gov/resource/7bg2-3faq.json?$where=trail_length%3E100 //
// https://data.ny.gov/resource/7bg2-3faq.json?$where=trail_length>100
// `https://data.ny.gov/resource/7bg2-3faq.json?$where=trail_length<${distance}`


const fetchRoutes = async (distance) => {
  try {
    let response = await axios.get(`https://data.ny.gov/resource/7bg2-3faq.json?$where=trail_length<${distance}`)
    const routeData = response.data
    console.log(routeData)
      
    listRoutes(routeData);

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

const listRoutes = (routeData) => {
  routeData.forEach((route) => {
    const routeSection = document.querySelector(".results-section")

    const resultCard = document.createElement("div")
    resultCard.classList.add("result-card")
    routeSection.append(resultCard)

    const resultCardRow1 = document.createElement("div")
    resultCardRow1.classList.add("result-row1")
    resultCard.append(resultCardRow1)

    const resultRow1Title = document.createElement("div")
    resultRow1Title.classList.add("result-row1-title")
    resultCardRow1.append(resultRow1Title)

    const routeTitle = document.createElement("h4")
    const routeTitleName = route.trail_name
    routeTitle.classList.add("result-heading")
    routeTitle.textContent = `${routeTitleName}`
    resultRow1Title.append(routeTitle)

    const resultRow1Distance = document.createElement("div")
    resultRow1Distance.classList.add("result-row1-distance")
    resultCardRow1.append(resultRow1Distance)

    const routeDistance = document.createElement("p")
    const routeDistanceName = route.trail_length
    routeDistance.classList.add("result-distance")
    routeDistance.textContent = `${routeDistanceName} miles`
    resultRow1Distance.append(routeDistance)

    const resultCardRow2 = document.createElement("div")
    resultCardRow2.classList.add("result-row2")
    resultCard.append(resultCardRow2)

    const routeSurface = document.createElement("p")
    const routeSurfaceName = route.surface_type
    routeSurface.classList.add("result-surface")
    routeSurface.textContent = `${routeSurfaceName}`
    resultCardRow2.append(routeSurface)

    const resultCardRow3 = document.createElement("div")
    resultCardRow3.classList.add("result-row3")
    resultCard.append(resultCardRow3)

    const routeDescription = document.createElement("p")
    const routeDescriptionName = route.trail_description
    routeDescription.classList.add("result-description")
    routeDescription.textContent = `${routeDescriptionName}`
    resultCardRow3.append(routeDescription)
  })
}

const checkDistanceFilter = () => {
  const distanceValue = document.querySelectorAll(".checkbox")
  let checkedDistances = "";
  for (let i = 0; i < distanceValue.length; i++)
    if (distanceValue[i].checked) {
      checkedDistances = distanceValue[i].value;
      console.log(checkedDistances)
      return checkedDistances;
  }
}

const filterButton = document.querySelector(".filter-button")
filterButton.addEventListener("click", (e) => {
  e.preventDefault()
  const distance = checkDistanceFilter();
  fetchRoutes(distance)
})


// const removeResults = () => {
//   const oldSearch = document.querySelector(".movie-tile")
//   while (oldSearch.lastChild) {
//     oldSearch.removeChild(oldSearch.lastChild)
//   }
// } 


