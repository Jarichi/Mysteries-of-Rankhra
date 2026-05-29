---
type: organisation
description:
campaign: Campaign 1 - Mysteries of Rankhra
tags: campaign-1---mysteries-of-rankhra

---
## Description
Builers of [[Janib'Rankhra]] and [[Rankhra]]

They are an ancient civilisation worshipping the [[God of Creation]] who have pieced together the facatual origin story of the world, and as such built countless temples and structures near the crash sites of the Concepts of Creation.
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
