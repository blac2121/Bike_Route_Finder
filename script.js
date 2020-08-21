// URL Pieces to be used in filter and fetch results
const allResults = ("https://data.ny.gov/resource/7bg2-3faq.json?$$app_token=rJKY8lYbv2sCllNIRE4Es2Lq4&$order=trail_length&$where=biking ='Y'");
const allResultsDesc = ("https://data.ny.gov/resource/7bg2-3faq.json?$$app_token=rJKY8lYbv2sCllNIRE4Es2Lq4&$order=trail_length DESC&$where=biking ='Y'");
const resultsURL =  (`https://data.ny.gov/resource/7bg2-3faq.json?$$app_token=rJKY8lYbv2sCllNIRE4Es2Lq4&$order=trail_length&$where=biking ='Y' AND `)
const descResults = (`https://data.ny.gov/resource/7bg2-3faq.json?$$app_token=rJKY8lYbv2sCllNIRE4Es2Lq4&$order=trail_length DESC&$where=biking ='Y' AND `)
const lengthURL = (`trail_length`)


// Gets the value of the miles/kilos dropdown
const checkUnits = () => {
  const unitsValue = document.querySelector(".units-selector").value;
  return unitsValue;
}


// Kilo Conversion
const kiloConversion = (distance) => {
  const kmSum = `${distance}` * 1.60934
  const roundedKM = Math.round(10 * kmSum) / 10;
  return roundedKM;
}


// Updates the distance filter label based on Kilos or Miles
const distanceUnits = () => {
  const fewerTen = document.querySelector("#eleven");
  const tenUp = document.querySelector("#tenUp");
  const twentyUp = document.querySelector("#twentyUp");
  const fiftyUp = document.querySelector("#fiftyUp");
  const greater100 = document.querySelector("#greater100");
  
  let value = checkUnits();

  if (value === "kilos") {
    fewerTen.innerHTML = fewerTen.innerHTML.replace("Fewer than 10 Miles", "Fewer than 10 Kilos")
    tenUp.innerHTML = tenUp.innerHTML.replace("10-25 Miles", "10-25 Kilos")
    twentyUp.innerHTML = twentyUp.innerHTML.replace("25-50 Miles", "25-50 Kilos")
    fiftyUp.innerHTML = fiftyUp.innerHTML.replace("50-100 Miles", "50-100 Kilos")
    greater100.innerHTML = greater100.innerHTML.replace("Greater than 100 Miles", "Greater than 100 Kilos")
  } else {
    fewerTen.innerHTML = fewerTen.innerHTML.replace("Fewer than 10 Kilos", "Fewer than 10 Miles")
    tenUp.innerHTML = tenUp.innerHTML.replace("10-25 Kilos", "10-25 Miles")
    twentyUp.innerHTML = twentyUp.innerHTML.replace("25-50 Kilos", "25-50 Miles")
    fiftyUp.innerHTML = fiftyUp.innerHTML.replace("50-100 Kilos", "50-100 Miles")
    greater100.innerHTML = greater100.innerHTML.replace("Greater than 100 Kilos", "Greater than 100 Miles")
  }
}


// Builds No Results page
const noResults = () => {
  const routeSection = document.querySelector(".results-section")

  const noResults = document.createElement("div")
  noResults.classList.add("no-results")
  routeSection.append(noResults) 

  const noResultsTitle = document.createElement("p")
  noResultsTitle.textContent = "Looks like you're blazing your own trail!"
  noResultsTitle.classList.add("no-result-title")
  noResults.append(noResultsTitle)

  const noResultsText = document.createElement("p")
  noResultsText.textContent = "Please update your search and try again."
  noResultsText.classList.add("no-result-text")
  noResults.append(noResultsText)
}


// Builds Result Cards in Miles
const listRoutes = (routeData) => {
  routeData.forEach((route, i) => {
  
    const routeSection = document.querySelector(".results-section")

    const resultCard = document.createElement("div")
    resultCard.classList.add("result-card")
    routeSection.append(resultCard)

    if (i % 2 === 0) {
      resultCard.classList.add("result-color-green") 
    } else if (i % 2 != 0) {
      resultCard.classList.add("result-color-blue")
    }  
  
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

    let routeDistance = document.createElement("p")
    let routeDistanceLength = route.trail_length
    routeDistance.classList.add("result-distance")

    let units = checkUnits();

    if (routeDistanceLength === undefined ) {
      routeDistance.textContent = `N/A`
    } else if (units === "kilos") {
      let kmValue = kiloConversion(routeDistanceLength);
      routeDistance.textContent = `${kmValue} km`
    } else {
      routeDistance.textContent = `${routeDistanceLength} mi`
    }
    
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

// Gets results from the API
const fetchRoutes = async (url) => {
  try {
    const response = await axios.get(url)
    const routeData = response.data
    
    if (routeData.length != 0) {
      listRoutes(routeData);
    } else {
      noResults();
    }

    distanceUnits();
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// Renders all results upon page load to create a landing page experience
const body = document.querySelector("body");
body.onload = fetchRoutes(allResults);

// Gets distance filter value and turns it into a URL to be fed into the filter
const checkDistanceFilter = () => {
  const distanceValue = document.querySelector(".distance-selector").value;

  let value = checkUnits();

  if (distanceValue === "all-distances") {
    return "all-distances";
  } else if (value === "kilos") {
    if (distanceValue === "11") {
      return (`${lengthURL}<'6'`)
    } else if (distanceValue === "10to26") {
      return (`${lengthURL} between '6' and '16'`)
    } else if (distanceValue === "25to51") {
      return (`${lengthURL} between '15' and '32'`)
    } else if (distanceValue === "50to101") {
      return (`${lengthURL} between '31' and '63'`)
    } else {
      return (`${lengthURL}>'63'`)  // 
    }
  } else {
    if (distanceValue === "11") {
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
}


// Gets surface filter value and turns it into a URL to be fed into the filter
const checkSurfaceFilter = () => {
  const surfaceValue = document.querySelectorAll("input[class=surface-checkbox]:checked");
  let checkedSurfaces = [];
  for (let i = 0; i < surfaceValue.length; i++) {
    checkedSurfaces.push(surfaceValue[i].value + " = 'Y'");
  }
  if (checkedSurfaces.length === 1) {
    return checkedSurfaces.toString()
  } else if (checkedSurfaces.length > 1) {
    for (let i = 0; i < checkedSurfaces.length; i++) {
      let checkedSurfaceString = checkedSurfaces.join(" OR ")
      let surfacePara = ("(" + checkedSurfaceString + ")")
      return surfacePara;
    }
  } else {
    return "all-surfaces"
  }
}

// Gets the value of the asc/desc dropdown
const checkSort = () => {
  const sortValue = document.querySelector(".sort-selector").value;
  return sortValue;
}


// Removes result cards or no result view
const removeResults = () => {
  const results = document.querySelector(".results-section")
  while (results.lastChild) {
    results.removeChild(results.lastChild)
  }
} 


// Runs the filter and constructs the correct URL to be fed through the fetch function
const runFilter = () => {
  
  removeResults();
  
  const distanceURL = checkDistanceFilter();
  const surfaceURL = checkSurfaceFilter();
  const sortURL = checkSort();
      
  if (sortURL === "asc") {
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
  } else {
    if (distanceURL === "all-distances" && surfaceURL !== "all-surfaces") { // If distance is all and surface has value 
      let url = (`${descResults}${surfaceURL}`)
      fetchRoutes(url);
    } else if (distanceURL === "all-distances" && surfaceURL === "all-surfaces") { // If surface is all and distance is all 
      let url = allResultsDesc;
      fetchRoutes(url);
    } else if (surfaceURL === "all-surfaces" && distanceURL !== "all-distances") { // If surface is all and distance has value 
      let url = (`${descResults}${distanceURL}`)
      fetchRoutes(url);
    } else {
      let url = (`${descResults}${distanceURL} AND ${surfaceURL}`) // Distance and Surface has value
      fetchRoutes(url);
    }
  }
}

// Filter button listener 
const filterButton = document.querySelector(".filter-button")
filterButton.addEventListener("click", (e) => {
  e.preventDefault()
  runFilter();
})


// The filter clear button which returns the filter to all results
const clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("click", () => {
  removeResults();
  fetchRoutes(allResults);
})


// Sort dropdown listener 
const toggleSort = document.querySelector(".sort-selector")
toggleSort.addEventListener("change", () => {
  runFilter();
})


// Miles/Kilos dropdown listener 
const toggleUnits = document.querySelector(".units-selector")
toggleUnits.addEventListener("change", () => {
  runFilter();
})
