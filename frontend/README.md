# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### react router

* Install the dependency
```
npm install react-router
```

Every link in our web page, will be a `Link` or `NavLink` element. These link elements are used to navigate between different routes.

We have to import them from `react-router`

```jsx
// Example of use
    <li>
        <Link to="/band">The Band</Link>
    </li>
```
**Note:** *to="/band"* is the way to specify the full path.

In the main container component (or root file), we need to import `BrowserRouter`, `Routes` and `Route` to set up the routing and navigation for the application.
* **`BrowserRouter`:** Makes routing possible in react, it is the parent component. It listens to changes in the browser's URL. It is like a container that holds all the routing information: `Route`, `Link`, `NavLink`
* **`Routes`:** It is a container that group and manage routes.
* **`Route`:** It is the child component that renders a specific component / page when the URL matches the specified path.

```jsx
        <BrowserRouter>
        {/* components and routes go here  */}
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/band' element={<Band />} />
            <Route path='/worldtour' element={<Worldtour />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/login' element={<LogIn/>} />
          </Routes>
        </BrowserRouter>
```