---
type: location
description: "The City of Change"
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
Yataghatay was founded an unknown period ago. Based on Drawings from this founding period, the shape of the city was specially determined in order to represent the glyph of "Hold Person". Scholars theorise it might have had something to do with capturing the [[concept of change]] within the confines of the city for unknown reasons.
It is nearly exclusively inhabited by changelings, who are most likely attracted to the city's changing nature. 
During each period, the city exhibits a certain theme, where all inhabitants speak a certain language, are dressed in a certain style and behave a certain way. So far, no pattern has repeated itself, yet styles may be combined.
Scholars are investigating whether these styles may be prophetic in nature, however, no conclusive evidence has been raised.
### Etymology
Derived from the Arabic word of change and mirrored because I enjoy stealing lore from pepople who write better than I do.
In Zal'Aata, this city is known as Yatag'Aata.
Formerly known as the City of Change.
## Environment
Considering the everchanging anture of the city, a true, singular culture cannot be established. After every shift, the culture seems to completely reset, cycling through time periods. Despite this, certain red lines do remain after each shift, especially since the inhabitans retain their memories even though they change their demeanor.
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
