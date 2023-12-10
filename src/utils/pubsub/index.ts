import type { EventsName, subscribeCallback, SwitchStyle, SearchAreaDataType } from './interface'

class PubSub {
  container = new Map<EventsName, Function[]>([])

  publish(name: 'switchStyle', data: SwitchStyle): void
  publish(name: 'highArea', data: string): void
  publish(name: 'searchAreaData', data: SearchAreaDataType): void
  publish(name: EventsName, data: any) {
    const fns = this.container.get(name)
    if (!fns) throw new ReferenceError(`${name}事件未被订阅`);
    fns.forEach(fn => fn(...[name, data]))
  }

  subscribe(name: 'switchStyle', fn: subscribeCallback<SwitchStyle>): void
  subscribe(name: 'highArea', fn: subscribeCallback<string>): void
  subscribe(name: 'searchAreaData', fn: subscribeCallback<SearchAreaDataType>): void
  subscribe(name: EventsName, fn: subscribeCallback<any>) {
    const _fns = this.container.get(name)
    const fns = _fns ? _fns : []
    fns.push(fn)
    this.container.set(name, fns)
  }

  unsubscribe(name: EventsName) {
    if (!this.container.get(name)) throw new ReferenceError(`${name}事件未被订阅`);
    this.container.delete(name)
  }
}

const pubsub = new PubSub
export default pubsub