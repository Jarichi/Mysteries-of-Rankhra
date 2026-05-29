---
type: NPC
locations:
organisation:
  - - Research Group
campaign: Campaign 1 - Mysteries of Rankhra
race:
gender: Male
aliases:
tags: campaign-1---mysteries-of-rankhra
---
![](./Templates-attachments/npc-placeholder.png)
## Description
Sacrificial lamb that has kinda been saved by the party and was tempraarily memory spelled by ARubae. He will probably be a more recurring character.
### Information
Posesses knowledge about Rubae and their existence that they were supposed to relay to the party or Verdant themselves. Rubae seems to be a very old foe who serves as the protector of the concepts and resides in the astral plane, through which they can freely move to nearly every desired spot. rubae would actively oppose the research group.

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
