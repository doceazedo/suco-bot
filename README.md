![SucoBOT banner](assets/img/banner.png)

> **Warning**: this repository is now archived in favor of the [overlay monorepo](https://github.com/doceazedo/overlay).

**SucoBOT** 🧃🤖 (formerly SucoDeSvelte) is the Twitch bot companion for the [DoceAzedo's Overlay](https://github.com/doceazedo/overlay), featured with alert notifications, interactive commands such as `!tts`, `!eval`, `!icon`, `!pronouns` and more cool stuff to come!

## 📝 Notes

- SucoBOT is made specifically for [DoceAzedo's Overlay](https://github.com/doceazedo/overlay) and it requires it to work properly.
- Keep in mind that Suco is still in heavy development, it's not yet fully functional and not ready for public usage. 👨‍🔧

## 🧰 Installation

1. Git clone both this and the [overlay](https://github.com/doceazedo/overlay) repositories. For help on setting up the overlay, refer to it's [README](https://github.com/doceazedo/overlay#readme).
2. Run `npm install` to install the dependencies.
3. Create a [Twitch app](https://dev.twitch.tv/docs/authentication/register-app) and grab an [OAuth token](https://twitchapps.com/tokengen) - this can be from your personal account or any other, as no messages will be sent from it - with the following scopes: `chat:read chat:edit channel:moderate whispers:read whispers:edit channel_editor channel:read:subscriptions`.
4. For Google TTS to work, grab your GCP application credentials by following [these steps](https://www.npmjs.com/package/@google-cloud/text-to-speech#before-you-begin).
5. For Amazon Polly TTS to work, grab your AWS keys by following [these steps](https://docs.aws.amazon.com/polly/latest/dg/setting-up.html).

## 🤹‍♂️ Usage

Before starting the bot, make sure the overlay is already running, then run:

```bash
npm run build
npm run start
```

If you want to contribute or develop custom features, you can start the development server with:

```bash
npm run dev
```
