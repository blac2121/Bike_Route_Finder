const allResults = ("https://data.ny.gov/resource/7bg2-3faq.json?$$app_token=rJKY8lYbv2sCllNIRE4Es2Lq4");
const lengthDomain = (`https://data.ny.gov/resource/7bg2-3faq.json?$$app_token=rJKY8lYbv2sCllNIRE4Es2Lq4&$where=trail_length`)
const surfaceDomain = (`https://data.ny.gov/resource/7bg2-3faq.json?$where=`)
// const surfaceDomainMultiples = (`https://data.ny.gov/resource/7bg2-3faq.json?$where=paved = 'Y'OR gravel= 'Y'`)
// 

// LANDING PAGE
const fetchRoutes = async (url) => {
  try {
    let response = await axios.get(url)
    let routeData = response.data
      
    listRoutes(routeData);

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// fetchRoutes(allResults);

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

// FILTER

// Distance Filter
const checkDistanceFilter = () => {
  const distanceValue = document.querySelector(".distance").value;
  return distanceValue;
}

const filterButton = document.querySelector(".filter-button")
filterButton.addEventListener("click", (e) => {
  e.preventDefault()
  removeResults();
  // let distance = checkDistanceFilter();
  //   if (distance === "all-distances") {
  //       let url = allResults;
  //       fetchRoutes(url);
  //   } else if (distance === "11") {
  //       let url = (`${lengthDomain}<${distance}`)
  //       fetchRoutes(url);  
  //   } else if (distance === "10to26") {
  //       let url = (`${lengthDomain} between '10' and '25'`)
  //       fetchRoutes(url);
  //   } else if (distance === "25to51") {
  //       let url = (`${lengthDomain} between '25' and '51'`)
  //       fetchRoutes(url);
  //   } else if (distance === "50to101") {
  //       let url = (`${lengthDomain} between '50' and '101'`)
  //       fetchRoutes(url);
  //   } else {
  //       let url = (`${lengthDomain}>${distance}`)
  //       fetchRoutes(url);
  //   }  
  let surface = checkSurfaceFilter(); {
    if (surface = "pavement") {
      let url = (`${surfaceDomain}paved='Y'`)
      fetchRoutes(url);
    }
  }
})

// Surface Filter

const checkSurfaceFilter = () => {
  const surfaceValue = document.querySelectorAll("input[class=surface-checkbox]:checked");
  let checkedSurfaces = [];
  for (let i = 0; i < surfaceValue.length; i++) {
    checkedSurfaces.push(surfaceValue[i].value);
  }
  return checkedSurfaces;
}

const removeResults = () => {
  const results = document.querySelector(".results-section")
  while (results.lastChild) {
    results.removeChild(results.lastChild)
  }
} 


