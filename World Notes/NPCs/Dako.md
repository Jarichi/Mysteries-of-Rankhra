---
type: NPC
locations:
organisation: [[The Hyphaedo]]
campaign: Campaign 1 - Mysteries of Rankhra
race:
gender:
aliases:
tags: campaign-1---mysteries-of-rankhra

---
![](./Templates-attachments/npc-placeholder.png)

## Description
She is a female [[Simic]] that is working to become an overlord or something.
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
