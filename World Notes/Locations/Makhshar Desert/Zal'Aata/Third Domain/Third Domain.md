---
type: location
description: "The slums of Zal'Aata"
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
https://nl.pinterest.com/jarichionline/third-domain/

The Third Domain is an overlooked part of Zal'Aata that houses may diverse groups and, while being a place where evrybody may belong, very muxh includes criminals in this description.

It houses many different criminal organisations, most of which are led by one/multiple central cartels. It also contains the [[F.I.Z.]], which is a network of technically-not-illegal spies and the lot. This may simlpy be seen as a powerful criminal organisation were it not for the fact that the city backs them.
### History
When the city was created, this domain did not exist yet, despite the sewers being locally accessible. It was not after the economy of Zal'Aata began to thrive before a wage gap was created that forced the poor and homeless to find a place to stay. They decided to settle within the sewer system below Zal'Aata, where money held no real value and they created a more interesting system of trading; information.

Realising that information held value, they detached themselves from the economy altogether causing them to be poor on paper but rich in other things, and allowing for the ones without possessions to still have an opportunity to build themselves up. As a consequence, this trade for information made it easy for more clandestine networks to exist and gather information.

Certain businesses traded information for real money and as such allowed for materials to still be bought and used in construction, leading to a prominent neon signage and cyberpunk-y style.

### Culture
Generally, inhabitans of the Third DOmain keep to themselves, unless affiliated with each other by means of gang activity or trusted groups. Due to the value of information, the inhabitants are careful not to reveal personal details about themselves, oftentimes going by different names and different appearances. THis enabled criminal activity to become widespread and more-or-less the norm.
There is no clear day-night cycle or rhythm since there is no widespread access to natural daylight, except at the entry points. 

Due to the prescence of [[World Notes/Lore/Overlord|Overlords]] and the [[Concept of Flow]], the reason why information is more valuable is because the concept unconsciously influences people to control the flow of their information and their thoughts. People who are exceptionally good at handling this flow may ascend to Overlord status
## Environment

The Third Domain is a literal subcity with sewer lines for streets and slum-like houses.
![[sewer'aata.jpeg]]


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
