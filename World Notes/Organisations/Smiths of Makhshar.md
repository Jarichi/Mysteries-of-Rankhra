---
type: organisation
description:
campaign: Campaign 1 - Mysteries of Rankhra
tags: campaign-1---mysteries-of-rankhra

---


## Description
The Smiths of Makhshar are a guild of blacksmiths that are active all throughout Makhshar Desert. They govern both the development and supply of weaponry and armory to cities and tribes in the desert and are a headless organisation - more of a collective of individual bodies within the smithing world.
The guild was created to combat unregulated distribution of weaponry and provide a more consistent means of determining the employment rights and workplace safety. To be allowed to receive materials for, and sell weapons, a vendor must be part of the Smiths of Makhshar - indirectly or directly. To supplement healthy competition and drive for development, the Smiths organise a [[Festival of Tenacity|quarterly tournament]] in which individual organisations may prove their superiority in arms against each other.
## Facts

-  

## Members

```dataview
TABLE file.cday as Created
FROM "Campaigns/Campaign 1 - Mysteries of Rankhra" where type="NPC" AND file.name != this.file.name AND (contains(organisation, this.file.link) OR contains(faction, this.file.link))
SORT file.cday DESC
```

## References

```dataview
TABLE file.cday as Created
FROM "Campaigns/Campaign 1 - Mysteries of Rankhra" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
