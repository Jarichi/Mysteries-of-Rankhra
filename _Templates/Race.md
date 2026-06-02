<%*
const campaign = typeof tp.user.selectCampaign === "function"
	? await tp.user.selectCampaign(tp)
	: tp.user.getThisCampaign(tp);
const campaignTag = tp.user.toKebabCase(campaign);
%>
---
type: race
campaign: <% campaign %>
tags: <% campaignTag %>

---
## Description

### History

## Abilities

## NPCs

```dataview
TABLE file.cday as Created
FROM "Campaigns/<% campaign %>" where type="NPC" AND file.name != this.file.name AND (contains(race, this.file.link) OR contains(faction, this.file.link))
SORT file.cday DESC
```


## References

```dataview
TABLE file.cday as Created
FROM "Campaigns/<% campaign %>" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```