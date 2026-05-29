---
type: NPC
locations:
organisation: [[Ancients]]
campaign: Campaign 1 - Mysteries of Rankhra
race:
gender: Male
aliases:
tags: campaign-1---mysteries-of-rankhra

---
![](./Templates-attachments/npc-placeholder.png)
## Description
Current Principal of the [[Great Acadamy of Arcane Arts]] and lives in the [[First Domain]]. Very old but certainly doesn't look his age.
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
