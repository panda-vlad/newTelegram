import dotenv from 'dotenv'
import  Telegraf  from 'telegraf'
import Markup from 'telegraf/markup'

import { logger, scenarious } from './helpers/index.mjs'
dotenv.config()

const bot = new Telegraf(process.env.BOT_ACCOUNT_TOKEN)
try {
  bot.telegram.setWebhook(process.env.URL)
  bot.startWebhook('/', null, process.env.PORT)
} catch (err) {
  bot.telegram.deleteWebhook()
}

bot.start((ctx) => scenarious.get()(ctx, Markup))

bot.launch()
