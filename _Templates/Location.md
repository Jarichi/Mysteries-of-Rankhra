<%*
const campaign = await tp.user.selectCampaign(tp);
const campaignTag = tp.user.toKebabCase(campaign);
%>
---
type: location
description: ""
campaign: <% campaign %>
tags: <% campaignTag %>

---
```leaflet
id: <% tp.file.title %>-location-map
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

## Environment
## NPCs

```dataview
TABLE file.cday as Created
FROM "Campaigns/<% campaign %>" where type="NPC" AND file.name != this.file.name AND (contains(locations, this.file.link) OR contains(location, this.file.link))
SORT file.cday DESC
```

## Quests

```dataview
TABLE file.cday as Created
FROM "Campaigns/<% campaign %>" where file.name != this.file.name AND 
contains(type, "quest") AND
contains(locations, this.file.link)
SORT file.cday DESC
```

## References

```dataview
TABLE file.cday as Created
FROM "Campaigns/<% campaign %>" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
