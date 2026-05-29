<%*
const campaign = typeof tp.user.selectCampaign === "function"
	? await tp.user.selectCampaign(tp)
	: tp.user.getThisCampaign(tp);
const organisation = typeof tp.user.selectOrganisation === "function"
	? await tp.user.selectOrganisation(tp, campaign)
	: "";
const campaignTag = tp.user.toKebabCase(campaign);
%>
---
type: NPC
locations:
organisation: <% organisation %>
campaign: <% campaign %>
race:
gender:
aliases:
tags: <% campaignTag %>

---

![](./Templates-attachments/npc-placeholder.png)

## Description

## Properties

## Quests

```dataview
TABLE file.cday as Created
FROM "Campaigns/<% campaign %>" where file.name != this.file.name AND 
contains(type, "quest") AND
contains(questGivers, this.file.link)
SORT file.cday DESC
```

## References

```dataview
TABLE file.cday as Created
FROM "Campaigns/<% campaign %>" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
