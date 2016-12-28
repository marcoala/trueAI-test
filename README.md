## 1) Plan development of a Chrome-plugin for Slack

### Features

The plugin has basically three features:

- Submit the context to the server: when a page with a conversation is opened, or when a new message is received, the plugin should send the context to the server, to allow the system to suggest responses.
- Display suggestions: when the server gives back a suggestion the plugin should show it, allow the operator to choose an appropriate one.
- Copy the suggestion to the text box: when the operator select a suggestion the plugin should copy the text in the message box (but should not send the message, to give the operator the chance to edit it before).

So the plugin should be divided into two different component, the first that listen for context changes and ask the server for suggestions, the second that show the results and allow to select one.

### REST API

I'm expecting to have a REST API on the server side, guessing the format of the context should be a series a JSON objects with the text of each message, a timestamp of the communication, the direction (if was sent by the customer or the operator).

For example

```json
[
    {
        "timestamp": "2016-12-27T23:06:35+00:00",
        "direction": "customer",
        "text":"Hello, I need help"
    },
    {
        "timestamp": "2016-12-27T23:06:54+00:00",
        "direction": "operator",
        "text":"Hi, how can I help you"
    },
    {
        "timestamp": "2016-12-27T23:07:27+00:00",
        "direction": "customer",
        "text":"The wifi is not working, I've restarted the router but nothing... all the lights are orange"
    },
    ...
]
```

And for the response, I expect a list of possible sentences, each one with a score to indicate the accuracy of the suggestion.

```json
[
    {
        "score": 95.45,
        "text": "Lorem ipsum dolor"
    },
    {
        "score": 83.47,
        "text": "Sit amet nullisque"
    },
    {
        "score": 34.15,
        "text": "Qua suntam"
    },
    ...
]
```


## 2) List technologies you plan to use and justify your choices.

A chrome plugin is ultimately frontend code, can only be HTML, CSS and JavaScript. The actual choice is about how to build the the final assets to distribute.
My choice is to use React for JavaScript and HTML, and SASS and Bootstrap for the CSS, and to exclude jQuery from the stack.

About Bootstrap and SASS they are a standard in the industry: is easy to find third party library for them, tutorial, and when other developers will join the project they will find an environment that they already know (or plenty of resources to get onboard quickly)

Bootstrap is seldom accused of not be personalizable ("All boostrap websites look the same"), but actually provide configuration to customise it quickly, so can be presented with a full branded UI, and also provide foundations to build new components in a structured way.

Comparing jQuery and React are deeply different, the huge advantages of jQuery are: is really easy to start and it's friendly to developers that are not comfortable with JavaScript.

On the other hand is hard to build and maintain a complex application with jQuery, but it's own nature doesn't have any top level structure, and often big jQuery project ends up in an infinite list of function with a very fragile balance, with a side open to regression.

React instead provide a much structured way to build component, so in the medium term is more appealing.

This alone is not enogh to exclude jQuery from the stack (some people use jQuery alongside React), but considering that the first purpose of jQuery is to provide a cross-browser API for JavaScript since the plugin needs to run only in Chrome a level of abstraction is redundant.

During a preliminary research for information about Chrome plugin that uses React I found a node module that provides the foundation to build a plugin in such way [react-chrome-redux](https://www.npmjs.com/package/react-chrome-redux), it seems a very good starting point for development.


## 3) Design the key UX and UI components

See design folder.

The solution proposed could be actually less functional than the one presented in the TrueAI homepage, but in a test situation I've focussed on showing my methodology rather than just use the best solution.

## 4) Build the first version of a working prototype.

See code folder.
