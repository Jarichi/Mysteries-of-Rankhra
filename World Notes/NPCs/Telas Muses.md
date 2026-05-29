---
type: NPC
locations:
organisation:
  - - Research Group
campaign: Campaign 1 - Mysteries of Rankhra
race: Siren
gender: Female
aliases:
tags: campaign-1---mysteries-of-rankhra
---
![](./Templates-attachments/npc-placeholder.png)
## Description
- Collage of the siren bard: Telas Muses (Teles is een van de sirenen die voorkomen in de odyssey)
	- A compelling creature dedicated to singing in the café
	- Also a close friend of Verdant and a part of the research group
	- When not singing in the café, she is on missions to get information
	- has a special skill to "record" sounds and conversations. She can perfectly recreate these conversations
	- ([Bardic College: College of the Siren | GM Binder](https://www.gmbinder.com/share/-N5i-V0mIcZSQmZEbIHr))
## Skills

-  
## Quests

```dataview
TABLE file.cday as Created
FROM "Campaigns/Campaign 1 - Mysteries of Rankhra" where file.name != this.file.name AND 
contains(type, "quest") AND
contains(questGivers, this.file.link)
SORT file.cday DESC
```

## References

```dataview
TABLE file.cday as Created
FROM "Campaigns/Campaign 1 - Mysteries of Rankhra" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
