---
type: location
description: "Shopping district in the First Domain"
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
The Bazaar is a hectometre-long daily market that sells pretty much everything from general items to unique artifacts. While partially run by Zal'Aatas ruling class, its contents are determined by the residents of the First and Second Domains.

The Bazaar is active 24/7. During the day, it sells more generic travel items and standard loot and during the night it sells more unique items and travellers gear at a lower price. 

It's also a major tourist attraction from travellers who came from the Phiaro Channel; these also provide the market with its unique loadout, and provide a way for the Bazaar to export goods as well. the [[Badawi Hunter Settlement]] sells their valuables here as well.

Due to the vast amount of people that are active around this area, it is also a major criminal hotspot, having an abundance of Simic people.

At the end of the cardinal pathways, a bulletin board containing advertisements for various groups and stores in the city.

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
