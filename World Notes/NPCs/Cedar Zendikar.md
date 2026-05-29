---
type: NPC
locations:
organisation: 
campaign: Campaign 1 - Mysteries of Rankhra
race: Something
gender: Non-binary
aliases:
tags: campaign-1---mysteries-of-rankhra

---
![](./Templates-attachments/npc-placeholder.png)

## Description
Cedar Zendikar (they/them, this time for real) is a famous biologist who specialises in the native fauna of Cornucopia Streak. They are known for their work on mapping and tracking the population totals of most creatures and hold a bi-weekly conference.

While their name has been dropped in arc 1, they have not had an appearance yet, however they might become significant for the Concept of Growth later on.

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
