We cannot return multiple siblings in a component -> Because it it easy to do reconciliation , it is easy to check the changes in dom if there is only single sibling in the return component.

React creates Dynamic websited , its content changes frequently .
Anytime dynamic feature heppens , it is called rerendering .
Our goal is to minimize the re-render .  

A Re-render heppens when 
1. A state variable that is being used inside a component changes.
2. A parent component Re-render triggers all children re-rendering.

There are Two ways to fix this 
1. Push the state down. Because if the root rerender all the childrens rerender , make the state , lowest common ancestor .
. react.memo