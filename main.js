import { ToyReact, Component } from './ToyReact.js'

class MyComponent extends Component {
    render() {
        return <div>
            <span>Hello</span>
            <span>World!</span>
            <div>
                { this.children }
            </div>
        </div>
    }
}

let a = <MyComponent name='a' id='ida'>
    <div>222</div>
    <div>333</div>
    <div>444</div>
    <div>
        <ul>
            <li>ttt</li>
            <li>bbb</li>
        </ul>
    </div>
</MyComponent>
ToyReact.render(
    a,
    document.body
)