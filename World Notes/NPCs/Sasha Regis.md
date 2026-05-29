---
type: NPC
locations:
organisation: 
campaign: Campaign 1 - Mysteries of Rankhra
race:
gender:
aliases:
tags: campaign-1---mysteries-of-rankhra

---
![](./Templates-attachments/npc-placeholder.png)
## Description
Changeling who constantly shifts their form: Sasha Regis
- Keeps their.name but changes their appearance every time the party meets them.
- Drinks heavy stuff yet doesn't seem tipsy
- some character quirt when speaking to them
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
