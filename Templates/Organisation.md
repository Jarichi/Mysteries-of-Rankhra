---
type: organisation
description:
campaign: <% tp.user.getThisCampaign(tp) %>
creation_date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - <%tp.user.toKebabCase(tp.user.getThisCampaign(tp))%>
---


# [<% tp.file.title %>](<% tp.file.title %>)

## Description

## Facts

-  

## Members

```dataview
TABLE file.cday as Created
FROM "DND/<% tp.user.getThisCampaign(tp) %>" where type="NPC" AND file.name != this.file.name AND contains(faction, this.file.link)
SORT file.cday DESC
```

## References

```dataview
TABLE file.cday as Created
FROM "DND/<% tp.user.getThisCampaign(tp) %>" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
