function getTags() {
  // Ссылка на контейнер
  var tags = TagManager.Accounts.Containers.Workspaces.Tags.list(
    'accounts/166348693/containers/1908423/workspaces/1000749'
  )
  var arr = [['Tags', 'Type', 'Active', 'Last modified', 'Url']]
  var ss = SpreadsheetApp.getActiveSheet()
  ss.clear()

  if (tags.tag && tags.tag.length) {
    for (var i = 0; i < tags.tag.length; i++) {
      var ct = new Date().getTime()
      var Prop = [
        tags.tag[i].name,
        tags.tag[i].type,
        !!(
          tags.tag[i].firingTriggerId ||
          tags.tag[i].setupTag ||
          tags.tag[i].teardownTag
        ),
        Math.round((ct - tags.tag[i].fingerprint) / 86400000) + ' days',
        tags.tag[i].tagManagerUrl
      ]
      arr.push(Prop)
    }
  }
  ss.getDataRange().clear()
  ss.getRange(1, 1, arr.length, 5).setValues(arr)
}
