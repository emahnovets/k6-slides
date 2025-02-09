import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm';
import Notes from 'reveal.js/plugin/notes/notes.esm';
import hljsDefineGraphQL from  "highlightjs-graphql";

const deck = new Reveal({
  highlight: {
    beforeHighlight: hljs => hljsDefineGraphQL(hljs)
  },
  plugins: [ Markdown, Highlight, Notes ],
  totalTime: 30 * 60,
  hash: true,
  slideNumber: true
})

deck.initialize();
