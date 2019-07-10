const Facts = ['intfact', 'intfact2']

const papyrus = {
    toShockingFacts: () => Facts[Math.floor(Math.random() * Facts.length)],
}