const toShockingFacts = () => {
  
}

const Factory2 = param => {
    return async (response, Message) => {
        await ctxManager.setContext({
          scope: commands[param],
          previousScope: ctxManager.getContext('scope'),
        })
        response.send(new Message.Text(papyrus[param], menus[param]))
      }
    
}

export const scenarious = new Map()

scenarious.set('toShockingFacts', toShockingFacts)