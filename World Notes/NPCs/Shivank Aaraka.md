---
type: NPC
locations:
organisation:
campaign: Campaign 1 - Mysteries of Rankhra
race:
gender: Male
aliases:
tags: campaign-1---mysteries-of-rankhra
---
![](./Templates-attachments/npc-placeholder.png)

## Description
Current owner of the artifact store located in the second domain, and former member of the [[Badawi Hunter Tribe]]. Unconsciously tries to find his way back to this group, but after hearing from the party that the entire group got murdered, he currently is very sad :(

Originally a very famous archeologist, originating from [another continent], Shivank Aaraka took it upon himself to uncover the Old World's secrets. He eventually made his way to Makhshar desert - rumoured to be the birth place of the Gods - and explored the desert in search of artefacts. Shiv eventulaly stumbled upon the Hunter Tribe and was invited in, upon which his mind was bounded to the Badawi. He needs a better reason for why he had to leave the Badawi hunter tribe and lost his memory as a consequence.

Oh well.


Perhaps he will eventually find his way back to the hunter tribe but have not decided yet. He will robably be a returning character.
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
