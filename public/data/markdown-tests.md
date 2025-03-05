# Tests

Here are some markdown tests to see how the markdown renderer works.

Begining with paragraphs and line breaks.

This is a new paragraph.

This is another very long paragraph that will be broken into multiple lines with a big lorem ipsum: lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.

## TOC

- [Tests](#tests)
  - [TOC](#toc)
  - [Other tests](#other-tests)
    - [Links](#links)
    - [Images](#images)
    - [Tables](#tables)
    - [Code](#code)
    - [Lists](#lists)
    - [Unordered Lists](#unordered-lists)
    - [Lists with sub-items](#lists-with-sub-items)
    - [Blockquotes](#blockquotes)
    - [Bigger blockquotes](#bigger-blockquotes)
    - [Horizontal Rule](#horizontal-rule)
    - [More blockquotes now with code](#more-blockquotes-now-with-code)
    - [Task Lists](#task-lists)
    - [Emphasis](#emphasis)
    - [Strikethrough](#strikethrough)
    - [Inline code](#inline-code)
    - [Code block](#code-block)
    - [Super and Subscripts](#super-and-subscripts)
    - [A Big Code!!](#a-big-code)

## Other tests

### Links

This is a [link](https://www.google.com).

### Images

![Image](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

### Tables

| Name  | Age |
|-------|-----|
| Alice | 25  |
| Bob   | 30  |
| Carol | 35  |

### Code

```python
def hello_world():
    print("Hello, World!")
    print("Some other longer line.")
```

### Lists

1. Item 1
2. Item 2
3. Item 3

### Unordered Lists

- Item 1
- Item 2
- Item 3

### Lists with sub-items

1. Item 1
    - Sub-item 1
    - Sub-item 2
2. Item 2
    - Sub-item 1
    - Sub-item 2

### Blockquotes

> This is a blockquote.

> This is another blockquote.
>
> With multiple lines. And this a very vey long line that will be broken into multiple lines with a big lorem ipsum: lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
>> This is a nested blockquote.
>>
>> with multiple lines.

### Bigger blockquotes

> This is a blockquote.
>
> This is another blockquote.

### Horizontal Rule

---

### More blockquotes now with code

> This is a blockquote.
>
> ```python
> def hello_world():
>     print("Hello, World!")
>     print("Some other longer line.")
> ```

### Task Lists

- [x] Task 1
- [ ] Task 2
- [x] Task 3
- [ ] Task 4

### Emphasis

*This is italic text.*

**This is bold text.**

### Strikethrough

~~This is strikethrough text.~~

### Inline code

This is `inline code`.

### Code block

```
def hello_world():
    print("Hello, World!")
```

### Super and Subscripts

H<sub>2</sub>O is water.

x<sup>2</sup> is x squared.

### A Big Code!!

```typescript
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

  return { onOpenFile, openFile, emit, on };
});
```