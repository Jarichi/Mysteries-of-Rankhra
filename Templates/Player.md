---
type: player
campaign: <% tp.user.getThisCampaign(tp) %>
description: ""
race: 
gender: 
class: 
status: alive
skills: 
aliases: 
tags: <% tp.user.toKebabCase(tp.user.getThisCampaign(tp)) %>
---

# [<% tp.file.title %>](<% tp.file.title %>)

![](./Templates-attachments/npc-placeholder.png)

## Background

## Character Sheet

-

## References


```dataview
TABLE file.cday as Created
FROM "DND/<% tp.user.getThisCampaign(tp) %>" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
