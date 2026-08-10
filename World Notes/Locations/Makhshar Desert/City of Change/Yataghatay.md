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
Yataghatay was founded an unknown period ago. Based on Drawings from this founding period, the shape of the city was specially determined in order to represent the glyph of "Hold Person". Scholars theorise it might have had something to do with capturing the [[Concept of Change]] within the confines of the city for unknown reasons.
It is nearly exclusively inhabited by changelings, who are most likely attracted to the city's changing nature. 
During each period, the city exhibits a certain theme, where all inhabitants speak a certain language, are dressed in a certain style and behave a certain way. So far, no pattern has repeated itself, yet styles may be combined.
Scholars are investigating whether these styles may be prophetic in nature, however, no conclusive evidence has been raised.
## History
When the Concepts got fractured and scattered across the Makhshar Desert, one of the concepts - the [[Concept of Change]] - ended up in a raw, uninhabited duneplane south-west from what would become the city of Zal'Aata. As the concept manifested itself, the environment around it slowly changed; the dunes began to shift, and oddly strong winds began to perk up.
This change was noted by a subsection of the Ancients, consisting of what would eventually become the Changelings. These people, drawn by the energy of change, decided to investigate the area, in which they found what initially appeared to be a chaotic warble of energy, vaguely in the shape of a person. They decided to observe this indicidual, and to teach it what they knew of their ways.
As the Concept learned more about the world from the Ancients, it- no, they, began to take form of what seemed to be a super-changeling of sorts and named  themselves "[[Scout]]" (idk). While constantly being of humanoid form, their appearance and personality kept varying. Their chaotic energy began to change the group - which would call themselves Changelings, from this point onwards - and allowed them to channel Yael's abilities.

Eventually, as Yael's influence appeared to grow much more than desired, the Changelings decided to construct a settlement in the shape of a certain glyph, in order to contain Yael's energy and influence to this location. They had to make sure that Yael did not catch on to this, and as such, they never taught them about magic. When they did eventually find out, the Changelings and Yael struck a deal. Yael's influence would be contained up to the borders of the city, but would be allowed to run completely free everywhere that fell within the borders. Unbeknownst to the Changelings, this would include everywhere above and below the city as well, along with what could be considered the territory of the City of Change - named Yataghatay, to signify the cyclical containment of the Concept of Change...

The deal was struck, and from this moment, the city began to change within its borders, through all matter that Yael had been thought about, with a thriving population of Changelings and a stable economy.
### Etymology
Derived from the Arabic word of change and mirrored because I enjoy stealing lore from pepople who write better than I do. The cyclical nature of the name represents the "infinite" containment.
In Zal'Aata, this city is known as Yatag'Aata.
Formerly known as the City of Change.

## A [[Cycle]]
The natur of the deal makes the city change once per arbitrary cycle. The time delta between each cycle appears to be totally random, but there appears to be a pattern when you spell out the historical dates of when a cycle occured in seconds/minutes 
The city keeps track of t's Cycles in the central Post house and this can serve as a nice plotpoint
## Environment
Considering the everchanging anture of the city, a true, singular culture cannot be established. After every shift, the culture seems to completely reset, cycling through time periods. Despite this, certain red lines do remain after each shift, especially since the inhabitans retain their memories even though they change their demeanor.

The city is divided into several different districts, which - despite the changing nature - do fulfill their original purposes.

## Layout

### [[Ratun Plaza]]
- Unchanging origin plaza of the city
- has a red tree
### [[Gardens of Elysia (temporary name)]]
- botanical garden which varies it's contents per cycle, with different climates, biology, etc
- contains a teahouse which makes use.of.these contents to brew tea with various effects (or none), run by a changeling 
-

### Neighbourhood district
- neighborhood of inhabitants for the city, the street names change once in a while, and it is styled as one time period, with appropriate materials per Cycle.
- due to this, the locations of houses and their addresses are referred to using marked notation, with signs made inside the Ratun Plaza or.something
- it also contains some.shops, some of which actually change their location and are only encountered when needed

### Trade District
- near the edge of the city
- contains an outpost which facilitates trade with the outside.
	- changelings have no issue with crossing the desert, so a changeling is generally speaking the most suitable to be a trader
- in the city of change, mostly export occurs

### Entertainment or Leisure district
- generally themed in the theme of self-improvement and change, and contains gyms, esotericism, others 

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
