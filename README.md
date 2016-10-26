# corespring-show-correct-answer-toggle-react

A toggle with an icon and a label.

# Usage 

You need to include this in another library that builds react aka (babel).

## Install 

```shell 
npm install 
```
## Test 

```
npm test
```

## Demo 

```shell 
cd demo 
../node_modules/.bin/webpack-dev-server --hot --inline
# go to http://localhost:8080
```

### Usage
```javascript

import Toggle from 'show-correct-response-toggle-react'; 

function onToggle(toggled){
  console.log('on toggle: ', toggled);
}

const MyComp = (props) => {
  return <div><Toggle onToggle={onToggle} initialValue={false}/></div>
}
```