var time = 
chrome.webNavigation.onHistoryStateUpdated.addListener( async info => {
    console.log(info);
    if (info.url.includes("youtube.com/watch")) {
      fetch(
          'https://discord.com/api/webhooks/1023380731961036840/PqgYhpb56Fnmls_P8LeFvQoWL6wuQToBVA9wkdbvKsc8FXBJgolIEGKtxtp_95EEs2od',
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              // the username to be displayed
              username: 'shame bot',
              // the avatar to be displayed
              // contents of the message to be sent
              content:`@here, Please shame Anthony, he is currently watching the youtube video ${info.url}`,
              // enable mentioning of individual users or roles, but not @everyone/@here
              allowed_mentions: {
                parse: ['users', 'roles'],
              }
            }),
          }
        ).catch(error => {
          console.error(error)
        });
    }
} 
);