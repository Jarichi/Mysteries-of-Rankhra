function lastGameTitle(tp, campaign) {
  const thisCampaign = campaign || tp.user.getThisCampaign(tp);
  const titles = app.plugins.plugins.dataview.api
    .pages(`"Campaigns/${thisCampaign}"`)
    .where((page) => {
      if (page.type === "session") {
        return page.campaign === thisCampaign;
      }
    })
    .sort((page) => Number(page.sessionNum) || 0);

  if (titles.length > 1) {
    return titles[titles.length - 2].file.name;
  } else {
    return "none";
  }
}
module.exports = lastGameTitle;
