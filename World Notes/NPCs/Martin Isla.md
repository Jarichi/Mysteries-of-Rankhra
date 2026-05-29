---
type: NPC
locations:
organisation: [[Research Group]]
campaign: Campaign 1 - Mysteries of Rankhra
race: Water Genasi
gender: Male
aliases:
tags: campaign-1---mysteries-of-rankhra

---
![](./Templates-attachments/npc-placeholder.png)
## Description
- Water genasi bartender
	- measures exact ounces in the drinks and stirs drinks perfectly due to their water abilities
	- Sometimes experiments with drinks so you don't always get what you order
	- Flaw: very messy, their bar station is always full of glasses, ingrediënts and colorful straws

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
