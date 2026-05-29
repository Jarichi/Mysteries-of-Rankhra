---
type: NPC
locations:
organisation:
  - - Badawi Hunter Tribe
campaign: Campaign 1 - Mysteries of Rankhra
race: Human
gender:
aliases:
tags: campaign-1---mysteries-of-rankhra
---
![](./Templates-attachments/npc-placeholder.png)

## Description
Twin brother of [[Reggi Buer]], maybe reggi will just end up being renamed to Salazar anyway lol

Currently resides in the hunter group, semi-permanently, until he finds a way to reatin his memories as memories, and/or to bypass the effects of the sandstorm. Has not seen his brother in a very long time.



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
