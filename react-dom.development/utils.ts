const fn = (...rest) => {}

fn.stack = []

type Type =
  | 'red'
  | 'green'
  | 'blue'
  | 'purple'
  | 'cyan'
  | 'white'
  | 'gray'
  | 'black'
  | 'orange'
  | 'pink'
  | 'brown'
  | 'lime'
  | 'teal'
  | 'magenta'
  | 'gold'
  | 'silver'
  | 'indigo'
  | 'violet'
  | 'maroon'
  | 'olive'
  | 'navy'
  | 'aqua'
  | 'fuchsia'
  | 'crimson'
  | 'limegreen'
  | 'darkblue'

type Logger = Record<Type, (...args) => Logger>

export const logger = new Proxy(fn, {
  get(target, name: Type) {
    target.stack.push(name)
    return logger
  },
  apply(target, thisArg, args) {
    const len = target.stack.length

    const str = args.map((arg, idx) => (idx < len ? '%c' + arg : arg)).join(' ')

    console.log(str, ...target.stack.map((name) => `color: ${name}`))

    target.stack = []

    return logger
  }
}) as unknown as Logger
