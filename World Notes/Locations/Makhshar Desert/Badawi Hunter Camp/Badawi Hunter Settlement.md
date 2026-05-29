---
type: location
description: Hunter settlement owned by the Gida
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
The Badawi  Hunter Settlement is a mysterious group of legendary hunters who are rumoured to have singlehandedly wiped out the population of "animal" after receiving numerous reports from the vcarious cities in the Makhshar desert that they were causing problems.

This act, among others has given the Gida an air of mystique and spurred many legends. The most noteable, however, is that they are presumed to posses the Concept of Exploration. While nobody knows exactly what eactly is this Concept, it is the cause for the Giza to continuously move their settlement around the desert in a seemingly random path.

Base of operations for the [[Badawi Hunter Tribe]]. Provides food to [[Zal'Aata]]. One of the main providers for the meat supply, besides cattle and general imports. Possesses the [[concept of exploration]]. mainly hunt [[Auroch]] Most of this lore is either up to Daan or if he cannot come up withh anything up to me.
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
