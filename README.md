![SucoBOT banner](assets/img/banner.png)

**SucoBOT** 🧃🤖 (formerly SucoDeSvelte) is the next version of the Twitch bot companion for the [DoceAzedo's overlay V2](https://github.com/doceazedo/overlay/tree/next). Work in progress.

## Installation

⚠ **WARNING:** Keep in mind that Suco is still experimental, it's not yet fully functional and not ready for public usage.

1. Git clone both this and the [overlay@next](https://github.com/doceazedo/overlay/tree/next) repositories. For help on setting up the overlay, refer to it's [README](https://github.com/doceazedo/overlay/tree/next#readme).
   ```bash
   git clone -b next https://github.com/doceazedo/overlay.git
   git clone https://github.com/doceazedo/suco-bot.git
   ```
2. Rename both projects ".env.example" files to ".env" and fill them in.

## Usage

Before starting the bot, **it requires the overlay to be running**. Remember to start it on the port you setup on your ".env" file, like:

```bash
yarn start --port 2424
```

Next, on the suco-bot folder, run:

```bash
yarn start
```

If you want to contribute or develop custom features, you can start the development server with:

```bash
yarn dev
```
