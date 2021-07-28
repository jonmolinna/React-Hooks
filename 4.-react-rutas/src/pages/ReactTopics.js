import React from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

const Topic = () => {
    let { topic } = useParams();

    return (
        <div>
            <h4>{ topic }</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eligendi ex adipisci autem explicabo nostrum accusantium 
                eos aliquam maxime? Ea facilis voluptatum ducimus explicabo
                repellendus suscipit illo quisquam. Iure, perferendis beatae!
            </p>
        </div>
    )
};

const ReactTopics = () => {
    //let match = useRouteMatch();
    //console.log(match);

    // path nos permite construir rutas relativas <Route>.
    // url nos permite construir enlaces <Link> o <NavLink>.

    let { path, url } = useRouteMatch();

    return (
        <div>
            <h3>Temas de React</h3>
            <ul>
                <li>
                    <Link to={`${url}/jsx`}>JSX</Link>
                </li>
                <li>
                    <Link to={`${url}/props`}>Props</Link>
                </li>
                <li>
                    <Link to={`${url}/estado`}>Estado</Link>
                </li>
                <li>
                    <Link to={`${url}/componentes`}>Componente</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h4>Elige un tema de React</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quibusdam accusantium sequi fugiat deleniti vel ipsum minus 
                        quia provident error deserunt esse vero commodi culpa maxime
                        consequatur modi suscipit, perspiciatis animi.
                    </p>
                </Route>
                <Route path={`${path}/:topic`} component={Topic} />
            </Switch>
        </div>
    )
}

export default ReactTopics;

// useRouteMatch - Rutas Anidadas