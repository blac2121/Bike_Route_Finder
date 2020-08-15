# Project Overview

## Project Name

Trailblaze: Discover Bike Paths

## Project Description

Calling all cyclists — discover New York state bike routes to blaze those trails!

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
[Mobile - Results](https://res.cloudinary.com/dgy8sdrsq/image/upload/v1597510741/Mobile%20with%20Results.png)
[Desktop - Search](https://res.cloudinary.com/dgy8sdrsq/image/upload/v1597510742/Desktop%20with%20Results%20-%20Search.png)
[Mobile - Search](https://res.cloudinary.com/dgy8sdrsq/image/upload/v1597510741/Mobile%20with%20Results%20-%20Search.png)

### MVP/PostMVP

#### MVP 

- Identify API and problems to solve 
- Set up API and get data rending in the console  
- Set up the following states: landing page, search result state, no results
- Display data with trail name and length 
- Search by trail length
- Mobile compatibility

#### PostMVP  

- Display data with trail description and surface-type
- Search by surface typy
- High risk: Add second API to provide trail address (bike API does not supply address)
- High risk: Use local storage to save paths users want to try

## Project Schedule

|  Day |Deliverable| Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Mon, August 17|Project approval / API: Adding Search to feed to API|Incomplete
|Tues, August 18|Base HTML: Header, Footer, search section, results section, no results view, landing view| Incomplete
|Wed, August 19|Mobile Optimization / CSS: Header, Footer, search section, results section, no results view, landing view  | Incomplete
|Thurs, August 20|Get address | Incomplete
|Fri, August 21| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Search to feed to API | H | 6hrs| 0 | - |
| Base HTML: Header, Footer, search section, results section, no results view, landing view | H | 8hrs| 0 | - |
| CSS: Header, Footer, search section, results section, no results view, landing view | H | 8hrs| 0 | - |
| Mobile Optimization | H | 5hrs| 0 | - |
| Getting trail address | H | 8hrs| 0 | - |
| Saving trails to try | H | 8hrs| 0 | - |
| Total | H | 43hrs| 0 | - |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 
