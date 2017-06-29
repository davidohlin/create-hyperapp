import './styles/main.css'
import { app, h } from 'hyperapp'

app({
  state: "Hello world",
  view: state => h("h1", null, state)
})
