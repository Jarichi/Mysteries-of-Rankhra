---
type: organisation
description:
campaign: Campaign 1 - Mysteries of Rankhra
tags: campaign-1---mysteries-of-rankhra

---
## Description
located within the [[Third Domain]]. 
Mycelio is the main criminal cartel in the Third Domain, and is responsible for keeping peace among the smaller criminal groups. They are a large organisation with many different facets, and are directly opposing the [[F.I.Z.]] for control over the spread of information throughout the city. Their influence ensure stability among the regular inhabitans of the domain and allows for the developement of the poor to make a name for themselves, and are as such regarded as a reasonably good force among the inhabitans. This is comparable to the mafia.

The group is currently lead by [[Mob boss]]. 

The ultimate goal of the Mycelio is to control the flow of information within the city. They want to be able to adjust or limit this flow and spread censorship and misinformation to ensure control.

Note,  while the [[The Hyphaedo]]  are not directly connected to the Mycelio, they do take on commissions and requests for the Mycelio.
## Facts

-  

## Members

```dataview
TABLE file.cday as Created
FROM "Campaigns/Campaign 1 - Mysteries of Rankhra" where type="NPC" AND file.name != this.file.name AND (contains(organisation, this.file.link) OR contains(faction, this.file.link))
SORT file.cday DESC
```

## References

```dataview
TABLE file.cday as Created
FROM "Campaigns/Campaign 1 - Mysteries of Rankhra" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
