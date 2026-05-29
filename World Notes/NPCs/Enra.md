---
type: NPC
locations:
organisation: [[Mycelio]]
campaign: Campaign 1 - Mysteries of Rankhra
race: Simic
gender: Female
aliases:
tags: campaign-1---mysteries-of-rankhra

---
![](./Templates-attachments/npc-placeholder.png)

## Description
Enra is a Simic hybrid - manta glide who was under guise of one of the overlords that Ratronus had killed. INstead of upsurping power, she decided to remain to care for the innocent children that are still abused to this day.
As a symbol of defiance, she wears short-sleeved clothing that exposes her maroon coloured eye marking for everyone to see.
	
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
