<%*
const campaign = typeof tp.user.selectCampaign === "function"
	? await tp.user.selectCampaign(tp)
	: tp.user.getThisCampaign(tp);
const campaignTag = tp.user.toKebabCase(campaign);
%>
---
type: item
locations:
campaign: <% campaign %>
tags: <% campaignTag %>

---

![](./Templates-attachments/npc-placeholder.png)

## Description
### History

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
FROM "Campaigns/<% campaign %>" where file.name != this.file.name AND
contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```