const fileNameRegex = /^diff --git "?a\/(.*)"?\s*"?b\/(.*)"?/
      beforeName: a.trim(),
      afterName: b.trim(),