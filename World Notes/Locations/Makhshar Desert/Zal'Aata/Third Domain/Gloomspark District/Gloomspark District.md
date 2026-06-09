---
type: location
description: "District in the Third Domain"
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
The gloomspark district is a large section of the [[Third Domain]] which is effectively a maze like network of tunnels, of which there are no known maps and which appear to flow around one another.
This district contains a collection of small towns in which people live, entryways which all enter the maze at different points, and a collection of many tunnels which all lead into one another.
### Known Entrypoints
- [[The Seam]] - Right next to Lettered Lamenting, one may observe a large sewer entryway. This is the most widely used entrypoint which leads to Gloomspark Mantle
- [[The Button]] - One manhole cover near the University of Arcane Arts directly leads into one of the paths. This is generally where Rateonus' informants provide information
- [[The Stitch]] - A collapsed sewer entrance right at the edge of Zal'Aata

### Known Villages
- [[Gloomspark Mantle]] -  A Small collection of houses which have been abandoned as per the occurences of the first session. This location serves as the main entry point into the network of tunnels and as an intel transition location for informants.
- [[Ocreatic Hearth]] - a submerged village, populated by Simics, whose exit is hidden under the waves. This means that in order to exit this location, one must solve a puzzle to temporarily drain the water.
	- the puzzle involves locating a series of switches in a location. One is a riddle, one is a shooting skill test, one is an alchemical puzzle and one is something else
- [[Gloomhearth]] - the room in which Dako is getting conveted
- [[Mantled Crucible]] - smithery in which most weapons are made


## History
During the construction of the sewer network, the location at which the gloomspark District is currently located, was the main sewage drain for the Eastern part of Zal'Aata. This meant that numerous people actually are familiar with
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
