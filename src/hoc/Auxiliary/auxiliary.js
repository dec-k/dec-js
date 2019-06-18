const aux = (props) => props.children;

export default aux;

/*

Q: What the fuck is this?

It's an auxiliary component - a 'dummy wrapper' to bypass a jsx
limitation that prohibits the returning of adjacent elements.
Wrap your export with this component, where it will substitute as 
the 'containing div'.

For a usage example within this project, refer to the BurgerBuilder
js file, in which I wrap the entire output with this aux file.

*/