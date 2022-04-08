const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'bibarys.aternos.me',
  port: 48133,
  username: 'majo', 
  version: '1.12.2'
})

function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.on('physicTick', lookAtNearestPlayer)
