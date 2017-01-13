# Frontend code: [santdhawal.github.io](http://santdhawal.github.io)

This contains the frontend code for the santdhawal.github.io. 
Using build tools it will create a single html page containing all modules. 

##Prerequisite
* GIT
* Node

##Install
```
npm install
```

####What does this install?

This will install all npm dependencies and using the post install script it will install all global npm modules.

-----

##What libraries is this using?

The frontend is a template based which gets pre-compiled using grunt-bake to create a single file. Most of the compilation is done through grunt and grunt modules.

* grunt-bake  
* JQuery


##How does it work? 

This project is configurable via a JSON file located in:

```
/App/src/component/core/content/data.json
```

`grunt-bake` uses this file to compile the html by combine the partials.  

You need to compile it using `grunt dev`. Information is in the **Development** section.


##Development

###Run Development Server

This will take the code in `App/` and compiles it into `Dist/`. To ensure its in the same environment, grunt will inject basic template file and the assets required.

```
grunt dev
```

##Creating a new Component

There is a grunt task which you can use to create a component and hook it into the project.

```js
grunt create-component --name=myComponent
//or shorthand
grunt cc --name=myComponent

```
####Options

```bash
--name    this is the name of your component
```

Then add the component to `index.html`

```html
<!--(bake src/component/myComponent/template/myComponent.html)-->
```


###What does this task do?

This task will create all files required for a new component such as the html and SASS file. 

Then it will change the file names to the component name and import it into main SASS file.

##Grunt

###Creating a new grunt task
All tasks must be returned in a `tasks` object

```js
return {
	tasks:{
		copy: {
			options: {
			},
			index: {
				src: ['App/index.html'],
				dest: 'Dist/index.html'
			},
			assets: {
				src: ['App/assets/**'],
				dest: 'Dist/assets/**'
			}
		}
	}
}
```

##Releasing Code

There are a few options to release code but you use one command to do this. Once development is complete commit the code in the branch. Make sure you have the latest code from master.

Run the below command

```
grunt release
```
