<%*
const campaign = await tp.user.selectCampaign(tp);
const campaignTag = tp.user.toKebabCase(campaign);
%>
---
type: quest
locations:
questGivers:
campaign: <% campaign %>
creation_date: <% tp.date.now("YYYY-MM-DD") %>
description: ""
tags: <% campaignTag %>
completed: false

---
# [<% tp.file.title %>](<% tp.file.title %>)

## description

## content

## completion rewards

- [ ]

## references

```dataview
TABLE file.cday as Created
FROM "Campaigns/<% campaign %>" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
