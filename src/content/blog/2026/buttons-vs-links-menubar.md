---
draft: true
title: "Addendum — Buttons vs. Links: When Links Live in a Menubar"
seoTitle: "Buttons vs. Links in a Menubar: ARIA menuitem Explained"
seoDescription: "Inside a menubar, links and buttons become \"menu items.\" Learn what changes, what doesn't, and why most site nav should use <nav> and disclosure buttons."
snippet: "Inside a menubar, links and buttons are announced as \"menu items\" and Tab stops walking through them. Here's what changes, what doesn't, and why most site navigation should be a <nav> of links with disclosure buttons, not a menubar."
image:
  src: "https://placehold.co/1000x420?text=Is+this+a+menubar%3F"
  alt: "Placeholder banner reading \"Is this a menubar?\""
publishDate: "2026-11-12T00:00:00Z"
category: "Accessibility, Front-End Development"
author: "Nerando Johnson"
tags:
  - accessibility
  - a11y
  - aria
  - html
  - navigation
  - front-end
keywords:
  - aria menubar navigation
  - role menuitem link
  - menubar vs disclosure navigation
  - aria-haspopup menu nav dropdown
  - should nav use role menubar
  - buttons vs links accessibility
---

> **\[Banner image placeholder\]** A meme in the same style as the original post's banner. Suggested idea: the "Is this a pigeon?" format, with a dev pointing at a header nav and asking "Is this a menubar?"

## Start here: why an addendum

**The short answer:** the core rule still holds, but a menubar lets ARIA override what the element announces and how the keyboard moves. You need to know when that trade is worth it, and most of the time it isn't.

The original post, [Buttons vs. Links: Choosing the Right Element](https://developingdvlpr.com/blog/buttons-vs-links-choosing-the-right-element), boiled everything down to one line: *a link takes you somewhere, a button does something.* It also touched on menu buttons. They use `aria-haspopup="menu"` and `aria-expanded`, and their menus need arrow-key support per the ARIA Authoring Practices.

That last part deserves its own page. Once you put links or buttons inside a [menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/), they stop being announced as links or buttons. Tab stops walking through them too. This addendum covers what changes, what doesn't, and why the menubar pattern is usually the wrong tool for site navigation.

## New words you'll see

These are new since the original post. Your existing glossary already covers semantic HTML, ARIA, focus and accessible names.

| Term | Plain-English meaning |
| --- | --- |
| **Menubar** | A row of commands that stays on screen, like File / Edit / View in a desktop app. |
| **Menu** | A dropdown list of choices that opens from a button or a menubar item, then closes once you pick something. |
| **Menu item** (`menuitem`) | One choice inside a menu or menubar. Screen readers announce it as "menu item," not "link" or "button." |
| **Checkable menu item** (`menuitemcheckbox` / `menuitemradio`) | A menu item that turns something on or off (checkbox) or picks one option from a group (radio). |
| **Submenu** | A menu that opens from another menu item, like Format → Text style. |
| **Roving tabindex** | A focus trick: only one item in the group is reachable with Tab, and arrow keys move focus between the rest. |
| **Typeahead** | Pressing a letter jumps to the next item that starts with that letter. |
| **Disclosure** | A button that shows or hides content, like a nav dropdown. It's simpler than a menu: no arrow keys required. |
| **`aria-haspopup`** | Tells assistive tech that this control opens a popup, such as a menu. |
| **`aria-checked`** | Says whether a checkable menu item is on or off. |

> **\[GIF placeholder\]** A reaction GIF for "wait, there are *more* words?" Something like a person flipping through an endless dictionary.

## What a menubar actually is

A menubar is the bar along the top of a desktop app: File, Edit, View. The APG defines it as a menu that stays visible, usually runs horizontally, and gives quick access to a consistent set of commands. A plain **menu** is the dropdown version. It opens from a menu button or a parent item, and it usually closes once you pick something.

Go back to the building. A link is a door, and a button is a light switch. A menubar is the **elevator panel**. It's one fixed control surface, you move across it with arrows instead of walking room to room, and it works the same way every time you step in.

> **\[GIF placeholder\]** An elevator button panel, or someone pressing every elevator button at once, to tie into the building analogy.

That consistency is a contract. If you use `role="menubar"`, screen reader users expect the app-style keyboard model below, and you have to build it yourself:

| Key | What it does in a menubar |
| --- | --- |
| Tab / Shift+Tab | Moves focus into or out of the whole menubar, not between items. Leaving closes any open menus. |
| Left / Right | Moves between top-level items. Inside a submenu, Right opens a nested menu and Left closes it. |
| Down / Up | Opens a submenu from a top-level item, or moves between items inside a menu. |
| Enter | Opens a submenu, or activates the item and closes the menu. |
| Space | Optional. Toggles checkbox/radio items without closing, or acts like Enter. |
| Escape | Closes the current menu and sends focus back to whatever opened it. |
| Home / End | First or last item, when wrapping isn't supported. |
| Type a letter | Optional typeahead to the next item starting with that letter. |

### Going deeper: the roles and states

- **Containers:** `menubar` (horizontal by default) and `menu` (vertical by default). Each one needs a label from `aria-labelledby` or `aria-label`. Use `aria-orientation` only when you break the default.
- **Items:** `menuitem`, `menuitemcheckbox` or `menuitemradio`. Checkable items use `aria-checked`, and disabled items use `aria-disabled="true"`. Disabled items can still take focus, but they can't be activated.
- **Parents:** items that open a submenu get `aria-haspopup="menu"` (or `true`), plus `aria-expanded` set to `true` or `false`.
- **Focus:** roving tabindex. Only one item has `tabindex="0"`, and everything else has `-1`. The other option is `aria-activedescendant` on the container.
- **Labels:** by convention, a trailing ellipsis ("Save as…") means the item opens a dialog.

## Where it changes the buttons-vs-links call

**The short answer:** inside a menubar, `role="menuitem"` replaces the link or button role. The HTML element underneath still decides what the item can *do*.

In the original post, `<a href>` maps to the link role and `<button>` maps to the button role, and you get keyboard behavior for free. A menubar breaks both of those freebies:

- **Announcement:** a screen reader says "menu item" for both, not "link" or "button."
- **Keyboard:** Tab no longer visits each item. Arrow keys do, and that's code you write and own.

So does the element choice still matter? Yes. The *doing* half of the rule survives:

| Inside the menubar | Element | Why |
| --- | --- | --- |
| Goes to another page ("Pricing," "Docs") | `<a href role="menuitem">` | A real `href` keeps middle-click, open in new tab, copy link and crawlability, plus `aria-current="page"` on the current item. |
| Does something here ("Bold," "Undo," "Export…") | `<button type="button" role="menuitem">` | It's an action, so no URL to fake and no `href="#"`. |
| Toggles a setting ("Show grid") | `<button role="menuitemcheckbox" aria-checked>` | State lives in `aria-checked`, not `aria-pressed`. |
| Opens a submenu | `<button role="menuitem" aria-haspopup="menu" aria-expanded>` | It's a control, not a destination. |

```html
<ul role="menubar" aria-label="Editor">
  <li role="none">
    <button type="button" role="menuitem" tabindex="0"
            aria-haspopup="menu" aria-expanded="false">Format</button>
    <ul role="menu" aria-label="Format" hidden>
      <li role="none">
        <button type="button" role="menuitemcheckbox"
                aria-checked="false" tabindex="-1">Bold</button>
      </li>
    </ul>
  </li>
  <li role="none">
    <a href="/help" role="menuitem" tabindex="-1">Help</a>
  </li>
</ul>
```

Notice the `role="none"` on each `li`. It strips the list semantics so the menu items read as children of the menu.

### Going deeper: the split-item trap

The APG warns against items that both act and open a submenu, like a top-level "Products" that navigates on Enter and opens on Down Arrow. Navigation menubars do this a lot, and it's the button-vs-link gray area all over again, crammed into one element. Split it into two controls: a link for the page and a button for the submenu.

> **\[GIF placeholder\]** A "why not both?" reaction, followed by a "no" reaction, for the item that both navigates and opens a submenu.

## When NOT to use a menubar (most site nav)

**The short answer:** if your header is a list of pages, don't build a menubar. Build a `<nav>` of links, and use disclosure buttons for any dropdowns.

The W3C says this in its own [Navigation Menubar example](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/). It notes that few sites need the extra keyboard behavior the menubar and menu roles require. For expandable groups of links, it points you to the **Disclosure pattern**: simple dropdown lists of links, shown and hidden by a button.

Here's why that matters for buttons vs. links:

- In a menubar, your nav links get announced as "menu item," so people lose the "link" cue they navigate by.
- Users expect Tab to move through nav links. A menubar swallows the whole header into one Tab stop.
- You take on arrow keys, Escape, focus return and typeahead, and every gap in that code is a bug only keyboard and screen reader users will find.

> **\[GIF placeholder\]** Someone mashing the Tab key and getting nowhere, for the menubar that swallows the whole header into one Tab stop.

The disclosure version keeps every element doing its native job. The toggle is a **button**, because it does something here, and the destinations are **links**, because they take you somewhere:

```html
<nav aria-label="Main">
  <ul>
    <li><a href="/blog" aria-current="page">Blog</a></li>
    <li>
      <button type="button" aria-expanded="false" aria-controls="talks-menu">
        Talks
      </button>
      <ul id="talks-menu" hidden>
        <li><a href="/talks/upcoming">Upcoming</a></li>
        <li><a href="/talks/archive">Archive</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

One correction to the original post: no `aria-haspopup="menu"` here. That attribute promises a real `role="menu"` with arrow-key behavior. A nav dropdown only needs `aria-expanded`. Keep `aria-haspopup="menu"` for genuine app menus, like a "More actions" button on a data table.

### Going deeper: when a menubar *is* right

Reach for it when your UI behaves like a desktop app: a rich text editor, a code playground, a dashboard toolbar with File, Edit and View-style commands, especially with checkable or radio options. The APG's [Editor Menubar example](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/) with its formatting commands is the model. That's mostly buttons dressed as menu items, which is exactly where the pattern earns its keep.

## Updated quick checklist

Add these to the checklist from the original post:

- [ ] **List of pages?** Use `<nav>` with links. Don't build a menubar.
- [ ] **Nav dropdown?** Use a disclosure: a `<button aria-expanded>` that shows and hides a list of links, with no `aria-haspopup="menu"`.
- [ ] **App-style commands** (editor, toolbar, File/Edit/View)? A menubar is fair game.
- [ ] **Inside a menubar,** pick the element by behavior anyway: `<a href role="menuitem">` for destinations, `<button role="menuitem">` for actions.
- [ ] **Toggles in a menu** use `menuitemcheckbox` or `menuitemradio` with `aria-checked`.
- [ ] **No items that both navigate and open a submenu.** Split them into a link and a button.
- [ ] **Keyboard contract built:** one Tab stop, arrow keys, Enter, Escape that returns focus, Home/End and roving tabindex.
- [ ] **Current page** still gets `aria-current="page"`, even inside a menubar.
- [ ] **Tab test, upgraded:** put the mouse away. In a nav, Tab should walk every link. In a menubar, Tab should enter and leave it once, and arrows should do the rest.

The signature line still stands. **A link takes you somewhere. A button does something.** A menubar just changes what they're *called*. It doesn't change what they *are*, so choose the element first and add the role only when you're truly building an app menu.

## Sources

- [Menu and Menubar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/), WAI-ARIA Authoring Practices Guide (W3C)
- [Navigation Menubar Example](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/), WAI-ARIA APG (W3C)
- [Buttons vs. Links: Choosing the Right Element](https://developingdvlpr.com/blog/buttons-vs-links-choosing-the-right-element), developingdvlpr.com
