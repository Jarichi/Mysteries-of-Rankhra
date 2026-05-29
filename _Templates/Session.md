<%*
const campaign = await tp.user.selectCampaign(tp);
const campaignTag = tp.user.toKebabCase(campaign);
const sessionNum = tp.user.getThisGameNum(tp, campaign);
const lastGameTitle = tp.user.getLastGameTitle(tp, campaign);
%>
---
type: session
campaign: <% campaign %>
sessionNum: <% sessionNum %>
location: 
date: <% tp.date.now("YYYY-MM-DD") %>
summary: ""
tags: <% campaignTag %>

---
# [<% tp.file.title %>](<% tp.file.title %>)

## Session Summary

 > [!tldr] [<% tp.file.title %>](<% tp.file.title %>)
> Add summary content here ^summary

---

## Recap

![<% lastGameTitle %>#^summary](<% lastGameTitle %>#^summary)

---

## Notes
