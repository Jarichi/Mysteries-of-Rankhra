---
type: location
description: "Druid circle located in the Conru Mountains"
campaign: Campaign 1 - Mysteries of Rankhra
tags: campaign-1---mysteries-of-rankhra

---
```leaflet
id: Untitled-location-map
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
The Circle of the Moon, located in a difficult-to-access valley in the midst of the [[Conru Mountains]] is a community of Druids of a large variety of races, who protect the [[Concept of Growth]]. While its existence is known in the public lore of the continent, what the Circle protects, what secrets they hide and what their history is is not known to outsiders.
The Circle was created when the First Druid came across the Concept of Growth, and spoke with it. The concept asked them to create a circle to protect them and to make sure thei evergrowing influence could be transferred someplace else, lest the Cornucopia Streak and its growth run wild and engulf the desert.

## Environment
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
