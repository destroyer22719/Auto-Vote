# Auto Server Voting
This application automatically votes for you on:
- [Topg](https://topg.org/Minecraft/in-606527)
- [Minecraft Server List](https://minecraft-server-list.com/server/453566/vote/)
- [Top Minecraft Server](https://topminecraftservers.org/server/4135)

For the [Datblock Server](https://help.datblock.com/#/general?id=vote)

## Note
This can't work with [Minecraft MP](https://minecraft-mp.com/server/201496/vote/) and [Minecraft Servers](https://minecraftservers.org/vote/509303) because of the CAPCHA (sorry)

## How to Use

You MUST have [NodeJS](https://nodejs.org/en/) installed, above v12

- Download this repo
- Run `npm install`
- There is a file named `.env` change `USERNAME=hello world` to `USERNAME=<your minecraft username>`
- Then run `node vote.js`

## NOTE

If you want to see the code in action you can set `DISPLAY=true` to see the code opening a browser and seeing it inputting data and interacting with the website
