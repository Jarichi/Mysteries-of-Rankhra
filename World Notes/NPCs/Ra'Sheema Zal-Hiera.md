---
type: NPC
locations:
organisation:
  - - Ancients
campaign: Campaign 1 - Mysteries of Rankhra
race:
gender: Female
aliases:
tags: campaign-1---mysteries-of-rankhra
---
![](./Templates-attachments/npc-placeholder.png)

## Description
Necromancer and an anvoy of the [[Concept of Flow]]. She has recently been appointed to fulfil the urpose of protecting the concept from the Engineering collective. Despite the fact that the overlords are also working on protecting the concepts, the coming of Ratronus has made a change to this dynamic

She is, at the moment, preparing a ritual to separate the concept of flow from the rest of the city, by surrondung the current protection field wutgh a dome that speeds up aging and draws it to her instead. THis means that, the gneral populace that has no reason to be suspicious of her, simplbelieves that the odme is meant to proitect the people against rapud aguing edffects that woulddddd dbe caused by the dome itself

knows a lotttt about the concepts of creation, and will somehow speak to the party.
perhaps, she will send some acolytes to speak with the party and tell her about them, as an introduciton
she will notoice that there seem to be someting weong with the concept of flow in the temple, and subsewuentyl most other concepts.

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
