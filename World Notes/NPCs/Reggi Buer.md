---
type: NPC
locations:
organisation:
  - - Research Group
campaign: Campaign 1 - Mysteries of Rankhra
race:
gender: Male
aliases:
  - Salazar Coldwindt
tags: campaign-1---mysteries-of-rankhra
---
![](./Templates-attachments/npc-placeholder.png)
## Description
- Oath of the sea paladin, named Salazar Coldwindt (real name: reggi buer))
	- Always in the café with a glas of water/other light beverage
	- when talked to he speaks of his adventures at the great sea but he exxagerates these stories
		- i once defeated a kraken (it was a small squid).
			- 
		- A storm killed half my men (it didn't, they just left his ship because the paladin is a bad captain)
		- My trading routes are famous because i'm the best (he isn't, and he doesn't have a trading route. He just smuggled a crate with fish over the border.)
- His twin brother, [[Balthazar Coldwindt]] is the actual origin of all the wild stories.


He needs to go on a mission because that shit is fun as hell
Fan-favourite character.
## Skills

-  
## Quests

```dataview
TABLE file.cday as Created
FROM "Campaigns/Campaign 1 - Mysteries of Rankhra" where file.name != this.file.name AND 
contains(type, "quest") AND
contains(questGivers, this.file.link)
SORT file.cday DESC
```

## References

```dataview
TABLE file.cday as Created
FROM "Campaigns/Campaign 1 - Mysteries of Rankhra" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
