## in this project we are useing clean architure pattenn  where it from four layers

   1 - *domain layer*: it is enterprise business layer where includes => **entityes**

   2-  *application layer *: it is responsible business logic in app , include => use-case or services, interface,

   3-  *presention layer*: it is responsible interface adapater to interact with user, include(routes, controller, ui)

   4- *framworks or infrastrucure layer*: it is responsible to communicate with thirdy party services such as connnect with databsse , paymob service , notification service   


## seccond section work with how handle depencies injection automatic

 ### how handle depencies injections four step and using it keyword (inject, injectable,  continer , resolve)
   
   1- step 1:
     use it keyword injectacle previous class [name]Reposirory

     2- step 2 : inject class repository in service such as 
     `@inject("UserRepository") private userRepository: IUserRepository`

     3- step 3 : resolve service in controller
          this.userService= contianer.resolve(UserService)

      4- step 4: use controller immidate  


## section three worked with handle depencies injection with inversity and reflate-metadate 

  1- stpe 1: declare interfaceType include all symbols 
  2- step 2: all classes makable @injectable
  3- step 3: inject all class take properites in constructor  such as 
      ` @inject(type.className) private readonly instanceName : InterfaceImplement
  
4- step 4 : handle it in route 
      ```
         * instance from Container  container = new Containder ()*
           container.bind<interfaceIMplement>(symbolName).to(classService)

           ```