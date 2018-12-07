# POC NativeScript 5 + Angular (7.x.x) application using Angular EventEmitters and nested routing (passing params with PageRoute).


The application demonstrates several techniques:

- How to create custom components with Angular(e.g the bottom toolbar in `toolbar/toolbar.component` which is used in `pages/main.component.html`)

- Using `EventEmitters` 
    * passing data from and to custom components (in the app context the `toolbar/toolbar.component.html`) while using `Input` and `Output`.

- Using nested `router-outlet`
    * passing data with `RouterExtensions` and `queryParams`.
    * receving data with `ActivatedRoute`.


Run the demo app on ANdroid
```
npm i
tns run android --bundle
```

Run the demo app on iOS
```
npm i
tns run ios --bundle
```