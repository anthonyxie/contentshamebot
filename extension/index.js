chrome.webNavigation.onHistoryStateUpdated.addListener( async info => {
    console.log(info);
    if (info.url.includes("youtube.com/watch") || info.url.includes("twitter.com")) {
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
              avatar_url:'https://cdn.discordapp.com/avatars/1023046279435133020/995ea0de84aced8a86132dbb32ad5a00.png?size=256',
              // the avatar to be displayed
              // contents of the message to be sent
              content:`@here , Please shame Anthony, he is currently at the site ${info.url}`,
              // enable mentioning of individual users or roles, but not @everyone/@here
              allowed_mentions: {
                parse: ['users', 'roles', 'everyone'],
              }
            }),
          }
        ).catch(error => {
          console.error(error)
        });
    }
} 
);
chrome.management.onDisabled.addListener( async info => {
  if (!info.enabled && info.id === 'meljonhaahbioknikmnfabecbofoocjf') {
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
            avatar_url: 'https://cdn.discordapp.com/avatars/1023046279435133020/995ea0de84aced8a86132dbb32ad5a00.png?size=256',
            // the avatar to be displayed
            // contents of the message to be sent
            content:`@here HE'S TRYING TO TURN OFF THE EXTENSION WATCHER TO HIDE HIS DEVIOUS ACTIONS DO NOT LET HIM ESCAPE`,
            // enable mentioning of individual users or roles, but not @everyone/@here
            allowed_mentions: {
              parse: ['users', 'roles', 'everyone'],
            }
          }),
        }
      ).catch(error => {
        console.error(error)
      });
    }
  }
);