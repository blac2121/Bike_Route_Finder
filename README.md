# Project Overview

## Project Name

Trailblaze: Discover your Next Bike Route

## Project Description

Calling all cyclists — Locate New York State bike routes to blaze trails!

## API and Data Sample

[Bicycle Routes Across New York State](https://dev.socrata.com/foundry/data.ny.gov/7bg2-3faq)

Sample JSON:
```json
{
        "trail_name": "Adirondack Trail",
        "trail_description": "The Adirondack Trail is a NY State Scenic Byway.  Running from the southern to the northern border of the Adirondacks, there are plenty of roadside views through the Adirondack Park.",
        "trail_length": "188",
        "biking": "Y",
        "skiing": "Y",
        "horseriding": "Y",
        "skating": "Y",
        "trail_use": "Biking, Skating, Horse Riding, Skiing",
        "trail_highway": "Off Road",
        "paved": "Y",
        "gravel": "Y",
        "dirt": "Y",
        "surface_type": "Paved, Gravel, Dirt"
    },
    {
        "trail_name": "Auburn Line Trail",
        "trail_description": "The Auburn Line Trail is a 9.1 mile stone dust surface rail-trail which extends from Probst Road to Mertensia Road.",
        "trail_length": "9.1",
        "biking": "Y",
        "skiing": "Y",
        "horseriding": "Y",
        "walking": "Y",
        "trail_use": "Walking, Biking, Horse Riding, Skiing",
        "trail_highway": "Off Road",
        "gravel": "Y",
        "stone_dust": "Y",
        "dirt": "Y",
        "surface_type": "Gravel, Stone Dust, Dirt"
    },
```

## Wireframes

[Desktop - Results](https://res.cloudinary.com/dgy8sdrsq/image/upload/v1597510742/Desktop%20with%20Results.png)

[Desktop - Search](https://res.cloudinary.com/dgy8sdrsq/image/upload/v1597510742/Desktop%20with%20Results%20-%20Search.png)

[Mobile - Results](https://res.cloudinary.com/dgy8sdrsq/image/upload/v1597510741/Mobile%20with%20Results.png)

[Mobile - Search](https://res.cloudinary.com/dgy8sdrsq/image/upload/v1597510741/Mobile%20with%20Results%20-%20Search.png)

### MVP/PostMVP

#### MVP 

- Identify API 
- Set up API and render data on the page  
- Set up filter to filter trail length
- Set up the following states: filter removes old data set and updates with new set, no results
- Display data with trail name and length 
- Mobile compatibility

#### PostMVP  

- Display data with trail description and surface-type
- Set up filter to filter surface typy
- Allow user to choose between MI and KMs (currently is in MI)
- Display a set amount of description characters and impement a "read more" concept
- High risk: Use local storage to save paths users want to try
- High risk: Add second API to provide trail address (bike API does not supply address or location so this might be impossible)

## Goals: Project Schedule

|  Day |Deliverable| Status
|---|---| ---|
|Aug 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Mon, Aug 17|Project approval / API: Adding filter to feed to API| Complete
|Tues, Aug 18|Base HTML: Header, Footer, search section, results section| Complete
|Wed, Aug 19|Mobile Optimization / Filter Surface Type/ CSS: Header, Footer, search section, results section / no results view | Everything but no results view
|Thurs, Aug 20| Picking KM or MI / Get Address / Saving trails to try | Incomplete
|Fri, Aug 21| Presentations | Incomplete

## Priority Matrix

[Project Matrix](https://res.cloudinary.com/dgy8sdrsq/image/upload/v1597668585/LaCasse%20-%20BikeTrailFinder%20Project%20Matrix.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Get API to feed to the page | H | 3hrs| 30mins | 30mins |
| Adding filter parameters to API | H | 3hrs| 5hrs | 5hrs |
| Base HTML: Header, Footer, Filter Section| H | 3hrs| 3hrs | 2.5hrs |
| Base HTML: Results section| H | 3hrs| 30mins | 30mins |
| Base HTML: Remove old results| H | 3hrs| 2hrs | 2hrs |
| CSS: Header, Footer, Filter section| H | 3hrs| 4hrs | 4hrs |
| CSS: Results section| H | 3hrs| 4hrs | 4hrs |
| Mobile Optimization | H | 3hrs| 3hrs | 3hrs |
| Adding Surface Type in filter, and filter by| M | 5hrs| 8hrs | 8hrs |
| Adding Surface Type to results| M | 5hrs| 0 | - |
| No results view: HTML and CSS| H | 5hrs| 0 | - |
| Finding API to accept a trail name| L | 3hrs| 0 | - |
| Hooking up address API| L | 3hrs| 0 | - |
| Filtering with KM or MI| L | 3hrs| 0 | - |
| Saving trails to try | L | 3hrs| 0 | - |
| Total | H | 42hrs| 0 | - |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 
