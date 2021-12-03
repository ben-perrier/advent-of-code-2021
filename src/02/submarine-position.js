class SubmarinePosition {
  
  constructor () {
    this.position = 0
    this.depth = 0
  }

  /**
   * Processes forward, up and down commands.
   * @param {string[]} commands: commands as a puzzle input split by lines 
   * @returns this
   */
  processCommands (commands) {
    commands.map(this.formatCommand)
    .forEach(({ command, value }) => {
      if (command === 'forward') return this.forward(value)
      if (command === 'up') return this.up(value)
      if (command === 'down') return this.down(value)
      throw new Error(`Cannot understand command ${command}`)
    })
    return this
  }

  currentPosition () {
    const { position, depth } = this
    return { position, depth }
  }

  formatCommand (stringCommand) {
    const [command, value] = stringCommand.split(' ')
    return { command, value: +value }
  }

  forward (value) {
    this.position = this.position + value
  }

  down (value) {
    this.depth = this.depth + value
  }

  up (value) {
    this.depth = this.depth - value
  }

}

module.exports = { SubmarinePosition }