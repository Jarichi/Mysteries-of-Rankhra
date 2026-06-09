---
type: organisation
description:
campaign: Campaign 1 - Mysteries of Rankhra
tags: campaign-1---mysteries-of-rankhra

---
## Description

Federal Intelligence of Zal'Aata

intelligence group responsivle for info gathering in zal'aata
## Facts

-  

## Members

```dataview
TABLE file.cday as Created
FROM "World Notes" where type="NPC" AND file.name != this.file.name AND (contains(organisation, this.file.link) OR contains(faction, this.file.link))
SORT file.cday DESC
```

## References

```dataview
TABLE file.cday as Created
FROM "World Notes" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
