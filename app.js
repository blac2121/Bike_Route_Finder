const allResults = ("https://data.ny.gov/resource/7bg2-3faq.json?$$app_token=rJKY8lYbv2sCllNIRE4Es2Lq4");
const resultsURL = (`https://data.ny.gov/resource/7bg2-3faq.json?$$app_token=rJKY8lYbv2sCllNIRE4Es2Lq4&$where=`)
const lengthURL = (`trail_length`)

const fetchRoutes = async (url) => {
  try {
    let response = await axios.get(url)
    let routeData = response.data
      
    listRoutes(routeData);

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchRoutes(allResults);

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
  const distanceValue = document.querySelector(".distance").value;
  if (distanceValue === "all-distances") {
    return "all-distances";
  } else if (distanceValue === "11") {
    return (`${lengthURL}<${distanceValue}`)
  } else if (distanceValue === "10to26") {
    return (`${lengthURL} between '10' and '25'`)
  } else if (distanceValue === "25to51") {
    return (`${lengthURL} between '25' and '51'`)
  } else if (distanceValue === "50to101") {
    return (`${lengthURL} between '50' and '101'`)
  } else {
    return (`${lengthURL}>${distanceValue}`)
  }  
}

const checkSurfaceFilter = () => {
  const surfaceValue = document.querySelectorAll("input[class=surface-checkbox]:checked");
  let checkedSurfaces = [];
  for (let i = 0; i < surfaceValue.length; i++) {
    checkedSurfaces.push(surfaceValue[i].value + " = 'Y'");
    console.log(checkedSurfaces)
  }
  if (checkedSurfaces.length === 1) {
    console.log(checkedSurfaces.toString())
    return checkedSurfaces.toString()
  } else if (checkedSurfaces.length > 1) {
    for (let i = 0; i < checkedSurfaces.length; i++) {
      let checkedSurfaceString = checkedSurfaces.join(" OR ")
      let surfacePara = ("(" + checkedSurfaceString + ")")
      console.log(surfacePara);
      return surfacePara;
    }
  } else {
    return "all-surfaces"
  }
}

const removeResults = () => {
  const results = document.querySelector(".results-section")
  while (results.lastChild) {
    results.removeChild(results.lastChild)
  }
} 

const filterButton = document.querySelector(".filter-button")
filterButton.addEventListener("click", (e) => {
  e.preventDefault()

  removeResults();

  const distanceURL = checkDistanceFilter();  
  const surfaceURL = checkSurfaceFilter();

  if (distanceURL === "all-distances" && surfaceURL !== "all-surfaces") { // If distance is all and surface has value 
    let url = (`${resultsURL}${surfaceURL}`)
    fetchRoutes(url);
  } else if (distanceURL === "all-distances" && surfaceURL === "all-surfaces") { // If surface is all and distance is all 
    let url = allResults;
    fetchRoutes(url);
  } else if (surfaceURL === "all-surfaces" && distanceURL !== "all-distances") { // If surface is all and distance has value 
    let url = (`${resultsURL}${distanceURL}`)
    fetchRoutes(url);
  } else {
    let url = (`${resultsURL}${distanceURL} AND ${surfaceURL}`) // Distance and Surface has value
    fetchRoutes(url);
  }
})

