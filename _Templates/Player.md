<%*
const campaign = await tp.user.selectCampaign(tp);
const campaignTag = tp.user.toKebabCase(campaign);
%>
---
type: player
campaign: <% campaign %>
description: ""
race: 
gender: 
class: 
status: alive
skills: 
aliases: 
tags: <% campaignTag %>

---

# [<% tp.file.title %>](<% tp.file.title %>)

![](./Templates-attachments/npc-placeholder.png)

## Background

## Character Sheet

-

## References


```dataview
TABLE file.cday as Created
FROM "Campaigns/<% campaign %>" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
