import { logger } from '../logger.mjs'
import { keyboard, commands } from '../markup.mjs'
import { ctxManager } from '../context.mjs'

const Factory2 = param => {
  return async (ctx, Markup) => {
    try {
      await ctxManager.setContext({
        scope: commands[param],
        previousScope: ctxManager.getContext('scope'),
      })
      const keyboardTodisplay = keyboard[param] || keyboard.goBack
      ctx.reply(
        papyrus[param],
        Markup.keyboard(keyboardTodisplay)
          .oneTime()
          .resize()
          .extra(),
      )
    } catch (e) {
      logger.error(e)
    }
  }
}

export const scenarious = new Map()
