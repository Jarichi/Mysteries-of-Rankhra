---
type: NPC
locations:
organisation: Envoys of Creation
campaign: Campaign 1 - Mysteries of Rankhra
race: Vampire
gender: Male
aliases:
tags: campaign-1---mysteries-of-rankhra
---
![](./Templates-attachments/npc-placeholder.png)

## Description
Lysandre is one of the [[Envoys of Creation]], specifically for the [[Concept of Connection]]. Using his abilities as a powerful Vampiric bard, he employs the [[Bard - Art of Words]] to influence people around him, to fulfil his goal to connect all creatures in this material plane utilising vamirism.
 He is responsible for turning Charlie into a vampire - though he has employed the Art to only transfer some vampiric negative effects to him, to force him to be exiled from his village and abandon his train of thought, and to open up a pathway for him to take control of Charlie if need be.
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
