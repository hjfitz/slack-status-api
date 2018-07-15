# JSON API for Slack
> They can make *the* chat app, but won't make a JSON api for their services

## Prerequisites
* Node.js ^9.5.x
* Yarn ^1.6.x

## Usage
If you wish to host this yourself: `yarn start`!

If you're just after an API, I've hosted this on a (free) Heroku dyno. Just `GET https://slack-json.herokuapp.com/v1`

## API Response
This is a very simple replication of the [Slack status page](https://status.slack.com/). The response is in JSON and looks like:

```json
{
  status: "Smooth sailing!",
  services: {
    Login/SSO: "No Issues",
    Connections: "No Issues",
    Messaging: "No Issues",
    Link Previews: "No Issues",
    Posts/Files: "No Issues",
    Notifications: "No Issues",
    Calls: "No Issues",
    Search: "No Issues",
    Apps/Integrations/APIs: "No Issues",
    Workspace/Org Administration: "No Issues"
  }
}