import { defineStore } from "pinia";
import { File } from "@/lib/Types";

interface Listener {
  event: string;
  handler: Function;
  name?: string;
}

export const useEventBus = defineStore("events", () => {
  const listeners: Listener[] = [];

  function on(event: string, handler: Function, name?: string) {
    listeners.push({ event, handler, name });

    // console.group('EventBus:on')
    // console.log({ event, handler, name })
    // console.groupEnd()
  }

  function _offByHandler(event: string, handler: Function) {
    const index = listeners.findIndex(
      (l) => l.event === event && l.handler === handler
    );
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  }
  function _offByEvent(event: string) {
    const index = listeners.findIndex((l) => l.event === event);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  }
  function off(eventOrName: string, handler?: Function) {
    handler ? _offByHandler(eventOrName, handler) : _offByEvent(eventOrName);
  }

  function emit(event: string, data: any) {
    const listenersToCall = listeners.filter((l) => l.event === event);
    listenersToCall.forEach((l) => l.handler(data));

    // console.group('EventBus:emit')
    // console.log({ listeners })
    // console.log({ listenersToCall })
    // console.log({ event, data })
    // console.groupEnd()
  }

  function openFile(file: File | null) {
    emit("open-file", file
    );
  }

  function onOpenFile(handler: (file: File | null) => void) {
    on("open-file", handler);
  }

  return { onOpenFile, openFile };
});
