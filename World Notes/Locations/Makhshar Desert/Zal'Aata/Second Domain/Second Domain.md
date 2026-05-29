---
type: location
description: "Middle-class district of Zal'Aata"
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
[[Research Group]] is located here.
https://nl.pinterest.com/jarichionline/second-domain/

The Second Domain is a suburb of Zal'Aata. It is characterised by the large amount canopies and fabrics spanned across its streets. The Second Domain contains general residential living spaces, some.of which are shops and stores. Due to the plentiful shade, activity is constant during the day and night.
### POIs
[[Shivank Aaraka|Relic Merchant]]: A small store which trades and sells a random assortment of relics and treasures, gathered during adventuring and bartering. Run by a human (the same one who pointed them to Janib'Rankhra)
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
