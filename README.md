## Installation and Usage
Repo for a test which triggers:
  console.error
    Warning: You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);
     
```bash 
$ yarn install
$ yarn test
``` 
