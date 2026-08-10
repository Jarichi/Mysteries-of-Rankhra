---
type: location
description: ""
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
As one of the few spots in [[Yataghatay]] that remains consistent throughout Cycles, the Ratun Plaza is a reasonably small park near the entrance of the city. It consists of a single, red tree with what appears to be a small door hidden beneath the trunk. It is one of the few places in Yataghatay that does not change throughout Cycles.

## History
When the city was founded, this plaza was the place at which [[Yael|the Concept of Change]] had made the deal with the Ancients (described in lore for yata), underneath this very tree. As such, the plaza (and consequently the city) got moulded into the Glyph for the Hold Person spell.
Yataghatay was constructed using the shape of this glyph around it

## Environment
[The tree](https://pin.it/2nqlM4pmW)
The trap door only leads to something on a specific date/during a specific time window, which is hinted by 

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
