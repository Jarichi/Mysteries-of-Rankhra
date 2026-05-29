---
type: NPC
locations:
organisation:
  - - Badawi Hunter Tribe
campaign: Campaign 1 - Mysteries of Rankhra
race: Owlin
gender: Female
aliases:
  - Diviner
tags: campaign-1---mysteries-of-rankhra
---
![](./Templates-attachments/npc-placeholder.png)
## Description
An Owlin, also known as Diviner
Blessed and an acolyte
mightve been in close contct wiht [[Ra'Sheema Zal-Hiera]]
uses tarot cards

They are an alternative person enjoying weird trinkets and superstitious objects. Speaks in a stereotypical divine person way (floaty, soft, long words). Vaguely based on Terese. They imply to know the future of the people that enter their tent.
	- For general visitors, they know about most common-knowledge myths and legends. Also knows the mythical origin of the Hunter Tribe but only taks about this after they have proven themselves.


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
