---
type: location
description: ""
campaign: Campaign 1 - Mysteries of Rankhra
tags: campaign-1---mysteries-of-rankhra

---
```leaflet
id: Gardens of Elysia (temporary name)-location-map
image: ./Templates-attachments/location-placeholder.jpg
lat: 50%
long: 50%
minZoom: 5
maxZoom: 10
defaultZoom: 9
scale: 1
lock: true
```

## Description
The gardens are a changing location, which contains different flora and fauna and provides the main source of food for the city of change, as well as leisure
It was created with the sole purpose of providing a sort of independence from the rest of the world

## Environment
It can be divided into several subsections, each with a different purpose

### Botanical garden
- easily accessible by the public
- Mostly contains kinds of flowers, either existing or non existent species 
	- this also comes with cool insects 
- also contains trees of course
- 

## NPCs

```dataview
TABLE file.cday as Created
FROM "Campaigns/Campaign 1 - Mysteries of Rankhra" where type="NPC" AND file.name != this.file.name AND (contains(locations, this.file.link) OR contains(location, this.file.link))
SORT file.cday DESC
```

## Quests

```dataview
TABLE file.cday as Created
FROM "Campaigns/Campaign 1 - Mysteries of Rankhra" where file.name != this.file.name AND 
contains(type, "quest") AND
contains(locations, this.file.link)
SORT file.cday DESC
```

## References

```dataview
TABLE file.cday as Created
FROM "Campaigns/Campaign 1 - Mysteries of Rankhra" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
