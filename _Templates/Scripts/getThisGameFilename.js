function getThisGameFileName(params) {
  let thisCampaign = params.app.workspace
    .getActiveFile()
    .parent.path.replace(/^Campaigns\//, "");
  let numOfGames = app.plugins.plugins.dataview.api
    .pages(`"Campaigns/${thisCampaign}"`)
    .where((page) => {
      if (page.type === "session") {
        if (page.campaign === thisCampaign) {
          return true;
        }
      }
    }).length;

  numOfGames = JSON.stringify(numOfGames + 1);
  while (numOfGames.length < 3) {
    numOfGames = "0" + numOfGames;
  }

  params.variables["numOfGames"] = numOfGames;
  params.variables["folderName"] = "Campaigns/" + thisCampaign;
}

module.exports = getThisGameFileName;
