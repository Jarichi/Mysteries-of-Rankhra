<%*
const campaign = await tp.user.selectCampaign(tp);
const campaignTag = tp.user.toKebabCase(campaign);
%>
---
type: organisation
description:
campaign: <% campaign %>
creation_date: <% tp.date.now("YYYY-MM-DD") %>
tags: <% campaignTag %>

---


# [<% tp.file.title %>](<% tp.file.title %>)

## Description

## Facts

-  

## Members

```dataview
TABLE file.cday as Created
FROM "Campaigns/<% campaign %>" where type="NPC" AND file.name != this.file.name AND (contains(organisation, this.file.link) OR contains(faction, this.file.link))
SORT file.cday DESC
```

## References

```dataview
TABLE file.cday as Created
FROM "Campaigns/<% campaign %>" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
