const puppeteer = require('puppeteer');

const voteAll = async() => {
  const topgOrg = async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--disable-dev-shm-usage']
    });
    const page = await browser.newPage();
    await page.goto('https://topg.org/Minecraft/in-606527', {"waitUntil":"domcontentloaded"});
    await page.type("#username", process.env.USERNAME);
    await page.waitForTimeout(2000)
    await page.click("#v");
    await page.waitForNavigation({waitUntil:"domcontentloaded"})
    await page.waitForTimeout(2000);
    if (page.$("body > main > div.main > div > div > div:nth-child(2) > div.alert.alert-success.fade.in")) {
      const text = await page.evaluate(async () => {
        const error = document.querySelector("#voting > div > div > div:nth-child(3) > p");
        return error.innerText;
      })
      console.log('Topg: \n',text);
      await browser.close();
    }
    await browser.close();
  }

  const minecrafatServerList = async() => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();
    await page.goto('https://minecraft-server-list.com/server/453566/vote/', {"waitUntil":"domcontentloaded"});
    // await page.type("#ignn", process.env.USERNAME);
    await page.evaluate((username) => {
      const input = document.getElementById("ignn");
      input.value = username;
    }, process.env.USERNAME);

    await page.waitForTimeout(2000);
    await page.click("#voteform > input.buttonsmall.pointer.green.size10");
    await page.waitForTimeout(2000)
    if (page.$("#voteerror > font")) {
      const text = await page.evaluate(async () => {
        const error = document.querySelector("#voteerror");
        return error.innerText;
      })
      console.log('Minecraft Server List: \n', text);
      await browser.close();
    }
    await browser.close();
  }

  const topMinecraftServers = async () => {
    const browser = await puppeteer.launch({
      headless: false,
      // args: ['--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();
    await page.goto('https://topminecraftservers.org/server/4135', {"waitUntil":"domcontentloaded"});
    // await page.type("#ignn", process.env.USERNAME);
    if (page.$("body > div.container > div > div > div > div.col-md-4 > div.text-center.small")) {
      const text = await page.evaluate(async () => {
        const error = document.querySelector("body > div.container > div > div > div > div.col-md-4 > div.text-center.small");
        return error.innerText;
      })
      console.log('Top Minecraft Server List: \n', text);
      await browser.close();
    }

    await page.click("body > div.container > div > div > div > div.col-md-4 > a");
    await page.waitForTimeout(2000);
    await page.evaluate((username) => {
      const input = document.getElementById("username");
      input.value = username;
    }, process.env.USERNAME);

    await page.click("#voteButton");

    await page.waitForTimeout(2000)
    if (page.$("body > div.container > div > div > div > div.col-md-4 > div.text-center.small")) {
      const text = await page.evaluate(async () => {
        const error = document.querySelector("body > div.container > div > div > div > div.col-md-4 > div.text-center.small");
        return error.innerText;
      })
      console.log('Top Minecraft Server List: \n', text);
      await browser.close();
    }
    await browser.close();
  }

  await topgOrg();
  await minecrafatServerList();
  await topMinecraftServers();
};

voteAll();
