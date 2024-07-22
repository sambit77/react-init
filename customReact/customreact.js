
function customRender(reactElement, container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    domElement.setAttriute('href', reactElement.props.href)
    domElement.setAttriute('target',reactElement.props.target)
    container.appendChild(domElement)*/

    const domElement = document.createElement(reactElement.Type)
    domElement.innerHTML = reactElement.children

    for(let prop in reactElement.props)
    {
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },

    children: 'Click to visit Google'

}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer)