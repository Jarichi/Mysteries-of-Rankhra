
---
type: location
description: "Main hub of the Research Group"
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
Located in [[Second Domain]], contains [[Research Group]].

Lettered lamenting serves as the main hub of the Research Group. It consists of a small bar, kept by Martin Isla, a small stage for musicians to perform and a lounging area for long-term guests to sit in. Lettered Lamenting is located within the 2nd Domain, and is parnered with [[Hotel]], located in the 1st Domain and serving as a safe house for compromised or wanted research members.

Lettered Lamenting was founded by [[Verdant Selemno]] as a backup plan for earning money when he first arrived in the city, and is now co-owned by them and [[Semyon Voltaire]].

### Frequent visitors
[[Reggi Buer|Salazar Coldwindt]]: arrogant oath of the sea paladin
[[Sasha Regis]]: everchanging changeling 
[[Martin Isla]]: experimenting bartender
[[Telas Muses.pdf]]: singing siren


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
